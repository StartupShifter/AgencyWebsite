"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Brand } from "./brand";
const links = [
  { href: "#services", label: "What we do" },
  { href: "#process", label: "How we work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About us" },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header section-shell">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a
          href="#contact"
          className={buttonVariants({ variant: "emerald", size: "marketing" })}
        >
          Let’s talk <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
        </a>
        <Button
          className="mobile-menu-toggle"
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
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
