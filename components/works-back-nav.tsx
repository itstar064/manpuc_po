import Link from "next/link";
import type { Locale } from "@/lib/works-data";

export function WorksBackNav({ locale }: { locale: Locale }) {
  const href = locale === "en" ? "/en" : "/";
  const long = locale === "en" ? "Back to home" : "ホームに戻る";
  const short = locale === "en" ? "Home" : "ホーム";

  return (
    <div className="back-nav">
      <Link href={href} className="back-btn" aria-label={long} prefetch={false}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="back-btn-icon"
          aria-hidden
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span className="text-long">{long}</span>
        <span className="text-short">{short}</span>
      </Link>
    </div>
  );
}
