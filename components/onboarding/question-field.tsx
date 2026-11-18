"use client";

import { ChevronDown } from "lucide-react";
import { ChoiceIcon } from "./choice-icon";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getAllowedAnswerStates, getOptionLabel, isExclusiveOption } from "@/lib/onboarding/engine";
import type { Answer, AnswerState, AnswerValue, Question } from "@/lib/onboarding/types";

const stateLabels: Record<AnswerState, string> = { answered: "Answer now", unknown: "Not sure yet", "not-applicable": "Not applicable", deferred: "Provide later", help: "Request help" };
const countries = ["Australia", "Bangladesh", "Brazil", "Canada", "China", "France", "Germany", "India", "Indonesia", "Ireland", "Italy", "Japan", "Kenya", "Malaysia", "Mexico", "Nepal", "Netherlands", "New Zealand", "Nigeria", "Pakistan", "Philippines", "Saudi Arabia", "Singapore", "South Africa", "Spain", "Sri Lanka", "United Arab Emirates", "United Kingdom", "United States"];
const timezones = Intl.supportedValuesOf("timeZone");

export function QuestionField({ question: q, answer, error, onChange, guided = false }: { guided?: boolean; question: Question; answer?: Answer; error?: string; onChange: (answer: Answer) => void }) {
  const [search, setSearch] = useState("");
  const [detailsOpen, setDetailsOpen] = useState(Boolean(answer?.detail));
  const value = answer?.value ?? "";
  const state = answer?.state ?? "answered";
  const selected = Array.isArray(value) ? value : [];
  const record: Record<string, string> = typeof value === "object" && !Array.isArray(value) ? value : {};
  const update = (next: AnswerValue) => onChange({ ...answer, state: "answered", value: next });
  const updateRecord = (key: string, next: string) => {
    if (q.type === "assets") {
      const updated = { ...record };
      if (!next) delete updated[key];
      else if (["Nothing yet", "Not sure"].includes(key)) { update({ [key]: next }); return; }
      else { delete updated["Nothing yet"]; delete updated["Not sure"]; updated[key] = next; }
      update(updated); return;
    }
    update({ ...record, [key]: next });
  };
  const inputProps = { id: q.id, "aria-label": q.label, "aria-invalid": Boolean(error), "aria-describedby": `${q.id}-help${error ? ` ${q.id}-error` : ""}`, className: "ob-input", maxLength: 6000 };
  const optionLabel = (option: string) => getOptionLabel(q, option);
  const options = q.allowOther && !q.options?.includes("Other") ? [...(q.options ?? []), "Other"] : q.options ?? [];
  const previousChoices = ["select", "multi-select"].includes(q.type)
    ? (Array.isArray(value) ? value : typeof value === "string" && value ? [value] : []).filter(item => !options.includes(item) && !q.presets?.includes(item))
    : [];
  const stateLabel = (state: AnswerState) => q.feedback && state === "not-applicable" ? "Prefer not to answer" : stateLabels[state];
  const customChoiceSelected = value === "Other" || selected.includes("Other");
  const allowedStates: AnswerState[] = ["answered", ...getAllowedAnswerStates(q)];
  const setState = (next: AnswerState) => onChange({ ...answer, state: next, value: answer?.value ?? "" });
  const choose = (option: string) => {
    if (q.type === "select") update(option);
    else {
      const next = selected.includes(option) ? selected.filter(s => s !== option) : isExclusiveOption(q, option) ? [option] : [...selected.filter(s => !isExclusiveOption(q, s)), option];
      if (!q.maxSelections || next.length <= q.maxSelections) onChange({ ...answer, state: "answered", value: next, ...(answer?.priority && !next.includes(answer.priority) ? { priority: next[0] ?? "" } : {}) });
    }
  };
  const answerActions = <div className="ob-answer-actions">{allowedStates.filter(s => s !== "answered").map(s => <button type="button" key={s} aria-pressed={state === s} className={`ob-chip ${state === s ? "ob-chip-selected" : ""}`} onClick={() => setState(state === s ? "answered" : s)}>{stateLabel(s)}</button>)}{state !== "answered" && <button className="ob-chip" type="button" onClick={() => setState("answered")}>Answer now</button>}</div>;
  return <fieldset id={`question-${q.id}`} tabIndex={-1} className="ob-question" aria-invalid={Boolean(error)} aria-describedby={inputProps["aria-describedby"]}>
    <legend className={`ob-question-label ${guided ? "ob-question-label-guided" : ""}`}><span>{q.label}</span><span className="ob-required">{q.required ? "Required" : "Optional"}</span></legend>
    {guided && <div className="ob-answer-hint"><span>{q.required ? "Required" : "Optional"}</span>{q.options?.length ? <span>{q.type === "assets" ? "Set each item’s status" : q.type === "select" ? "Choose one" : q.maxSelections ? `Choose up to ${q.maxSelections}` : "Choose all that apply"}</span> : null}</div>}
    <p id={`${q.id}-help`} className="ob-help">{q.help ?? (q.maxSelections ? `Choose up to ${q.maxSelections}.` : q.required ? (q.options?.length ? "Pick what fits best. You can add context below." : q.type === "text" ? "A short answer is all we need. You can add more detail later." : q.type === "textarea" ? "Everyday words are perfect. A few sentences are enough." : "Share what you know. You can ask for guidance below.") : "Skip this if you prefer to provide it later.")}</p>
    {q.why && <details className="ob-detail ob-why"><summary>Why we ask</summary><p className="ob-help">{q.why}</p></details>}
    {previousChoices.length > 0 && <p className="ob-help" role="status">Your saved choice: {previousChoices.map(optionLabel).join(", ")}. These choices were removed from the updated form. Your answer is retained; review the available choices before confirming.</p>}
    {state === "answered" && <>
      {q.acknowledgement ? <label className="ob-choice ob-confirm"><input id={q.id} type="checkbox" checked={value === true} onChange={e => update(e.target.checked)} aria-invalid={Boolean(error)} /><span>{q.acknowledgement === "accuracy" ? "I confirm these details and my authority to share them." : "I have reviewed the onboarding privacy information."}</span></label>
        : q.type === "checkbox" ? <label className="ob-choice"><input id={q.id} type="checkbox" checked={value === true} onChange={e => update(e.target.checked)} /><span>Yes, I confirm</span></label>
        : q.fields?.length && q.type !== "country-timezone" && q.type !== "two-lists" && !(q.id === "P15.2" && q.type === "list") ? <div className="ob-fields">{q.fields.map(field => <label key={field.id} className="ob-subfield" htmlFor={`${q.id}-${field.id}`}><span>{field.label}{field.required ? " (required)" : " (optional)"}</span><Input id={`${q.id}-${field.id}`} className="ob-input" type={field.type ?? "text"} value={record[field.id] ?? ""} maxLength={6000} placeholder={field.placeholder} onChange={e => updateRecord(field.id, e.target.value)} aria-invalid={Boolean(error)} /></label>)}</div>
        : q.type === "assets" && q.options?.length ? <div className="ob-asset-list">{q.options.map(option => <label className="ob-asset-row" key={option}><span>{optionLabel(option)}</span><select value={record[option] ?? ""} aria-label={`Readiness for ${optionLabel(option)}`} onChange={e => updateRecord(option, e.target.value)}><option value="">Choose status</option>{["Nothing yet", "Not sure"].includes(option) ? <option value="not-available">{option}</option> : <><option value="ready">Ready</option><option value="needs-updating">Needs updating</option><option value="needs-help">Need help</option></>}</select></label>)}</div>
        : q.id === "P15.2" && q.type === "list" ? <InvitationFields question={q} record={record} update={update} />
        : q.options?.length && q.type !== "two-lists" ? <div>{options.length > 10 && <Input className="ob-input ob-search" aria-label={`Search options for ${q.label}`} placeholder="Search options…" value={search} onChange={e => setSearch(e.target.value)} />}<div className="ob-choices">{options.filter(option => `${optionLabel(option)} ${q.optionDescriptions?.[option] ?? ""}`.toLowerCase().includes(search.toLowerCase())).map(option => {
          const checked = q.type === "select" ? value === option : selected.includes(option);
          return <label key={option} className={`ob-choice ${checked ? "ob-choice-selected" : ""}`}><input type={q.type === "select" ? "radio" : "checkbox"} name={q.id} value={option} checked={checked} onChange={() => choose(option)} aria-describedby={`${q.id}-help${error ? ` ${q.id}-error` : ""}`} aria-invalid={Boolean(error)} disabled={!checked && !isExclusiveOption(q, option) && q.type !== "select" && Boolean(q.maxSelections && selected.length >= q.maxSelections)} />{guided && <ChoiceIcon option={option} />}<span className="ob-choice-copy"><span>{optionLabel(option)}</span>{q.optionDescriptions?.[option] && <small>{q.optionDescriptions[option]}</small>}</span></label>;
        })}{options.filter(option => `${optionLabel(option)} ${q.optionDescriptions?.[option] ?? ""}`.toLowerCase().includes(search.toLowerCase())).length === 0 && <p className="ob-help" role="status">No matching choices. Try another word or clear your search.</p>}{q.allowOther && customChoiceSelected && <label className="ob-subfield ob-other"><span>Something else</span><Input className="ob-input" value={answer?.detail ?? ""} placeholder="Add your own option or explain" maxLength={6000} onChange={e => onChange({ ...answer, state: "answered", value, detail: e.target.value })} /></label>}</div></div>
        : q.type === "country-timezone" ? <div className="ob-fields"><label className="ob-subfield" htmlFor={`${q.id}-country`}><span>{q.fields?.find(field => field.id === "country")?.label ?? "Country or region"}</span><Input className="ob-input" id={`${q.id}-country`} list="ob-countries" value={record.country ?? ""} placeholder={q.fields?.find(field => field.id === "country")?.placeholder ?? "Search or enter a country / region"} onChange={e => updateRecord("country", e.target.value)} /><datalist id="ob-countries">{countries.map(country => <option key={country} value={country} />)}</datalist></label><label className="ob-subfield" htmlFor={`${q.id}-timezone`}><span>{q.fields?.find(field => field.id === "timezone")?.label ?? "Timezone"}</span><Input className="ob-input" id={`${q.id}-timezone`} list="ob-timezones" value={record.timezone ?? ""} placeholder={q.fields?.find(field => field.id === "timezone")?.placeholder ?? "Search a timezone, e.g. Asia/Kolkata"} onChange={e => updateRecord("timezone", e.target.value)} /><datalist id="ob-timezones">{timezones.map(zone => <option key={zone} value={zone} />)}</datalist></label></div>
        : q.type === "two-lists" ? <div className="ob-fields">{(q.fields ?? [{ id: "now", label: "For the first launch" }, { id: "later", label: "Can wait until later" }]).map(({ id: key, label, placeholder }) => <label className="ob-subfield" key={key} htmlFor={`${q.id}-${key}`}><span>{label}</span>{q.options?.length ? <select className="ob-input" aria-label={`Quick choices for ${label}`} value={q.options.includes(record[key] ?? "") ? record[key] : ""} onChange={e => updateRecord(key, e.target.value)}><option value="">Choose an option or describe below</option>{q.options.map(option => <option key={option} value={option}>{optionLabel(option)}</option>)}</select> : null}<Textarea className="ob-input" id={`${q.id}-${key}`} rows={3} maxLength={6000} value={record[key] ?? ""} placeholder={placeholder ?? (key === "now" ? "Start with up to three priorities" : "Ideas for a future phase")} onChange={e => updateRecord(key, e.target.value)} /></label>)}</div>
        : q.type === "range" ? <div className="ob-range"><output htmlFor={q.id}>{typeof value === "number" ? value : "Choose an approximate value"}</output><input {...inputProps} type="range" min={q.minimum ?? 0} max={q.maximum ?? 1000} step={1} value={typeof value === "number" ? value : q.minimum ?? 0} onChange={e => update(Number(e.target.value))} /><Input className="ob-input" type="number" min={q.minimum ?? 0} max={q.maximum ?? 1000} value={typeof value === "number" ? value : ""} aria-label="Enter an exact value instead" onChange={e => update(e.target.value === "" ? "" : Number(e.target.value))} /></div>
        : q.type === "textarea" ? <Textarea {...inputProps} value={typeof value === "string" ? value : ""} rows={3} placeholder={q.placeholder ?? "A few sentences are enough"} onChange={e => update(e.target.value)} />
        : q.type === "list" ? <div className="ob-list">{(Array.isArray(value) && value.length ? value : [""]).map((item, index, list) => <div key={index} className="ob-list-row"><Input className="ob-input" value={item} maxLength={6000} aria-label={`${q.label} — item ${index + 1}`} placeholder={q.placeholder ?? "One example or document link"} onChange={e => update(list.map((s, i) => i === index ? e.target.value : s))} /><Button type="button" variant="ghost" aria-label={`Remove item ${index + 1}`} onClick={() => update(list.filter((_, i) => i !== index))}>Remove</Button></div>)}<Button type="button" variant="outline" disabled={selected.length >= (q.maxSelections ?? 10)} onClick={() => update([...(selected.length ? selected : [""]), ""])}>+ Add another</Button></div>
        : <Input {...inputProps} type={["email", "tel", "url", "date"].includes(q.type) ? q.type : "text"} value={typeof value === "string" ? value : ""} placeholder={q.placeholder} autoComplete={q.id === "P01.1" ? "name" : q.type === "email" ? "email" : q.type === "tel" ? "tel" : undefined} onChange={e => update(e.target.value)} />}
      {q.presets?.length ? <div className="ob-presets" aria-label="Quick answers">{q.presets.map(preset => <button key={preset} type="button" className={`ob-chip ${value === preset ? "ob-chip-selected" : ""}`} onClick={() => update(preset)}>{preset}</button>)}</div> : null}
      {q.priority && selected.length > 0 ? <label className="ob-subfield"><span>Your first priority</span><select className="ob-input" value={answer?.priority ?? ""} onChange={e => onChange({ ...answer!, priority: e.target.value })}><option value="">Choose your main priority</option>{selected.map(s => <option key={s} value={s}>{optionLabel(s)}</option>)}</select></label> : null}
    </>}
    {allowedStates.length > 1 && (guided ? <details className="ob-answer-options">
      <summary>{state === "answered" ? "Not sure? See other ways to answer" : `${stateLabel(state)} · Change answer`}<ChevronDown size={14} aria-hidden="true" /></summary>
      {answerActions}
    </details> : answerActions)}

    {!q.acknowledgement && !(state === "answered" && q.allowOther && customChoiceSelected) && <details className="ob-detail" open={detailsOpen} onToggle={e => setDetailsOpen(e.currentTarget.open)}><summary>{state === "deferred" || state === "help" ? "Add a contact, owner, or follow-up note" : "Add a short note or link (optional)"}</summary><Textarea className="ob-input" rows={2} value={answer?.detail ?? ""} aria-label={`Additional note for ${q.label}`} maxLength={6000} placeholder="A document link, clarification, colleague’s name, or availability" onChange={e => onChange({ ...answer, state, value, detail: e.target.value })} /></details>}
    {error && <p className="ob-error" id={`${q.id}-error`} role="alert">{error}</p>}
  </fieldset>;
}

