import type { Locale } from "@/lib/works-data";
import { allWorks } from "@/lib/works-data";
import { WorkCard } from "@/components/work-card";

export function WorksPageMain({ locale }: { locale: Locale }) {
  const title = locale === "ja" ? "All Works" : "All Works";
  const subtitle =
    locale === "ja"
      ? "これまでの制作実績一覧"
      : "A gallery of projects and products";

  return (
    <div className="container">
      <header className="reveal" style={{ animationDelay: "0.1s" }}>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </header>
      <section className="reveal" style={{ animationDelay: "0.2s" }}>
        <div className="works-grid">
          {allWorks.map((work) => (
            <WorkCard key={work.title.en} work={work} locale={locale} />
          ))}
        </div>
      </section>
    </div>
  );
}
