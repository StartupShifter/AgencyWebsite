import { twLanding } from "@/lib/landing-styles";
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  ChevronDown,
  Globe2,
  Layers3,
  LockKeyhole,
  MessageCircle,
  PackageCheck,
  Search,
  Shirt,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

// An original vector product illustration, used only in the concept storefront.
function ToteIllustration() {
  return (
    <svg viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <ellipse
        cx="123"
        cy="218"
        rx="77"
        ry="10"
        fill="currentColor"
        opacity=".09"
      />
      <path
        d="M76 82V57C76 13 148 13 148 57V84"
        stroke="#43684d"
        strokeWidth="13"
      />
      <path d="M67 79L51 205Q118 225 183 201L168 79Z" fill="#315f43" />
      <path d="M69 79L59 201Q113 214 164 200L161 79Z" fill="#60846a" />
      <path
        d="M76 84L70 197M154 85L156 197"
        stroke="#a3b399"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <path
        d="M88 92V57C88 24 142 24 142 57V93"
        stroke="#87a084"
        strokeWidth="10"
      />
      <path
        d="M89 91V57C89 27 141 27 141 57V91"
        stroke="#acc0a2"
        strokeWidth="1.5"
      />
      <path d="M92 129H136V163H92Z" fill="#e8e8d5" />
      <path
        d="M106 146L113 139L120 146L113 153Z"
        stroke="#42684b"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CommerceIllustration() {
  return (
    <figure
      className={twLanding("commerce-figure")}
      aria-label="Concept illustration of a storefront, product catalog, and connected order workflow"
    >
      <div className={twLanding("commerce-stage")} aria-hidden="true">
        <div className={twLanding("commerce-window commerce-catalog")}>
          <div className={twLanding("commerce-window-heading")}>
            <span className={twLanding("commerce-icon")}>
              <Layers3 />
            </span>
            <span>Product catalog</span>
            <span className={twLanding("commerce-dots")}>•••</span>
          </div>
          <div className={twLanding("catalog-labels")}>
            <span>Product</span>
            <span>Availability</span>
          </div>
          <div className={twLanding("catalog-product")}>
            <span className={twLanding("catalog-thumb")}>
              <ShoppingBag />
            </span>
            <span>
              <strong>Everyday tote</strong>
              <small>Accessories</small>
            </span>
            <span className={twLanding("catalog-stock")}>
              <Check /> In stock
            </span>
          </div>
          <div className={twLanding("catalog-product")}>
            <span className={twLanding("catalog-thumb catalog-thumb-sand")}>
              <Shirt />
            </span>
            <span>
              <strong>Essential tee</strong>
              <small>Clothing</small>
            </span>
            <span className={twLanding("catalog-stock")}>
              <Check /> In stock
            </span>
          </div>
          <div className={twLanding("catalog-footer")}>
            <Check /> Products, variants & collections
          </div>
        </div>

        <div className={twLanding("commerce-window commerce-storefront")}>
          <div className={twLanding("storefront-browser")}>
            <span className={twLanding("browser-lights")}>
              <i />
              <i />
              <i />
            </span>
            <span>
              <LockKeyhole /> Your online store
            </span>
            <ArrowUpRight />
          </div>
          <div className={twLanding("storefront-navigation")}>
            <span className={twLanding("concept-store-name")}>
              everyday<span>®</span>
            </span>
            <span className={twLanding("concept-store-links")}>
              Shop <ChevronDown /> <span>Our story</span>
            </span>
            <span className={twLanding("concept-store-icons")}>
              <Search />
              <ShoppingBag />
            </span>
          </div>
          <div className={twLanding("storefront-collection")}>
            <div className={twLanding("collection-copy")}>
              <span>Made for the everyday.</span>
              <strong>
                Good things.
                <br />
                On repeat.
              </strong>
              <span className={twLanding("collection-link")}>
                Explore the collection <ArrowUpRight />
              </span>
            </div>
            <div className={twLanding("collection-product")}>
              <ToteIllustration />
            </div>
          </div>
          <div className={twLanding("storefront-bottom")}>
            <span>
              <ShoppingBag /> Thoughtfully made essentials
            </span>
            <span className={twLanding("product-swatches")}>
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>

        <div className={twLanding("commerce-window commerce-orders")}>
          <div className={twLanding("commerce-window-heading")}>
            <span className={twLanding("commerce-icon")}>
              <PackageCheck />
            </span>
            <span>Connected orders</span>
            <span className={twLanding("commerce-dots")}>•••</span>
          </div>
          <p className={twLanding("order-intro")}>From checkout to dispatch</p>
          <div className={twLanding("order-step")}>
            <span>
              <ShoppingBag />
            </span>
            <div>
              <strong>Order received</strong>
              <small>Store checkout</small>
            </div>
            <Check />
          </div>
          <div className={twLanding("order-step")}>
            <span>
              <Layers3 />
            </span>
            <div>
              <strong>Inventory updated</strong>
              <small>Connected stock</small>
            </div>
            <Check />
          </div>
          <div className={twLanding("order-step")}>
            <span>
              <Truck />
            </span>
            <div>
              <strong>Ready for shipping</strong>
              <small>Shipping workflow</small>
            </div>
            <Check />
          </div>
        </div>
      </div>
      <figcaption>
        Illustrative store concept · Features tailored to your project
      </figcaption>
    </figure>
  );
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className={twLanding("hero-section")}>
      <div className={twLanding("commerce-hero")}>
        <div className={twLanding("commerce-steps commerce-steps-left")} aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className={twLanding("commerce-steps commerce-steps-right")} aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className={twLanding("commerce-copy")}>
          <p className={twLanding("commerce-eyebrow")}>
            <span /> Your e‑commerce & digital growth agency
          </p>
          <h1 id="hero-heading">
            Your next chapter
            <br />
            starts with a better store.
          </h1>
          <p className={twLanding("commerce-description")}>
            From your first online store to the systems behind it. We bring
            design, e‑commerce, and connected operations together, built around
            your business.
          </p>
          <div className={twLanding("commerce-actions")}>
            <a
              href="#contact"
              className={buttonVariants({ variant: "hero", size: "marketing" })}
            >
              Let’s build your store{" "}
              <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
            </a>
            <a href="#services" className={twLanding("commerce-explore")}>
              Explore our services <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <p className={twLanding("commerce-note")}>
            <Globe2 aria-hidden="true" /> Your business. Your scope. Wherever
            you are.
          </p>
        </div>
        <CommerceIllustration />
      </div>
      <div className={twLanding("service-summary section-shell")}>
        <div>
          <span className={twLanding("summary-icon")}>
            <Store aria-hidden="true" />
          </span>
          <div>
            <h2>Build your presence</h2>
            <p>Ecommerce, design & creative direction.</p>
          </div>
        </div>
        <div>
          <span className={twLanding("summary-icon")}>
            <Layers3 aria-hidden="true" />
          </span>
          <div>
            <h2>Connect your operations</h2>
            <p>Inventory, shipping & business systems.</p>
          </div>
        </div>
        <div>
          <span className={twLanding("summary-icon")}>
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
