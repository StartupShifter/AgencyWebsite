import type { Metadata } from "next";
import { ArrowUpRight, Bot, LayoutTemplate, Store } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectPreview } from "@/components/projects/project-preview";
import { ResourcePage, ResourceSection } from "@/components/landing/resource-page";
import { hasConceptPreviews, projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects & products — Starter Shifter",
  description:
    "Explore Starter Shifter’s websites, applications, and connected experiences. Concept previews are labelled separately from completed client work.",
};

const buildAreas = [
  {
    icon: Store,
    title: "Websites & ecommerce",
    description:
      "Storefronts and business websites shaped around how you sell, with catalog, checkout, and content built on an agreed platform.",
    tags: ["Shopify", "WordPress + WooCommerce", "Design & build"],
  },
  {
    icon: LayoutTemplate,
    title: "Web applications & operations",
    description:
      "Internal tools and customer-facing applications that bring orders, inventory, and connected business systems into clearer workflows.",
    tags: ["Dashboards", "Workflows", "ERP & CRM connections"],
  },
  {
    icon: Bot,
    title: "AI & automation experiences",
    description:
      "Chatbots, support flows, and supported automations that answer common questions, route enquiries, and reduce repetitive work.",
    tags: ["Chatbots", "Human handoff", "Supported integrations"],
  },
];

export default function ProductsPage() {
  return (
    <ResourcePage
      eyebrow="Resources / Projects & products"
      note="Websites, applications & systems"
      title={
        <>
          A closer look at
          <br />
          what we <span className="resourceHero-mark">build.</span>
        </>
      }
      description="Websites, applications, and connected experiences. Explore the collection, the categories of work behind it, and how we label the difference between a concept and completed client work."
      facts={[
        { label: "Focus", value: "Websites, applications & systems" },
        { label: "Collection", value: "Concept previews" },
        { label: "Evidence policy", value: "Approved work only" },
      ]}
    >
      <ResourceSection
        id="what-we-build"
        index="01"
        label="The work"
        title={
          <>
            Three areas.
            <br />
            One connected experience.
          </>
        }
        intro="Most projects touch more than one area. A store may need an operations view; a support flow may need a website and a CRM connection behind it."
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
        label="The collection"
        title={
          <>
            Concepts today.
            <br />
            Evidence as it’s approved.
          </>
        }
        intro={
          hasConceptPreviews
            ? "The collection currently shows design concepts. These are illustrative previews; completed project details and screenshots will appear only when supplied and approved."
            : "Explore the collection of websites, applications, and connected experiences."
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
                  Visit project <ArrowUpRight aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
        <p className="resourceFootNote">
          Concept previews illustrate a direction; they are not client results or
          published case studies. We don’t publish client names, logos,
          testimonials, or metrics without permission and verification.
        </p>
      </ResourceSection>
    </ResourcePage>
  );
}
