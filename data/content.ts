import type {
  Experiment,
  NowItem,
  Project,
  WritingPost
} from "@/types/portfolio";
import type { Locale } from "@/i18n/config";
import { experiments } from "@/data/experiments";
import { nowItems } from "@/data/now";
import { projects } from "@/data/projects";
import { writingPosts } from "@/data/writing";

type PageHeaderContent = {
  eyebrow: string;
  title: string;
  text: string;
};

type MetadataContent = {
  title: string;
  description: string;
};

type ContentCard = {
  meta: string;
  title: string;
  text: string;
};

type WritingCard = {
  title: string;
  excerpt: string;
  meta: string;
  href: string;
};

export type PortfolioContent = {
  common: {
    navigation: Array<{ href: string; label: string }>;
    brandHomeLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    primaryNavigationLabel: string;
    footerLinksLabel: string;
    contactLinksLabel: string;
    languageLabel: string;
    englishLabel: string;
    japaneseLabel: string;
    loadingLabel: string;
    tagsLabel: string;
    interfacePreviewLabel: string;
  };
  metadata: {
    site: MetadataContent;
    home: MetadataContent;
    projects: MetadataContent;
    experiments: MetadataContent;
    writing: MetadataContent;
    now: MetadataContent;
    about: MetadataContent;
    contact: MetadataContent;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      text: string;
      projectsAction: string;
      focusAction: string;
      panelLabel: string;
      panelMeta: string;
      panelTitle: string;
      panelText: string;
    };
    featured: {
      kicker: string;
      title: string;
      action: string;
    };
    current: {
      kicker: string;
      title: string;
      items: ContentCard[];
    };
    latest: {
      kicker: string;
      title: string;
      action: string;
      posts: WritingCard[];
    };
  };
  pages: {
    projects: PageHeaderContent;
    experiments: PageHeaderContent;
    writing: PageHeaderContent & {
      emptyTitle: string;
      emptyText: string;
      emptyAction: string;
    };
    now: PageHeaderContent;
    about: PageHeaderContent & {
      philosophyTitle: string;
      philosophyText: string;
      timelineTitle: string;
      timelineText: string;
      skillsTitle: string;
      skillsText: string;
      skills: string[];
      toolsTitle: string;
      toolsText: string;
      tools: string[];
    };
    contact: PageHeaderContent;
  };
  projects: Project[];
  experiments: Experiment[];
  writingPosts: WritingPost[];
  nowItems: NowItem[];
  projectDetail: {
    openDemo: string;
    repository: string;
    tags: string;
    technologies: string;
    updated: string;
    sections: Array<{
      title: string;
      key:
        | "overview"
        | "problem"
        | "research"
        | "design"
        | "development"
        | "result"
        | "reflection";
    }>;
  };
  notFound: {
    title: string;
    text: string;
    action: string;
  };
};

const japaneseProjectCopy: Record<
  string,
  Pick<
    Project,
    | "description"
    | "tagline"
    | "overview"
    | "problem"
    | "research"
    | "design"
    | "development"
    | "result"
    | "reflection"
  >
