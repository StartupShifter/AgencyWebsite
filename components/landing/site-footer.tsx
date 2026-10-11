import { twLanding } from "@/lib/landing-styles";
import { ArrowUp } from "lucide-react";
import { Brand } from "./brand";
import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className={twLanding("site-footer section-shell")}>
      <div className={twLanding("footer-top")}>
        <Brand />
        <p>Your business. Its next chapter.</p>
        <a href="#top" className={twLanding("action-link")}>
          Back to top <ArrowUp aria-hidden="true" />
        </a>
      </div>
      <div className={twLanding("footer-bottom")}>
        <span>© 2026 Starter Shifter</span>
        <nav aria-label="Footer navigation">
          <Link href="/#services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#faq">FAQs</Link>
          <Link href="/#contact">Start a project</Link>
        </nav>
      </div>
    </footer>
  );
}
