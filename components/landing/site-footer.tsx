import { ArrowUp, ArrowUpRight, Globe2 } from "lucide-react";
import { Brand } from "./brand";
import Link from "next/link";
import "./site-footer.css";

export type FooterSocialLink = { label: string; href: string; platform: "instagram" | "linkedin" | "website" };
const navigation = [
  { title: "Services", links: [["Web applications", "/#services"], ["Social media", "/#services"], ["AI workflows", "/#services"], ["Connected operations", "/#process"], ["Maintenance & growth", "/#pricing"]] },
  { title: "Company", links: [["About us", "/about"], ["How we work", "/#process"], ["Explore our concepts", "/products"], ["Plans & pricing", "/#pricing"], ["FAQs", "/#faq"]] },
  { title: "Information", links: [["Privacy", "/policies/privacy"], ["Cookies", "/policies/cookies"], ["Service terms", "/policies/terms"]] },
];

export function SiteFooter({ socialLinks = [] }: { socialLinks?: FooterSocialLink[] }) {
  return (
    <footer id="footer" className="agencyFooter" aria-label="Starter Shifter footer">
      <div className="agencyFooter-shell">
        <div className="agencyFooter-top">
          <div className="agencyFooter-brand">
            <Brand />
            <p>Websites, social presence, and connected workflows. A new chapter for your business.</p>
            {socialLinks.length ? (
              <nav className="agencyFooter-social" aria-label="Social profiles">
                {socialLinks.map((social) => {
                  return <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.label} (opens in a new tab)`}><Globe2 aria-hidden="true" /><span>{social.label}</span></a>;
                })}
              </nav>
            ) : <p className="agencyFooter-socialPending">Social profiles coming soon.</p>}
          </div>
          {navigation.map((group) => (
            <nav key={group.title} aria-label={`Footer ${group.title.toLowerCase()}`}>
              <h2 className="agencyFooter-navHeading">{group.title}</h2>
              <ul>{group.links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>
              {group.title === "Information" && <p className="agencyFooter-policyNote">Policy status and current information.</p>}
            </nav>
          ))}
          <div className="agencyFooter-project">
            <h2>Have something<br />{" "}in mind?</h2>
            <p>Start with your goals. We’ll shape the scope around your business.</p>
            <Link href="/#contact" className="agencyFooter-cta">Start a project <ArrowUpRight aria-hidden="true" /></Link>
            <span>Working with businesses worldwide.</span>
          </div>
        </div>
        <div className="agencyFooter-meta">
          <span>© 2026 Starter Shifter. All rights reserved.</span>
          <span className="agencyFooter-metaMessage"><span aria-hidden="true" />Your business. Its next chapter.</span>
          <a href="#top">Back to top <ArrowUp aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