> = {
  hugg: {
    description:
      "温かく軽やかなデジタル体験と、丁寧さを感じさせる細部を探るプロダクト実験。",
    tagline: "日常の小さな瞬間に、やわらかな操作感を設計する。",
    overview:
      "Hugg!は、シンプルな操作を騒がしく装飾することなく、少し温かく感じられるものにするためのプロダクト研究です。",
    problem:
      "小さなツールの多くは、機械的すぎるか、遊び心が強すぎます。明快さを保ちながら、個人的な温度を感じられる表現を見つけることが課題です。",
    research:
      "操作のトーン、オンボーディングの摩擦、小さなフィードバックが信頼感へ与える影響を中心に調べています。",
    design:
      "明確な構造、控えめな動き、状況を邪魔せず説明するコピーを軸にデザインしています。",
    development:
      "操作のアイデアを素早く試し、正直に改善できるよう、小さなReactプロダクトとして実装しています。",
    result:
      "現在も進行中です。完成した成果を誇張するのではなく、初期の判断と変化を記録しています。",
    reflection:
      "ソフトウェアの温かさは、装飾よりもタイミング、明快さ、抑制から生まれると学んでいます。"
  },
  "ai-tools-notebook": {
    description:
      "AIを実用的なプロダクト制作の相棒として使うための、ノートとプロトタイプの継続的なコレクション。",
    tagline: "AI実験を、役に立つプロダクト制作の習慣へ変える。",
    overview:
      "AI Tools Notebookは、AIツールを使った制作で見つけたパターン、失敗、再利用できるワークフローを記録しています。",
    problem:
      "AIを使う作業は、すぐに曖昧になりがちです。明確な記録がなければ、有用なパターンも一度きりのプロンプトや実験に埋もれてしまいます。",
    research:
      "計画、批評、実装支援、文章整理のうち、どの場面でAIが最も役立つかを比較しています。",
    design:
      "広い主張ではなく具体的な結果と結びつけ、短く検索しやすい例として整理しています。",
    development:
      "現在は静的コンテンツと小さなプロトタイプとして管理し、価値が明確になったものを実際のツールへ育てます。",
    result:
      "変化の途中にある実験を見失わずに済む、実用的な学習基盤になっています。",
    reflection:
      "最も強いワークフローは、人の判断を隠すのではなく、その判断を支えるものです。"
  },
  "interface-experiments": {
    description:
      "本格的な機能になる前にアイデアを試す、ナビゲーション、レイアウト、プロダクト画面の小さな研究。",
    tagline: "小さな画面研究から、大きな判断を明確にする。",
    overview:
      "Interface Experimentsは、単独のプロダクトには小さすぎても、検証する価値のあるUIアイデアを集めています。",
    problem:
      "大規模なリデザインでは、実際に確かめたい判断が隠れがちです。小さな実験なら、比較したい違いを明確にできます。",
    research:
      "カードの読み取り、ナビゲーションの移動、密度の高いメタ情報など、各研究で一つの振る舞いに絞っています。",
    design:
      "操作そのものを評価しやすくするため、視覚表現は控えめに保っています。",
    development:
      "最小限の依存関係で、小さなReactコンポーネントと素のCSSとして実装しています。",
    result:
      "有用なアイデアは実際のプロダクトへ移し、採用しないアイデアも学びの記録として残します。",
    reflection:
      "良い実験は、完了できるほど小さく、何かを学べるほど具体的です。"
  }
};

const japaneseProjects = projects.map((project) => ({
  ...project,
  ...japaneseProjectCopy[project.slug]
}));

const japaneseExperimentDescriptions: Record<string, string> = {
  "AI critique loop":
    "実装を始める前に、AIを使ってプロダクトの前提を問い直すための小さなワークフロー。",
  "Dense project cards":
    "カードを装飾に寄せすぎず、プロジェクトのメタ情報を読みやすくするレイアウト研究。",
  "Calm empty states":
    "まだ形になりきっていないページを、意図的に軽く見せるためのコピーとレイアウトのパターン。"
};

const japaneseExperiments = experiments.map((experiment) => ({
  ...experiment,
  description: japaneseExperimentDescriptions[experiment.title]
}));

const japaneseWritingExcerpts: Record<string, string> = {
  "What I track before a product feels real":
    "課題、制約、そしてアイデアを続ける価値を示す小さな兆しについての短いノート。",
  "Keeping AI workflows understandable":
    "人の判断を隠さずにAIを使うためのノート。"
};

const japaneseWritingPosts = writingPosts.map((post) => ({
  ...post,
  excerpt: japaneseWritingExcerpts[post.title]
}));

const japaneseNowText: Record<string, string> = {
  Building:
    "小さなプロダクト体験のために、より温かな操作モデルを探っています。",
  Learning:
    "計画、批評、実装、文章のどこでAIが役立つかを研究しています。",
  Reading:
    "明快で抑制されたプロダクト画面の事例を集めています。",
  Thinking:
    "小さなプロダクトを長く保守しやすくするパターンを探しています。"
};

const japaneseNowItems = nowItems.map((item) => ({
  ...item,
  text: japaneseNowText[item.label]
}));

