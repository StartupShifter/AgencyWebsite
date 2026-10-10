import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  Store,
  Workflow,
  MessageCircle,
  Globe2,
  PackageCheck,
  Layers3,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span aria-hidden="true" /> A new chapter for your business
          </p>
          <h1 id="hero-heading">
            Big ideas.
            <br />
            Better systems.
            <br />
            Your next shift.
          </h1>
          <p className="hero-description">
            From your first online store to the systems behind it. We bring your
            business online, and bring it all together.
          </p>
          <div className="hero-actions">
            <a
              href="#contact"
              className={buttonVariants({ size: "marketing" })}
            >
              Let’s build your next{" "}
              <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
            </a>
            <a href="#services" className="hero-explore">
              Explore our services <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <p className="hero-note">
            <Globe2 aria-hidden="true" /> Built around your business. Wherever
            you are.
          </p>
        </div>
        <figure className="hero-visual">
          <Image
            src="/images/connected-commerce.webp"
            alt="Illustration of an online store connected to inventory, shipping, and customer messaging tools."
            fill
            sizes="(max-width: 760px) 100vw, 52vw"
            preload
          />
          <div className="hero-badges">
            <Badge variant="service">
              <Store aria-hidden="true" />
              Ecommerce
            </Badge>
            <Badge variant="service">
              <Workflow aria-hidden="true" />
              Connected systems
            </Badge>
          </div>
          <div className="hero-status">
            <span className="status-icon">
              <PackageCheck aria-hidden="true" />
            </span>
            <div>
              <strong>Less busywork. More possibility.</strong>
              <span>Your store, orders & tools. Connected.</span>
            </div>
            <ArrowUpRight aria-hidden="true" />
          </div>
          <figcaption>Service illustration, not a client project</figcaption>
        </figure>
      </div>
      <div className="service-summary section-shell">
        <div>
          <span className="summary-icon">
            <Store aria-hidden="true" />
          </span>
          <div>
            <h2>Build your presence</h2>
            <p>Ecommerce, design & creative direction.</p>
          </div>
        </div>
        <div>
          <span className="summary-icon">
            <Layers3 aria-hidden="true" />
          </span>
          <div>
            <h2>Connect your operations</h2>
            <p>Inventory, shipping & business systems.</p>
          </div>
        </div>
        <div>
          <span className="summary-icon">
            <MessageCircle aria-hidden="true" />
          </span>
          <div>
            <h2>Keep moving forward</h2>
            <p>Campaigns, automation & ongoing care.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