function InvitationFields({ question, record, update }: { question: Question; record: Record<string, string>; update: (value: AnswerValue) => void }) {
  const indexes = [...new Set(["", ...Object.keys(record).map(key => key.match(/^(?:name|email|role|access)(\d*)$/)?.[1]).filter((index): index is string => index !== undefined)])];
  const add = () => { const next = Array.from({ length: 9 }, (_, i) => String(i + 2)).find(index => !indexes.includes(index)); if (!next) return; update({ ...record, [`name${next}`]: "", [`email${next}`]: "", [`role${next}`]: "", [`access${next}`]: "" }); };
  return <div>{indexes.map((index, position) => <div key={index} className="ob-person"><p>Workspace member {position + 1}</p><div className="ob-fields">{question.fields?.map(field => <label key={field.id} className="ob-subfield" htmlFor={`${question.id}-${field.id}${index}`}><span>{field.label}</span>{field.id === "access" ? <select className="ob-input" id={`${question.id}-${field.id}${index}`} value={record[`${field.id}${index}`] ?? ""} onChange={e => update({ ...record, [`${field.id}${index}`]: e.target.value })}><option value="">Choose requested access</option><option>View project</option><option>Review and comment</option><option>Supply project inputs</option><option>Need guidance</option></select> : <Input className="ob-input" id={`${question.id}-${field.id}${index}`} type={field.type ?? "text"} value={record[`${field.id}${index}`] ?? ""} maxLength={6000} onChange={e => update({ ...record, [`${field.id}${index}`]: e.target.value })} />}</label>)}</div>{index && <Button type="button" variant="ghost" onClick={() => update(Object.fromEntries(Object.entries(record).filter(([key]) => !["name", "email", "role", "access"].some(field => key === `${field}${index}`))))}>Remove member</Button>}</div>)}<Button type="button" variant="outline" disabled={indexes.length >= 10} onClick={add}>+ Add another person</Button></div>;
}
