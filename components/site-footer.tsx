import type { Locale } from "@/lib/works-data";

const nav = [
  { hash: "#about", ja: "概要", en: "About" },
  { hash: "#skills", ja: "スキル", en: "Skills" },
  { hash: "#works", ja: "実績", en: "Works" },
  { hash: "#contact", ja: "お問い合わせ", en: "Contact" },
] as const;

export function SiteFooter({ locale }: { locale: Locale }) {
  const base = locale === "en" ? "/en" : "";

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar.webp"
            alt="manpuc"
            width={88}
            height={88}
            loading="lazy"
            decoding="async"
            className="footer-avatar"
          />
          <div className="footer-title">
            <h3>manpuc</h3>
            <p className="txt-ja">フリーランス・デベロッパー・クリエイター</p>
            <p className="txt-en">Freelancer / Developer / Creator</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-nav">
            {nav.map((item) => (
              <a key={item.hash} href={`${base}${item.hash}`}>
                <span className="txt-ja">{item.ja}</span>
                <span className="txt-en">{item.en}</span>
              </a>
            ))}
          </div>
          <div className="footer-socials">
            <a href="mailto:engineer.jp.team@gmail.com" aria-label="Email" className="social-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a
              href="https://https://github.com/itstar064"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://line.me/ti/p/Ytxn5UCJ-N"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINE"
              className="social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6.5C4 5.12 5.12 4 6.5 4h11C18.88 4 20 5.12 20 6.5v6c0 1.38-1.12 2.5-2.5 2.5H9l-3 3v-3H6.5A2.5 2.5 0 0 1 4 12.5v-6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} manpuc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