const englishContent: PortfolioContent = {
  common: {
    navigation: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/experiments", label: "Experiments" },
      { href: "/writing", label: "Writing" },
      { href: "/now", label: "Now" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" }
    ],
    brandHomeLabel: "Zebso home",
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    primaryNavigationLabel: "Primary navigation",
    footerLinksLabel: "Footer links",
    contactLinksLabel: "Contact links",
    languageLabel: "Select language",
    englishLabel: "English",
    japaneseLabel: "Japanese",
    loadingLabel: "Loading Zebso",
    tagsLabel: "Tags",
    interfacePreviewLabel: "interface preview"
  },
  metadata: {
    site: {
      title: "Zebso",
      description:
        "A calm portfolio about how Zebso thinks, designs, and builds products."
    },
    home: {
      title: "Zebso",
      description:
        "A product-minded portfolio about building useful interfaces, experiments, and tools."
    },
    projects: {
      title: "Projects",
      description:
        "Products and case studies showing how Zebso approaches problems, trade-offs, and implementation."
    },
    experiments: {
      title: "Experiments",
      description:
        "Small prototypes and technical explorations from Zebso."
    },
    writing: {
      title: "Writing",
      description:
        "Notes on development, design, AI, engineering, product, and learning."
    },
    now: {
      title: "Now",
      description:
        "What Zebso is building, learning, reading, and thinking about now."
    },
    about: {
      title: "About",
      description: "A short introduction to the person behind Zebso."
    },
    contact: {
      title: "Contact",
      description: "Ways to reach Zebso."
    }
  },
  home: {
    hero: {
      eyebrow: "Zebso",
      title: "Building calm products with clear thinking.",
      text:
        "Zebso is a product-minded developer exploring useful interfaces, AI workflows, and small systems that can grow without becoming messy.",
      projectsAction: "View projects",
      focusAction: "Current focus",
      panelLabel: "Current product focus",
      panelMeta: "Current focus",
      panelTitle: "Hugg!",
      panelText:
        "A focused product study around warm, lightweight digital interactions."
    },
    featured: {
      kicker: "Featured Projects",
      title: "Work that explains the process.",
      action: "All projects"
    },
    current: {
      kicker: "Current Focus",
      title: "What is being shaped now.",
      items: nowItems.slice(0, 3).map((item) => ({
        meta: item.label,
        title: item.title,
        text: item.text
      }))
    },
    latest: {
      kicker: "Latest Writing",
      title: "Notes from the work.",
      action: "Read writing",
      posts: writingPosts.map((post) => ({
        title: post.title,
        excerpt: post.excerpt,
        meta: `${post.category} / ${post.publishedAt}`,
        href: post.href
      }))
    }
  },
  pages: {
    projects: {
      eyebrow: "Projects",
      title: "Products tell the story.",
      text:
        "A focused collection of product work, experiments that became systems, and notes from the decisions behind them."
    },
    experiments: {
      eyebrow: "Experiments",
      title: "Ideas before they become products.",
      text:
        "Lightweight explorations around AI, interfaces, and product mechanics. Some will grow. Some are simply notes from the work."
    },
    writing: {
      eyebrow: "Writing",
      title: "Useful notes, not noise.",
      text:
        "Short writing about product decisions, engineering lessons, and the process of learning in public.",
      emptyTitle: "Writing is being prepared.",
      emptyText:
        "The writing page will collect useful notes once the first drafts are ready.",
      emptyAction: "Explore projects"
    },
    now: {
      eyebrow: "Now",
      title: "Current work, kept lightweight.",
      text:
        "A small snapshot of what is active right now. This page is meant to change as the work changes."
    },
    about: {
      eyebrow: "About",
      title: "Building with care and curiosity.",
      text:
        "Zebso is a developer focused on making small, useful products with clear interfaces and understandable systems.",
      philosophyTitle: "Philosophy",
      philosophyText:
        "Good products feel calm because the difficult decisions have already been made. The work is to keep learning, keep simplifying, and keep shipping honest improvements.",
      timelineTitle: "Timeline",
      timelineText:
        "The current chapter is focused on Hugg!, AI-assisted product workflows, and turning small experiments into durable systems.",
      skillsTitle: "Skills",
      skillsText: "Areas that shape the work.",
      skills: [
        "Product thinking",
        "React",
        "TypeScript",
        "UI design",
        "AI tools"
      ],
      toolsTitle: "Tools",
      toolsText: "Tools used to think, design, and build.",
      tools: ["Next.js", "Figma", "GitHub", "VS Code", "OpenAI"]
    },
    contact: {
      eyebrow: "Contact",
      title: "Start with a clear note.",
      text:
        "For product conversations, collaboration, or feedback, these are the simplest places to reach Zebso."
    }
  },
  projects,
  experiments,
  writingPosts,
  nowItems,
  projectDetail: {
    openDemo: "Open demo",
    repository: "Repository",
    tags: "Tags",
    technologies: "Technologies",
    updated: "Updated",
    sections: [
      { title: "Overview", key: "overview" },
      { title: "Problem", key: "problem" },
      { title: "Research", key: "research" },
      { title: "Design", key: "design" },
      { title: "Development", key: "development" },
      { title: "Result", key: "result" },
      { title: "Reflection", key: "reflection" }
    ]
  },
  notFound: {
    title: "This page is not available.",
    text:
      "The portfolio only includes the core pages and published project details.",
    action: "View projects"
  }
};

