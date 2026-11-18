import { ConvexError, v } from "convex/values";
import { internalMutation } from "./_generated/server";
import { DEFAULT_DELIVERY_STAGES } from "../lib/onboarding/delivery";
import type { Answer } from "../lib/onboarding/types";

/**
 * Local preview data only. Run from the Convex CLI after setting
 * ALLOW_DEMO_DATA=true on a development deployment:
 *
 *   bunx convex run demo:seed
 *
 * Never enable this variable on the production deployment.
 */

const DAY = 24 * 60 * 60 * 1000;

function ans(value: Answer["value"], detail?: string): Answer {
  return { state: "answered", value, ...(detail ? { detail } : {}) };
}

function state(
  kind: "unknown" | "deferred" | "help" | "not-applicable",
  detail?: string,
): Answer {
  return { state: kind, value: "", ...(detail ? { detail } : {}) };
}

const northstarAnswers = {
  "P01.1": ans("Aanya Mehta"),
  "P01.2": ans("Northstar Studio"),
  "P01.3": ans("aanya@northstar.studio"),
  "P01.4": ans("+91 98765 43210"),
  "P02.1": ans("Owner/founder"),
  "P02.2": ans({ country: "India", timezone: "Asia/Kolkata (IST)" }),
  "P02.3": ans(["Email", "Dashboard when available", "Video meeting"]),
  "P03.1": ans(
    "Northstar Studio is a small interior design practice working with homeowners and boutique cafés across Bengaluru. We handle concept, sourcing, and installation.",
  ),
  "P03.2": ans(["Construction and property", "Creative and media"]),
  "P03.3": ans("Already online"),
  "P04.1": ans(["Project-based services", "Appointments"]),
  "P04.2": ans(["Full-home interiors", "Café fit-outs", "Design consultation"]),
  "P04.3": ans({ now: "Bengaluru", later: "Hyderabad and online consultations" }),
  "P05.1": ans(
    "Homeowners renovating a first apartment and café owners opening a second location.",
  ),
  "P05.2": ans("Different people", "The homeowner often decides with family."),
  "P05.3": ans(
    "People need help because the process is opaque. They hesitate because they cannot compare scope or timelines.",
  ),
  "P06.1": ans(
    "Most enquiries arrive through Instagram and WhatsApp. We lose track and repeat the same questions.",
  ),
  "P06.2": ans(["Qualified inquiries", "Customer experience", "Time spent on manual work"]),
  "P06.3": ans(
    "Receive 12 qualified enquiries a month and cut first-response time to one working day within 90 days.",
  ),
  "P07.1": ans(["https://instagram.com/northstarstudio", "https://northstar.studio"]),
  "P07.2": ans(
    "Instagram DM → discovery call → site visit → proposal → design fee → concept → sourcing → install.",
  ),
  "P07.3": ans(
    "The discovery call notes are scattered between WhatsApp and a notebook. Proposals take two days to prepare.",
  ),
  "P08.1": ans(["Website/store/application", "Task automation", "Performance/reporting"]),
  "P08.2": ans(["Learn/contact", "Request a quote", "Book"]),
  "P08.3": ans({
    now: "A clear services page and an enquiry form.\nA simple project tracker.",
    later: "Client login and automated proposals.",
  }),
  "P09.1": ans(["Local interior designers on Instagram", "Doing nothing / DIY"]),
  "P09.2": ans(
    "Clients choose us for calm, practical spaces and a hands-on process. We want to show the process clearly.",
  ),
  "P09.3": ans(["Saved Instagram highlights", "Six recent client testimonials"]),
  "P10.1": ans({
    Logo: "ready",
    "Photos/video": "needs-updating",
    "Product/service information": "needs-updating",
    "Website copy": "needs-help",
  }),
  "P10.2": ans(["Warm and approachable", "Calm and minimal", "Premium and refined"]),
  "P10.3": ans("Aanya and studio manager Rhea", "Shared Drive folder; replies within two days."),
  "P11.1": ans(["None known"]),
  "P11.2": ans(["Ordinary contact/order details", "Different user roles"]),
  "P11.3": ans(["Multiple languages", "Mobile-only use"]),
  "P12.1": ans("2027-02-15", "Before the spring café openings."),
  "P12.2": ans({ currency: "INR", setup: "150000", recurring: "15000", advertising: "0" }),
  "P12.3": ans(["Staff capacity", "Content", "Approvals"]),
  "P13.1": ans("Aanya Mehta"),
  "P13.2": ans(["Rhea (studio manager)", "One external brand consultant"]),
  "P13.3": ans(["Me/my team", "Agency for agreed work"]),
  "P14.1": ans("Matches my agreement"),
  "P14.2": ans({ legalName: "Northstar Studio LLP", billingEmail: "accounts@northstar.studio" }),
  "P14.3": ans("No blockers. The advance is scheduled for this week."),
  "P15.1": ans("aanya@northstar.studio"),
  "P15.2": ans({
    name: "Rhea Kapoor",
    email: "rhea@northstar.studio",
    role: "Studio manager",
    access: "Project updates",
  }),
  "P15.3": ans("Ready to share securely"),
  "P16.1": ans("We prefer a short weekly update instead of a long monthly report."),
  "P16.2": { state: "answered", value: true },
  "P16.3": { state: "answered", value: true },
} satisfies Record<string, Answer>;

