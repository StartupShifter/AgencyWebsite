import { jsPDF } from "jspdf";
import type { WorkspaceData } from "./dashboard";
import { getProjectReport, projectReportFilename, REPORT_ANSWER_LABELS } from "./project-report";
import type { QuestionType } from "./types";

const C = {
  ink: "#153d31", green: "#217653", mint: "#dcece3", pale: "#f3f7f3",
  line: "#dce3dc", muted: "#59675e", sand: "#f4ecd9", amber: "#946921",
  red: "#a64036", white: "#ffffff", grey: "#b6c1b9",
};
const M = 44;
const W = 507;
const BOTTOM = 780;
const colors = { answered: C.green, pending: C.muted, attention: C.red, later: C.amber, review: C.muted };
const stageColors = { complete: C.green, "in-progress": C.green, blocked: C.red, upcoming: C.muted };
const questionTypes: Record<QuestionType, string> = {
  text: "Short answer", textarea: "Detailed answer", email: "Email address", tel: "Phone number", url: "Website link",
  select: "Single choice", "multi-select": "Multiple choices", checkbox: "Confirmation", range: "Rating", date: "Date",
  "country-timezone": "Country & time zone", list: "List", "two-lists": "Paired lists", assets: "Asset readiness", budget: "Budget",
};
const clean = (s: string) => s.replace(/[\u2010-\u2015]/g, "-").replace(/\r\n?/g, "\n").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "");
const date = (value?: number | string | null) => {
  if (value == null) return "Not recorded";
  // Date-only targets must retain their calendar day in every client timezone.
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? String(value) : parsed.toLocaleDateString("en", { day: "numeric", month: "short", year: "numeric" });
};

class ReportLayout {
  y = 90;
  section = "Project report";
  constructor(readonly doc: jsPDF) {}
  style(size = 10, bold = false, color = C.ink) {
    this.doc.setFont("NotoSans", bold ? "bold" : "normal").setFontSize(size).setTextColor(color);
  }
  text(value: string, x: number, y: number, size = 10, bold = false, color = C.ink) {
    this.style(size, bold, color);
    this.doc.text(clean(value), x, y);
  }
  page(title: string) {
    this.doc.addPage();
    this.section = title;
    this.style(21, true);
    const lines = this.doc.splitTextToSize(clean(title), W) as string[];
    this.doc.text(lines, M, 68, { lineHeightFactor: 1.3 });
    this.y = 94 + (lines.length - 1) * 27.3;
  }
  ensure(height: number) {
    if (this.y + height > BOTTOM) this.page(`${this.section.replace(/ \(continued\)$/, "")} (continued)`);
  }
  paragraph(value: string, options: { size?: number; bold?: boolean; color?: string; indent?: number; gap?: number } = {}) {
    const { size = 10, bold = false, color = C.ink, indent = 0, gap = 8 } = options;
    this.style(size, bold, color);
    const lines = this.doc.splitTextToSize(clean(value || "Not recorded"), W - indent) as string[];
    for (const line of lines) {
      this.ensure(size * 1.5);
      this.text(line, M + indent, this.y, size, bold, color);
      this.y += size * 1.5;
    }
    this.y += gap;
  }
  heading(title: string) {
    this.ensure(72);
    this.y += 8;
    this.paragraph(title, { size: 13, bold: true, gap: 9 });
  }
  rule() {
    if (this.y + 16 > BOTTOM) {
      this.y = BOTTOM;
      return;
    }
    this.doc.setDrawColor(C.line).setLineWidth(0.6).line(M, this.y, M + W, this.y);
    this.y += 16;
  }
  bar(label: string, percent: number, caption: string, color = C.green) {
    this.style(10, true);
    const labels = this.doc.splitTextToSize(clean(label), W - 55) as string[];
    const height = labels.length * 15 + 36;
    this.ensure(height);
    for (const line of labels) {
      this.text(line, M, this.y, 10, true);
      this.y += 15;
    }
    this.text(`${Math.round(percent)}%`, M + W - 32, this.y - 15, 10, true, color);
    this.doc.setFillColor(C.mint).roundedRect(M, this.y - 4, W, 7, 3, 3, "F");
    if (percent > 0) this.doc.setFillColor(color).roundedRect(M, this.y - 4, W * Math.min(100, Math.max(0, percent)) / 100, 7, 3, 3, "F");
    this.y += 18;
    this.paragraph(caption, { size: 8, color: C.muted, gap: 12 });
  }
  ring(x: number, y: number, percent: number | null, label: string, caption: string) {
    this.doc.setLineWidth(8);
    for (let i = 0; i < 120; i++) {
      const start = (i / 120) * Math.PI * 2 - Math.PI / 2;
      const end = ((i + 1.1) / 120) * Math.PI * 2 - Math.PI / 2;
      this.doc.setDrawColor(percent !== null && i / 120 < percent / 100 ? C.green : C.mint);
      this.doc.line(x + Math.cos(start) * 36, y + Math.sin(start) * 36, x + Math.cos(end) * 36, y + Math.sin(end) * 36);
    }
    this.style(20, true);
    this.doc.text(percent === null ? "N/A" : `${percent}%`, x, y + 7, { align: "center" });
    this.style(11, true);
    this.doc.text(label, x, y + 62, { align: "center" });
    this.style(8, false, C.muted);
    this.doc.text(this.doc.splitTextToSize(caption, 210), x, y + 79, { align: "center" });
  }
}

