import { EmptyState } from "@/components/ui/EmptyState";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <EmptyState
          actionHref="/projects"
          actionLabel="View projects"
          title="This page is not available."
          text="The portfolio only includes the core pages and published project details."
        />
      </div>
    </section>
  );
}
