import { ArrowUp, ArrowUpRight, Globe2 } from "lucide-react";
import Link from "next/link";
import { Brand } from "./brand";
import { ContactSection } from "./contact-section";
import { FooterShader } from "./footer-shader";
import "./site-footer.css";

export type FooterSocialLink = {
  label: string;
  href: string;
  platform: "instagram" | "linkedin" | "website";
};

const navigation = [
  {
    title: "Company",
    links: [
      ["About us", "/about"],
      ["How we work", "/#process"],
      ["Projects & concepts", "/products"],
      ["Plans & pricing", "/#pricing"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Web applications", "/#services"],
      ["Social media", "/#services"],
      ["AI workflows", "/#services"],
      ["Connected operations", "/#process"],
      ["Maintenance & growth", "/#pricing"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Client login", "/login"],
      ["FAQs", "/#faq"],
      ["Project brief", "#contact"],
    ],
  },
  {
    title: "Information",
    links: [
      ["Privacy", "/policies/privacy"],
      ["Cookies", "/policies/cookies"],
      ["Service terms", "/policies/terms"],
    ],
  },
];

export function SiteFooter({
  socialLinks = [],
  contactEmail,
}: {
  socialLinks?: FooterSocialLink[];
  contactEmail?: string;
}) {
  return (
    <footer id="footer" className="agencyFooter" aria-label="Starter Shifter footer">
      <div className="agencyFooter-contact">
        <FooterShader />
        <div className="agencyFooter-shell">
          <ContactSection contactEmail={contactEmail} />
        </div>
      </div>
      <div className="agencyFooter-shell">
        <div className="agencyFooter-navigation">
          <div className="agencyFooter-brand">
            <Brand />
            <p>From your first online store to the workflows behind it. Built around your business.</p>
            <span className="agencyFooter-worldwide">
              <Globe2 aria-hidden="true" /> Working with businesses worldwide.
            </span>
            {socialLinks.length > 0 && (
              <nav className="agencyFooter-social" aria-label="Social profiles">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                  >
                    {social.label}<ArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </nav>
            )}
          </div>
          {navigation.map((group) => (
            <nav key={group.title} aria-label={`Footer ${group.title.toLowerCase()}`}>
              <h2 className="agencyFooter-navHeading">{group.title}</h2>
              <ul>
                {group.links.map(([label, href]) => (
                  <li key={label}><Link href={href}>{label}</Link></li>
                ))}
              </ul>
              {group.title === "Information" && (
                <p className="agencyFooter-policyNote">Policy status and current information.</p>
              )}
            </nav>
          ))}
        </div>
        <div className="agencyFooter-meta">
          <span>© 2026 Starter Shifter</span>
          <span>Your business. Its next chapter.</span>
          <a href="#top">Back to top <ArrowUp aria-hidden="true" /></a>
        </div>
        <div className="agencyFooter-signature" aria-hidden="true">
          <p>starter shifter</p>
        </div>
      </div>
    </footer>
  );
}
