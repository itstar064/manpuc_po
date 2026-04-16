import type { Locale } from "./works-data";

export const homeCopy = {
  ja: {
    metaTitle: "manpuc | Freelance Developer & UI/UX Designer",
    metaDesc:
      "まんぷく（manpuc）のポートフォリオ。卒業後フリーランスとして、Minecraft Mod制作、Web開発、Discord Bot制作に取り組むデベロッパーの制作実績を公開中。",
    subtitle: "@manpuccc / Developer & Creator",
    nav: { about: "About", skills: "Skills", works: "Works", contact: "Contact" },
    about: "About",
    aboutLines: [
      "高校商業科情報デザイン類型卒業 / 放送大学教養学部社会と産業コース卒業",
      "ガジェット収集家（スマートウォッチ, スマホ, イヤホン・ヘッドホン など）",
      "Minecraft Mod開発 (Java/Forge)、Bot制作、Chrome拡張機能制作",
      "新しい技術やモノづくりが大好きです",
    ],
    skills: "Skills",
    skillGroups: [
      {
        title: "Dev & Code",
        items: ["Python", "PowerShell, Batch Scripting", "Java (Minecraft Forge 1.20.1)"],
      },
      {
        title: "Web Development",
        items: [
          "HTML / CSS / JavaScript",
          "Next.js, Astro, React, Node.js",
          "UI/UX & Modern Animations",
        ],
      },
      {
        title: "Tools & Others",
        items: ["Git, GitHub, pnpm", "Generative AI Tools", "After Effects（動画編集）"],
      },
    ],
    works: "Works",
    viewMore: "すべて",
    contact: "Contact",
    contactLabels: { email: "Email", github: "GitHub", line: "LINE" },
  },
  en: {
    metaTitle: "manpuc | Freelance Developer & UI/UX Designer",
    metaDesc:
      "Portfolio of manpuc — freelance developer (post-graduation) working on Minecraft modding, web development, and Discord bots.",
    subtitle: "@manpuccc / Developer & Creator",
    nav: { about: "About", skills: "Skills", works: "Works", contact: "Contact" },
    about: "About",
    aboutLines: [
      "Graduated commercial high school (information design); Open University of Japan (society & industry)",
      "Gadget collector (smartwatches, phones, earphones & headphones, and more)",
      "Minecraft modding (Java/Forge), bots, and Chrome extensions",
      "I love learning new tech and building things",
    ],
    skills: "Skills",
    skillGroups: [
      {
        title: "Dev & Code",
        items: ["Python", "PowerShell, Batch scripting", "Java (Minecraft Forge 1.20.1)"],
      },
      {
        title: "Web Development",
        items: [
          "HTML / CSS / JavaScript",
          "Next.js, Astro, React, Node.js",
          "UI/UX & modern animations",
        ],
      },
      {
        title: "Tools & Others",
        items: ["Git, GitHub, pnpm", "Generative AI tools", "After Effects (video)"],
      },
    ],
    works: "Works",
    viewMore: "View all",
    contact: "Contact",
    contactLabels: { email: "Email", github: "GitHub", line: "LINE" },
  },
} as const satisfies Record<Locale, unknown>;

export type HomeStrings = (typeof homeCopy)["ja"];
