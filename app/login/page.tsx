import type { Metadata } from "next";
import { AuthPage, type AuthSearchParams } from "@/components/auth/auth-page";

export const metadata: Metadata = { title: "Join us | Starter Shifter", robots: { index: false, follow: false } };

export default function LoginPage({ searchParams }: { searchParams: AuthSearchParams }) {
  return <AuthPage searchParams={searchParams} />;
}
