import type { Experiment } from "@/types/portfolio";

export const experiments: Experiment[] = [
  {
    title: "AI critique loop",
    description:
      "A small workflow for using AI to challenge product assumptions before implementation begins.",
    status: "Active note",
    tags: ["AI", "Planning", "Product"]
  },
  {
    title: "Dense project cards",
    description:
      "A layout study for making project metadata readable without turning cards into decoration.",
    status: "Prototype",
    tags: ["UI", "Layout", "Cards"]
  },
  {
    title: "Calm empty states",
    description:
      "Copy and layout patterns for pages that are intentionally lightweight while work is still forming.",
    status: "Draft",
    tags: ["UX", "Writing", "Systems"]
  }
];
