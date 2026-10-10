import {
  ArrowUpRight,
  Store,
  PenTool,
  Workflow,
  MessagesSquare,
  Package,
  Megaphone,
  Check,
  ShoppingBag,
  Truck,
  Database,
  PanelsTopLeft,
  MousePointer2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
const services = [
  {
    icon: Store,
    title: "A storefront that feels like you.",
    text: "Ecommerce websites and applications shaped around your products, your customers, and the way you sell.",
    tags: ["Ecommerce", "Store design"],
    visual: "store",
  },
  {
    icon: Workflow,
    title: "Your tools, working together.",
    text: "Connect your store, customer records, and business software. Give repeated tasks a simpler path from start to finish.",
    tags: ["ERP & CRM", "Automation"],
    visual: "workflow",
  },
  {
    icon: PenTool,
    title: "A direction worth building on.",
    text: "Company, market, and competitor research. Thoughtful creative direction and Figma drafts to explore what comes next.",
    tags: ["Research", "Creative direction"],
    visual: "design",
  },
];
function ServiceVisual({ type }: { type: string }) {
  if (type === "store")
    return (
      <div className="service-art store-art" aria-hidden="true">
        <div className="mini-browser">
          <div className="mini-browser-bar">
            <i />
            <i />
            <i />
            <span>your next storefront</span>
          </div>
          <div className="mini-store">
            <div>
              <span>
                Made for
                <br />
                your everyday.
              </span>
              <div className="mini-store-button">Discover the collection</div>
            </div>
            <ShoppingBag strokeWidth={1} />
          </div>
          <div className="mini-store-bottom">
            <span>Thoughtful design</span>
            <span>
              Seamless shopping <ArrowUpRight />
            </span>
          </div>
        </div>
      </div>
    );
  if (type === "workflow")
    return (
      <div className="service-art workflow-art" aria-hidden="true">
        <div className="workflow-node">
          <Store />
          <span>Your store</span>
        </div>
        <div className="workflow-connector" />
        <div className="workflow-hub">
          <Workflow />
        </div>
        <div className="workflow-branches">
          <div>
            <Package />
            <span>Inventory</span>
            <Check />
          </div>
          <div>
            <Truck />
            <span>Shipping</span>
            <Check />
          </div>
          <div>
            <Database />
            <span>Customer records</span>
            <Check />
          </div>
        </div>
      </div>
    );
  return (
    <div className="service-art design-art" aria-hidden="true">
      <div className="design-sheet">
        <span className="design-sheet-title">
          <PanelsTopLeft /> A clear creative direction
        </span>
        <div className="design-swatches">
          <i />
          <i />
          <i />
        </div>
        <div className="design-type">
          Aa<span>Ideas take shape.</span>
        </div>
      </div>
      <div className="design-cursor">
        <MousePointer2 />
        <span>Your next chapter</span>
      </div>
    </div>
  );
}
export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-shell section-space"
      aria-labelledby="services-heading"
    >
      <div className="section-topline">
        <div>
          <p className="section-kicker">What we do</p>
          <h2 id="services-heading" className="section-heading">
            Good on the outside.
            <br />
            Connected on the inside.
          </h2>
        </div>
        <p className="section-intro">
          A digital presence is only the beginning. We help connect the
          experience your customers see with the operations that make it work.
        </p>
      </div>
      <div className="services-grid">
        {services.map(({ icon: Icon, title, text, tags, visual }) => (
          <article className="service-item" key={title}>
            <ServiceVisual type={visual} />
            <div className="service-item-copy">
              <Icon className="service-icon" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="service-tags">
                {tags.map((tag) => (
                  <Badge variant="outline" key={tag}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="services-more">
        {[
          {
            icon: Megaphone,
            title: "Social & campaigns",
            text: "Plan your content and manage your presence.",
          },
          {
            icon: MessagesSquare,
            title: "Chatbots & customer flows",
            text: "Answer common questions. Route the rest.",
          },
          {
            icon: Package,
            title: "Operations & ongoing care",
            text: "Stock, shipping workflows, maintenance & performance.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <p className="scope-note">
        The right combination for your business. Deliverables, integrations, and
        ongoing work are agreed in your project scope.
      </p>
    </section>
  );
}
