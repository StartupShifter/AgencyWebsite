import { ArrowUp } from "lucide-react";
import { Brand } from "./brand";
export function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-top">
        <Brand />
        <p>Your business. Its next chapter.</p>
        <a href="#top" className="action-link">
          Back to top <ArrowUp aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Starter Shifter</span>
        <nav aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Start a project</a>
        </nav>
      </div>
    </footer>
  );
}
