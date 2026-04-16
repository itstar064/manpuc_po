export type Locale = "ja" | "en";

export type WorkEntry = {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  href?: string;
  tags: string[];
  noLink?: boolean;
  /** This site (locale root) */
  internalPortfolio?: boolean;
};

export const allWorks: WorkEntry[] = [
  {
    title: { ja: "Portfolio Website", en: "Portfolio Website" },
    description: {
      ja: "マイクロインタラクションやUIの心地よさにこだわって制作したポートフォリオサイト。",
      en: "A portfolio site created with a focus on micro-interactions and UI comfort.",
    },
    tags: ["TypeScript", "Next.js", "CSS"],
    internalPortfolio: true,
  },
  {
    title: { ja: "Minecraft Mod", en: "Minecraft Mod" },
    description: {
      ja: "Forge 1.20.1環境での独自Mod開発\n新しいアイテムやシステムを実装。",
      en: "Development of original mods for Forge 1.20.1. Implementing new items and systems.",
    },
    href: "https://modrinth.com/user/manpuc",
    tags: ["Java", "Forge", "Minecraft"],
  },
  {
    title: { ja: "Custom Discord Bot", en: "Custom Discord Bot" },
    description: {
      ja: "サーバー管理やエンタメ機能を備えた多機能汎用Botの開発と運用。",
      en: "Development and operation of a multi-purpose bot with server management and entertainment features.",
    },
    href: "https://github.com/itstar064/MBot",
    tags: ["Node.js", "API"],
  },
  {
    title: { ja: "Pomodoro Timer", en: "Pomodoro Timer" },
    description: {
      ja: "タスク、統計機能付きのポモドーロ\nタイマー。",
      en: "Pomodoro timer with task and statistics features.",
    },
    href: "https://pomodoro.manpuc.me/",
    tags: ["TypeScript", "Astro"],
  },
  {
    title: { ja: "QR Maker", en: "QR Maker" },
    description: {
      ja: "使いやすさとカスタム性にこだわったQRコード生成サービス。",
      en: "A QR code generation service focused on ease of use and customizability.",
    },
    href: "https://qr.manpuc.me/",
    tags: ["PWA", "Astro", "TypeScript"],
  },
  {
    title: { ja: "Ambient Dashboard", en: "Ambient Dashboard" },
    description: {
      ja: "ミニマルで美しいデジタル時計アプリ。",
      en: "A minimal and beautiful digital clock app.",
    },
    href: "https://ambient.manpuc.me/",
    tags: ["API", "PWA", "TypeScript"],
  },
  {
    title: { ja: "Text Flow", en: "Text Flow" },
    description: {
      ja: "汎用性と操作性にこだわったテキスト変換サービス。",
      en: "A text conversion service focused on versatility and operability.",
    },
    href: "https://text.manpuc.me/",
    tags: ["Astro", "TypeScript"],
  },
  {
    title: { ja: "Chrome Theme", en: "Chrome Theme" },
    description: {
      ja: "目に優しい配色で使いやすいChromeダークテーマ",
      en: "An easy-to-use Chrome dark theme with an eye-friendly color scheme.",
    },
    href: "https://chromewebstore.google.com/detail/ganlcelmnoaidpmaegcmhecolonfmffk?utm_source=item-share-cb",
    tags: ["CSS", "JSON", "Theme"],
  },
  {
    title: {
      ja: "Google Search Night Theme",
      en: "Google Search Night Theme",
    },
    description: {
      ja: "Google検索を目に優しいダークテーマに変更する拡張機能。",
      en: "An extension that changes Google Search to an eye-friendly dark theme.",
    },
    href: "https://chromewebstore.google.com/detail/bdlpogibdkglpceadpplahmjneanbpom?utm_source=item-share-cb",
    tags: ["Chrome Extension", "CSS"],
  },
  {
    title: { ja: "No Curseforge Legacy", en: "No Curseforge Legacy" },
    description: {
      ja: "旧デザインのCurseForgeを新デザインURLにリダイレクトする拡張機能。",
      en: "An extension that redirects legacy CurseForge URLs to the new design.",
    },
    href: "https://chromewebstore.google.com/detail/diogckmiabncebebknnoibjapaldcjgb?utm_source=item-share-cb",
    tags: ["Chrome Extension", "JavaScript"],
  },
  {
    title: { ja: "Minecraft Server", en: "Minecraft Server" },
    description: {
      ja: "Minecraft Bedrock Editionのサーバーの構築と運用。",
      en: "Construction and operation of Minecraft Bedrock Edition servers.",
    },
    tags: ["Minecraft", "Server", "VPS"],
    noLink: true,
  },
  {
    title: { ja: "Package Design", en: "Package Design" },
    description: {
      ja: "「宇摩のやまじ風」のリニューアルデザイン。",
      en: "Renewal design for \"Uma no Yamajikaze\".",
    },
    tags: ["Design", "Illustrator"],
    noLink: true,
  },
];

/** Same four cards as the original Astro home page */
export const homeWorksPreview: WorkEntry[] = [
  allWorks[0],
  allWorks[1],
  allWorks[2],
  {
    title: { ja: "Chrome Theme", en: "Chrome Theme" },
    description: {
      ja: "目に優しい配色で使いやすいChromeダークテーマ",
      en: "An easy-to-use Chrome dark theme with an eye-friendly color scheme.",
    },
    href: "https://chromewebstore.google.com/detail/ganlcelmnoaidpmaegcmhecolonfmffk?utm_source=item-share-cb",
    tags: ["CSS", "JSON", "Theme"],
  },
];
