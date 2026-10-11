import assert from "node:assert/strict";
import { getAllowedAnswerStates, SHARED_PAGES, MODULE_PAGES } from "../lib/onboarding/questionnaire.ts";
const answered = value => ({ state: "answered", value });
export function completeFixture(client) {
  const answers = {};
  for (const page of [...SHARED_PAGES, ...MODULE_PAGES]) for (const question of page.questions) {
    if (page.kind === "module") {
      assert.ok(getAllowedAnswerStates(question).includes("help"));
      answers[question.id] = { state: "help", value: "", detail: "Please help us agree this workflow." };
      continue;
    }
    let value;
    if (question.type === "checkbox") value = true;
    else if (question.type === "email") value = client.email;
    else if (question.type === "tel") value = "+12025550123";
    else if (question.type === "url") value = "https://example.test";
    else if (question.type === "date") value = "2027-01-15";
    else if (question.type === "range") value = question.minimum ?? 1;
    else if (question.fields) value = Object.fromEntries(question.fields.map(field => [field.id, field.type === "email" ? client.email : field.type === "url" ? "https://example.test" : `Fixture ${field.label}`]));
    else if (question.type === "select") value = question.options[0];
    else if (question.type === "multi-select") value = [question.options[0]];
    else if (question.type === "assets") value = { Logo: "ready" };
    else if (question.type === "list") value = ["Fixture service"];
    else value = `Fixture response for ${question.id}`;
    answers[question.id] = answered(value);
    if (question.priority) answers[question.id].priority = value[0];
  }
  answers["P01.1"] = answered(client.name);
  answers["P04.1"] = answered(["Project-based services"]);
  answers["P08.1"] = answered(["Website/store/application", "Task automation"]);
  answers["P08.2"] = answered(["Learn/contact"]);
  answers["P11.1"] = answered(["None known"]);
  answers["P11.2"] = answered(["Ordinary contact/order details"]);
  answers["P11.3"] = answered(["None known"]);
  answers["P12.2"] = answered({ currency: "USD", setup: "1000", recurring: "0", advertising: "0" });
  answers["P14.1"] = answered("Matches my agreement");
  answers["P14.2"] = answered({ legalName: client.name, billingEmail: client.email });
  answers["P14.3"] = answered("I believe the agreement is signed and the advance is paid.");
  answers["P15.2"] = { state: "not-applicable", value: "" };
  return answers;
}

