import { BriefcaseBusiness, Building2, CalendarDays, ChartNoAxesCombined, CircleHelp, ClipboardList, Globe2, GraduationCap, HeartHandshake, Layers, Mail, MessageCircle, Monitor, Package, Phone, Rocket, Search, Settings2, ShieldCheck, ShoppingBag, Sparkles, Users, Video, Workflow, Wrench } from "lucide-react";

/** Illustrate recognizable choices; the option text remains the accessible label. */
export function ChoiceIcon({ option }: { option: string }) {
  const text = option.toLowerCase();
  const Icon = /not sure|undecided|not decided|guidance|help|other/.test(text) ? CircleHelp
    : /email/.test(text) ? Mail
    : /phone/.test(text) ? Phone
    : /video/.test(text) ? Video
    : /messaging|chatbot|contact|inquir/.test(text) ? MessageCircle
    : /appointment|book/.test(text) ? CalendarDays
    : /physical|inventory|shipping|goods/.test(text) ? Package
    : /buy|sales|store|commerce/.test(text) ? ShoppingBag
    : /course|learning|digital product/.test(text) ? GraduationCap
    : /research|search/.test(text) ? Search
    : /website|online|audience/.test(text) ? Globe2
    : /application|dashboard|internal/.test(text) ? Monitor
    : /automat|connection|erp|crm/.test(text) ? Workflow
    : /maintenance|repair/.test(text) ? Wrench
    : /report|performance|grow|expanding/.test(text) ? ChartNoAxesCombined
    : /staff|team|people|social|marketplace/.test(text) ? Users
    : /owner|founder|launch|idea/.test(text) ? Rocket
    : /employee|representative|professional|b2b|wholesale/.test(text) ? BriefcaseBusiness
    : /trust|privacy|restrict|licens/.test(text) ? ShieldCheck
    : /service|customer|warm/.test(text) ? HeartHandshake
    : /subscription|membership/.test(text) ? Layers
    : /business|offline|established/.test(text) ? Building2
    : /task|work|approve|track/.test(text) ? ClipboardList
    : /design|creative|bold/.test(text) ? Sparkles
    : Settings2;
  return <span className="ob-choice-icon" aria-hidden="true"><Icon size={21} strokeWidth={1.7} /></span>;
}
