import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { randomBytes } from "node:crypto";
import { ConvexHttpClient } from "convex/browser";
import { makeFunctionReference } from "convex/server";

// Fixtures may only be created on this app's anonymous local deployment.
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
assert.equal(new URL(convexUrl).hostname, "127.0.0.1");
assert.match(process.env.CONVEX_DEPLOYMENT ?? "", /^anonymous:/);
const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
assert.ok(["localhost", "127.0.0.1"].includes(new URL(origin).hostname));
const fixture = {
  name: "Client Auth Smoke Test",
  email: `client-auth-${randomBytes(6).toString("hex")}@example.test`,
  password: randomBytes(24).toString("base64url"),
};
const cookies = new Map();
let userId;

async function request(path, body, authenticated = true) {
  const headers = { Origin: origin };
  if (body) headers["Content-Type"] = "application/json";
  if (authenticated) headers.Cookie = [...cookies].map(([key, value]) => `${key}=${value}`).join("; ");
  const response = await fetch(`${origin}${path}`, {
    method: body ? "POST" : "GET", headers,
    body: body ? JSON.stringify(body) : undefined,
    redirect: "manual",
  });
  if (authenticated) for (const cookie of response.headers.getSetCookie()) {
    const pair = cookie.split(";", 1)[0];
    const split = pair.indexOf("=");
    const key = pair.slice(0, split);
    const value = pair.slice(split + 1);
    if (value) cookies.set(key, value); else cookies.delete(key);
  }
  return response;
}

try {
  for (const path of ["/login", "/signup"]) {
    const response = await request(path, undefined, false);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes("Google") && html.includes("Facebook"));
  }
  console.log("PASS login and signup render with both social options");
  assert.equal(await (await request("/api/auth/get-session", undefined, false)).json(), null);
  const anonymous = new ConvexHttpClient(convexUrl);
  assert.equal(await anonymous.query(makeFunctionReference("auth:getCurrentUser"), {}), null);
  console.log("PASS anonymous session and backend user return null");

  const shortPassword = await request("/api/auth/sign-up/email", { ...fixture, password: "short" });
  assert.equal(shortPassword.status, 400);
  console.log("PASS backend enforces 12-character password minimum");
  const signup = await request("/api/auth/sign-up/email", fixture);
  assert.equal(signup.status, 200, await signup.clone().text());
  const signupData = await signup.json();
  userId = signupData.user.id;
  const session = await (await request("/api/auth/get-session")).json();
  assert.equal(session.user.email, fixture.email);
  console.log("PASS public client signup creates a live session");

  const loginPage = await request("/login");
  assert.ok(loginPage.headers.get("location") === "/onboarding" || (await loginPage.text()).includes("NEXT_REDIRECT;replace;/onboarding;"));
  console.log("PASS authenticated users skip login and continue to onboarding");

  const tokenData = await (await request("/api/auth/convex/token")).json();
  assert.ok(tokenData.token);
  const authenticated = new ConvexHttpClient(convexUrl);
  authenticated.setAuth(tokenData.token);
  const user = await authenticated.query(makeFunctionReference("auth:getCurrentUser"), {});
  assert.equal(user.email, fixture.email);
  assert.equal(user.name, fixture.name);
  assert.equal(user.emailVerified, false);
  assert.ok(!Object.hasOwn(user, "role"));
  console.log("PASS Better Auth session authenticates Convex without admin roles");

  assert.equal((await request("/api/auth/sign-out", {})).status, 200);
  assert.equal(await (await request("/api/auth/get-session")).json(), null);
  assert.equal(await authenticated.query(makeFunctionReference("auth:getCurrentUser"), {}), null);
  console.log("PASS sign-out invalidates cookie and Convex backend access");

  const wrong = await request("/api/auth/sign-in/email", { email: fixture.email, password: "invalid-password" });
  assert.equal(wrong.status, 401);
  const signin = await request("/api/auth/sign-in/email", { email: fixture.email, password: fixture.password });
  assert.equal(signin.status, 200);
  assert.equal((await (await request("/api/auth/get-session")).json()).user.email, fixture.email);
  await request("/api/auth/sign-out", {});
  console.log("PASS wrong password rejected and correct password restores session");
} finally {
  if (userId) for (const model of ["session", "account", "user"]) {
    const result = spawnSync("bunx", ["convex", "run", "--component", "betterAuth", "adapter:deleteMany", JSON.stringify({
      input: { model, where: [{ field: model === "user" ? "_id" : "userId", value: userId }] },
      paginationOpts: { numItems: 100, cursor: null },
    })], { encoding: "utf8" });
    assert.equal(result.status, 0, `Failed to remove test ${model}`);
  }
  console.log("Removed local auth test account.");
}
