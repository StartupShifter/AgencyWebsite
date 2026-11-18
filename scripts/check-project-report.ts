import assert from "node:assert/strict";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { DEFAULT_DEFINITION } from "../lib/onboarding/default-definition";
import { getProjectReport, projectReportFilename } from "../lib/onboarding/project-report";
import { createProjectReportPdf } from "../lib/onboarding/project-report-pdf";
import type { WorkspaceData } from "../lib/onboarding/dashboard";
import { completeFixture } from "./onboarding-fixture.mjs";
import type { Answers } from "../lib/onboarding/types";

const empty: WorkspaceData = {
  questionnaire: { version: "report-test-v1", title: "Client assigned brief", definition: DEFAULT_DEFINITION, customized: true },
  draft: null, project: null, engagement: null, stages: [], activityLog: [], documents: [],
  workspaceReady: false, pending: ["Confirm the agreed scope."],
};
const generatedAt = new Date("2026-11-18T09:00:00.000Z");
const fontOptions = {
  generatedAt,
  regularFont: readFileSync(new URL("../public/fonts/NotoSans-Regular.ttf", import.meta.url), "binary"),
  boldFont: readFileSync(new URL("../public/fonts/NotoSans-Bold.ttf", import.meta.url), "binary"),
};
assert.equal(getProjectReport(empty).buildStatus, "Build status not recorded");
assert.equal(getProjectReport(empty).briefProgress.answered, 0);
assert.equal(projectReportFilename("Élan / Studio", generatedAt), "elan-studio-project-report-2026-11-18.pdf");
assert.equal(projectReportFilename("商店", generatedAt), "starter-shifter-project-report-2026-11-18.pdf");

const time = generatedAt.getTime();
const build: WorkspaceData["stages"][number] = {
  stageId: "build", order: 4, title: "Build & connect", description: "Build the agreed customer application and connections.",
  status: "in-progress", progress: 55, startedAt: time - 86400000, completedAt: null,
  targetDate: "2026-12-15", note: "Storefront is complete; account flows are in progress.", visible: true, updatedAt: time,
};
const populated: WorkspaceData = {
  ...empty,
  draft: {
    version: "report-test-v1",
    answers: {
      ...completeFixture({ name: "Élan Studio", email: "report@example.test" }) as unknown as Answers,
      "P01.2": { state: "answered", value: "Élan Studio" },
      "P01.3": { state: "answered", value: "invalid-email" },
      "P03.1": { state: "answered", value: "A commerce business supporting independent makers. ".repeat(220) + "END OF LONG ANSWER" },
      "P03.2": { state: "deferred", value: "", detail: "Discuss with our team." },
      "P16.1": { state: "answered", value: "Saved final response." },
    },
    extraModules: DEFAULT_DEFINITION.pages.filter((page) => page.kind === "module").map((page) => page.id),
    currentPage: "P16", currentQuestion: "review", status: "draft", updatedAt: time, submittedAt: null, privacyVersion: "test",
  },
  project: {
    name: "Élan customer application", summary: "A customer storefront and operations workspace.",
    status: "in-progress", currentStage: "build", progressPercent: 60,
    nextStepTitle: "Review account flows", nextStepDetail: "Share feedback on the saved account screens.",
    startDate: "2026-11-01", targetDate: "2026-12-20", updatedAt: time,
  },
  stages: [build, { ...build, stageId: "research", order: 1, title: "Research & direction", status: "complete", progress: 100, note: "Market and competitor review shared.", completedAt: time - 86400000 }, { ...build, stageId: "private", visible: false, title: "PRIVATE STAGE MUST NOT EXPORT" }],
  activityLog: [
    { id: "event-2" as WorkspaceData["activityLog"][number]["id"], type: "stage", actor: "agency", title: "Build started", detail: "Account flows underway.", view: "journey", createdAt: time },
    { id: "event-1" as WorkspaceData["activityLog"][number]["id"], type: "stage", actor: "agency", title: "Research shared", detail: "Direction agreed.", view: "journey", createdAt: time - 86400000 },
  ],
  engagement: {
    authUserId: "fixture", plan: "Agreed plan", currency: "USD", setupFee: 2500,
    summary: "Recorded client engagement", scope: ["Customer storefront", "Account and order workflows"],
    exclusions: ["Unagreed custom integrations"], thirdPartyCosts: "Hosting and domains paid by the client.",
    signedAgreementRef: "fixture-agreement", advancePaymentRef: "fixture-advance", dependencies: [{ label: "Product photos", owner: "Client", verified: false }], updatedAt: time,
    recurringFee: undefined, legalName: undefined, billingEmail: undefined, identityVerificationRef: undefined, verifiedEmails: undefined,
  },
};

for (const [status, expected] of [
  ["upcoming", "Build has not started"], ["in-progress", "Your application is being built"],
  ["blocked", "Build needs attention"], ["complete", "Build phase complete"],
] as const) assert.equal(getProjectReport({ ...populated, stages: [{ ...build, status }] }).buildStatus, expected);
assert.equal(getProjectReport({ ...populated, stages: [{ ...build, visible: false }] }).buildStatus, "Build status not recorded");
assert.equal(getProjectReport({ ...populated, stages: [] }).project?.progressPercent, 60, "Keep the agency's overall progress when stage details are absent.");
const report = getProjectReport(populated);
assert.deepEqual(report.stages.map((stage) => stage.stageId), ["research", "build"]);
assert.ok(report.briefProgress.attention > 0, "Invalid saved responses are flagged.");
assert.ok(report.briefProgress.later > 0, "Deferred and help responses are not counted as answered.");
assert.equal(report.phases.flatMap((phase) => phase.questions).find((item) => item.id === "P03.1")?.answer.endsWith("END OF LONG ANSWER"), true);

const reassigned: WorkspaceData = {
  ...populated,
  questionnaire: { ...empty.questionnaire, definition: {
    pages: [{ id: "P01", title: "Custom client topic", questions: [
      { id: "P01.1", type: "text", label: "Custom owner question", required: true },
      { id: "P01.2", type: "text", label: "Conditional old question", required: false, condition: { questionId: "P01.1", includes: ["Show"] } },
    ] }],
    phases: [{ id: "custom", title: "Custom client phase", questionIds: ["P01.1", "P01.2"], placement: "before-modules" }], rules: [],
  } },
};
const custom = getProjectReport(reassigned);
assert.equal(custom.phases[0].title, "Custom client phase");
assert.equal(custom.phases.flatMap((phase) => phase.questions).length, 1);
assert.equal(custom.savedOutsidePath[0].label, "Conditional old question", "Retain earlier answers outside the current path in an appendix.");

const cases = { empty, populated, custom: reassigned };
for (const [name, fixture] of Object.entries(cases)) {
  const { doc, filename } = createProjectReportPdf(fixture, fontOptions);
  assert.match(filename, /\.pdf$/);
  assert.ok(doc.getNumberOfPages() > 5);
  const bytes = doc.output("arraybuffer");
  assert.equal(Buffer.from(bytes).subarray(0, 5).toString(), "%PDF-");
  if (process.argv[2]) {
    mkdirSync(process.argv[2], { recursive: true });
    writeFileSync(join(process.argv[2], `${name}-project-report.pdf`), Buffer.from(bytes));
  }
  console.log(`PASS ${name}: ${doc.getNumberOfPages()} PDF pages; ${bytes.byteLength} bytes`);
}
console.log("Project report checks passed: all build statuses, hidden stages, assigned questionnaire, empty records, missing/invalid/deferred answers, retained answers, and long-answer pagination.");
