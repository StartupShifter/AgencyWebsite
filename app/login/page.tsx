import type { Metadata } from "next";
import { AuthPage, type AuthSearchParams } from "@/components/auth/auth-page";
import { content } from "@/context/content";

export const metadata: Metadata = { title: content.metadata.login.title, robots: { index: false, follow: false } };

export default function LoginPage({ searchParams }: { searchParams: AuthSearchParams }) {
  return <AuthPage searchParams={searchParams} />;
}
