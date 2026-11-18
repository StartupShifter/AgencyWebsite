import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { QuestionField } from "../components/onboarding/question-field";
import { getPageById } from "../lib/onboarding/questionnaire";

const question = getPageById("P08")!.questions[0];
const render = (value: string[]) => renderToStaticMarkup(<QuestionField guided question={question} answer={{ state: "answered", value }} onChange={() => {}} />);
const html = render(["ERP/CRM or other connections"]);
assert.ok(html.includes("Connect sales, stock, or business tools"), "Clients see plain labels for stored service values");
assert.ok(html.includes('value="ERP/CRM or other connections"'), "Friendly labels must not alter stored choices");
assert.ok(html.includes("Why we ask"));
assert.ok(html.includes(question.why!.replaceAll("&", "&amp;")), "Decision context appears in its disclosure");
assert.ok(html.includes("Move information between the tools your team uses."), "Choices can explain unfamiliar concepts");
const catalog = getPageById("M03")!.questions.find(q => q.id === "M03.5")!;
const catalogHtml = renderToStaticMarkup(<QuestionField question={catalog} answer={{ state: "answered", value: ["Other"], detail: "By compatibility" }} onChange={() => {}} />);
assert.equal((catalogHtml.match(/value="Other"/g) ?? []).length, 1, "Exactly one custom option is offered");
assert.ok(catalogHtml.includes('value="By compatibility"'), "Custom option details survive rendering");
const messages = getPageById("M16")!.questions.find(q => q.id === "M16.5")!;
const fullHtml = renderToStaticMarkup(<QuestionField question={messages} answer={{ state: "answered", value: messages.options!.slice(0, 3) }} onChange={() => {}} />);
const guidanceInput = fullHtml.match(/<input[^>]*value="Help me choose"[^>]*>/)?.[0];
assert.ok(guidanceInput && !guidanceInput.includes("disabled"), "A client can switch to guidance even at the selection limit");
const markets = getPageById("P04")!.questions[2];
const marketHtml = renderToStaticMarkup(<QuestionField question={markets} onChange={() => {}} />);
assert.ok(marketHtml.includes("India, mainly Mumbai and Pune"), "Market fields use market-specific examples");
assert.ok(!marketHtml.includes("Start with up to three priorities"));
console.log("Question field render checks passed: readable labels, stable values, explanations, custom choices, guidance at selection limits, and contextual examples.");

const feedback = getPageById("P16")!.questions.find(q => q.id === "P16.4")!;
const feedbackHtml = renderToStaticMarkup(<QuestionField guided question={feedback} onChange={() => {}} />);
assert.ok(feedbackHtml.includes("Prefer not to answer"), "Optional feedback offers a clear refusal choice");
assert.ok(feedbackHtml.includes("Very dissatisfied") && feedbackHtml.includes("Very satisfied"), "Feedback has balanced endpoints");

const retiredHtml = renderToStaticMarkup(<QuestionField question={{ id: "Pcustom.1", label: "An updated choice", type: "select", required: true, options: ["New choice"] }} answer={{ state: "answered", value: "Previously chosen option" }} onChange={() => {}} />);
assert.ok(retiredHtml.includes("Your saved choice: Previously chosen option"), "A removed option remains visible for review instead of appearing erased");
