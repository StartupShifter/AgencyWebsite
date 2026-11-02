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
import "./contact-section.css";

export function ContactSection({ contactEmail }: { contactEmail?: string }) {
  const [formKey, setFormKey] = useState(0);

  return (
    <section
      id="contact"
      className="closingContact"
      aria-labelledby="contact-heading"
    >
      <div className="closingContact-copy">
        <p className="closingContact-intro">
          <ArrowUpRight aria-hidden="true" /> Your next chapter
        </p>
        <h2 id="contact-heading" className="closingContact-heading">
          Let’s make your
          <br /> next move.
        </h2>
        <p className="closingContact-description">
          A better online store, a stronger social presence, or connected
          workflows. Start with what your business needs.
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
            Plan your project
            <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </DialogTrigger>
          <DialogContent className={twLanding("max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-w-xl [&>[data-slot=dialog-close]]:size-11")}>
            <DialogHeader className={twLanding("pr-8")}>
              <DialogTitle>Tell us what you have in mind.</DialogTitle>
              <DialogDescription>
                {contactEmail
                  ? "Create a short project brief, then open it in your email app to send to us."
                  : "Put your ideas into a short brief you can download and share. This form saves a file to your device; it does not send an enquiry."}
              </DialogDescription>
            </DialogHeader>
            <ProjectBriefForm key={formKey} contactEmail={contactEmail} />
          </DialogContent>
        </Dialog>
        <Link className="closingContact-secondary" href="/#services">
          Explore our services
        </Link>
      </div>
    </section>
  );
}
