import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import { Suspense, type ReactNode } from "react";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { getToken } from "@/lib/auth-server";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starter Shifter — Your business, connected",
  description:
    "Ecommerce, creative direction, automation, and connected operations. Starter Shifter helps businesses build their next chapter online, with a scope shaped around their needs.",
};

async function AuthProvider({ children }: { children: ReactNode }) {
  const initialToken = await getToken();
  return <ConvexClientProvider initialToken={initialToken}>{children}</ConvexClientProvider>;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<div className="flex min-h-svh items-center justify-center text-sm text-muted-foreground" role="status">Loading your workspace…</div>}>
          <AuthProvider>{children}</AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
