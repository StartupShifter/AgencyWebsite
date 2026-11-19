import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import { Suspense, type ReactNode } from "react";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { RootSkeleton } from "@/components/skeletons/root-skeleton";
import { getToken } from "@/lib/auth-server";
import { isConvexConfigured } from "@/lib/convex-config";
import { getLocalizedContent } from "@/lib/i18n-server";
import { I18nProvider } from "@/context/i18n-context";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getLocalizedContent();
  return content.metadata.home;
}

async function AuthProvider({ children }: { children: ReactNode }) {
  // Public pages must still render when a deployment does not have Convex
  // configured. The authenticated routes report their own configuration error.
  if (!isConvexConfigured) return <>{children}</>;
  const initialToken = await getToken();
  return <ConvexClientProvider initialToken={initialToken}>{children}</ConvexClientProvider>;
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { locale, dir, content } = await getLocalizedContent();

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider locale={locale} content={content}>
          <Suspense fallback={<RootSkeleton />}>
            <AuthProvider>{children}</AuthProvider>
          </Suspense>
        </I18nProvider>
      </body>
    </html>
  );
}
