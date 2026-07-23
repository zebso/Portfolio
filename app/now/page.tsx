import type { Metadata } from "next";
import { nowItems } from "@/data/now";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Now",
  description: "What Zebso is building, learning, reading, and thinking about now.",
  alternates: {
    canonical: "/now"
  }
};

export default function NowPage() {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader">
          <div>
            <p className="eyebrow">Now</p>
            <h1 className="sectionTitle">Current work, kept lightweight.</h1>
            <p className="sectionText">
              A small snapshot of what is active right now. This page is meant
              to change as the work changes.
            </p>
          </div>
        </header>
        <div className="grid">
          {nowItems.map((item) => (
            <Card
              className="span-3"
              description={item.text}
              key={item.label}
              meta={item.label}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
