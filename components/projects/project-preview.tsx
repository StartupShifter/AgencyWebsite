import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectPreview({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[4px] border border-foreground/10 bg-background">
      <div aria-hidden="true" className="flex h-6 items-center gap-1 border-b border-foreground/5 bg-background px-2.5 sm:h-7">
        <span className="size-1 rounded-full bg-muted-foreground/30" />
        <span className="size-1 rounded-full bg-muted-foreground/30" />
        <span className="size-1 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 truncate text-[9px] text-muted-foreground">{project.title}</span>
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
