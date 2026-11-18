import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const client = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const admin = path.resolve(client, "../admin");
for (const folder of ["convex", "lib/onboarding"]) {
  const files = await Promise.all([client, admin].map(root => readdir(path.join(root, folder))));
  const names = [...new Set(files.flat())].filter(name => /\.(ts|json)$/.test(name));
  for (const name of names) {
    const content = await Promise.all([client, admin].map(root => readFile(path.join(root, folder, name), "utf8")));
    assert.equal(content[0], content[1], `Shared source drift: ${folder}/${name}. Update both repositories before deploying.`);
  }
}
if (process.argv.includes("--environment")) {
  const environments = await Promise.all([client, admin].map(async root => {
    const text = await readFile(path.join(root, ".env.local"), "utf8");
    return Object.fromEntries(text.split(/\r?\n/).filter(line => /^[A-Z_]+=/.test(line)).map(line => {
      const index = line.indexOf("=");
      return [line.slice(0, index), line.slice(index + 1).trim().replace(/^["']|["']$/g, "")];
    }));
  }));
  for (const key of ["NEXT_PUBLIC_CONVEX_URL", "NEXT_PUBLIC_CONVEX_SITE_URL"]) {
    assert.ok(environments[0][key], `Missing ${key}.`);
    assert.equal(environments[0][key], environments[1][key], `Both apps must use the same ${key}.`);
  }
  assert.equal(environments[1].CLIENT_PORTAL_CONVEX_SITE_URL, environments[0].NEXT_PUBLIC_CONVEX_SITE_URL, "The questionnaire bridge must point at the shared workspace database.");
  assert.ok(environments[1].QUESTIONNAIRE_ADMIN_TOKEN?.length >= 32, "The admin server needs its bridge credential.");
}
console.log("Shared backend and onboarding sources match across both repositories." + (process.argv.includes("--environment") ? " Both apps and the questionnaire bridge use the same database." : ""));
