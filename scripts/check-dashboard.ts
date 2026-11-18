import { DEFAULT_DEFINITION } from "../lib/onboarding/default-definition";
import assert from "node:assert/strict";
import {
  getDashboardModel,
  getBriefQuestionHref,
  type WorkspaceData,
} from "../lib/onboarding/dashboard";
import type { Answers, QuestionnaireDefinition } from "../lib/onboarding/types";

const empty: WorkspaceData = {
  questionnaire: {
    version: "test",
    title: "Test questionnaire",
    definition: DEFAULT_DEFINITION,
    customized: false,
  },
  draft: null,
  engagement: null,
  pending: [
    "Verify the project or workspace contact email.",
    "Agree the project scope.",
    "Verify the advance.",
  ],
  workspaceReady: false,
  project: null,
  stages: [],
  activityLog: [],
  documents: [],
};
const blank = getDashboardModel(empty);
assert.equal(blank.progress.completed, 0);
assert.equal(blank.prerequisites.filter((item) => item.verified).length, 0);
assert.equal(blank.activity.length, 0);
assert.equal(blank.assets.length, 0);

const answered = (
  value: string | string[] | boolean | Record<string, string>,
) => ({ state: "answered" as const, value });
const answers: Answers = {
  "P01.1": answered("Sample contact"),
  "P01.2": answered("Use my personal name"),
  "P01.3": answered("sample@example.test"),
  "P08.1": answered(["Website/store/application"]),
  "P10.1": answered({ Logo: "ready", "Website copy": "needs-help" }),
  "P03.1": { state: "help", value: "", detail: "Discuss positioning" },
};
const draft: NonNullable<WorkspaceData["draft"]> = {
  version: "test",
  answers,
  extraModules: [],
  currentPage: "P01",
  currentQuestion: "P01.1",
  status: "draft",
  updatedAt: 100,
  submittedAt: null,
  privacyVersion: "test",
};
const partial = getDashboardModel({ ...empty, draft });
assert.equal(
  partial.businessName,
  "Sample contact",
  "Resolve the personal-name preset in the workspace label.",
);
assert.ok(partial.topics.some((topic) => topic.id === "M01"));
assert.ok(partial.openItems.some((item) => item.questionId === "P03.1"));
assert.deepEqual(partial.assets, [
  { label: "Logo", status: "Ready" },
  { label: "Website copy", status: "Needs help" },
]);
assert.equal(partial.prerequisites[0].verified, false);
assert.equal(partial.prerequisites[1].verified, false);
assert.equal(partial.activity[0].time, 100);

const switched = getDashboardModel({
  ...empty,
  draft: {
    ...draft,
    answers: {
      ...answers,
      "P08.1": answered(["Research/design"]),
      "M01.1": answered("Retained inactive answer"),
    },
  },
});
assert.ok(
  !switched.topics.some((topic) => topic.id === "M01"),
  "Inactive saved requirements must stay outside the current brief.",
);
assert.ok(switched.progress.total < partial.progress.total);

const engagement: NonNullable<WorkspaceData["engagement"]> = {
  authUserId: "test",
  plan: "Recorded plan",
  currency: "USD",
  setupFee: 1000,
  summary: "Sample engagement",
  scope: ["Recorded deliverable"],
  exclusions: [],
  thirdPartyCosts: "As agreed",
  signedAgreementRef: "test-agreement",
  advancePaymentRef: "test-advance",
  dependencies: [{ label: "Content access", owner: "Client", verified: true }],
  recurringFee: undefined,
  legalName: undefined,
  billingEmail: undefined,
  identityVerificationRef: undefined,
  verifiedEmails: undefined,
  updatedAt: 300,
};
const activated = getDashboardModel({
  questionnaire: empty.questionnaire,
  draft: { ...draft, status: "submitted", submittedAt: 200 },
  engagement,
  pending: [],
  workspaceReady: true,
  project: null,
  stages: [],
  activityLog: [],
  documents: [],
});
assert.ok(activated.prerequisites.every((item) => item.verified));
assert.equal(activated.activity.length, 3);
assert.deepEqual(
  activated.activity.map((item) => item.time),
  [300, 200, 100],
  "Activity follows the actual saved timestamps.",
);
assert.equal(activated.workspaceReady, true);

