import assert from "node:assert/strict";
import {
  getDashboardModel,
  type WorkspaceData,
} from "../lib/onboarding/dashboard";
import type { Answers } from "../lib/onboarding/types";

const empty: WorkspaceData = {
  draft: null,
  engagement: null,
  pending: [
    "Verify the project or workspace contact email.",
    "Agree the project scope.",
    "Verify the advance.",
  ],
  workspaceReady: false,
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
  draft: { ...draft, status: "submitted", submittedAt: 200 },
  engagement,
  pending: [],
  workspaceReady: true,
});
assert.ok(activated.prerequisites.every((item) => item.verified));
assert.equal(activated.activity.length, 3);
assert.deepEqual(
  activated.activity.map((item) => item.time),
  [300, 200, 100],
  "Activity follows the actual saved timestamps.",
);
assert.equal(activated.workspaceReady, true);
console.log(
  "Dashboard checks passed: empty, partial, conditional routes, follow-ups, resource readiness, verification, and saved activity.",
);
