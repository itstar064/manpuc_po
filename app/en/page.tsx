import type { Metadata } from "next";
import { HomeMain } from "@/components/home-main";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "manpuc | Freelance Developer & UI/UX Designer",
  description:
    "Portfolio of manpuc — freelance developer (post-graduation) working on Minecraft modding, web development, and Discord bots.",
  alternates: { canonical: "/en" },
  openGraph: {
    url: `${SITE_URL}/en`,
    locale: "en_US",
    description:
      "Portfolio of manpuc — freelance developer (post-graduation) working on Minecraft modding, web development, and Discord bots.",
  },
  twitter: {
    description:
      "Portfolio of manpuc — freelance developer (post-graduation) working on Minecraft modding, web development, and Discord bots.",
  },
};

export default function EnglishHomePage() {
  return (
    <>
      <HomeMain locale="en" />
      <SiteFooter locale="en" />
    </>
  );
}
