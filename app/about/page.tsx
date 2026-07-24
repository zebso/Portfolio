import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";

export const metadata: Metadata = {
  title: "About",
  description:
    "A short introduction to the person behind Zebso.",
  alternates: {
    canonical: "/about"
  }
};

const skills = ["Product thinking", "React", "TypeScript", "UI design", "AI tools"];
const tools = ["Next.js", "Figma", "GitHub", "VS Code", "OpenAI"];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader" data-reveal>
          <div>
            <p className="eyebrow">About</p>
            <h1 className="sectionTitle">Building with care and curiosity.</h1>
            <p className="sectionText">
              Zebso is a developer focused on making small, useful products
              with clear interfaces and understandable systems.
            </p>
          </div>
        </header>
        <div className="grid">
          <Card
            className="span-6"
            title="Philosophy"
            description="Good products feel calm because the difficult decisions have already been made. The work is to keep learning, keep simplifying, and keep shipping honest improvements."
          />
          <Card
            className="span-6"
            title="Timeline"
            description="The current chapter is focused on Hugg!, AI-assisted product workflows, and turning small experiments into durable systems."
          />
          <Card className="span-6" title="Skills" description="Areas that shape the work.">
            <TagList tags={skills} />
          </Card>
          <Card className="span-6" title="Tools" description="Tools used to think, design, and build.">
            <TagList tags={tools} />
          </Card>
        </div>
      </div>
    </section>
  );
}
