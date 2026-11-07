"use client";

import { useEffect, useRef } from "react";

const vertexSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentSource = `
  #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
  #else
    precision mediump float;
  #endif
  varying vec2 v_uv;
  uniform float u_time;
  uniform float u_aspect;
  uniform vec3 u_deep;
  uniform vec3 u_green;
  uniform vec3 u_mint;
  uniform vec3 u_soft;

  void main() {
    vec2 uv = v_uv;
    float t = u_time * 0.16;
    vec2 p = uv * vec2(min(u_aspect, 3.5), 1.0) * 1.2;
    p += 0.22 * vec2(
      sin(p.y * 3.1 + t) + cos(p.x * 2.3 - t * 0.7),
      sin(p.x * 3.5 - t * 0.5)
    );
    float flow = p.y + 0.21 * sin(p.x * 3.8 + t)
      + 0.11 * cos(p.y * 4.2 + p.x * 2.4 - t)
      + 0.025 * sin(p.x * 9.0 - p.y * 4.0 + t * 0.6);

    // Tighter ribbons and a fine lit edge give the liquid more definition.
    float distanceToRibbon = abs(flow - 0.64);
    float glow = exp(-pow(distanceToRibbon * 5.6, 2.0));
    float ribbon = 0.22 * glow
      + 0.78 * (1.0 - smoothstep(0.09, 0.15, distanceToRibbon));
    float edge = exp(-pow((flow - 0.53) * 48.0, 2.0));
    float field = 0.5 + 0.5 * sin(p.x * 1.5 + p.y * 2.0 + t);
    vec3 color = mix(u_deep * 0.1, u_green, smoothstep(0.0, 0.85, field));
    color = mix(color, u_mint, ribbon * 0.85);
    color = mix(color, u_soft, pow(ribbon, 7.0) * 0.7);
    color = mix(color, u_soft, edge * 0.28);
    float channel = smoothstep(0.025, 0.085, abs(flow - 0.25));
    color *= mix(0.12, 1.0, channel);
    float upperWash = smoothstep(0.6, 1.0, uv.y) * (1.0 - uv.x) * 0.4;
    color = mix(color, u_mint, upperWash);

    float grain = fract(sin(dot(gl_FragCoord.xy, vec2(127.1, 311.7))) * 43758.5453);
    color += (grain - 0.5) * 0.008;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export function FooterShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const shaders: WebGLShader[] = [];
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) {
      shaders.forEach((shader) => gl.deleteShader(shader));
      if (program) gl.deleteProgram(program);
      return;
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    const buffer = gl.createBuffer();
    if (!gl.getProgramParameter(program, gl.LINK_STATUS) || !buffer) {
      shaders.forEach((shader) => gl.deleteShader(shader));
      gl.deleteProgram(program);
      if (buffer) gl.deleteBuffer(buffer);
      return;
    }

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    // Read the site's existing palette rather than maintaining shader-only colors.
    const styles = getComputedStyle(container);
    for (const name of ["deep", "green", "mint", "soft"]) {
      const hex = styles.getPropertyValue(`--commerce-${name}`).trim().replace("#", "");
      const value = Number.parseInt(hex, 16);
      gl.uniform3f(gl.getUniformLocation(program, `u_${name}`),
        ((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255);
    }
    const time = gl.getUniformLocation(program, "u_time");
    const aspect = gl.getUniformLocation(program, "u_aspect");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = false;
    let lost = false;
    let elapsed = 0;
    let previous = 0;
    let lastDraw = 0;

    const draw = () => {
      if (lost || !visible) return;
      gl.uniform1f(time, elapsed / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      container.dataset.ready = "true";
    };
    const tick = (now: number) => {
      if (previous) elapsed += Math.min(now - previous, 64);
      previous = now;
      if (now - lastDraw >= 1000 / 30) {
        draw();
        lastDraw = now;
      }
      frame = requestAnimationFrame(tick);
    };
    const syncPlayback = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      frame = 0;
      if (!visible || document.hidden || lost) return;
      draw();
      if (!reducedMotion.matches) frame = requestAnimationFrame(tick);
    };
    const resize = () => {
      // Preserve crisp ribbon edges on Retina screens while bounding GPU work.
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * ratio));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * ratio));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(aspect, canvas.width / canvas.height);
      draw();
    };
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    const sizeObserver = new ResizeObserver(resize);
    const onContextLost = (event: Event) => {
      event.preventDefault();
      lost = true;
      container.dataset.ready = "false";
      syncPlayback();
    };
    resize();
    intersection.observe(container);
    sizeObserver.observe(container);
    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener("change", syncPlayback);
    canvas.addEventListener("webglcontextlost", onContextLost);

    return () => {
      cancelAnimationFrame(frame);
      intersection.disconnect();
      sizeObserver.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      reducedMotion.removeEventListener("change", syncPlayback);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      delete container.dataset.ready;
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      shaders.forEach((shader) => gl.deleteShader(shader));
    };
  }, []);

  return (
    <div ref={containerRef} className="agencyFooter-shader">
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
