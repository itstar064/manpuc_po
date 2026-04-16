import Link from "next/link";
import type { Locale, WorkEntry } from "@/lib/works-data";

function resolveHref(work: WorkEntry, locale: Locale): string | undefined {
  if (work.internalPortfolio) {
    return locale === "en" ? "/en" : "/";
  }
  return work.href;
}

function WorkBody({ work, locale }: { work: WorkEntry; locale: Locale }) {
  const title = work.title[locale];
  const descLines = work.description[locale].split("\n");

  return (
    <>
      <h3 style={{ marginBottom: 5 }}>{title}</h3>
      <p className="work-desc" style={{ color: "var(--txt-sub)", fontSize: "0.9em" }}>
        {descLines.map((line, i) => (
          <span key={i}>
            {i > 0 ? <br /> : null}
            {line}
          </span>
        ))}
      </p>
      {work.tags.length > 0 ? (
        <div className="tags">
          {work.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}

export function WorkCard({ work, locale }: { work: WorkEntry; locale: Locale }) {
  const href = resolveHref(work, locale);

  if (work.noLink || !href) {
    return (
      <div className="work-item no-link">
        <WorkBody work={work} locale={locale} />
      </div>
    );
  }

  const isInternal = href.startsWith("/");
  const className = "work-item";
  const body = <WorkBody work={work} locale={locale} />;

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {body}
      </Link>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  );
}
