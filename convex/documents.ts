import { ConvexError, v } from "convex/values";
import {
  internalMutation,
  internalQuery,
  mutation,
  query,
  type MutationCtx,
} from "./_generated/server";
import { authComponent } from "./auth";
import type { Doc, Id } from "./_generated/dataModel";
import { addActivity } from "./projects";
import {
  DOCUMENT_CATEGORIES,
  MAX_DOCUMENT_BYTES,
  isAllowedDocumentType,
} from "../lib/onboarding/documents";
import {
  documentStatusValidator,
  documentViewValidator,
} from "./workspaceValidators";

const UPLOAD_INTENT_MS = 30 * 60 * 1000;

function documentView(document: Doc<"documents">, url: string | null) {
  return {
    id: document._id,
    fileName: document.fileName,
    contentType: document.contentType,
    size: document.size,
    category: document.category,
    description: document.description,
    status: document.status,
    uploadedBy: document.uploadedBy,
    uploadedAt: document.uploadedAt,
    url,
  };
}

function randomToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(24));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}

function cleanFileName(value: string) {  const name = value.split(/[\\/]/).pop()?.trim() ?? "";
  if (!name) throw new ConvexError("Add a file name.");
  return name.slice(0, 200);
}

function validateCategory(value: string) {
  if (!(DOCUMENT_CATEGORIES as readonly string[]).includes(value))
    throw new ConvexError("Choose a valid document category.");
  return value;
}

function validateDescription(value: string | undefined) {
  return (value ?? "").trim().slice(0, 1000);
}

async function storageMetadata(
  ctx: MutationCtx,
  storageId: Id<"_storage">,
) {
  // Convex recommends the system table over the deprecated getMetadata helper.
  return await ctx.db.system.get("_storage", storageId);
}

/** The authenticated client's own files, with short-lived download URLs. */
export const listMine = query({
  args: {},
  returns: v.array(documentViewValidator),
  handler: async (ctx) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) return [];
    const documents = await ctx.db
      .query("documents")
      .withIndex("by_authUserId_uploadedAt", (q) =>
        q.eq("authUserId", user._id),
      )
      .order("desc")
      .collect();
    return await Promise.all(
      documents.map(async (document) =>
        documentView(document, await ctx.storage.getUrl(document.storageId)),
      ),
    );
  },
});

/** Create a one-time upload intent so a client can only claim their own file. */
export const generateUploadUrl = mutation({
  args: {},
  returns: v.object({ uploadUrl: v.string(), token: v.string() }),
  handler: async (ctx) => {
    const user = await authComponent.getAuthUser(ctx);
    const now = Date.now();
    const stale = await ctx.db
      .query("uploadIntents")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", user._id))
      .collect();
    for (const intent of stale)
      if (intent.expiresAt <= now) await ctx.db.delete(intent._id);
    const uploadUrl = await ctx.storage.generateUploadUrl();
    const token = randomToken();
    await ctx.db.insert("uploadIntents", {
      token,
      authUserId: user._id,
      createdAt: now,
      expiresAt: now + UPLOAD_INTENT_MS,
    });
    return { uploadUrl, token };
  },
});

/** Persist metadata after the browser has uploaded the file bytes to storage. */
export const saveUpload = mutation({
  args: {
    token: v.string(),
    storageId: v.id("_storage"),
    fileName: v.string(),
    category: v.string(),
    description: v.optional(v.string()),
  },
  returns: v.id("documents"),
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx);
    const intent = await ctx.db
      .query("uploadIntents")
      .withIndex("by_token", (q) => q.eq("token", args.token))
      .unique();
    if (!intent || intent.authUserId !== user._id || intent.expiresAt <= Date.now())
      throw new ConvexError("This upload session has expired. Refresh and try again.");
    await ctx.db.delete(intent._id);

    const metadata = await storageMetadata(ctx, args.storageId);
    if (!metadata) throw new ConvexError("The uploaded file could not be found.");
    const contentType = metadata.contentType ?? "application/octet-stream";
    if (!isAllowedDocumentType(contentType)) {
      await ctx.storage.delete(args.storageId);
      throw new ConvexError("Choose a PDF, image, Office document, text, CSV, JSON, or ZIP file.");
    }
    if (metadata.size > MAX_DOCUMENT_BYTES) {
      await ctx.storage.delete(args.storageId);
      throw new ConvexError("Choose a file smaller than 20 MB.");
    }
    const now = Date.now();
    const documentId = await ctx.db.insert("documents", {
      authUserId: user._id,
      storageId: args.storageId,
      fileName: cleanFileName(args.fileName),
      contentType,
      size: metadata.size,
      category: validateCategory(args.category),
      description: validateDescription(args.description),
      status: "received",
      uploadedBy: "client",
      uploadedAt: now,
      updatedAt: now,
    });
    await addActivity(ctx, {
      authUserId: user._id,
      type: "document",
      title: "Document uploaded",
      detail: cleanFileName(args.fileName),
      actor: "client",
      view: "resources",
    });
    return documentId;
  },
});

