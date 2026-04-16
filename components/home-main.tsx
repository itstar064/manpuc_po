import Link from "next/link";
import type { Locale } from "@/lib/works-data";
import { homeWorksPreview } from "@/lib/works-data";
import { WorkCard } from "@/components/work-card";

const aboutJa = [
  "高校商業科情報デザイン類型卒業 / 放送大学教養学部社会と産業コース卒業",
  "ガジェット収集家（スマートウォッチ, スマホ, イヤホン・ヘッドホン など）",
  "Minecraft Mod開発 (Java/Forge)、Bot制作、Chrome拡張機能制作",
  "新しい技術やモノづくりが大好きです",
];

const aboutEn = [
  "Graduated from commercial high school (information design); The Open University of Japan, Society and Industry course",
  "Gadget collector (smartwatches, phones, earphones and headphones, and more)",
  "Minecraft modding (Java/Forge), bots, and Chrome extensions",
  "I love exploring new technology and building things",
];

export function HomeMain({ locale }: { locale: Locale }) {
  const about = locale === "ja" ? aboutJa : aboutEn;
  const worksMore = locale === "en" ? "/en/works" : "/works";
  const viewLabel = locale === "ja" ? "すべて" : "View all";
  const subtitle = "@manpuc / Developer & Creator";
  const hashBase = locale === "en" ? "/en" : "";

  return (
    <div className="container">
      <header className="reveal" style={{ transitionDelay: "0s" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- 3D tilt targets this class */}
        <img
          src="/avatar.webp"
          alt="manpuc"
          width={245}
          height={245}
          fetchPriority="high"
          decoding="async"
          sizes="(max-width: 768px) 180px, 245px"
          className="profile-img"
          style={{ transformOrigin: "center", willChange: "transform, box-shadow" }}
        />
        <h1>manpuc</h1>
        <p className="subtitle">{subtitle}</p>
      </header>

      <nav className="reveal" style={{ transitionDelay: "0.1s" }}>
        <a href={`${hashBase}#about`}>About</a>
        <a href={`${hashBase}#skills`}>Skills</a>
        <a href={`${hashBase}#works`}>Works</a>
        <a href={`${hashBase}#contact`}>Contact</a>
      </nav>

      <section id="about" className="reveal" style={{ transitionDelay: "0.2s" }}>
        <h2>About</h2>
        <div className="profile-text">
          <ul>
            {about.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="skills" className="reveal">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <h3>Dev & Code</h3>
            <ul>
              <li>Python</li>
              <li>PowerShell, Batch Scripting</li>
              <li>Java (Minecraft Forge 1.20.1)</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>Web Development</h3>
            <ul>
              <li>HTML / CSS / JavaScript</li>
              <li>Next.js, Astro, React, Node.js</li>
              <li>UI/UX & Modern Animations</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git, GitHub, pnpm</li>
              <li>Generative AI Tools</li>
              <li>
                <span className="txt-ja">After Effects（動画編集）</span>
                <span className="txt-en">After Effects</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="works" className="reveal">
        <h2>Works</h2>
        <div className="works-grid">
          {homeWorksPreview.map((work, index) => (
            <WorkCard key={`${work.title.en}-${index}`} work={work} locale={locale} />
          ))}
        </div>
        <div className="view-more-container">
          <Link href={worksMore} className="btn-view-more" prefetch={false}>
            {viewLabel}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: 20, height: 20 }}
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      <section id="contact" className="reveal">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="mailto:engineer.jp.team@gmail.com" className="btn-email">
            <svg
              className="contact-icon email-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email
          </a>
          <a
            href="https://https://github.com/itstar064"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            <svg
              className="contact-icon github-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
          <a
            href="https://line.me/ti/p/Ytxn5UCJ-N"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line"
          >
            <svg
              className="contact-icon line-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M4 6.5C4 5.12 5.12 4 6.5 4h11C18.88 4 20 5.12 20 6.5v6c0 1.38-1.12 2.5-2.5 2.5H9l-3 3v-3H6.5A2.5 2.5 0 0 1 4 12.5v-6z" />
            </svg>
            LINE
          </a>
        </div>
      </section>
    </div>
  );
}