export const seed = internalMutation({
  args: {},
  returns: v.array(v.string()),
  handler: async (ctx) => {
    if (process.env.ALLOW_DEMO_DATA !== "true") {
      throw new ConvexError(
        "Demo seeding is disabled. Set ALLOW_DEMO_DATA=true on a development deployment.",
      );
    }
    const now = Date.now();
    const created: string[] = [];

    const northstarId = "demo_northstar_studio";
    if (
      await ctx.db
        .query("onboarding")
        .withIndex("by_authUserId", (q) => q.eq("authUserId", northstarId))
        .unique()
    ) {
      return ["Demo records already exist."];
    }

    await ctx.db.insert("onboarding", {
      authUserId: northstarId,
      version: "2026-10-11.v1",
      answers: northstarAnswers,
      extraModules: [],
      currentPage: "P16",
      currentQuestion: null,
      status: "submitted",
      updatedAt: now - 2 * DAY,
      submittedAt: now - 2 * DAY,
      privacyVersion: "2026-10-11.v1",
    });
    await ctx.db.insert("engagements", {
      authUserId: northstarId,
      summary: "Pro plan: marketing site, enquiry workflow, and a lightweight project tracker.",
      scope: ["Marketing website", "Enquiry workflow", "Project tracker", "Monthly care"],
      plan: "Pro",
      currency: "INR",
      setupFee: 150000,
      recurringFee: 15000,
      exclusions: ["Paid advertising management", "Photography production"],
      thirdPartyCosts: "Domains, email hosting, and any paid tools are billed separately.",
      legalName: "Northstar Studio LLP",
      billingEmail: "accounts@northstar.studio",
      signedAgreementRef: "AG-2026-014",
      advancePaymentRef: "ADV-2026-014",
      identityVerificationRef: "KYC-2026-014",
      verifiedEmails: ["aanya@northstar.studio", "rhea@northstar.studio"],
      dependencies: [
        { label: "Brand photography", owner: "Aanya", verified: true },
        { label: "Final service copy", owner: "Rhea", verified: false },
        { label: "Domain access", owner: "Aanya", verified: true },
      ],
      updatedAt: now - 6 * DAY,
    });
    await ctx.db.insert("projects", {
      authUserId: northstarId,
      name: "Northstar Studio website",
      summary:
        "A calm, editorial site that explains the studio's process and turns enquiries into structured project briefs.",
      status: "in-progress",
      currentStage: "design",
      progressPercent: 58,
      nextStepTitle: "Review the design direction",
      nextStepDetail:
        "Aanya and Rhea review the homepage and services direction by Friday. Comments are consolidated in one document.",
      startDate: "2026-11-02",
      targetDate: "2027-02-15",
      updatedAt: now - 1 * DAY,
    });
    for (const [order, stage] of DEFAULT_DELIVERY_STAGES.entries()) {
      const progress = [100, 100, 100, 45, 0, 0][order] ?? 0;
      const status =
        progress === 100 ? "complete" : progress > 0 ? "in-progress" : "upcoming";
      await ctx.db.insert("projectStages", {
        authUserId: northstarId,
        stageId: stage.stageId,
        order,
        title: stage.title,
        description: stage.description,
        status,
        progress,
        startedAt: status === "upcoming" ? null : now - (6 - order) * DAY,
        completedAt: status === "complete" ? now - (5 - order) * DAY : null,
        targetDate: ["2026-11-08", "2026-11-15", "2026-12-01", "2026-12-20", null, "2027-02-10"][order] ?? null,
        note:
          order === 3
            ? "First direction shared. Waiting on consolidated feedback."
            : order === 1
              ? "Agreement, advance, and identity checks are complete."
              : "",
        visible: true,
        updatedAt: now - 1 * DAY,
      });
    }
    const northstarActivity = [
      ["stage", "Design direction shared", "Homepage, services, and enquiry flow are ready for review.", "agency", -1],
      ["stage", "Research & direction completed", "Audience interviews and competitor review are saved.", "agency", -7],
      ["engagement", "Agreement updated", "Pro plan · Scope and billing record edited", "agency", -9],
      ["document", "Document uploaded", "northstar-brand-assets.zip", "client", -11],
      ["brief", "Brief submitted", "Project details and prerequisites are ready for review.", "client", -12],
    ] as const;
    for (const [type, title, detail, actor, days] of northstarActivity) {
      await ctx.db.insert("projectActivity", {
        authUserId: northstarId,
        type,
        title,
        detail,
        actor,
        view: "journey",
        createdAt: now + days * DAY,
      });
    }
    created.push(northstarId);

    const harborId = "demo_harbor_dental";
    await ctx.db.insert("onboarding", {
      authUserId: harborId,
      version: "2026-10-11.v1",
      answers: {
        "P01.1": ans("Dr. Maya Rao"),
        "P01.2": ans("Harbor Dental Care"),
        "P01.3": ans("maya@harbordental.in"),
        "P02.1": ans("Owner/founder"),
        "P02.2": ans({ country: "India", timezone: "Asia/Kolkata (IST)" }),
        "P02.3": ans(["Email", "Phone"]),
        "P03.1": ans(
          "A two-clinic dental practice in Kochi focused on preventive care and family dentistry.",
        ),
        "P03.2": ans(["Health and wellbeing"]),
        "P03.3": ans("Operating mainly offline"),
        "P04.1": ans(["Appointments"]),
        "P04.2": ans(["Family check-ups", "Teeth whitening"]),
        "P04.3": ans({ now: "Kochi", later: "Online booking only" }),
        "P05.1": ans("Families within 5 km of either clinic."),
        "P05.2": ans("Usually yes"),
        "P06.1": ans("Reception is overwhelmed with phone calls and WhatsApp bookings."),
        "P06.2": ans(["Bookings", "Time spent on manual work", "Customer experience"]),
        "P06.3": ans("At least 60% of appointments booked without a phone call."),
        "P07.2": state("deferred", "Reception team will document the current process next week."),
        "P08.1": ans(["Website/store/application", "Customer handling", "Task automation"]),
        "P08.2": ans(["Book", "Learn/contact"]),
        "P08.3": ans({
          now: "Online appointment request and clinic pages.",
          later: "Insurance document upload.",
        }),
        "P11.2": ans(["Health or other sensitive records", "Different user roles"]),
        "P12.1": ans("2027-01-10"),
        "P12.2": ans({ currency: "INR", setup: "80000", recurring: "8000" }),
        "P13.1": ans("Dr. Maya Rao"),
        "P14.1": ans("Request a correction", "The clinic count in the summary is wrong."),
        "P15.1": ans("maya@harbordental.in"),
        "P16.2": { state: "answered", value: true },
        "P16.3": { state: "answered", value: true },
      },
      extraModules: [],
      currentPage: "P12",
      currentQuestion: "P12.2",
      status: "draft",
      updatedAt: now - 3 * DAY,
      privacyVersion: "2026-10-11.v1",
    });
    created.push(harborId);

    const atlasId = "demo_atlas_logistics";
    await ctx.db.insert("onboarding", {
      authUserId: atlasId,
      version: "2026-10-11.v1",
      answers: {
        "P01.1": ans("Daniel Okafor"),
        "P01.2": ans("Atlas Logistics"),
        "P01.3": ans("daniel@atlaslogistics.co"),
        "P02.1": ans("Employee/project lead"),
        "P02.2": ans({ country: "United Kingdom", timezone: "Europe/London (GMT)" }),
        "P02.3": ans(["Email", "Dashboard when available"]),
        "P03.1": ans(
          "Atlas coordinates regional freight for manufacturers that need predictable weekly deliveries.",
        ),
        "P03.2": ans(["Manufacturing"]),
        "P03.3": ans("Expanding or improving"),
        "P04.1": ans(["Internal operations", "Project-based services"]),
        "P04.2": ans(["Weekly route planning", "Exception tracking"]),
        "P04.3": ans({ now: "Midlands and North England", later: "Western Europe" }),
        "P05.1": ans("Operations managers at mid-sized manufacturers."),
        "P05.2": ans("Different people"),
        "P06.1": ans("Dispatch uses spreadsheets that only one person understands."),
        "P06.2": ans(["Reporting", "Errors", "Staff adoption"]),
        "P06.3": ans("Cut missed delivery exceptions by half and give managers a daily view."),
        "P07.2": ans("Order intake → route sheet → dispatch → delivery proof → weekly invoice."),
        "P07.3": ans("Route sheets are copied by hand and errors are found after dispatch."),
        "P08.1": ans(["Task automation", "ERP/CRM or other connections", "Performance/reporting"]),
        "P08.2": ans(["Submit/approve/track work"]),
        "P08.3": ans({ now: "One daily exception report.", later: "Full customer portal." }),
        "P10.1": ans({ "Product/service information": "needs-updating", "Nothing yet": "not-available" }),
        "P11.1": ans(["Contractual requirements"]),
        "P11.2": ans(["Staff-only information"]),
        "P12.1": ans("Flexible"),
        "P12.2": ans({ currency: "GBP", setup: "12000", recurring: "900" }),
        "P13.1": ans("Daniel Okafor"),
        "P14.1": ans("Matches my agreement"),
        "P14.2": ans({ legalName: "Atlas Logistics Ltd", billingEmail: "finance@atlaslogistics.co" }),
        "P15.1": ans("daniel@atlaslogistics.co"),
        "P16.2": { state: "answered", value: true },
        "P16.3": { state: "answered", value: true },
      },
      extraModules: [],
      currentPage: "P16",
      currentQuestion: null,
      status: "submitted",
      updatedAt: now - 18 * DAY,
      submittedAt: now - 18 * DAY,
      privacyVersion: "2026-10-11.v1",
    });
    await ctx.db.insert("engagements", {
      authUserId: atlasId,
      summary: "Pro plan: internal exception tracker and reporting dashboard.",
      scope: ["Discovery workshop", "Exception tracker", "Reporting dashboard"],
      plan: "Pro",
      currency: "GBP",
      setupFee: 12000,
      recurringFee: 900,
      exclusions: ["Third-party integration licences"],
      thirdPartyCosts: "Mapping and SMS providers are billed at cost.",
      legalName: "Atlas Logistics Ltd",
      billingEmail: "finance@atlaslogistics.co",
      signedAgreementRef: "AG-2026-021",
      verifiedEmails: ["daniel@atlaslogistics.co"],
      dependencies: [
        { label: "Dispatch spreadsheet export", owner: "Daniel", verified: false },
        { label: "IT security review", owner: "Atlas IT", verified: false },
      ],
      updatedAt: now - 10 * DAY,
    });
    await ctx.db.insert("projects", {
      authUserId: atlasId,
      name: "Atlas exception tracker",
      summary:
        "Replace the manual route sheet with a simple exception tracker and a daily operations report.",
      status: "blocked",
      currentStage: "activation",
      progressPercent: 16,
      nextStepTitle: "Waiting on access and security review",
      nextStepDetail:
        "Atlas needs to share a sample spreadsheet export and complete their IT security review before build starts.",
      startDate: null,
      targetDate: "2027-03-01",
      updatedAt: now - 4 * DAY,
    });
    for (const [order, stage] of DEFAULT_DELIVERY_STAGES.entries()) {
      const status =
        order === 0 ? "complete" : order === 1 ? "blocked" : "upcoming";
      await ctx.db.insert("projectStages", {
        authUserId: atlasId,
        stageId: stage.stageId,
        order,
        title: stage.title,
        description: stage.description,
        status,
        progress: status === "complete" ? 100 : 0,
        startedAt: status === "upcoming" ? null : now - 20 * DAY,
        completedAt: status === "complete" ? now - 18 * DAY : null,
        targetDate: null,
        note:
          order === 1
            ? "Blocked on spreadsheet export and IT security review."
            : "",
        visible: true,
        updatedAt: now - 4 * DAY,
      });
    }
    await ctx.db.insert("projectActivity", {
      authUserId: atlasId,
      type: "stage",
      title: "Activation blocked",
      detail: "Waiting on a sample export and Atlas IT security review.",
      actor: "agency",
      view: "journey",
      createdAt: now - 4 * DAY,
    });
    created.push(atlasId);

    const emberId = "demo_ember_bakery";
    await ctx.db.insert("onboarding", {
      authUserId: emberId,
      version: "2026-10-11.v1",
      answers: {
        "P01.1": ans("Sofia Alvarez"),
        "P01.2": ans("Ember Bakery"),
        "P01.3": ans("hello@emberbakery.com"),
        "P02.1": ans("Owner/founder"),
        "P02.2": ans({ country: "Spain", timezone: "Europe/Madrid (CET)" }),
        "P02.3": ans(["Email"]),
        "P03.1": ans("Neighbourhood sourdough bakery with two pickup counters."),
        "P03.2": ans(["Food and hospitality"]),
        "P03.3": ans("Already online"),
        "P04.1": ans(["Physical goods"]),
        "P04.2": ans(["Weekly bread subscription"]),
        "P04.3": ans({ now: "Valencia", later: "Local delivery" }),
        "P05.1": ans("Local families and restaurants."),
        "P05.2": ans("Usually yes"),
        "P06.2": ans(["Sales", "Customer retention"]),
        "P06.3": ans("Sell 150 subscriptions in the first month."),
        "P08.1": ans(["Website/store/application", "Invoicing"]),
        "P08.2": ans(["Buy", "Subscribe"]),
        "P08.3": ans({ now: "Subscription checkout.", later: "Gift cards." }),
        "P10.1": ans({ Logo: "ready" }),
        "P14.1": ans("No agreement yet"),
        "P14.2": ans({ legalName: "Ember Bakery SL", billingEmail: "hello@emberbakery.com" }),
        "P15.1": ans("hello@emberbakery.com"),
        "P16.2": { state: "answered", value: true },
        "P16.3": { state: "answered", value: true },
      },
      extraModules: [],
      currentPage: "P10",
      currentQuestion: "P10.2",
      status: "draft",
      updatedAt: now - 9 * DAY,
      privacyVersion: "2026-10-11.v1",
    });
    created.push(emberId);

    return created;
  },
});
