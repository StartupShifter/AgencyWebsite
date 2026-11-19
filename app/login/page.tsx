import type { Metadata } from "next";
import { AuthPage, type AuthSearchParams } from "@/components/auth/auth-page";
import { getLocalizedContent } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getLocalizedContent();
  return { title: content.metadata.login.title, robots: { index: false, follow: false } };
}

export default function LoginPage({ searchParams }: { searchParams: AuthSearchParams }) {
  return <AuthPage searchParams={searchParams} />;
}