/** A client may remove only their own file; the storage object is removed too. */
export const removeMine = mutation({
  args: { documentId: v.id("documents") },
  returns: v.null(),
  handler: async (ctx, { documentId }) => {
    const user = await authComponent.getAuthUser(ctx);
    const document = await ctx.db.get(documentId);
    if (!document || document.authUserId !== user._id)
      throw new ConvexError("Document not found.");
    await ctx.db.delete(document._id);
    await ctx.storage.delete(document.storageId);
    await addActivity(ctx, {
      authUserId: user._id,
      type: "document",
      title: "Document removed",
      detail: document.fileName,
      actor: "client",
      view: "resources",
    });
    return null;
  },
});

/** Agency tooling: every uploaded file with its client and download URL. */
export const listAll = internalQuery({
  args: {},
  returns: v.array(
    v.object({
      id: v.id("documents"),
      authUserId: v.string(),
      clientName: v.string(),
      clientEmail: v.string(),
      fileName: v.string(),
      contentType: v.string(),
      size: v.number(),
      category: v.string(),
      description: v.string(),
      status: documentStatusValidator,
      uploadedBy: v.union(v.literal("client"), v.literal("agency")),
      uploadedAt: v.number(),
      url: v.union(v.string(), v.null()),
    }),
  ),
  handler: async (ctx) => {
    const documents = await ctx.db.query("documents").collect();
    return await Promise.all(
      documents.map(async (document) => {
        const user = await authComponent.getAnyUserById(
          ctx,
          document.authUserId,
        );
        return {
          ...documentView(
            document,
            await ctx.storage.getUrl(document.storageId),
          ),
          authUserId: document.authUserId,
          clientName: user?.name ?? "",
          clientEmail: user?.email ?? "",
        };
      }),
    );
  },
});

/** Agency tooling: review status and notes for an uploaded file. */
export const updateStatus = internalMutation({
  args: {
    documentId: v.id("documents"),
    status: documentStatusValidator,
    description: v.optional(v.string()),
    category: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, { documentId, status, description, category }) => {
    const document = await ctx.db.get(documentId);
    if (!document) throw new ConvexError("Document not found.");
    const now = Date.now();
    await ctx.db.patch(document._id, {
      status,
      ...(description !== undefined
        ? { description: validateDescription(description) }
        : {}),
      ...(category !== undefined ? { category: validateCategory(category) } : {}),
      updatedAt: now,
    });
    await addActivity(ctx, {
      authUserId: document.authUserId,
      type: "document",
      title: `Document ${status.replace("-", " ")}`,
      detail: document.fileName,
      actor: "agency",
      view: "resources",
    });
    return null;
  },
});

/** Agency tooling: attach a file the agency uploaded for a client. */
export const recordAgencyDocument = internalMutation({
  args: {
    authUserId: v.string(),
    storageId: v.id("_storage"),
    fileName: v.string(),
    category: v.string(),
    description: v.optional(v.string()),
    status: v.optional(documentStatusValidator),
  },
  returns: v.id("documents"),
  handler: async (ctx, args) => {
    const user = await authComponent.getAnyUserById(ctx, args.authUserId);
    if (!user) throw new ConvexError("Client account does not exist.");
    const metadata = await storageMetadata(ctx, args.storageId);
    if (!metadata) throw new ConvexError("The uploaded file could not be found.");
    const contentType = metadata.contentType ?? "application/octet-stream";
    if (!isAllowedDocumentType(contentType))
      throw new ConvexError("Choose a supported document type.");
    if (metadata.size > MAX_DOCUMENT_BYTES)
      throw new ConvexError("Choose a file smaller than 20 MB.");
    const now = Date.now();
    const documentId = await ctx.db.insert("documents", {
      authUserId: args.authUserId,
      storageId: args.storageId,
      fileName: cleanFileName(args.fileName),
      contentType,
      size: metadata.size,
      category: validateCategory(args.category),
      description: validateDescription(args.description),
      status: args.status ?? "approved",
      uploadedBy: "agency",
      uploadedAt: now,
      updatedAt: now,
    });
    await addActivity(ctx, {
      authUserId: args.authUserId,
      type: "document",
      title: "Document shared with you",
      detail: cleanFileName(args.fileName),
      actor: "agency",
      view: "resources",
    });
    return documentId;
  },
});
