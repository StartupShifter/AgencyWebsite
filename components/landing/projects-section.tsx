"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectPreview } from "@/components/projects/project-preview";
import { projects } from "@/lib/projects";
import { twLanding } from "@/lib/landing-styles";
import "./projects-section.css";

// Extra cycles let cards return around the back, outside the visible stack.
const showcaseProjects = [...projects, ...projects, ...projects];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const gestureRef = useRef<{ x: number; y: number } | null>(null);
  const swipedRef = useRef(false);
  const [selected, setSelected] = useState(0);
  const [instant, setInstant] = useState(false);
  const [visible, setVisible] = useState(false);

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
    const focused = document.activeElement;
    if (focused?.matches(".project-slide") && sectionRef.current?.contains(focused)) {
      activeLinkRef.current?.focus({ preventScroll: true });
    }
  }, [selected]);

  useEffect(() => {
    if (!visible || projects.length < 2) return;
    const timer = window.setInterval(() => {
      setInstant(false);
      setSelected((current) => (current + 1) % showcaseProjects.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [visible]);

  function selectProject(direction: number, immediate = false) {
    setInstant(immediate);
    setSelected((current) => (current + direction + showcaseProjects.length) % showcaseProjects.length);
  }

  if (!projects.length) return null;

  return (
    <section ref={sectionRef} id="projects" aria-labelledby="projects-heading" className={twLanding("section-shell section-space")}>
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
        role="region"
        aria-roledescription="carousel"
        aria-label="Project showcase"
        className="project-showcase"
        data-instant={instant}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            selectProject(event.key === "ArrowLeft" ? -1 : 1, true);
          }
        }}
      >
        <div
          className="project-stage"
          onDragStart={(event) => event.preventDefault()}
          onPointerDown={(event) => {
            gestureRef.current = { x: event.clientX, y: event.clientY };
            swipedRef.current = false;
          }}
          onPointerCancel={() => { gestureRef.current = null; }}
          onPointerUp={(event) => {
            const start = gestureRef.current;
            gestureRef.current = null;
            if (!start) return;
            const distanceX = event.clientX - start.x;
            const distanceY = event.clientY - start.y;
            if (Math.abs(distanceX) > 45 && Math.abs(distanceX) > Math.abs(distanceY) * 1.5) {
              swipedRef.current = true;
              selectProject(distanceX < 0 ? 1 : -1);
            }
          }}
          onClickCapture={(event) => {
            if (swipedRef.current) {
              event.preventDefault();
              event.stopPropagation();
              swipedRef.current = false;
            }
          }}
        >
          {showcaseProjects.map((item, index) => {
            const count = showcaseProjects.length;
            const offset = (index - selected + count + Math.floor(count / 2)) % count - Math.floor(count / 2);
            const active = offset === 0;
            return (
              <Link
                key={`${item.id}-${index}`}
                ref={active ? activeLinkRef : null}
                href={`/products#${item.id}`}
                className="project-slide"
                data-offset={offset}
                data-distance={Math.abs(offset)}
                aria-label={`Explore ${item.title}`}
                aria-hidden={!active}
                tabIndex={active ? 0 : -1}
                onClick={(event) => {
                  if (!active) {
                    event.preventDefault();
                    selectProject(offset);
                  }
                }}
              >
                <ProjectPreview project={item} featured />
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
