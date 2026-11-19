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
import { useI18n } from "@/context/i18n-context";

export function ProjectBriefForm({ contactEmail }: { contactEmail?: string }) {
  const { content } = useI18n();
  const copy = content.projectBrief;
  const projectBriefServiceOptions = content.projectBrief.serviceOptions;
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
    const fields = copy.briefFields;
    const brief = [
      copy.headerLine,
      "",
      `${fields.name}${value("name")}`,
      `${fields.email}${value("email")}`,
      `${fields.company}${value("company") || fields.notSpecified}`,
      `${fields.services}${services.length ? services.join(", ") : fields.exploreOptions}`,
      `${fields.timing}${value("timing") || fields.notSpecified}`,
      "",
      fields.projectGoals,
      value("goals"),
      "",
      fields.alreadyInPlace,
      value("currentSetup") || fields.notSpecified,
      "",
      fields.disclaimer,
    ].join("\n");

    if (contactEmail) {
      const subject = encodeURIComponent(
        `${copy.emailSubjectPrefix}${value("company") || value("name")}`,
      );
      window.location.href = `mailto:${encodeURIComponent(contactEmail)}?subject=${subject}&body=${encodeURIComponent(brief)}`;
      setStatus(copy.emailDraftReady);
      return;
    }

    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = copy.downloadFileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus(copy.downloadReady);
  }

  return (
    <form onSubmit={prepareBrief} onInput={clearFeedback}>
      <FieldGroup>
        <FieldGroup className={twLanding("sm:flex-row")}>
          <Field data-invalid={Boolean(errors.name)}>
            <FieldLabel htmlFor={fieldId("name")}>{copy.nameLabel}</FieldLabel>
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
            <FieldLabel htmlFor={fieldId("email")}>{copy.emailLabel}</FieldLabel>
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
              {copy.companyLabel}
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
              {copy.timingLabel}
            </FieldLabel>
            <Input
              className={twLanding("h-11")}
              id={fieldId("timing")}
              name="timing"
              placeholder={copy.timingPlaceholder}
              maxLength={150}
            />
          </Field>
        </FieldGroup>

        <FieldSet>
          <FieldLegend variant="label">{copy.servicesLegend}</FieldLegend>
          <FieldDescription>
            {copy.servicesDescription}
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
            {copy.goalsLabel}
          </FieldLabel>
          <Textarea
            id={fieldId("goals")}
            name="goals"
            placeholder={copy.goalsPlaceholder}
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
            {copy.currentSetupLabel}
          </FieldLabel>
          <FieldDescription>
            {copy.currentSetupDescription}
          </FieldDescription>
          <Textarea
            id={fieldId("currentSetup")}
            name="currentSetup"
            placeholder={copy.currentSetupPlaceholder}
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
            {contactEmail ? copy.openEmailDraft : copy.downloadBrief}
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
