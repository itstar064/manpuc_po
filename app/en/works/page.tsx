import type { Metadata } from "next";
import { WorksBackNav } from "@/components/works-back-nav";
import { WorksPageMain } from "@/components/works-page-main";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Works Gallery (Minecraft Mod / Discord Bot)",
  description:
    "A collection of past projects by manpuc, including Minecraft Forge mods, multi-functional Discord bots, Chrome extensions, and web development.",
  alternates: {
    canonical: "/en/works",
    languages: { ja: "/works", en: "/en/works", "x-default": "/works" },
  },
  openGraph: {
    url: `${SITE_URL}/en/works`,
    locale: "en_US",
    description:
      "A collection of past projects by manpuc, including Minecraft Forge mods, multi-functional Discord bots, Chrome extensions, and web development.",
  },
  twitter: {
    description:
      "A collection of past projects by manpuc, including Minecraft Forge mods, multi-functional Discord bots, Chrome extensions, and web development.",
  },
};

export default function EnglishWorksPage() {
  return (
    <>
      <WorksBackNav locale="en" />
      <WorksPageMain locale="en" />
      <SiteFooter locale="en" />
    </>
  );
}
