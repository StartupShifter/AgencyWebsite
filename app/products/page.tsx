import type { Metadata } from "next";
import { ArrowUpRight, Bot, LayoutTemplate, Store, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectPreview } from "@/components/projects/project-preview";
import { MarkedTitle, ResourcePage, ResourceSection } from "@/components/landing/resource-page";
import { hasConceptPreviews } from "@/context/content";
import { getLocalizedContent } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getLocalizedContent();
  return content.metadata.products;
}

const buildAreaIcons: Record<string, LucideIcon> = {
  store: Store,
  layoutTemplate: LayoutTemplate,
  bot: Bot,
};

export default async function ProductsPage() {
  const { content } = await getLocalizedContent();
  const page = content.pages.products;
  const projects = content.projects;
  const buildAreas = content.pages.products.buildAreas.map((area) => ({
    ...area,
    icon: buildAreaIcons[area.icon] ?? Store,
  }));
  return (
    <ResourcePage
      eyebrow={page.eyebrow}
      note={page.note}
      title={<MarkedTitle lines={page.titleLines} mark={page.titleMark} />}
      description={page.description}
      facts={page.facts}
    >
      <ResourceSection
        id="what-we-build"
        index="01"
        label={page.workLabel}
        title={<MarkedTitle lines={page.workTitleLines} />}
        intro={page.workIntro}
      >
        <div className="resourceGrid resourceGrid--3">
          {buildAreas.map(({ icon: Icon, title, description, tags }) => (
            <article key={title} className="resourceCard">
              <span className="resourceCard-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="resourceTags" aria-label={`${title} scope`}>
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </ResourceSection>

      <ResourceSection
        id="collection"
        index="02"
        label={page.collectionLabel}
        title={<MarkedTitle lines={page.collectionTitleLines} />}
        intro={
          hasConceptPreviews
            ? page.collectionIntroWithPreviews
            : page.collectionIntroWithoutPreviews
        }
      >
        <div className="resourceCollection">
          {projects.map((project) => (
            <article key={project.id} id={project.id}>
              <div className="resourceCollection-preview">
                <ProjectPreview project={project} />
              </div>
              <div className="resourceCollection-meta">
                <p>{project.category}</p>
                <Badge variant="secondary">{project.status}</Badge>
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resourceCollection-link"
                >
                  {page.visitProject} <ArrowUpRight aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
        <p className="resourceFootNote">
          {page.collectionFootNote}
        </p>
      </ResourceSection>
    </ResourcePage>
  );
}
