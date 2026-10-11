"use client";
import { twLanding } from "@/lib/landing-styles";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
  Store,
  Megaphone,
  MessagesSquare,
  Package,
  Truck,
  Database,
  Wrench,
  Gauge,
  PenTool,
  Presentation,
  BadgeDollarSign,
  CalendarCheck,
  Scale,
  Handshake,
  Route,
  CircleQuestionMark,
  ClipboardList,
  FolderOpen,
  LifeBuoy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type NavEntry = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

type NavSection = {
  label: string;
  items: NavEntry[];
  footer?: { text: string; linkLabel: string; href: string };
};

const sections: NavSection[] = [
  {
    label: "Services",
    items: [
      { icon: Store, title: "Ecommerce websites", description: "Storefronts shaped around how you sell.", href: "/services/ecommerce" },
      { icon: Megaphone, title: "Social & campaigns", description: "Content and presence, planned and managed.", href: "/services/social-campaigns" },
      { icon: MessagesSquare, title: "Chatbots & automation", description: "Common questions answered, the rest routed.", href: "/services/chatbots-automation" },
      { icon: Package, title: "Inventory systems", description: "A clear, reliable view of your stock.", href: "/services/inventory" },
      { icon: Truck, title: "Shipping & orders", description: "Fewer manual steps between order and dispatch.", href: "/services/shipping-orders" },
      { icon: Database, title: "ERP & CRM integrations", description: "Your business tools, working together.", href: "/services/erp-crm-integrations" },
      { icon: Wrench, title: "Maintenance & support", description: "Ongoing technical care after launch.", href: "/services/maintenance-support" },
      { icon: Gauge, title: "Performance improvement", description: "Find and address the bottlenecks.", href: "/services/performance" },
      { icon: PenTool, title: "Research & creative direction", description: "Market insight and Figma design drafts.", href: "/services/research-creative-direction" },
      { icon: Presentation, title: "Presentations & planning", description: "A shared view of your project, early.", href: "/services/project-planning" },
    ],
    footer: {
      text: "Basic for $1,000 once. Pro for $2,000 plus $500/month.",
      linkLabel: "See pricing",
      href: "#pricing",
    },
  },
  {
    label: "Pricing",
    items: [
      { icon: BadgeDollarSign, title: "Basic plan", description: "$1,000 once to bring your business online.", href: "#pricing" },
      { icon: CalendarCheck, title: "Pro plan", description: "$2,000 setup plus $500/month for ongoing support.", href: "#pricing" },
      { icon: Scale, title: "Compare plans", description: "Digital setup or ongoing growth and care.", href: "#pricing" },
      { icon: Handshake, title: "Onboarding terms", description: "Signed contract and 40% advance to begin.", href: "#process" },
    ],
  },
  {
    label: "Resources",
    items: [
      { icon: Route, title: "How we work", description: "Delivery stages from discovery to launch.", href: "#process" },
      { icon: CircleQuestionMark, title: "FAQs", description: "Common questions, answered plainly.", href: "#faq" },
      { icon: ClipboardList, title: "Project brief", description: "Tell us what you're building.", href: "#contact" },
      { icon: FolderOpen, title: "Projects & products", description: "Explore our websites and applications.", href: "/products" },
      { icon: LifeBuoy, title: "Support & care", description: "Help for projects after launch.", href: "/support" },
    ],
  },
];

const aboutLink: NavEntry = {
  icon: Users,
  title: "About us",
  description: "Who Starter Shifter is and how we work.",
  href: "#about",
};

// A single column lists up to 4 entries; every additional group of 4
// spreads the menu out by one more column (5-8 → 2, 9-12 → 3, and so on).
function menuColumns(itemCount: number) {
  return Math.max(1, Math.ceil(itemCount / 4));
}

function SectionContent({ section }: { section: NavSection }) {
  const columns = menuColumns(section.items.length);
  return (
    <div
      className={twLanding("navbar-panel-inner")}
      style={{ width: columns === 1 ? 300 : columns * 248 }}
    >
      <div
        className={twLanding("navbar-grid")}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {section.items.map(({ icon: Icon, title, description, href }) => (
          <NavigationMenuLink
            key={title}
            href={href.startsWith("#") ? `/${href}` : href}
            closeOnClick
            className={twLanding("navbar-item")}
          >
            <span className={twLanding("navbar-item-icon")}>
              <Icon aria-hidden="true" />
            </span>
            <span className={twLanding("navbar-item-text")}>
              <span className={twLanding("navbar-item-title")}>{title}</span>
              <span className={twLanding("navbar-item-desc")}>{description}</span>
            </span>
          </NavigationMenuLink>
        ))}
      </div>
      {section.footer && (
        <div className={twLanding("navbar-panel-footer")}>
          <span>{section.footer.text}</span>
          <NavigationMenuLink
            href={section.footer.href.startsWith("#") ? `/${section.footer.href}` : section.footer.href}
            closeOnClick
            className={twLanding("navbar-panel-footer-link")}
          >
            {section.footer.linkLabel}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </NavigationMenuLink>
        </div>
      )}
    </div>
  );
}

function MobileNavLink({
  entry,
  onNavigate,
}: {
  entry: NavEntry;
  onNavigate: () => void;
}) {
  const { icon: Icon, title, description, href } = entry;
  return (
    <Link href={href.startsWith("#") ? `/${href}` : href} onClick={onNavigate} className={twLanding("mobile-nav-item")}>
      <span className={twLanding("mobile-nav-item-icon")}>
        <Icon aria-hidden="true" />
      </span>
      <span className={twLanding("mobile-nav-item-text")}>
        <span className={twLanding("mobile-nav-item-title")}>{title}</span>
        <span className={twLanding("mobile-nav-item-desc")}>{description}</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={twLanding("section-shell site-header")}>
      <div
        className={twLanding(
          scrolled ? "navbar-pill navbar-pill-scrolled" : "navbar-pill",
        )}
      >
        <Link href="/" aria-label="Monster home" className={twLanding("navbar-brand")}>
          <span className={twLanding("brand-mark")}>
            <ArrowUpRight aria-hidden="true" strokeWidth={2.6} />
          </span>
          monster
        </Link>
        <NavigationMenu
          align="center"
          className={twLanding("desktop-nav")}
          aria-label="Main navigation"
        >
          <NavigationMenuList>
            {sections.map((section) => (
              <NavigationMenuItem key={section.label}>
                <NavigationMenuTrigger className={twLanding("navbar-trigger")}>
                  {section.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className={twLanding("navbar-panel")}>
                  <SectionContent section={section} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink
                href={`/${aboutLink.href}`}
                className={twLanding("navbar-trigger")}
              >
                {aboutLink.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className={twLanding("header-actions")}>
          <Link href="/#contact" className={twLanding("navbar-cta")}>
            Let’s talk <ArrowUpRight aria-hidden="true" />
          </Link>
          <Button
            className={twLanding("mobile-menu-toggle")}
            variant="ghost"
            size="icon-lg"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className={twLanding("mobile-navigation")}
            aria-label="Mobile navigation"
          >
            {sections.map((section) => (
              <div key={section.label} className={twLanding("mobile-nav-section")}>
                <p className={twLanding("mobile-nav-label")}>{section.label}</p>
                <div className={twLanding("mobile-nav-grid")}>
                  {section.items.map((entry) => (
                    <MobileNavLink
                      key={entry.title}
                      entry={entry}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </div>
              </div>
            ))}
            <div className={twLanding("mobile-nav-section")}>
              <div className={twLanding("mobile-nav-grid")}>
                <MobileNavLink entry={aboutLink} onNavigate={() => setOpen(false)} />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
