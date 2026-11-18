import { ArrowUpRight, Globe2 } from "lucide-react";
import Link from "next/link";
import { Brand } from "./brand";
import { ContactSection } from "./contact-section";
import { FooterShader } from "./footer-shader";
import { content } from "@/context/content";
import "./site-footer.css";

export type FooterSocialLink = {
  label: string;
  href: string;
  platform: "instagram" | "linkedin" | "website";
};

const navigation = content.footer.navigation;

export function SiteFooter({
  socialLinks = [],
  contactEmail,
}: {
  socialLinks?: FooterSocialLink[];
  contactEmail?: string;
}) {
  return (
    <footer id="footer" className="agencyFooter" aria-label={content.footer.ariaLabel}>
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
            <p>{content.brand.footerNote}</p>
            <span className="agencyFooter-worldwide">
              <Globe2 aria-hidden="true" /> {content.brand.footerWorldwide}
            </span>
            {socialLinks.length > 0 && (
              <nav className="agencyFooter-social" aria-label={content.footer.socialProfilesLabel}>
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (${content.common.opensInNewTab})`}
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
                <p className="agencyFooter-policyNote">{content.footer.policyNote}</p>
              )}
            </nav>
          ))}
        </div>
        {/* Footer signature */}
        <div className="agencyFooter-signature" aria-hidden="true">
          <p>{content.brand.footerSignature}</p>
        </div>
      </div>
    </footer>
  );
}
