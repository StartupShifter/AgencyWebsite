"use client";
import { twLanding } from "@/lib/landing-styles";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectBriefForm } from "@/components/forms/project-brief-form";
import { content } from "@/context/content";
import "./contact-section.css";

export function ContactSection({ contactEmail }: { contactEmail?: string }) {
  const [formKey, setFormKey] = useState(0);
  const contact = content.landing.contact;

  return (
    <section
      id="contact"
      className="closingContact"
      aria-labelledby="contact-heading"
    >
      <div className="closingContact-copy">
        <p className="closingContact-intro">
          <ArrowUpRight aria-hidden="true" /> {contact.intro}
        </p>
        <h2 id="contact-heading" className="closingContact-heading">
          {contact.titleLines[0]}
          <br /> {contact.titleLines[1]}
        </h2>
        <p className="closingContact-description">
          {contact.description}
        </p>
      </div>
      <div className="closingContact-actions">
        <Dialog
          onOpenChange={(open) => {
            if (!open) setFormKey((current) => current + 1);
          }}
        >
          <DialogTrigger
            render={
              <Button size="marketing" variant="hero" className="rounded-lg" />
            }
          >
            {contact.cta}
            <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </DialogTrigger>
          <DialogContent className={twLanding("max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-w-xl [&>[data-slot=dialog-close]]:size-11")}>
            <DialogHeader className={twLanding("pr-8")}>
              <DialogTitle>{contact.dialogTitle}</DialogTitle>
              <DialogDescription>
                {contactEmail
                  ? contact.dialogDescriptionWithEmail
                  : contact.dialogDescriptionWithoutEmail}
              </DialogDescription>
            </DialogHeader>
            <ProjectBriefForm key={formKey} contactEmail={contactEmail} />
          </DialogContent>
        </Dialog>
        <Link className="closingContact-secondary" href="/#services">
          {contact.secondaryLink}
        </Link>
      </div>
    </section>
  );
}
