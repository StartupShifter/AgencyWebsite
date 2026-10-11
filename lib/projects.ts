export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  status: "Completed project" | "Concept preview";
  url?: string;
};

// Replace these illustrations with owner-supplied, approved project evidence.
// Both the homepage showcase and /products use this catalog.
export const projects: Project[] = [
  {
    id: "storefront-concept",
    title: "Storefront concept",
    category: "Ecommerce",
    description: "An illustrative storefront layout with a product collection and a clear path to shopping.",
    image: "/projects/storefront-concept.svg",
    imageAlt: "Concept storefront with a green hero and illustrated everyday bags",
    status: "Concept preview",
  },
  {
    id: "workspace-concept",
    title: "Operations workspace concept",
    category: "Web application",
    description: "An illustrative workspace bringing orders, inventory, and dispatch tasks into one view.",
    image: "/projects/workspace-concept.svg",
    imageAlt: "Concept operations dashboard showing an order table and workflow panels",
    status: "Concept preview",
  },
  {
    id: "studio-concept",
    title: "Creative website concept",
    category: "Website design",
    description: "An illustrative editorial website with bold typography and a focused collection of work.",
    image: "/projects/studio-concept.svg",
    imageAlt: "Concept creative website with large type and abstract sculptural artwork",
    status: "Concept preview",
  },
  {
    id: "support-concept",
    title: "Customer support concept",
    category: "AI workflow",
    description: "An illustrative support interface for conversations, common questions, and team handoffs.",
    image: "/projects/support-concept.svg",
    imageAlt: "Concept support workspace with a conversation list and customer chat",
    status: "Concept preview",
  },
];

export const hasConceptPreviews = projects.some((project) => project.status === "Concept preview");