const japaneseContent: PortfolioContent = {
  common: {
    navigation: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/experiments", label: "Experiments" },
      { href: "/writing", label: "Writing" },
      { href: "/now", label: "Now" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" }
    ],
    brandHomeLabel: "Zebso home",
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    primaryNavigationLabel: "Primary navigation",
    footerLinksLabel: "Footer links",
    contactLinksLabel: "Contact links",
    languageLabel: "Select language",
    englishLabel: "English",
    japaneseLabel: "Japanese",
    loadingLabel: "Loading Zebso",
    tagsLabel: "Tags",
    interfacePreviewLabel: "interface preview"
  },
  metadata: {
    site: {
      title: "Zebso",
      description:
        "Zebsoの考え方、デザイン、プロダクト制作を伝える静かなポートフォリオ。"
    },
    home: {
      title: "Zebso",
      description:
        "役に立つインターフェース、実験、ツールを作るプロダクト志向のポートフォリオ。"
    },
    projects: {
      title: "Projects",
      description:
        "課題、選択、実装へのZebsoの向き合い方を伝えるプロダクトとケーススタディ。"
    },
    experiments: {
      title: "Experiments",
      description:
        "AI、インターフェース、プロダクトの仕組みを探る小さなプロトタイプと技術実験。"
    },
    writing: {
      title: "Writing",
      description:
        "開発、デザイン、AI、エンジニアリング、プロダクト、学習についてのノート。"
    },
    now: {
      title: "Now",
      description:
        "Zebsoが現在つくり、学び、読み、考えていること。"
    },
    about: {
      title: "About",
      description: "Zebsoの背景と、ものづくりへの考え方。"
    },
    contact: {
      title: "Contact",
      description: "Zebsoへの連絡方法。"
    }
  },
  home: {
    hero: {
      eyebrow: "Zebso",
      title: "Building calm products with clear thinking.",
      text:
        "Zebsoは、役に立つインターフェース、AIワークフロー、複雑にならず育てられる小さな仕組みを探るプロダクト志向の開発者です。",
      projectsAction: "View projects",
      focusAction: "Current focus",
      panelLabel: "Current product focus",
      panelMeta: "Current focus",
      panelTitle: "Hugg!",
      panelText:
        "温かく軽やかなデジタル体験を探る、焦点を絞ったプロダクト研究。"
    },
    featured: {
      kicker: "Featured Projects",
      title: "Work that explains the process.",
      action: "All projects"
    },
    current: {
      kicker: "Current Focus",
      title: "What is being shaped now.",
      items: [
        {
          meta: "Building",
          title: "Hugg!",
          text: "小さなプロダクト体験のために、より温かな操作モデルを探っています。"
        },
        {
          meta: "Learning",
          title: "AI-assisted product work",
          text: "計画、批評、実装、文章のどこでAIが役立つかを研究しています。"
        },
        {
          meta: "Reading",
          title: "Product and interface notes",
          text: "明快で抑制されたプロダクト画面の事例を集めています。"
        }
      ]
    },
    latest: {
      kicker: "Latest Writing",
      title: "Notes from the work.",
      action: "Read writing",
      posts: [
        {
          title: "What I track before a product feels real",
          excerpt:
            "課題、制約、そしてアイデアを続ける価値を示す小さな兆しについての短いノート。",
          meta: "Product / Draft",
          href: "/writing"
        },
        {
          title: "Keeping AI workflows understandable",
          excerpt:
            "人の判断を隠さずにAIを使うためのノート。",
          meta: "AI / Draft",
          href: "/writing"
        }
      ]
    }
  },
  pages: {
    projects: {
      eyebrow: "Projects",
      title: "Products tell the story.",
      text:
        "プロダクトの仕事、仕組みへ育った実験、その背景にある判断を集めています。"
    },
    experiments: {
      eyebrow: "Experiments",
      title: "Ideas before they become products.",
      text:
        "AI、インターフェース、プロダクトの仕組みをめぐる軽量な実験です。育っていくものもあれば、制作から得たノートとして残るものもあります。"
    },
    writing: {
      eyebrow: "Writing",
      title: "Useful notes, not noise.",
      text:
        "プロダクトの判断、エンジニアリングからの学び、公開しながら学ぶ過程についての短い文章です。",
      emptyTitle: "Writing is being prepared.",
      emptyText: "最初の下書きが整い次第、役に立つノートを掲載します。",
      emptyAction: "Explore projects"
    },
    now: {
      eyebrow: "Now",
      title: "Current work, kept lightweight.",
      text:
        "いま取り組んでいることの小さなスナップショットです。活動の変化に合わせて、このページも更新していきます。"
    },
    about: {
      eyebrow: "About",
      title: "Building with care and curiosity.",
      text:
        "Zebsoは、明快なインターフェースと理解できる仕組みで、小さく役に立つプロダクトをつくる開発者です。",
      philosophyTitle: "Philosophy",
      philosophyText:
        "良いプロダクトが静かに感じられるのは、難しい判断がすでに済んでいるからです。学び、単純にし、正直な改善を届け続けます。",
      timelineTitle: "Timeline",
      timelineText:
        "現在はHugg!、AIと進めるプロダクト制作、小さな実験を長く使える仕組みへ育てることに取り組んでいます。",
      skillsTitle: "Skills",
      skillsText: "制作を形づくる領域。",
      skills: [
        "Product thinking",
        "React",
        "TypeScript",
        "UI design",
        "AI tools"
      ],
      toolsTitle: "Tools",
      toolsText: "考え、設計し、つくるために使うツール。",
      tools: ["Next.js", "Figma", "GitHub", "VS Code", "OpenAI"]
    },
    contact: {
      eyebrow: "Contact",
      title: "Start with a clear note.",
      text:
        "プロダクトの話、共同制作、フィードバックには、こちらから連絡できます。"
    }
  },
  projects: japaneseProjects,
  experiments: japaneseExperiments,
  writingPosts: japaneseWritingPosts,
  nowItems: japaneseNowItems,
  projectDetail: {
    openDemo: "Open demo",
    repository: "Repository",
    tags: "Tags",
    technologies: "Technologies",
    updated: "Updated",
    sections: [
      { title: "Overview", key: "overview" },
      { title: "Problem", key: "problem" },
      { title: "Research", key: "research" },
      { title: "Design", key: "design" },
      { title: "Development", key: "development" },
      { title: "Result", key: "result" },
      { title: "Reflection", key: "reflection" }
    ]
  },
  notFound: {
    title: "This page is not available.",
    text:
      "このポートフォリオでは、主要ページと公開済みのプロジェクト詳細のみを掲載しています。",
    action: "View projects"
  }
};

export const contentByLocale: Record<Locale, PortfolioContent> = {
  en: englishContent,
  ja: japaneseContent
};

export function getContent(locale: Locale) {
  return contentByLocale[locale];
}

export function getLocalizedProject(locale: Locale, slug: string) {
  return getContent(locale).projects.find((project) => project.slug === slug);
}
