import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GlassBackground } from "@/components/glass-background";
import { ClientShell } from "@/components/client-shell";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "manpuc | Freelance Developer & UI/UX Designer",
    template: "%s | manpuc",
  },
  description:
    "まんぷく（manpuc）のポートフォリオ。卒業後フリーランスとして、Minecraft Mod制作、Web開発、Discord Bot制作に取り組むデベロッパーの制作実績を公開中。",
  authors: [{ name: "manpuc" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: {
      ja: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "manpuc",
    locale: "ja_JP",
    title: "manpuc | Freelance Developer & UI/UX Designer",
    description:
      "まんぷく（manpuc）のポートフォリオ。卒業後フリーランスとして、Minecraft Mod制作、Web開発、Discord Bot制作に取り組むデベロッパーの制作実績を公開中。",
    images: [{ url: "/avatar.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@manpuccc",
    creator: "@manpuccc",
    title: "manpuc | Freelance Developer & UI/UX Designer",
    description:
      "まんぷく（manpuc）のポートフォリオ。卒業後フリーランスとして、Minecraft Mod制作、Web開発、Discord Bot制作に取り組むデベロッパーの制作実績を公開中。",
    images: ["/avatar.webp"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#1A1B26",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="light" suppressHydrationWarning>
        <GlassBackground />
        <ClientShell />
        {children}
      </body>
    </html>
  );
}
