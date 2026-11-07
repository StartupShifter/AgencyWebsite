import assert from "node:assert/strict";
import { getGuidedProgress, getGuidedSteps, getResumeStep } from "../lib/onboarding/guided-flow";
import { getJourney } from "../lib/onboarding/journey";
import { getPages, validatePage, validateSubmission } from "../lib/onboarding/questionnaire";
import type { Answers, Page } from "../lib/onboarding/types";

const answered = (value: string | string[] | boolean | Record<string, string>) => ({ state: "answered" as const, value });
const stepsFor = (answers: Answers = {}, extras: string[] = []) => getGuidedSteps(getPages(answers, extras), answers);
const emptySteps = stepsFor();
assert.equal(new Set(emptySteps.map(step => step.id)).size, emptySteps.length);
const review = emptySteps.findIndex(step => step.id === "review");
assert.equal(emptySteps[review - 1].id, "P16.1");
assert.equal(emptySteps[review + 1].id, "P16.2");
assert.equal(emptySteps.at(-1)?.id, "P16.3");
assert.equal(getGuidedProgress(emptySteps, {}, true).completed, 0, "Untouched optional questions do not count as complete");
assert.equal(getGuidedProgress(emptySteps, {}, true).total, emptySteps.length - 1, "Review is a navigation step, not a question");

const emptyJourney = getJourney(getPages(), emptySteps, {}, true, "P01");
assert.deepEqual(emptyJourney.chapters.map(chapter => chapter.title), ["Your business", "The big picture", "Make it yours", "Ready, set, go"], "A route without modules omits the project-details chapter");
assert.equal(emptyJourney.chapterIndex, 0);
assert.equal(emptyJourney.currentChapter.id, "business");
assert.equal(emptyJourney.chapters.reduce((total, chapter) => total + chapter.total, 0), getGuidedProgress(emptySteps, {}, true).total, "Chapters account for every routed question once and exclude the review step");
assert.ok(emptyJourney.chapters.every(chapter => chapter.completed === 0 && chapter.percent === 0), "Untouched questions cannot make a chapter appear complete");
assert.equal(getJourney(getPages(), emptySteps, {}, true, "P16").currentChapter.id, "ready", "Review and confirmations stay in the final chapter");
assert.equal(getJourney(getPages(), emptySteps, {}, true, "M99").chapterIndex, 0, "A stale current topic has a safe first-chapter fallback");

const contactName = emptySteps.find(step => step.id === "P01.1")!;
assert.deepEqual(validatePage({ ...contactName.page, questions: [contactName.question!] }, { "P01.1": answered("Sample contact") }), {}, "Continue validates the active question without blocking on later questions in the same topic");
assert.ok(validatePage(contactName.page, { "P01.1": answered("Sample contact") })["P01.3"], "The full topic still reports its missing required questions");

const contact: Answers = { "P01.1": answered("Sample contact"), "P01.2": { state: "help", value: "" } };
assert.equal(getResumeStep(stepsFor(contact), "P01", contact, true), "P01.3", "Resume skips valid answers and permitted guidance requests");
const optionalEmpty: Answers = { ...contact, "P01.3": answered("hello@example.test"), "P01.4": answered("") };
assert.equal(getResumeStep(stepsFor(optionalEmpty), "P01", optionalEmpty, true), "P01.4", "An autosaved empty optional control still needs an answer or explicit skip");
assert.equal(getResumeStep(emptySteps, "M03", {}, true), "P01.1", "A saved module removed from the current route has a safe fallback");
assert.equal(getResumeStep(stepsFor(optionalEmpty), "P01", optionalEmpty, true, "P01.2"), "P01.2", "Exact persisted question takes precedence when revisiting answered questions");
assert.equal(getResumeStep(emptySteps, "P01", {}, true, "P15.1"), "P01.1", "A stale or cross-topic saved question falls back safely");
assert.equal(getResumeStep(emptySteps, "P16", {}, true, "review"), "review", "A saved review step can resume exactly");
const invalidEmail: Answers = { ...contact, "P01.3": answered("invalid") };
assert.equal(getResumeStep(stepsFor(invalidEmail), "P01", invalidEmail, true), "P01.3", "Resume finds an invalid answer before later untouched questions");

