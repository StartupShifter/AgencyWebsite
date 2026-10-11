"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectPreview } from "@/components/projects/project-preview";
import { hasConceptPreviews, projects } from "@/lib/projects";
import { twLanding } from "@/lib/landing-styles";
import "./projects-section.css";

function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeToMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
  const playing = !paused && !hovered && !focused && !reducedMotion && visible;
  const project = projects[selected];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let inView = false;
    const update = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(section);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  useEffect(() => {
    if (!playing || projects.length < 2) return;
    const timer = window.setInterval(() => setSelected((current) => (current + 1) % projects.length), 7000);
    return () => window.clearInterval(timer);
  }, [playing]);

  function selectProject(direction: number) {
    setSelected((current) => (current + direction + projects.length) % projects.length);
    setPaused(true);
  }

  if (!project) return null;

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-heading"
      className={twLanding("section-shell section-space")}
    >
      <div className={twLanding("section-topline")}>
        <div>
          <p className={twLanding("section-kicker")}>Projects & products</p>
          <h2 id="projects-heading" className={twLanding("section-heading")}>
            A closer look at<br />what we build.
          </h2>
        </div>
        <div className="flex max-w-[360px] flex-col items-start gap-5">
          <p className={twLanding("section-intro")}>
            Websites, applications, and connected experiences.
            Explore the collection, one screen at a time.
          </p>
          <Button variant="emerald" size="marketing" nativeButton={false} render={<Link href="/products" />}>
            View All Products <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <div
        className="relative isolate flex min-h-[240px] items-center justify-center overflow-hidden py-7 sm:min-h-[440px] sm:py-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2">
          <div className="project-marquee flex w-max" data-playing={playing}>
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-5 pr-5 sm:gap-7 sm:pr-7">
                {projects.map((item) => (
                  <div key={item.id} className="w-[220px] shrink-0 rounded-lg bg-background opacity-70 shadow-[0_4px_18px_-8px_rgba(32,34,28,0.15)] sm:w-[290px]">
                    <ProjectPreview project={item} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background via-background/80 to-transparent sm:w-24" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background via-background/80 to-transparent sm:w-24" />
        <Link
          href={`/products#${project.id}`}
          aria-label={`Explore ${project.title}`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="relative z-20 block w-[calc(100%-32px)] max-w-[600px] rounded-lg bg-background shadow-[0_16px_40px_-14px_rgba(32,34,28,0.22)] transition-shadow duration-200 hover:shadow-[0_18px_44px_-14px_rgba(32,34,28,0.28)] motion-reduce:transition-none min-[761px]:w-[58%]"
        >
          <ProjectPreview project={project} featured />
        </Link>
      </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-5 min-[761px]:flex-row min-[761px]:items-center">
          <div aria-live={playing ? "off" : "polite"} aria-atomic="true">
            <p className="text-base font-medium tracking-tight">{project.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{project.category} · {project.status}</p>
          </div>
          <div className="flex items-center gap-2" role="group" aria-label="Project showcase controls">
            <Button variant="outline" size="icon-lg" className="size-11 rounded-full" aria-label="Previous project" onClick={() => selectProject(-1)}><ArrowLeft aria-hidden="true" /></Button>
            <span className="min-w-12 text-center text-xs tabular-nums text-muted-foreground">{selected + 1} / {projects.length}</span>
            <Button variant="outline" size="icon-lg" className="size-11 rounded-full" aria-label="Next project" onClick={() => selectProject(1)}><ArrowRight aria-hidden="true" /></Button>
            {!reducedMotion && <Button variant="ghost" size="icon-lg" className="size-11 rounded-full" aria-label={paused ? "Play project animation" : "Pause project animation"} aria-pressed={paused} onClick={() => setPaused((current) => !current)}>{paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}</Button>}
          </div>
        </div>
    </section>
  );
}
