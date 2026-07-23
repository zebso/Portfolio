import { nowItems } from "@/data/now";
import { Card } from "@/components/ui/Card";

export function CurrentFocus() {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader">
          <div>
            <p className="sectionKicker">Current Focus</p>
            <h2 className="sectionTitle">What is being shaped now.</h2>
          </div>
        </header>
        <div className="grid">
          {nowItems.slice(0, 3).map((item) => (
            <Card
              className="span-4"
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
