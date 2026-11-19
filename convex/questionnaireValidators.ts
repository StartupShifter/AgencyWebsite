import { v } from "convex/values";
const state = v.union(v.literal("answered"), v.literal("unknown"), v.literal("not-applicable"), v.literal("deferred"), v.literal("help"));
const strings = v.array(v.string());
const condition = v.object({ questionId: v.string(), includes: strings });
export const questionValidator = v.object({
  id: v.string(), label: v.string(),
  type: v.union(v.literal("text"), v.literal("textarea"), v.literal("email"), v.literal("tel"), v.literal("url"), v.literal("select"), v.literal("multi-select"), v.literal("checkbox"), v.literal("range"), v.literal("date"), v.literal("country-timezone"), v.literal("list"), v.literal("two-lists"), v.literal("assets"), v.literal("budget")),
  required: v.boolean(), options: v.optional(strings), optionLabels: v.optional(v.record(v.string(), v.string())), optionDescriptions: v.optional(v.record(v.string(), v.string())), exclusiveOptions: v.optional(strings),
  placeholder: v.optional(v.string()), help: v.optional(v.string()), why: v.optional(v.string()), feedback: v.optional(v.boolean()), optionalDetail: v.optional(v.boolean()), allowOther: v.optional(v.boolean()), maxSelections: v.optional(v.number()), presets: v.optional(strings),
  condition: v.optional(condition), requiredWhen: v.optional(condition), priority: v.optional(v.boolean()), minimum: v.optional(v.number()), maximum: v.optional(v.number()),
  fields: v.optional(v.array(v.object({ id: v.string(), label: v.string(), type: v.optional(v.union(v.literal("text"), v.literal("email"), v.literal("url"), v.literal("number"), v.literal("date"))), placeholder: v.optional(v.string()), required: v.optional(v.boolean()) }))),
  allowStates: v.optional(v.array(state)), acknowledgement: v.optional(v.union(v.literal("accuracy"), v.literal("privacy"))),
});
export const definitionValidator = v.object({
  layout: v.optional(v.literal("compact")),
  pages: v.array(v.object({ id: v.string(), title: v.string(), description: v.optional(v.string()), kind: v.optional(v.union(v.literal("shared"), v.literal("module"))), questions: v.array(questionValidator) })),
  phases: v.array(v.object({ id: v.string(), title: v.string(), questionIds: strings, placement: v.union(v.literal("before-modules"), v.literal("after-modules")) })),
  rules: v.array(v.object({ id: v.string(), all: v.array(v.object({ questionId: v.optional(v.string()), includes: v.optional(strings), states: v.optional(v.array(state)), except: v.optional(strings), textIncludes: v.optional(strings), moduleId: v.optional(v.string()) })), any: v.array(v.object({ questionId: v.optional(v.string()), includes: v.optional(strings), states: v.optional(v.array(state)), except: v.optional(strings), textIncludes: v.optional(strings), moduleId: v.optional(v.string()) })), modules: strings })),
});
export const assignedQuestionnaireValidator = v.object({ version: v.string(), title: v.string(), definition: definitionValidator, customized: v.boolean() });