const help: Answers = { "P01.1": answered("Sample"), "P03.1": { state: "help", value: "" }, "P01.4": { state: "deferred", value: "" } };
assert.equal(getGuidedProgress(stepsFor(help), help, true).completed, 3, "Valid help requests and explicit skips count as completed questions");
const helpJourney = getJourney(getPages(help), stepsFor(help), help, true, "P03");
assert.equal(helpJourney.currentChapter.completed, 3, "Chapter progress counts permitted follow-up states as well as answers");
assert.equal(getJourney(getPages(invalidEmail), stepsFor(invalidEmail), invalidEmail, true, "P01").currentChapter.completed, 2, "Invalid saved answers do not advance chapter completion");
const badAck: Answers = { "P16.2": answered(false), "P16.3": answered(true) };
assert.equal(getGuidedProgress(stepsFor(badAck), badAck, false).completed, 0, "Unchecked accuracy and unavailable privacy do not count as completion");

const route: Answers = { "P08.1": answered(["Website/store/application"]), "M02.3": answered(["Content"]) };
const routeSteps = stepsFor(route);
const routeJourney = getJourney(getPages(route), routeSteps, route, true, "M02");
assert.equal(routeJourney.chapters.length, 5, "Relevant modules add one chapter, rather than a chapter per module");
assert.equal(routeJourney.currentChapter.id, "project-details");
assert.deepEqual(routeJourney.currentChapter.pages.map(page => page.id), getPages(route).filter(page => page.kind === "module").map(page => page.id));
assert.equal(routeJourney.chapters.reduce((total, chapter) => total + chapter.total, 0), getGuidedProgress(routeSteps, route, true).total, "An adaptive route keeps chapter totals aligned with actual visible questions");
assert.ok(routeSteps.some(step => step.id.startsWith("M22.")), "Active replacement details add migration questions");
const changedRoute: Answers = { ...route, "P08.1": answered(["Research/design"]) };
const changedSteps = stepsFor(changedRoute);
assert.ok(!changedSteps.some(step => step.id.startsWith("M01.") || step.id.startsWith("M02.") || step.id.startsWith("M22.")), "Retained inactive answers cannot restore removed workflows");
assert.ok(getGuidedProgress(routeSteps, route, true).total > getGuidedProgress(changedSteps, changedRoute, true).total, "Progress denominator tracks active question routing");
assert.ok(stepsFor(changedRoute, ["M22"]).some(step => step.id.startsWith("M22.")), "An explicitly restored workflow returns to the route");

const syntheticPage: Page = { id: "test", title: "Conditional questions", questions: [
  { id: "test.1", label: "Choose a route", type: "select", required: true, options: ["Show", "Hide"] },
  { id: "test.2", label: "Conditional detail", type: "text", required: true, condition: { questionId: "test.1", includes: ["Show"] } },
] };
assert.deepEqual(getGuidedSteps([syntheticPage], {}).map(step => step.id), ["test.1"]);
assert.deepEqual(getGuidedSteps([syntheticPage], { "test.1": answered("Show") }).map(step => step.id), ["test.1", "test.2"]);
assert.deepEqual(getGuidedSteps([syntheticPage], { "test.1": answered("Hide"), "test.2": answered("Retained") }).map(step => step.id), ["test.1"], "Hidden conditional answers remain outside navigation");

const phone: Answers = { "P01.4": { state: "deferred", value: "" }, "P02.3": answered(["Phone"]) };
const phoneStep = stepsFor(phone).find(step => step.id === "P01.4")!;
assert.ok(validatePage({ ...phoneStep.page, questions: [phoneStep.question!] }, phone)["P01.4"], "A later contact preference can make an earlier question required");
const submissionErrors = validateSubmission({ "P01.1": answered("Sample"), "P01.2": answered("Sample company"), "P01.3": answered("invalid") });
assert.equal(stepsFor().find(step => submissionErrors[step.id])?.id, "P01.3", "Final errors resolve to the first actual question, not its page or review step");
console.log("Guided onboarding checks passed: question order, adaptive routing, conditional visibility/requiredness, saved-page resume, completion progress, privacy and final error targets.");
