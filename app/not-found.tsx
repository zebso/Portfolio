import { EmptyState } from "@/components/ui/EmptyState";
import { getContent } from "@/data/content";
import { getLocale } from "@/i18n/server";

export default async function NotFound() {
  const locale = await getLocale();
  const content = getContent(locale).notFound;

  return (
    <section className="section">
      <div className="container">
        <EmptyState
          actionHref="/projects"
          actionLabel={content.action}
          title={content.title}
          text={content.text}
        />
      </div>
    </section>
  );
}
