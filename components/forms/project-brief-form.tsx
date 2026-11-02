"use client";

import {
  useId,
  useState,
  type FormEvent,
  type SyntheticEvent,
} from "react";
import { Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { twLanding } from "@/lib/landing-styles";

export const projectBriefServiceOptions = [
  "Ecommerce & websites",
  "Research & design",
  "Marketing & campaigns",
  "Automation & integrations",
  "Maintenance & performance",
];

export function ProjectBriefForm({ contactEmail }: { contactEmail?: string }) {
  const id = useId();
  const [services, setServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");

  const fieldId = (name: string) => `${id}-${name}`;

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
      `Timing: ${value("timing") || "Not specified"}`,
      "",
      "Project goals:",
      value("goals"),
      "",
      "What is already in place:",
      value("currentSetup") || "Not specified",
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
    <form onSubmit={prepareBrief} onInput={clearFeedback}>
      <FieldGroup>
        <FieldGroup className={twLanding("sm:flex-row")}>
          <Field data-invalid={Boolean(errors.name)}>
            <FieldLabel htmlFor={fieldId("name")}>Your name</FieldLabel>
            <Input
              className={twLanding("h-11")}
              id={fieldId("name")}
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              pattern=".*\S.*"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name ? `${fieldId("name")}-error` : undefined
              }
              onInvalid={showValidation}
            />
            {errors.name && (
              <FieldError id={`${fieldId("name")}-error`}>
                {errors.name}
              </FieldError>
            )}
          </Field>
          <Field data-invalid={Boolean(errors.email)}>
            <FieldLabel htmlFor={fieldId("email")}>Email</FieldLabel>
            <Input
              className={twLanding("h-11")}
              id={fieldId("email")}
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? `${fieldId("email")}-error` : undefined
              }
              onInvalid={showValidation}
            />
            {errors.email && (
              <FieldError id={`${fieldId("email")}-error`}>
                {errors.email}
              </FieldError>
            )}
          </Field>
        </FieldGroup>

        <FieldGroup className={twLanding("sm:flex-row")}>
          <Field>
            <FieldLabel htmlFor={fieldId("company")}>
              Company (optional)
            </FieldLabel>
            <Input
              className={twLanding("h-11")}
              id={fieldId("company")}
              name="company"
              autoComplete="organization"
              maxLength={150}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor={fieldId("timing")}>
              Timing (optional)
            </FieldLabel>
            <Input
              className={twLanding("h-11")}
              id={fieldId("timing")}
              name="timing"
              placeholder="For example, before a launch date"
              maxLength={150}
            />
          </Field>
        </FieldGroup>

        <FieldSet>
          <FieldLegend variant="label">What could we help with?</FieldLegend>
          <FieldDescription>
            Select any that fit, or leave this open.
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            {projectBriefServiceOptions.map((service, index) => (
              <Field orientation="horizontal" key={service}>
                <Checkbox
                  id={`${id}-service-${index}`}
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
                <FieldLabel htmlFor={`${id}-service-${index}`}>
                  {service}
                </FieldLabel>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>

        <Field data-invalid={Boolean(errors.goals)}>
          <FieldLabel htmlFor={fieldId("goals")}>
            What would you like to make possible?
          </FieldLabel>
          <Textarea
            id={fieldId("goals")}
            name="goals"
            placeholder="Tell us about your business, what you need, and the outcome you have in mind."
            required
            minLength={10}
            maxLength={3000}
            rows={4}
            aria-invalid={Boolean(errors.goals)}
            aria-describedby={
              errors.goals ? `${fieldId("goals")}-error` : undefined
            }
            onInvalid={showValidation}
          />
          {errors.goals && (
            <FieldError id={`${fieldId("goals")}-error`}>
              {errors.goals}
            </FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor={fieldId("currentSetup")}>
            What is already in place? (optional)
          </FieldLabel>
          <FieldDescription>
            An existing website, store, social pages, or business tools.
          </FieldDescription>
          <Textarea
            id={fieldId("currentSetup")}
            name="currentSetup"
            placeholder="Share the systems, platforms, or accounts you already use."
            maxLength={2000}
            rows={3}
          />
        </Field>

        <Field>
          <Button type="submit" size="marketing">
            {contactEmail ? (
              <Mail data-icon="inline-start" aria-hidden="true" />
            ) : (
              <Download data-icon="inline-start" aria-hidden="true" />
            )}
            {contactEmail ? "Open email draft" : "Download project brief"}
          </Button>
          <p
            role="status"
            aria-live="polite"
            className={twLanding("brief-status")}
          >
            {status}
          </p>
        </Field>
      </FieldGroup>
    </form>
  );
}
