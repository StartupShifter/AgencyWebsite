"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  CircleCheck,
  CircleDashed,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  FolderOpen,
  ShieldCheck,
  Trash2,
  Upload,
} from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  formatAnswer,
} from "@/lib/onboarding/engine";
import {
  DOCUMENT_CATEGORIES,
  MAX_DOCUMENT_BYTES,
  formatFileSize,
} from "@/lib/onboarding/documents";
import {
  DELIVERY_STAGE_STATUS_LABELS,
  type DeliveryStageStatus,
} from "@/lib/onboarding/delivery";
import type { DashboardModel, WorkspaceData } from "@/lib/onboarding/dashboard";
import { panelClass } from "./dashboard-overview";
import { content } from "@/context/content";

export function ViewHeading({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-[28px] font-medium leading-tight tracking-[-1.2px] sm:text-[34px]">
          {title}
        </h1>
        <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[var(--workspace-muted)]">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

export function JourneyView({
  model,
  data,
  onboardingHref,
}: {
  model: DashboardModel;
  data: WorkspaceData;
  onboardingHref: string;
}) {
  const persistedStages = model.deliveryStages;
  const journey = content.dashboard.journey;
  const fallbackStages = journey.fallbackStages.map((stage) => ({
    id: stage.id,
    title: stage.title,
    status:
      stage.id === "brief"
        ? model.submitted
          ? journey.statusComplete
          : journey.statusInProgress
        : stage.id === "activation"
          ? model.workspaceReady
            ? journey.statusVerified
            : model.submitted
              ? journey.statusNeedsVerification
              : journey.statusUpNext
          : journey.statusUpcoming,
    description: stage.description,
    done: stage.id === "brief" ? model.submitted : stage.id === "activation" ? model.workspaceReady : false,
    progress:
      stage.id === "brief"
        ? model.submitted
          ? 100
          : model.progress.percent
        : stage.id === "activation"
          ? model.workspaceReady
            ? 100
            : 0
          : 0,
    note: "",
    targetDate: null,
  }));
  const stages = persistedStages.length
    ? persistedStages.map((stage) => ({
        id: stage.stageId,
        title: stage.title,
        status:
          DELIVERY_STAGE_STATUS_LABELS[
            stage.status as DeliveryStageStatus
          ] ?? stage.status,
        description: stage.description,
        done: stage.status === "complete",
        progress: stage.progress,
        note: stage.note,
        targetDate: stage.targetDate,
      }))
    : fallbackStages;
  const persistedCurrent = model.project
    ? stages.findIndex((stage) => stage.id === model.project?.currentStage)
    : -1;
  const current =
    persistedCurrent >= 0
      ? persistedCurrent
      : model.workspaceReady
        ? 2
        : model.submitted
          ? 1
          : 0;
  const [selectedStage, setSelectedStage] = useState(current);
  const selected = stages[selectedStage] ?? stages[0];
  const completed = stages.filter((stage) => stage.done).length;
  return (
    <>
      <ViewHeading
        title={content.dashboard.journey.title}
        description={content.dashboard.journey.description}
      />
      <section className={`${panelClass} mb-5`}>
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[var(--workspace-muted)]">{content.dashboard.journey.currentCheckpoint}</p>
            <h2 className="mt-1.5 text-xl font-medium tracking-[-.4px]">
              {stages[current]?.title ?? content.dashboard.journey.yourProject}
            </h2>
            {model.project?.summary && (
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-[var(--workspace-muted)]">
                {model.project.summary}
              </p>
            )}
            {model.project?.targetDate && (
              <p className="mt-2 text-[11px] text-[var(--workspace-muted)]">
                {content.dashboard.journey.targetDate}{model.project.targetDate}
              </p>
            )}
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--workspace-tint)] px-3 py-2 text-xs text-[var(--workspace-muted)]">
            <RouteIcon />
            {model.project
              ? `${model.project.progressPercent}% ${content.dashboard.journey.deliveryComplete}`
              : `${completed} ${content.dashboard.journey.preparationStagesComplete}`}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(index)}
              aria-pressed={selectedStage === index}
              className="workspace-stage-button relative rounded-2xl border border-[var(--workspace-line)] bg-[var(--workspace-surface)] p-4 text-left hover:bg-[var(--workspace-soft)]"
            >
              <span
                className={`mb-5 flex size-8 items-center justify-center rounded-full text-xs ${stage.done || index === current ? "bg-[var(--commerce-deep)] text-white" : "border border-[var(--workspace-line)] text-[var(--workspace-muted)]"}`}
              >
                {stage.done ? <Check size={15} /> : index + 1}
              </span>
              <p className="min-h-9 text-xs font-medium leading-relaxed">
                {stage.title}
              </p>
              <p className="mt-2 text-[10px] text-[var(--workspace-muted)]">{stage.status}</p>
            </button>
          ))}
        </div>
      </section>
      <div className="grid items-start gap-5 xl:grid-cols-[1.2fr_1fr]">
        <section className={panelClass}>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--workspace-tint)] text-[var(--workspace-muted)]">
              {selectedStage + 1}
            </span>
            <div>
              <h2 className="text-base font-medium">{selected.title}</h2>
              <p className="mt-1 text-[11px] text-[var(--workspace-muted)]">
                {selected.status}
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[var(--workspace-muted)]">
            {selected.description}
          </p>
          {selected.progress > 0 && (
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-[11px] text-[var(--workspace-muted)]">
                <span>{content.dashboard.journey.stageProgress}</span>
                <span>{selected.progress}%</span>
              </div>
              <Progress
                value={selected.progress}
                aria-label={`${selected.title} progress`}
                className="[&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:bg-[var(--workspace-line)] [&_[data-slot=progress-indicator]]:bg-[var(--commerce-green)]"
              />
            </div>
          )}
          {selected.note && (
            <p className="mt-4 rounded-xl bg-[var(--workspace-tint)] p-4 text-xs leading-relaxed text-[var(--workspace-muted)]">
              {selected.note}
            </p>
          )}
          {selected.targetDate && (
            <p className="mt-3 text-[11px] text-[var(--workspace-muted)]">
              {content.dashboard.journey.targetDate}{selected.targetDate}
            </p>
          )}
          {selected.id === "brief" || selected.id === "activation" ? (
            <>
              <div className="mt-6 space-y-4">
                {(selected.id === "brief"
                  ? model.prerequisites.filter((item) => item.id === "brief")
                  : model.prerequisites.filter((item) => item.id !== "brief")
                ).map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    {item.verified ? (
                      <CircleCheck
                        className="mt-0.5 shrink-0 text-[var(--commerce-green)]"
                        size={19}
                      />
                    ) : (
                      <CircleDashed
                        className="mt-0.5 shrink-0 text-[var(--workspace-subtle)]"
                        size={19}
                      />
                    )}
                    <div>
                      <p className="text-xs font-medium">{item.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--workspace-muted)]">
                        {item.detail}
                      </p>
                    </div>
                    <span className="ml-auto shrink-0 text-[10px] text-[var(--workspace-muted)]">
                      {item.verified ? content.dashboard.overview.verified : content.dashboard.overview.pending}
                    </span>
                  </div>
                ))}
              </div>
              {selected.id === "brief" && (
                <Link
                  href={onboardingHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--workspace-ink)] px-4 py-2.5 text-xs text-white"
                >
                  {model.submitted ? content.dashboard.journey.reviewBrief : content.dashboard.journey.continueBrief}
                  <ArrowUpRight size={14} />
                </Link>
              )}
              {selected.id === "activation" && data.pending.length > 0 && (
                <details className="mt-6 rounded-xl bg-[var(--workspace-soft)] p-4">
                  <summary className="cursor-pointer text-xs font-medium">
                    {content.dashboard.journey.viewAllPending} ({data.pending.length})
                  </summary>
                  <ul className="mt-3 list-disc space-y-2 pl-4 text-xs leading-relaxed text-[var(--workspace-muted)]">
                    {data.pending.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              )}
            </>
          ) : selected.note ? null : (
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-[var(--workspace-soft)] p-4">
              <Clock3 size={17} className="mt-0.5 shrink-0 text-[var(--workspace-muted)]" />
              <p className="text-xs leading-relaxed text-[var(--workspace-muted)]">
                {content.dashboard.journey.noDeliveryUpdate}
              </p>
            </div>
          )}
        </section>
        <section className={panelClass}>
          <h2 className="mb-5 text-base font-medium">{content.dashboard.journey.workspaceActivity}</h2>
          {model.activity.length ? (
            <div className="space-y-6">
              {model.activity.map((item, index) => (
                <div key={`${item.title}-${item.time}`} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--workspace-tint)] text-[var(--commerce-green)]">
                      <Check size={14} />
                    </span>
                    {index < model.activity.length - 1 && (
                      <span className="mt-2 h-full w-px bg-[var(--workspace-line)]" />
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-medium">{item.title}</p>
                    <p className="mt-1 text-xs text-[var(--workspace-muted)]">{item.detail}</p>
                    <time
                      dateTime={new Date(item.time).toISOString()}
                      className="mt-2 block text-[10px] text-[var(--workspace-subtle)]"
                    >
                      {new Date(item.time).toLocaleString("en", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-[var(--workspace-muted)]">
              {content.dashboard.journey.activityEmpty}
            </p>
          )}
          <p className="mt-6 border-t border-[var(--workspace-line)] pt-4 text-[11px] leading-relaxed text-[var(--workspace-muted)]">
            {content.dashboard.journey.activityFootNote}
          </p>
        </section>
      </div>
    </>
  );
}
function RouteIcon() {
  return <span className="size-1.5 rounded-full bg-[var(--commerce-green)]" />;
}

export function ResourcesView({
  model,
  onboardingHref,
  documents,
  preview = false,
}: {
  model: DashboardModel;
  onboardingHref: string;
  documents: WorkspaceData["documents"];
  preview?: boolean;
}) {
  const urls = [
    ...new Set(
      Object.values(model.answers)
        .filter((answer) => answer.state === "answered")
        .flatMap((answer) => {
          const texts = Array.isArray(answer.value)
            ? answer.value
            : typeof answer.value === "object"
              ? Object.values(answer.value)
              : typeof answer.value === "string"
                ? [answer.value]
                : [];
          return [...texts, answer.detail ?? ""].flatMap(
            (text) => text.match(/https?:\/\/[^\s<>"']+/g) ?? [],
          );
        }),
    ),
  ].flatMap((raw) => {
    try {
      const url = new URL(raw.replace(/[),.;]+$/, ""));
      return url.protocol === "https:" || url.protocol === "http:"
        ? [{ url: url.href, host: url.hostname }]
        : [];
    } catch {
      return [];
    }
  });
  return (
    <>
      <ViewHeading
        title={content.dashboard.resources.title}
        description={content.dashboard.resources.description}
      >
        <Link
          href={onboardingHref}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--workspace-ink)] px-4 py-2.5 text-xs text-white"
        >
          {content.dashboard.resources.updateResources}
          <ArrowUpRight size={15} />
        </Link>
      </ViewHeading>
      <div className="grid gap-5 xl:grid-cols-[1.2fr_1fr]">
        <section className={panelClass}>
          <h2 className="mb-2 text-base font-medium">
            {content.dashboard.resources.brandContentReadiness}
          </h2>
          <p className="mb-6 text-xs text-[var(--workspace-muted)]">
            {content.dashboard.resources.assetStatuses}
          </p>
          {model.assets.length ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {model.assets.map((asset) => (
                <div key={asset.label} className="rounded-2xl bg-[var(--workspace-soft)] p-4">
                  <FolderOpen size={23} className="mb-5 text-[var(--commerce-green)]" />
                  <h3 className="text-sm font-medium">{asset.label}</h3>
                  <span className="mt-2 inline-block rounded-full bg-white px-2.5 py-1 text-[10px] text-[var(--workspace-muted)]">
                    {asset.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-[var(--workspace-soft)] p-8 text-center">
              <FolderOpen size={28} className="mx-auto mb-4 text-[var(--commerce-green)]" />
              <h3 className="text-sm font-medium">
                {content.dashboard.resources.gatherStartingPoints}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--workspace-muted)]">
                {content.dashboard.resources.gatherStartingPointsDesc}
              </p>
            </div>
          )}
          <div className="mt-6 border-t border-[var(--workspace-line)] pt-4">
            <p className="mb-2 text-[11px] text-[var(--workspace-muted)]">{content.dashboard.resources.contentContact}</p>
            <p className="text-sm leading-relaxed">
              {formatAnswer(model.answers["P10.3"])}
            </p>
          </div>
        </section>
        <section className={panelClass}>
          <h2 className="mb-2 text-base font-medium">{content.dashboard.resources.yourSharedLinks}</h2>
          <p className="mb-5 text-xs text-[var(--workspace-muted)]">
            {content.dashboard.resources.sharedLinksDesc}
          </p>
          {urls.length ? (
            <ul className="divide-y divide-[var(--workspace-line)]">
              {urls.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-4"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--workspace-tint)] text-[var(--workspace-muted)]">
                      <ExternalLink size={16} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium">
                        {item.host}
                      </p>
                      <p className="mt-1 truncate text-[10px] text-[var(--workspace-muted)]">
                        {item.url}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-[var(--workspace-muted)]"
                    />
                    <span className="sr-only">{content.dashboard.resources.opensNewTab}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-xl bg-[var(--workspace-soft)] p-5 text-xs leading-relaxed text-[var(--workspace-muted)]">
              {content.dashboard.resources.noLinksYet}
            </p>
          )}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-[var(--workspace-line)] p-4">
            <ShieldCheck size={19} className="mt-0.5 shrink-0 text-[var(--commerce-green)]" />
            <p className="text-xs leading-relaxed text-[var(--workspace-muted)]">
              {content.dashboard.resources.secureShare}
            </p>
          </div>
        </section>
      </div>
      <section className={`${panelClass} mt-5`}>
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-medium">{content.dashboard.resources.projectFiles}</h2>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[var(--workspace-muted)]">
              {content.dashboard.resources.projectFilesDesc}
            </p>
          </div>
          <span className="rounded-full bg-[var(--workspace-soft)] px-3 py-1.5 text-[10px] text-[var(--workspace-muted)]">
            {documents.length} {documents.length === 1 ? content.dashboard.resources.file : content.dashboard.resources.files}
          </span>
        </div>
        {preview ? (
          <p className="rounded-xl bg-[var(--workspace-soft)] p-5 text-xs leading-relaxed text-[var(--workspace-muted)]">
            {content.dashboard.resources.previewNote}
          </p>
        ) : (
          <DocumentUploader documents={documents} />
        )}
      </section>
    </>
  );
}

function DocumentUploader({
  documents,
}: {
  documents: WorkspaceData["documents"];
}) {
  const generateUploadUrl = useMutation(api.documents.generateUploadUrl);
  const saveUpload = useMutation(api.documents.saveUpload);
  const removeDocument = useMutation(api.documents.removeMine);
  const inputRef = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState<string>(DOCUMENT_CATEGORIES[0]);
  const [description, setDescription] = useState("");
  const [busy, setBusy] = useState(false);
  const [removing, setRemoving] = useState("");
  const [error, setError] = useState("");

  async function upload(files: FileList | null) {
    if (!files?.length || busy) return;
    setBusy(true);
    setError("");
    try {
      for (const file of Array.from(files)) {
        if (file.size > MAX_DOCUMENT_BYTES) {
          throw new Error(
            `${file.name} is larger than ${formatFileSize(MAX_DOCUMENT_BYTES)}.`,
          );
        }
        const { uploadUrl, token } = await generateUploadUrl();
        const response = await fetch(uploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": file.type || "application/octet-stream",
          },
          body: file,
        });
        if (!response.ok) throw new Error(`Could not upload ${file.name}.`);
        const { storageId } = (await response.json()) as {
          storageId: string;
        };
        await saveUpload({
          token,
          storageId: storageId as Id<"_storage">,
          fileName: file.name,
          category,
          description,
        });
      }
      setDescription("");
      if (inputRef.current) inputRef.current.value = "";
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : content.dashboard.resources.uploadError,
      );
    } finally {
      setBusy(false);
    }
  }

  async function remove(id: WorkspaceData["documents"][number]["id"]) {
    if (!window.confirm(content.dashboard.resources.removeConfirm)) return;
    setRemoving(id);
    setError("");
    try {
      await removeDocument({ documentId: id });
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : content.dashboard.resources.removeError,
      );
    } finally {
      setRemoving("");
    }
  }

  return (
    <div>
      <div className="rounded-2xl border border-dashed border-[var(--workspace-line)] bg-[var(--workspace-surface)] p-5">
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_180px]">
          <label className="text-[11px] font-medium text-[var(--workspace-muted)]">
            {content.dashboard.resources.noteForAgency}
            <input
              type="text"
              value={description}
              maxLength={200}
              onChange={(event) => setDescription(event.target.value)}
              placeholder={content.dashboard.resources.notePlaceholder}
              className="mt-1.5 w-full rounded-xl border border-[var(--workspace-line)] bg-white px-3 py-2.5 text-xs text-[var(--workspace-ink)] outline-none"
            />
          </label>
          <label className="text-[11px] font-medium text-[var(--workspace-muted)]">
            {content.dashboard.resources.category}
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="mt-1.5 w-full rounded-xl border border-[var(--workspace-line)] bg-white px-3 py-2.5 text-xs text-[var(--workspace-ink)]"
            >
              {DOCUMENT_CATEGORIES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <input
            ref={inputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.json,.zip,.png,.jpg,.jpeg,.webp,.gif"
            className="sr-only"
            onChange={(event) => void upload(event.target.files)}
            aria-label={content.dashboard.resources.chooseFilesLabel}
          />
          <Button
            type="button"
            variant="outline"
            className="rounded-full bg-white text-xs"
            disabled={busy}
            onClick={() => inputRef.current?.click()}
          >
            <Upload size={14} />
            {busy ? content.dashboard.resources.uploading : content.dashboard.resources.chooseFiles}
          </Button>
          <span className="text-[10px] text-[var(--workspace-muted)]">
            {content.dashboard.resources.fileTypesHint}
            {formatFileSize(MAX_DOCUMENT_BYTES)}
          </span>
        </div>
      </div>
      {error && (
        <p role="alert" className="mt-3 rounded-xl bg-red-50 p-3 text-xs text-red-800">
          {error}
        </p>
      )}
      {documents.length ? (
        <ul className="mt-4 divide-y divide-[var(--workspace-line)]">
          {documents.map((document) => (
            <li key={document.id} className="flex flex-wrap items-center gap-3 py-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--workspace-tint)] text-[var(--commerce-green)]">
                <FileText size={16} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium">{document.fileName}</p>
                <p className="mt-1 text-[10px] text-[var(--workspace-muted)]">
                  {document.category} · {formatFileSize(document.size)} ·{" "}
                  {new Date(document.uploadedAt).toLocaleDateString("en", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  {document.description ? ` · ${document.description}` : ""}
                </p>
              </div>
              <span className="rounded-full bg-[var(--workspace-soft)] px-2.5 py-1 text-[10px] text-[var(--workspace-muted)]">
                {document.status === "needs-update"
                  ? content.dashboard.resources.needsUpdate
                  : document.status.charAt(0).toUpperCase() +
                    document.status.slice(1)}
              </span>
              {document.url && (
                <a
                  href={document.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--workspace-line)] text-[var(--workspace-muted)] hover:text-[var(--workspace-ink)]"
                  aria-label={`Download ${document.fileName}`}
                >
                  <Download size={15} />
                </a>
              )}
              <button
                type="button"
                disabled={removing === document.id}
                onClick={() => void remove(document.id)}
                className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--workspace-line)] text-[var(--workspace-muted)] hover:text-red-700 disabled:opacity-50"
                aria-label={`Remove ${document.fileName}`}
              >
                <Trash2 size={15} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-xs text-[var(--workspace-muted)]">
          {content.dashboard.resources.noFilesYet}
        </p>
      )}
    </div>
  );
}

export function AgreementView({ data }: { data: WorkspaceData }) {
  const engagement = data.engagement;
  return (
    <>
      <ViewHeading
        title={content.dashboard.agreement.title}
        description={content.dashboard.agreement.description}
      />
      {engagement ? (
        <>
          <div className="mb-5 grid gap-4 md:grid-cols-3">
            <section className="rounded-[20px] bg-[var(--workspace-tint)] p-6">
              <p className="text-xs text-[var(--workspace-muted)]">{content.dashboard.agreement.yourEngagement}</p>
              <p className="mt-4 text-3xl font-medium tracking-[-1px]">
                {engagement.plan}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[var(--workspace-muted)]">
                {engagement.summary}
              </p>
            </section>
            <section className="rounded-[20px] bg-[var(--workspace-tint)] p-6">
              <p className="text-xs text-[var(--workspace-muted)]">{content.dashboard.agreement.setupFee}</p>
              <p className="mt-4 text-3xl font-medium tracking-[-1px]">
                <span className="mr-2 text-base">{engagement.currency}</span>
                {engagement.setupFee.toLocaleString()}
              </p>
              <p className="mt-3 text-xs text-[var(--workspace-muted)]">
                {content.dashboard.agreement.asRecorded}
              </p>
            </section>
            <section className="rounded-[20px] bg-[var(--workspace-tint)] p-6">
              <p className="text-xs text-[var(--workspace-muted)]">{content.dashboard.agreement.ongoingFee}</p>
              <p className="mt-4 text-3xl font-medium tracking-[-1px]">
                {engagement.recurringFee !== undefined ? (
                  <>
                    <span className="mr-2 text-base">
                      {engagement.currency}
                    </span>
                    {engagement.recurringFee.toLocaleString()}
                  </>
                ) : (
                  content.dashboard.agreement.notRecorded
                )}
              </p>
              <p className="mt-3 text-xs text-[var(--workspace-muted)]">
                {engagement.recurringFee !== undefined
                  ? content.dashboard.agreement.perMonth
                  : content.dashboard.agreement.ongoingFollows}
              </p>
            </section>
          </div>
          <div className="grid items-start gap-5 xl:grid-cols-[1.3fr_1fr]">
            <section className={panelClass}>
              <h2 className="mb-4 text-base font-medium">{content.dashboard.agreement.whatsIncluded}</h2>
              <ul className="space-y-3">
                {engagement.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                  >
                    <CircleCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-[var(--commerce-green)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <details className="mt-6 border-t border-[var(--workspace-line)] pt-4">
                <summary className="cursor-pointer text-xs font-medium">
                  {content.dashboard.agreement.exclusionsThirdParty}
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-[var(--workspace-muted)]">
                  {engagement.exclusions.join(", ") ||
                    content.dashboard.agreement.seeExclusions}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[var(--workspace-muted)]">
                  {engagement.thirdPartyCosts}
                </p>
              </details>
            </section>
            <section className={panelClass}>
              <h2 className="mb-5 text-base font-medium">
                {content.dashboard.agreement.verificationBilling}
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: content.dashboard.agreement.signedAgreement,
                    verified: engagement.signedAgreementRef,
                  },
                  {
                    label: content.dashboard.agreement.fortyPercentAdvance,
                    verified: engagement.advancePaymentRef,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 text-xs"
                  >
                    <FileText size={17} className="text-[var(--commerce-green)]" />
                    <span className="flex-1">{item.label}</span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] ${item.verified ? "bg-[var(--workspace-tint)] text-[var(--workspace-muted)]" : "bg-[#f3efdc] text-[#74652b]"}`}
                    >
                      {item.verified ? content.dashboard.overview.verified : content.dashboard.overview.pending}
                    </span>
                  </div>
                ))}
              </div>
              <dl className="mt-6 space-y-4 border-t border-[var(--workspace-line)] pt-4 text-xs">
                <div>
                  <dt className="text-[var(--workspace-muted)]">{content.dashboard.agreement.billingName}</dt>
                  <dd className="mt-1.5">
                    {engagement.legalName || content.dashboard.agreement.notRecorded}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--workspace-muted)]">{content.dashboard.agreement.billingEmail}</dt>
                  <dd className="mt-1.5 break-all">
                    {engagement.billingEmail || content.dashboard.agreement.notRecorded}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-[11px] leading-relaxed text-[var(--workspace-muted)]">
                {content.dashboard.agreement.paymentStatusNote}
              </p>
            </section>
          </div>
        </>
      ) : (
        <section
          className={`${panelClass} flex flex-col items-center py-16 text-center`}
        >
          <span className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-[var(--workspace-tint)] text-[var(--workspace-muted)]">
            <FileText size={27} />
          </span>
          <h2 className="text-xl font-medium">{content.dashboard.agreement.agreementComesNext}</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--workspace-muted)]">
            {content.dashboard.agreement.agreementComesNextDesc}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 text-[11px] text-[var(--workspace-muted)]">
            <span className="rounded-full bg-[var(--workspace-soft)] px-3 py-2">
              {content.dashboard.agreement.agreementAwaiting}
            </span>
            <span className="rounded-full bg-[var(--workspace-soft)] px-3 py-2">
              {content.dashboard.agreement.advanceAwaiting}
            </span>
          </div>
        </section>
      )}
    </>
  );
}
