import type { Metadata } from "next";
import { WorksBackNav } from "@/components/works-back-nav";
import { WorksPageMain } from "@/components/works-page-main";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "制作実績一覧 (Minecraft Mod / Discord Bot)",
  description:
    "まんぷく（manpuc）の過去の制作実績一覧。Minecraft Forge 1.20.1向けMod開発、多機能Discord Bot、Chrome拡張機能、各種Web制作など、実際に配布・運用中のプロダクトを公開しています。",
  alternates: {
    canonical: "/works",
    languages: { ja: "/works", en: "/en/works", "x-default": "/works" },
  },
  openGraph: {
    url: `${SITE_URL}/works`,
    locale: "ja_JP",
  },
};

export default function WorksPage() {
  return (
    <>
      <WorksBackNav locale="ja" />
      <WorksPageMain locale="ja" />
      <SiteFooter locale="ja" />
    </>
  );
}
