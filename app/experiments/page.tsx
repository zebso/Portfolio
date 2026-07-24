import type { Metadata } from "next";
import { experiments } from "@/data/experiments";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Small prototypes and technical explorations from Zebso.",
  alternates: {
    canonical: "/experiments"
  }
};

export default function ExperimentsPage() {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader" data-reveal>
          <div>
            <p className="eyebrow">Experiments</p>
            <h1 className="sectionTitle">Ideas before they become products.</h1>
            <p className="sectionText">
              Lightweight explorations around AI, interfaces, and product
              mechanics. Some will grow. Some are simply notes from the work.
            </p>
          </div>
        </header>
        <div className="grid">
          {experiments.map((experiment) => (
            <Card
              className="span-4"
              description={experiment.description}
              key={experiment.title}
              meta={experiment.status}
              title={experiment.title}
            >
              <TagList tags={experiment.tags} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
