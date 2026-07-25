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
    privacyLabel: string;
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
    privacy: MetadataContent;
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
    privacy: PageHeaderContent & {
      items: ContentCard[];
    };
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
      "ただのSNSではなく、一緒にいる時間をもっと意味のあるものにするためのプラットフォーム。ひとりで瞬間を共有するのではなく、誰かと過ごすことから投稿が始まります。",
    tagline: "日常のプロダクト体験に、少しやわらかい操作感を設計する。",
    overview:
      "Hugg!は、シンプルな操作を騒がしく飾らずに、少し温かく感じられるものにするためのプロダクト研究です。",
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
      "アイデアを整理し、開発を速め、考えをプロダクトへ近づけるための、もう一つの脳のように働くAIツール群。",
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
    "Hugg!を通して、一緒にいる時間が少し意味を持つような体験を探っています。",
  Learning:
    "AIを、考えを整理してプロダクトを早く形にするための相棒として使う方法を試しています。",
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
    interfacePreviewLabel: "interface preview",
    privacyLabel: "Privacy"
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
    },
    privacy: {
      title: "Privacy",
      description:
        "A short privacy notice about cookies and external links on the Zebso portfolio."
    }
  },
  home: {
    hero: {
      eyebrow: "Zebso",
      title: "Technology for more meaningful moments.",
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
        "I like building products that solve small problems and create memorable experiences. My goal isn't just to ship software—it's to build something people genuinely enjoy using.",
      philosophyTitle: "Philosophy",
      philosophyText:
        "I don't start with technology. I start with one question: \"How should people feel after using this?\"",
      timelineTitle: "Timeline",
      timelineText:
        "The current chapter is focused on Hugg!, AI-assisted product workflows, and turning small experiments into durable systems.",
      skillsTitle: "Skills",
      skillsText: "Areas that shape the work.",
      skills: [
        "Product thinking",
        "Building products",
        "Designing experiences",
        "Rapid prototyping",
        "AI-assisted development",
        "Frontend engineering",
        "Human-centered thinking"
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
    },
    privacy: {
      eyebrow: "Privacy",
      title: "A small, clear privacy note.",
      text:
        "This portfolio keeps privacy simple. It does not use advertising cookies, analytics, or hidden tracking.",
      items: [
        {
          meta: "Cookie",
          title: "Language preference",
          text:
            "The site may store a small cookie named zebso_locale when you choose EN or JA. It is used only to remember your language preference for one year."
        },
        {
          meta: "Data",
          title: "No analytics",
          text:
            "This site does not collect analytics data, show ads, or use third-party tracking scripts."
        },
        {
          meta: "Links",
          title: "External services",
          text:
            "Contact links may open services such as GitHub, X, or email. Those services handle data according to their own policies."
        }
      ]
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
    interfacePreviewLabel: "interface preview",
    privacyLabel: "Privacy"
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
        "意味のある時間をつくる技術、インターフェース、AIワークフローを探るポートフォリオ。"
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
    },
    privacy: {
      title: "Privacy",
      description:
        "Zebsoポートフォリオで使うCookieと外部リンクについての短いプライバシー表記。"
    }
  },
  home: {
    hero: {
      eyebrow: "Zebso",
      title: "Technology for more meaningful moments.",
      text:
        "Zebsoは、役に立つインターフェース、AIワークフロー、そして複雑になりすぎず育てていける小さな仕組みを探っている開発者です。",
      projectsAction: "View projects",
      focusAction: "Current focus",
      panelLabel: "Current product focus",
      panelMeta: "Current focus",
      panelTitle: "Hugg!",
      panelText:
        "温かく軽やかなデジタルのやり取りを探る、焦点を絞ったプロダクト研究。"
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
          text: "Hugg!を通して、一緒にいる時間が少し意味を持つような体験を探っています。"
        },
        {
          meta: "Learning",
          title: "AI-assisted product work",
          text: "AIを、考えを整理してプロダクトを早く形にするための相棒として使う方法を試しています。"
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
        "小さな問題を解きながら、記憶に残る体験をつくるプロダクトが好きです。ただソフトウェアを出すだけではなく、使っていてちゃんと楽しいと思えるものをつくりたいです。",
      philosophyTitle: "Philosophy",
      philosophyText:
        "技術から考え始めるのではなく、まず「使ったあとにどんな気持ちが残るべきか」から考えます。",
      timelineTitle: "Timeline",
      timelineText:
        "現在はHugg!、AIと進めるプロダクト制作、小さな実験を長く使える仕組みへ育てることに取り組んでいます。",
      skillsTitle: "Skills",
      skillsText: "つくるものの方向性を決める領域。",
      skills: [
        "Product thinking",
        "Building products",
        "Designing experiences",
        "Rapid prototyping",
        "AI-assisted development",
        "Frontend engineering",
        "Human-centered thinking"
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
    },
    privacy: {
      eyebrow: "Privacy",
      title: "A small, clear privacy note.",
      text:
        "このポートフォリオでは、プライバシーまわりもできるだけシンプルにしています。広告Cookie、アクセス解析、見えないトラッキングは使っていません。",
      items: [
        {
          meta: "Cookie",
          title: "Language preference",
          text:
            "EN / JAを選んだとき、zebso_locale という小さなCookieを保存することがあります。これは表示言語を1年間覚えておくためだけに使います。"
        },
        {
          meta: "Data",
          title: "No analytics",
          text:
            "このサイトでは、アクセス解析データの収集、広告表示、第三者トラッキングスクリプトの利用は行っていません。"
        },
        {
          meta: "Links",
          title: "External services",
          text:
            "GitHub、X、EmailなどのContactリンクを開くと、外部サービスへ移動します。移動先でのデータの扱いは、それぞれのサービスのポリシーに従います。"
        }
      ]
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
