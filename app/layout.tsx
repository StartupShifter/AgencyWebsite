import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import { Suspense, type ReactNode } from "react";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { RootSkeleton } from "@/components/skeletons/root-skeleton";
import { getToken } from "@/lib/auth-server";
import { isConvexConfigured } from "@/lib/convex-config";
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
  // Public pages must still render when a deployment does not have Convex
  // configured. The authenticated routes report their own configuration error.
  if (!isConvexConfigured) return <>{children}</>;
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
        <Suspense fallback={<RootSkeleton />}>
          <AuthProvider>{children}</AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
