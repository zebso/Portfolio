import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Hugg!",
    slug: "hugg",
    description:
      "More than a social app. Hugg! is a platform designed to make being together more meaningful. Instead of sharing moments alone, every post begins with people spending time together.",
    status: "In progress",
    year: "2026",
    thumbnail: "/projects/hugg.png",
    tags: ["Product", "Interface", "Prototype"],
    technologies: ["Next.js", "TypeScript", "React"],
    repository: "https://github.com/zebso/hugg",
    demo: "",
    startedAt: "2026-07-01",
    updatedAt: "2026-07-23",
    tagline: "Designing a softer interaction model for everyday product moments.",
    overview:
      "Hugg! is an active product study focused on making simple interactions feel warmer without becoming noisy or decorative.",
    problem:
      "Many small tools feel either overly mechanical or overly playful. The challenge is finding an interface tone that feels personal while still remaining clear.",
    research:
      "The current research is centered on interaction tone, onboarding friction, and how small pieces of feedback affect trust.",
    design:
      "The design direction favors sharp structure, restrained motion, and copy that explains what is happening without getting in the way.",
    development:
      "The implementation is being shaped as a small React product so interaction ideas can be tested quickly and refined honestly.",
    result:
      "The project is still in progress. Early outcomes are being documented as decisions rather than polished claims.",
    reflection:
      "The main lesson so far is that warmth in software comes less from decoration and more from timing, clarity, and restraint."
  },
  {
    title: "AI Tools Notebook",
    slug: "ai-tools-notebook",
    description:
      "I build AI tools that work like a second brain. They help organize ideas, accelerate development, and turn thoughts into products faster.",
    status: "Ongoing",
    year: "2026",
    thumbnail: "/projects/ai-tools-notebook.png",
    tags: ["AI", "Workflow", "Learning"],
    technologies: ["OpenAI", "TypeScript", "Markdown"],
    repository: "https://github.com/zebso/ai-tools-notebook",
    demo: "",
    startedAt: "2026-06-01",
    updatedAt: "2026-07-23",
    tagline: "Turning AI experiments into useful product-building habits.",
    overview:
      "This notebook tracks patterns, mistakes, and reusable workflows discovered while building with AI tools.",
    problem:
      "AI workflows can become vague quickly. Without clear notes, useful patterns disappear into one-off prompts and temporary experiments.",
    research:
      "The research compares where AI helps most: planning, critique, implementation support, and content shaping.",
    design:
      "The structure keeps examples short, searchable, and tied to concrete outcomes instead of broad claims.",
    development:
      "The work is currently maintained as static content and small prototypes that can later be promoted into real tools.",
    result:
      "The result is a practical learning base that keeps experiments visible while they are still evolving.",
    reflection:
      "The strongest workflows are the ones that preserve human judgment instead of hiding it."
  },
  {
    title: "Interface Experiments",
    slug: "interface-experiments",
    description:
      "Small studies in navigation, layout, and product surfaces that test ideas before they become full features.",
    status: "Exploring",
    year: "2026",
    thumbnail: "/projects/interface-experiments.png",
    tags: ["UI", "Design", "Systems"],
    technologies: ["React", "CSS", "Figma"],
    repository: "https://github.com/zebso/interface-experiments",
    demo: "",
    startedAt: "2026-05-15",
    updatedAt: "2026-07-23",
    tagline: "Using small interface studies to make bigger decisions clearer.",
    overview:
      "Interface Experiments collects focused UI ideas that are too small for a product but useful enough to study.",
    problem:
      "Large redesigns often hide the actual decision being tested. Smaller experiments make the trade-off easier to see.",
    research:
      "Each study isolates one behavior, such as scanning cards, moving through navigation, or reading dense metadata.",
    design:
      "The visual language stays restrained so the interaction itself is easier to evaluate.",
    development:
      "The experiments are built as small React components with plain CSS and minimal dependencies.",
    result:
      "Useful ideas can move into real products. Less useful ideas still leave a clear record of what was learned.",
    reflection:
      "The best experiments are small enough to finish and specific enough to teach something."
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.slice(0, 3);
