import type { Metadata } from "next";
import { HomeMain } from "@/components/home-main";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "manpuc | Freelance Developer & UI/UX Designer",
  description:
    "まんぷく（manpuc）のポートフォリオ。卒業後フリーランスとして、Minecraft Mod制作、Web開発、Discord Bot制作に取り組むデベロッパーの制作実績を公開中。",
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL,
    locale: "ja_JP",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeMain locale="ja" />
      <SiteFooter locale="ja" />
    </>
  );
}
