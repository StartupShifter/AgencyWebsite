import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectPreview({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg bg-background ring-1 ring-foreground/10">
      <div aria-hidden="true" className="flex h-7 items-center gap-1.5 bg-muted/50 px-3 sm:h-8">
        <span className="size-1.5 rounded-full bg-muted-foreground/35" />
        <span className="size-1.5 rounded-full bg-muted-foreground/35" />
        <span className="size-1.5 rounded-full bg-muted-foreground/35" />
        <span className="ml-2 truncate text-[10px] text-muted-foreground">{project.title}</span>
      </div>
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? "(max-width: 760px) 90vw, 640px" : "(max-width: 760px) 90vw, 600px"}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
