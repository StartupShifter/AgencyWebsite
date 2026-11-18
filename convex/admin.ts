export function isAdminEmail(email: string): boolean {
  const emails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  return emails.includes(email.trim().toLowerCase());
}
