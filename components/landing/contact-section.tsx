"use client";

import { useState, type FormEvent, type SyntheticEvent } from "react";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const serviceOptions = [
  "Ecommerce & websites",
  "Research & design",
  "Marketing & campaigns",
  "Automation & integrations",
  "Maintenance & performance",
];

export function ContactSection({ contactEmail }: { contactEmail?: string }) {
  const [services, setServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");

  function showValidation(
    event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = event.currentTarget;
    setErrors((current) => ({
      ...current,
      [field.name]: field.validationMessage,
    }));
  }

  function clearFeedback(event: FormEvent<HTMLFormElement>) {
    setStatus("");
    const field = event.target;
    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement
    ) {
      setErrors((current) => ({ ...current, [field.name]: "" }));
    }
  }

  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const brief = [
      "Starter Shifter — Project brief",
      "",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Company: ${value("company") || "Not specified"}`,
      `Services: ${services.length ? services.join(", ") : "Let's explore the options"}`,
      "",
      "Project goals:",
      value("goals"),
      "",
      "This brief is a starting point for discussion, not an agreed scope or quote.",
    ].join("\n");

    if (contactEmail) {
      const subject = encodeURIComponent(
        `Project enquiry — ${value("company") || value("name")}`,
      );
      window.location.href = `mailto:${encodeURIComponent(contactEmail)}?subject=${subject}&body=${encodeURIComponent(brief)}`;
      setStatus(
        "Your email draft is ready to open. Review it in your email app and send when you're ready.",
      );
      return;
    }

    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "starter-shifter-project-brief.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus(
      "Your project brief is ready in your downloads. Nothing has been sent to Starter Shifter.",
    );
  }

  return (
    <section
      id="contact"
      className="contact-section section-shell"
      aria-labelledby="contact-heading"
    >
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="section-eyebrow">Let’s make your next move</p>
          <h2 id="contact-heading" className="contact-heading">
            Your next chapter starts with a conversation.
          </h2>
          <p className="contact-description">
            A new online store, a better customer experience, or fewer manual
            tasks. Start with what your business needs.
          </p>
        </div>
        <div className="contact-actions">
          <Dialog
            onOpenChange={() => {
              setStatus("");
              setErrors({});
            }}
          >
            <DialogTrigger
              render={<Button size="marketing" variant="default" />}
            >
              Plan your project
              <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
            </DialogTrigger>
            <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-w-xl [&>[data-slot=dialog-close]]:size-11">
              <DialogHeader className="pr-8">
                <DialogTitle>Tell us what you have in mind.</DialogTitle>
                <DialogDescription>
                  {contactEmail
                    ? "Create a short project brief, then open it in your email app to send to us."
                    : "Put your ideas into a short brief you can download and share. This form saves a file to your device; it does not send an enquiry."}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={prepareBrief} onInput={clearFeedback}>
                <FieldGroup>
                  <FieldGroup className="sm:flex-row">
                    <Field data-invalid={Boolean(errors.name)}>
                      <FieldLabel htmlFor="brief-name">Your name</FieldLabel>
                      <Input
                        className="h-11"
                        id="brief-name"
                        name="name"
                        autoComplete="name"
                        required
                        maxLength={100}
                        pattern=".*\S.*"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "brief-name-error" : undefined
                        }
                        onInvalid={showValidation}
                      />
                      {errors.name && (
                        <FieldError id="brief-name-error">
                          {errors.name}
                        </FieldError>
                      )}
                    </Field>
                    <Field data-invalid={Boolean(errors.email)}>
                      <FieldLabel htmlFor="brief-email">Email</FieldLabel>
                      <Input
                        className="h-11"
                        id="brief-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "brief-email-error" : undefined
                        }
                        onInvalid={showValidation}
                      />
                      {errors.email && (
                        <FieldError id="brief-email-error">
                          {errors.email}
                        </FieldError>
                      )}
                    </Field>
                  </FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="brief-company">
                      Company (optional)
                    </FieldLabel>
                    <Input
                      className="h-11"
                      id="brief-company"
                      name="company"
                      autoComplete="organization"
                      maxLength={150}
                    />
                  </Field>
                  <FieldSet>
                    <FieldLegend variant="label">
                      What could we help with?
                    </FieldLegend>
                    <FieldDescription>
                      Select any that fit, or leave this open.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {serviceOptions.map((service, index) => (
                        <Field orientation="horizontal" key={service}>
                          <Checkbox
                            id={`brief-service-${index}`}
                            checked={services.includes(service)}
                            onCheckedChange={(checked) => {
                              setServices((current) =>
                                checked
                                  ? [...current, service]
                                  : current.filter((item) => item !== service),
                              );
                              setStatus("");
                            }}
                          />
                          <FieldLabel htmlFor={`brief-service-${index}`}>
                            {service}
                          </FieldLabel>
                        </Field>
                      ))}
                    </FieldGroup>
                  </FieldSet>
                  <Field data-invalid={Boolean(errors.goals)}>
                    <FieldLabel htmlFor="brief-goals">
                      What would you like to make possible?
                    </FieldLabel>
                    <Textarea
                      id="brief-goals"
                      name="goals"
                      placeholder="Tell us about your business, what you need, and any timing you have in mind."
                      required
                      minLength={10}
                      maxLength={3000}
                      rows={4}
                      aria-invalid={Boolean(errors.goals)}
                      aria-describedby={
                        errors.goals ? "brief-goals-error" : undefined
                      }
                      onInvalid={showValidation}
                    />
                    {errors.goals && (
                      <FieldError id="brief-goals-error">
                        {errors.goals}
                      </FieldError>
                    )}
                  </Field>
                  <Field>
                    <Button type="submit" size="marketing">
                      {contactEmail ? (
                        <Mail data-icon="inline-start" aria-hidden="true" />
                      ) : (
                        <Download data-icon="inline-start" aria-hidden="true" />
                      )}
                      {contactEmail
                        ? "Open email draft"
                        : "Download project brief"}
                    </Button>
                    <p
                      role="status"
                      aria-live="polite"
                      className="brief-status"
                    >
                      {status}
                    </p>
                  </Field>
                </FieldGroup>
              </form>
            </DialogContent>
          </Dialog>
          <p className="contact-caption">
            Your business. Your priorities. A scope built around both.
          </p>
        </div>
      </div>
    </section>
  );
}
