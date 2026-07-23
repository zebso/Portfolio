export type Project = {
  title: string;
  slug: string;
  description: string;
  status: string;
  year: string;
  thumbnail: string;
  tags: string[];
  technologies: string[];
  repository: string;
  demo: string;
  startedAt: string;
  updatedAt: string;
  tagline: string;
  overview: string;
  problem: string;
  research: string;
  design: string;
  development: string;
  result: string;
  reflection: string;
  blogPosts?: string[];
  gallery?: string[];
  videos?: string[];
  downloads?: string[];
};

export type WritingPost = {
  title: string;
  excerpt: string;
  category: "Development" | "Design" | "AI" | "Engineering" | "Product" | "Learning";
  publishedAt: string;
  href: string;
};

export type Experiment = {
  title: string;
  description: string;
  status: string;
  tags: string[];
};

export type NowItem = {
  label: "Building" | "Learning" | "Reading" | "Thinking";
  title: string;
  text: string;
};