export type ProjectReportOptions = {
  regularFont: string;
  boldFont: string;
  generatedAt?: Date;
};

/** Vector charts and selectable text keep the download crisp at any zoom level. */
export function createProjectReportPdf(data: WorkspaceData, options: ProjectReportOptions) {
  const report = getProjectReport(data);
  const generatedAt = options.generatedAt ?? new Date();
  const doc = new jsPDF({ unit: "pt", format: "a4", compress: true, putOnlyUsedFonts: true });
  for (const [style, font] of [["normal", options.regularFont], ["bold", options.boldFont]]) {
    doc.addFileToVFS(`NotoSans-${style}.ttf`, font);
    doc.addFont(`NotoSans-${style}.ttf`, "NotoSans", style);
  }
  doc.setProperties({ title: `${report.businessName} - Project progress report`, subject: "Onboarding, requirements and application delivery", author: "Starter Shifter", creator: "Starter Shifter client workspace" });
  doc.setCreationDate(generatedAt);
  doc.setLanguage("en");
  const p = new ReportLayout(doc);
  const sections: { title: string; detail: string; page: number }[] = [];
  const section = (title: string, detail: string) => {
    p.page(title);
    const entry = { title, detail, page: doc.getNumberOfPages() };
    sections.push(entry);
    return doc.outline.add(null, title, { pageNumber: entry.page });
  };

  p.y = 89;
  p.paragraph("Your project, in focus.", { size: 28, bold: true, gap: 10 });
  p.paragraph(report.businessName, { size: 19, gap: 8 });
  if (report.project?.name && report.project.name !== report.businessName) p.paragraph(report.project.name, { color: C.muted });
  p.paragraph(`Progress report | ${date(generatedAt.getTime())}`, { size: 9, color: C.muted, gap: 18 });
  p.paragraph(report.buildStatus, { size: 15, bold: true });
  p.paragraph(`Project status: ${report.projectStatus}. ${report.build ? `${report.build.progress}% of the build phase recorded complete.` : "Your agency has not shared a build-stage update yet."}`, { color: C.muted, gap: 18 });
  p.ensure(180);
  p.ring(M + 117, p.y + 40, report.briefProgress.percent, "Onboarding answers", `${report.briefProgress.answered} of ${report.briefProgress.total} current questions answered`);
  p.ring(M + 384, p.y + 40, report.project?.progressPercent ?? null, "Project delivery", "Latest overall percentage recorded by your agency");
  p.y += 166;
  p.rule();
  p.heading("Your next step");
  p.paragraph(report.project?.nextStepTitle || (report.submitted ? "Confirm remaining project prerequisites" : "Complete your project brief"), { bold: true });
  p.paragraph(report.project?.nextStepDetail || (report.workspaceReady ? "Your prerequisites are verified. Your agency can arrange the agreed next steps." : data.pending.join("\n") || "Review and submit your saved answers."), { color: C.muted });
  if (report.project?.summary) p.paragraph(report.project.summary);
  p.paragraph(`Brief: ${report.submitted ? "Submitted" : "Draft"} | Last saved: ${date(data.draft?.updatedAt)} | Submitted: ${date(data.draft?.submittedAt)}`, { size: 8, color: C.muted });
  p.paragraph(`Delivery updated: ${date(report.project?.updatedAt)} | Start: ${date(report.project?.startDate)} | Target: ${date(report.project?.targetDate)}`, { size: 8, color: C.muted });
  p.paragraph("This is a snapshot of your saved brief and recorded agency updates. Onboarding completion and delivery progress are measured separately.", { size: 8, color: C.muted });

  // Reserve a stable guide page before creating the destinations.
  p.page("Explore your report");
  const guidePage = doc.getNumberOfPages();

  section("Onboarding at a glance", "Answer coverage, follow-ups and progress in every onboarding phase.");
  p.paragraph(`Questionnaire: ${data.questionnaire.title} | Assigned version: ${data.questionnaire.version}`, { size: 9, color: C.muted });
  p.paragraph("These charts cover the questions relevant to your current brief. Deferred answers remain open; a completed brief does not mean the application is built.", { color: C.muted });
  p.heading("Answer coverage");
  const counts = [
    ["Answered", report.briefProgress.answered, C.green],
    ["Not answered", report.briefProgress.missing, C.grey],
    ["Needs attention", report.briefProgress.attention, C.red],
    ["For follow-up", report.briefProgress.later, C.amber],
  ] as const;
  let chartX = M;
  for (const [, count, color] of counts) {
    const width = report.briefProgress.total ? W * count / report.briefProgress.total : 0;
    if (width) doc.setFillColor(color).rect(chartX, p.y, width, 18, "F");
    chartX += width;
  }
  p.y += 40;
  for (const [label, count, color] of counts) p.paragraph(`${label}: ${count}`, { size: 9, color: color === C.grey ? C.muted : color, gap: 4 });
  p.heading("Progress by onboarding phase");
  const phaseLinks: { page: number; y: number; phaseId: string }[] = [];
  for (const phase of report.phases) {
    p.ensure(100);
    phaseLinks.push({ page: doc.getNumberOfPages(), y: p.y - 11, phaseId: phase.id });
    p.bar(phase.title, phase.resolvedPercent, `${phase.answered}/${phase.total} answered | ${phase.missing} missing | ${phase.attention} need attention | ${phase.later} for follow-up`);
  }

  section("Requirements & readiness", "Selected work, approved scope, dependencies and open questions.");
  p.heading("What you have asked us to build");
  p.paragraph(report.selectedWork || "No work selected yet.");
  p.heading("Recorded project scope");
  p.paragraph(data.engagement?.summary || "Your agency has not recorded an engagement summary yet.");
  for (const item of data.engagement?.scope ?? []) p.paragraph(`- ${item}`);
  if (!data.engagement?.scope.length) p.paragraph("Approved deliverables have not been recorded yet.", { color: C.muted });
  if (data.engagement?.exclusions.length) {
    p.heading("Outside the agreed scope");
    for (const item of data.engagement.exclusions) p.paragraph(`- ${item}`);
  }
  if (data.engagement?.thirdPartyCosts) {
    p.heading("Third-party costs");
    p.paragraph(data.engagement.thirdPartyCosts);
  }
  p.paragraph("Scope is shown as recorded. Individual requirement delivery percentages are not tracked; delivery progress is shown by project and stage in the next section.", { size: 9, color: C.muted });
  p.heading("Project activation checklist");
  const verified = report.prerequisites.filter((item) => item.verified).length;
  p.bar("Verified prerequisites", report.prerequisites.length ? Math.round(100 * verified / report.prerequisites.length) : 0, `${verified} of ${report.prerequisites.length} verified`);
  for (const item of report.prerequisites) {
    p.ensure(55);
    p.paragraph(`${item.verified ? "Verified" : "Pending"} | ${item.label}`, { bold: true, color: item.verified ? C.green : C.amber, gap: 4 });
    p.paragraph(item.detail, { size: 9, color: C.muted });
  }
  p.heading("Open questions & follow-ups");
  if (!report.openItems.length) p.paragraph("No follow-ups flagged in your brief. Unanswered questions are listed in the answer record.");
  for (const item of report.openItems) {
    p.ensure(65);
    p.paragraph(`${item.questionId} | ${item.label}`, { bold: true, gap: 5 });
    p.paragraph(item.detail || "Discuss this answer with your agency.", { size: 9, color: C.muted });
  }

  section("Application delivery", "Current build status, stage chart and the detail behind each phase.");
  p.paragraph(report.buildStatus, { size: 16, bold: true });
  if (report.build) p.paragraph(`Build phase: ${report.stageLabel(report.build.status)} | ${report.build.progress}% | Updated ${date(report.build.updatedAt)}`, { color: C.muted });
  if (report.project) p.paragraph(`Overall delivery: ${report.project.progressPercent}% | ${report.projectStatus}`, { bold: true });
  p.paragraph("Stage percentages and overall delivery are separate agency records. Upcoming stages have not been marked started; no schedule or progress is estimated from your onboarding answers.", { size: 9, color: C.muted });
  if (!report.stages.length) p.paragraph("No delivery stages have been shared yet. Your application build and completion dates are not confirmed.");
  if (report.stages.length) p.heading("Delivery progress by stage");
  for (const stage of report.stages) p.bar(stage.title, stage.progress, `${report.stageLabel(stage.status)} | Updated ${date(stage.updatedAt)}`, stageColors[stage.status]);
  for (const [index, stage] of report.stages.entries()) {
    p.heading(`${String(index + 1).padStart(2, "0")}  ${stage.title}`);
    p.paragraph(`${report.stageLabel(stage.status)} | ${stage.progress}% recorded complete`, { bold: true, color: stageColors[stage.status] });
    p.paragraph(stage.description);
    p.paragraph(stage.note || "No additional stage notes recorded.", { color: C.muted });
    p.paragraph(`Started: ${date(stage.startedAt)} | Completed: ${date(stage.completedAt)} | Target: ${date(stage.targetDate)}`, { size: 8, color: C.muted });
    p.rule();
  }

  section("Project activity", "A dated record of the milestones and updates shared in your dashboard.");
  p.paragraph("Recorded updates, shown from earliest to latest. Dates reflect saved events; a continuous delivery history cannot be inferred between them.", { size: 9, color: C.muted });
  if (!report.activity.length) p.paragraph("No project updates have been recorded yet.");
  for (const item of report.activity.toReversed()) {
    p.ensure(80);
    p.paragraph(date(item.time), { size: 9, color: C.green, bold: true, gap: 4 });
    p.paragraph(item.title, { size: 12, bold: true, gap: 5 });
    p.paragraph(item.detail, { size: 10, color: C.muted });
    p.rule();
  }

  const briefOutline = section("Questions & answers", "Every current question and its saved response, grouped by onboarding phase.");
  p.paragraph("Each entry includes the question type, answer status, saved response, and any validation issue. Saved details and first priorities are included. Questions not yet answered are shown explicitly.", { color: C.muted });
  const phasePages = new Map<string, number>();
  for (const phase of report.phases) {
    p.page(phase.title);
    const phasePage = doc.getNumberOfPages();
    phasePages.set(phase.id, phasePage);
    doc.outline.add(briefOutline, phase.title, { pageNumber: phasePage });
    p.paragraph(`${phase.answered} of ${phase.total} answered | ${phase.resolvedPercent}% complete`, { color: C.green, bold: true });
    for (const item of phase.questions) {
      p.ensure(100);
      p.paragraph(`${item.id} | ${item.page.title} | ${questionTypes[item.question.type]} | ${item.required ? "Required" : "Optional"}`, { size: 8, color: C.muted, gap: 5 });
      p.paragraph(item.question.label, { size: 11, bold: true, gap: 6 });
      p.paragraph(REPORT_ANSWER_LABELS[item.status], { size: 8, color: colors[item.status], bold: true, gap: 6 });
      p.paragraph(item.answer, { size: 10 });
      if (item.error) p.paragraph(`Needs attention: ${item.error}`, { size: 9, color: C.red });
      p.rule();
    }
  }
  if (report.optionalAnswers.length) {
    section("Optional extra details", "Additional context supplied voluntarily, outside main brief completion.");
    for (const item of report.optionalAnswers) {
      p.ensure(75);
      p.paragraph(`${item.id} | ${item.topic}`, { size: 8, color: C.muted });
      p.paragraph(item.label, { bold: true });
      p.paragraph(item.answer);
      p.rule();
    }
  }
  if (report.savedOutsidePath.length) {
    section("Earlier saved answers", "Responses retained from questions outside the current brief.");
    p.paragraph("These responses were saved earlier and are outside your current questionnaire path. They do not contribute to current completion or confirm agreed scope.", { color: C.muted });
    for (const item of report.savedOutsidePath) {
      p.ensure(75);
      p.paragraph(`${item.id} | ${item.topic}`, { size: 8, color: C.muted });
      p.paragraph(item.label, { bold: true });
      p.paragraph(item.answer);
      p.rule();
    }
  }

  // Link the phase chart to its full answer record after page destinations exist.
  for (const link of phaseLinks) {
    doc.setPage(link.page);
    const destination = phasePages.get(link.phaseId);
    if (destination) doc.link(M, link.y, W, 44, { pageNumber: destination });
  }
  doc.setPage(guidePage);
  p.y = 95;
  p.paragraph("Click a section to jump to it. Use the PDF bookmarks or the Report guide link on any page to find your way back.", { color: C.muted, gap: 22 });
  for (const [index, entry] of sections.entries()) {
    const top = p.y - 12;
    p.paragraph(`${String(index + 1).padStart(2, "0")}  ${entry.title}`, { size: 13, bold: true, gap: 6 });
    p.paragraph(`${entry.detail}  Page ${entry.page}`, { size: 9, color: C.muted, gap: 15 });
    doc.link(M, top, W, p.y - top, { pageNumber: entry.page });
  }
  p.paragraph("The onboarding phase bars also link directly to their questions and answers. Charts remain sharp when zoomed or printed, and the report text can be searched and selected.", { size: 9, color: C.muted });

  const pages = doc.getNumberOfPages();
  for (let number = 1; number <= pages; number++) {
    doc.setPage(number);
    p.text("Starter Shifter", M, 29, 9, true, C.green);
    p.text("Client project report", 435, 29, 8, false, C.muted);
    doc.setDrawColor(C.line).setLineWidth(0.6).line(M, 40, M + W, 40);
    doc.line(M, 799, M + W, 799);
    p.text("Private project snapshot", M, 818, 8, false, C.muted);
    p.text("Report guide", 281, 818, 8, false, C.green);
    doc.link(281, 807, 65, 15, { pageNumber: guidePage });
    p.text(`${number} / ${pages}`, 516, 818, 8, false, C.muted);
  }
  return { doc, filename: projectReportFilename(report.businessName, generatedAt) };
}

async function loadFont(path: string) {
  const response = await fetch(path);
  if (!response.ok) throw new Error("The report font could not be loaded.");
  const bytes = new Uint8Array(await response.arrayBuffer());
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 8192) binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
  return binary;
}

export async function downloadProjectReport(data: WorkspaceData) {
  const [regularFont, boldFont] = await Promise.all([
    loadFont("/fonts/NotoSans-Regular.ttf"), loadFont("/fonts/NotoSans-Bold.ttf"),
  ]);
  const { doc, filename } = createProjectReportPdf(data, { regularFont, boldFont });
  // A local blob download keeps brief answers on the client's device.
  const url = URL.createObjectURL(doc.output("blob"));
  const link = document.createElement("a");
  try {
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
  } finally {
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }
}
