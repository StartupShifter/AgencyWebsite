import { ConvexError } from "convex/values";
import type { Doc } from "./_generated/dataModel";
import type { MutationCtx } from "./_generated/server";
import { createQuestionnaire, validateAnswerShape } from "../lib/onboarding/engine";
import { sameDefinitionValue } from "../lib/onboarding/definition-validation";
import { getGuidedSteps } from "../lib/onboarding/guided-flow";

/** One transaction archives the previous brief, preserves stable IDs, and moves its assignment. */
export async function assignClientVersion(
  ctx: MutationCtx,
  ownerId: string,
  base: Doc<"questionnaireVersions">,
  next: Doc<"questionnaireVersions">,
  actor: string,
  reason: string,
) {
  if (base._id === next._id) return;
  const now = Date.now();
  const existing = await ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", ownerId)).unique();
  if (existing) {
    const questions = new Map(next.definition.pages.flatMap(page => page.questions.map(question => [question.id, question] as const)));
    const answers = Object.fromEntries(Object.entries(existing.answers).filter(([id]) => questions.has(id)));
    const priorIds = new Set(base.definition.pages.flatMap(page => page.questions.map(question => question.id)));
    for (const [id, answer] of Object.entries(existing.answers)) {
      if (questions.has(id)) continue;
      const retained = await ctx.db.query("questionnaireRetainedAnswers").withIndex("by_authUserId_questionId", q => q.eq("authUserId", ownerId).eq("questionId", id)).unique();
      const value = { authUserId: ownerId, questionId: id, answer, version: base.version, archivedAt: now };
      if (retained) await ctx.db.replace(retained._id, value);
      else await ctx.db.insert("questionnaireRetainedAnswers", value);
    }
    // Reintroducing a stable question restores its last saved value, even after many releases.
    for (const id of questions.keys()) {
      if (priorIds.has(id) || answers[id] || ["P16.2", "P16.3"].includes(id)) continue;
      const retained = await ctx.db.query("questionnaireRetainedAnswers").withIndex("by_authUserId_questionId", q => q.eq("authUserId", ownerId).eq("questionId", id)).unique();
      if (retained) answers[id] = retained.answer;
    }
    for (const [id, answer] of Object.entries(answers)) {
      if (validateAnswerShape(questions.get(id)!, answer)) {
        throw new ConvexError(`${id} has a saved answer incompatible with its new control. Keep the original control or add a new question with a new ID. No client answers were changed.`);
      }
    }
    const changed = !sameDefinitionValue(base.definition, next.definition);
    // An accuracy confirmation applies to the old brief; project data remains prefilled.
    if (changed) delete answers["P16.2"];
    const extraModules = existing.extraModules.filter(id => next.definition.pages.some(page => page.id === id && page.kind === "module"));
    const engine = createQuestionnaire(next.definition);
    const steps = getGuidedSteps(engine.getPages(answers, extraModules), answers);
    const pending = engine.validateSubmission(answers, extraModules);
    const position = steps.find(step => step.question && (!answers[step.id] || pending[step.id])) ?? steps.find(step => step.id === "review") ?? steps[0];
    await ctx.db.insert("questionnaireHistory", {
      authUserId: ownerId, version: base.version, answers: existing.answers,
      extraModules: existing.extraModules, status: existing.status,
      ...(existing.submittedAt ? { submittedAt: existing.submittedAt } : {}),
      privacyVersion: existing.privacyVersion, archivedAt: now, actor, reason,
    });
    await ctx.db.patch(existing._id, {
      version: next.version, answers, extraModules,
      ...(changed ? { status: "draft" as const, submittedAt: undefined, currentPage: position.page.id, currentQuestion: position.id } : {}),
      updatedAt: now,
    });
    await ctx.db.insert("projectActivity", {
      authUserId: ownerId, type: "brief", actor: "agency", title: "Onboarding questionnaire updated",
      detail: `${reason} Your saved answers are carried forward. Review any new questions and confirm your brief.`, view: "brief", createdAt: now,
    });
  }
  const assignment = await ctx.db.query("questionnaireAssignments").withIndex("by_owner", q => q.eq("ownerKind", "client").eq("ownerId", ownerId)).unique();
  const value = { ownerKind: "client" as const, ownerId, versionId: next._id, assignedAt: now, assignedBy: actor };
  if (assignment) await ctx.db.replace(assignment._id, value);
  else await ctx.db.insert("questionnaireAssignments", value);
}