// Exercise visible missing, invalid, deferred and resolved answers independently.
const definition: QuestionnaireDefinition = {
  pages: [
    {
      id: "P01",
      title: "Project basics",
      questions: [
        { id: "P01.1", label: "Name", type: "text", required: true },
        { id: "P01.2", label: "Email", type: "email", required: true },
        { id: "P01.3", label: "Context", type: "text", required: false },
        { id: "P01.4", label: "Website", type: "url", required: false },
        {
          id: "P01.5",
          label: "Additional detail",
          type: "text",
          required: false,
          condition: { questionId: "P01.1", includes: ["Reveal detail"] },
        },
      ],
    },
  ],
  phases: [
    {
      id: "basics",
      title: "Project basics",
      questionIds: ["P01.1", "P01.2", "P01.3", "P01.4", "P01.5"],
      placement: "before-modules",
    },
  ],
  rules: [],
};
const mixed = getDashboardModel({
  ...empty,
  questionnaire: { ...empty.questionnaire, definition },
  draft: {
    ...draft,
    answers: {
      "P01.1": answered("Sample name"),
      "P01.2": answered("invalid-email"),
      "P01.3": { state: "deferred", value: "", detail: "Will provide later" },
      "P01.5": answered("Retained hidden answer"),
    },
  },
});
assert.deepEqual(mixed.briefProgress, {
  answered: 1,
  attention: 1,
  later: 1,
  missing: 1,
  total: 4,
  percent: 25,
});
assert.equal(mixed.completedPhases, 0);
assert.equal(
  mixed.phases[0].nextActionQuestion,
  "P01.2",
  "Invalid answers are actionable even when they have a saved value.",
);
assert.ok(
  mixed.phases[0].questions.find((question) => question.id === "P01.2")?.error,
);
assert.equal(
  mixed.phases[0].questions.some((question) => question.id === "P01.5"),
  false,
  "Hidden answers never inflate completion.",
);
const direct = new URL(
  getBriefQuestionHref("/onboarding", mixed.phases[0], "P01.3"),
  "http://localhost",
);
assert.equal(direct.searchParams.get("question"), "P01.3");
assert.equal(direct.searchParams.get("mode"), "question");
assert.equal(direct.searchParams.get("returnTo"), "brief");
assert.equal(
  new URL(
    getBriefQuestionHref(
      "/onboarding/preview",
      mixed.phases[0],
      undefined,
      "phase",
    ),
    "http://localhost",
  ).searchParams.get("mode"),
  "phase",
);
const resolvedAnswers: Answers = {
  "P01.1": answered("Sample name"),
  "P01.2": answered("sample@example.test"),
  "P01.3": answered("Complete context"),
  "P01.4": { state: "not-applicable", value: "" },
};
const resolved = getDashboardModel({
  ...empty,
  questionnaire: { ...empty.questionnaire, definition },
  draft: { ...draft, answers: resolvedAnswers },
});
assert.equal(resolved.briefProgress.percent, 100);
assert.equal(resolved.phases[0].resolvedPercent, 100);
assert.equal(resolved.completedPhases, 1);
assert.equal(
  resolved.submitted,
  false,
  "100% answered remains separate from submission.",
);
const laterOnly = getDashboardModel({
  ...empty,
  questionnaire: { ...empty.questionnaire, definition },
  draft: {
    ...draft,
    answers: { ...resolvedAnswers, "P01.3": { state: "help", value: "" } },
  },
});
assert.equal(
  laterOnly.progress.percent,
  100,
  "An allowed help request can complete a questionnaire step.",
);
assert.equal(
  laterOnly.briefProgress.percent,
  75,
  "A help request cannot appear as a fully answered brief.",
);
assert.equal(laterOnly.nextPhase?.nextActionQuestion, "P01.3");
assert.equal(laterOnly.completedPhases, 0);
console.log(
  "Dashboard checks passed: empty, partial, conditional routes, missing/invalid/deferred answers, exact question links, 100% completion vs submission, resource readiness, verification, and saved activity.",
);
