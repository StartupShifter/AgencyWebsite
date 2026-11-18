import { ConvexError } from "convex/values";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import type { QuestionnaireDefinition } from "../lib/onboarding/types";

const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { "cache-control": "no-store" } });
async function validToken(header: string | null) {
  const secret = process.env.QUESTIONNAIRE_ADMIN_TOKEN;
  if (!secret || secret.length < 32 || !header?.startsWith("Bearer ")) return false;
  const encode = new TextEncoder();
  const [expected, received] = await Promise.all([secret, header.slice(7)].map(value => crypto.subtle.digest("SHA-256", encode.encode(value))));
  const a = new Uint8Array(expected), b = new Uint8Array(received);
  return a.reduce((difference, byte, index) => difference | (byte ^ b[index]), 0) === 0;
}
function stringField(body: Record<string, unknown>, key: string, optional = false) {
  const value = body[key];
  if (value === undefined && optional) return undefined;
  if (typeof value !== "string" || value.length > 2000) throw new ConvexError(`Invalid ${key}.`);
  return value;
}
function revision(body: Record<string, unknown>) {
  const value = body.expectedRevision;
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 0) throw new ConvexError("Invalid editor revision.");
  return value;
}

/** Server-to-server administration only; never exposes a deployment admin key. */
export const handle = httpAction(async (ctx, request) => {
  if (!await validToken(request.headers.get("authorization"))) return json({ error: "Unauthorized." }, 401);
  if (Number(request.headers.get("content-length") ?? 0) > 800_000) return json({ error: "Request is too large." }, 413);
  try {
    const text = await request.text();
    if (text.length > 800_000) return json({ error: "Request is too large." }, 413);
    const parsed: unknown = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return json({ error: "Invalid request." }, 400);
    const body = parsed as Record<string, unknown>;
    const targetUserId = stringField(body, "targetUserId", true);
    const target = targetUserId ? { targetUserId } : {};
    switch (body.operation) {
      case "load": return json(await ctx.runQuery(internal.questionnaireAdmin.getEditor, target));
      case "clients": return json(await ctx.runQuery(internal.questionnaireAdmin.listClients, { paginationOpts: { cursor: stringField(body, "cursor", true) ?? null, numItems: 25 } }));
      case "history": {
        if (!targetUserId) throw new ConvexError("Choose a client first.");
        return json(await ctx.runQuery(internal.questionnaireAdmin.getClientHistory, { authUserId: targetUserId }));
      }
      case "save": return json({ revision: await ctx.runMutation(internal.questionnaireAdmin.saveEditor, { ...target, actor: stringField(body, "actor")!, title: stringField(body, "title")!, definition: body.definition as QuestionnaireDefinition, expectedRevision: revision(body), baseVersion: stringField(body, "baseVersion")! }) });
      case "publish": return json({ version: await ctx.runMutation(internal.questionnaireAdmin.publishEditor, { ...target, actor: stringField(body, "actor")!, expectedRevision: revision(body), reason: stringField(body, "reason")! }) });
      case "apply": return json(await ctx.runMutation(internal.questionnaireAdmin.applyGlobalVersion, {
        version: stringField(body, "version")!, actor: stringField(body, "actor")!, reason: stringField(body, "reason")!,
        clients: body.clients as { authUserId: string; expectedVersion: string }[],
      }));
      case "discard": await ctx.runMutation(internal.questionnaireAdmin.discardDraft, { ...target, expectedRevision: revision(body) }); return json({ discarded: true });
      default: return json({ error: "Unsupported operation." }, 400);
    }
  } catch (error) {
    const message = error instanceof ConvexError && typeof error.data === "string" ? error.data : "The questionnaire request is invalid or could not be completed. Reload and try again.";
    return json({ error: message }, 400);
  }
});
