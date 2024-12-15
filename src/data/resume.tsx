import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shreemauli Raut",
  initials: "SR",
  url: "https://www.mauliciousware.com",
  location: "Binghamton, NY",
  locationLink: "https://maps.app.goo.gl/xFh2P25Ww8NRG3fB9",
  description:
    "Software Development Engineer: I debug the world, one line at a time.",
  summary:
    "I'm an international-level jump rope athlete and a Master's student in Computer Science at SUNY Binghamton, set to yeet my cap in May 2026. I run a [YouTube channel](https://www.youtube.com/@shreemauliraut4524) for coding and gaming, engage in hackathons, and at [Infosys](https://www.infosys.com/), I have solid experience working with a 'big' tech client (let's just say they're fruit-based). At [Wolfx](https://wolfx.io/), a startup where I navigated through chaos like it's just another Tuesday.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Rust",
    "Postgres",
    "GraphQL",
    "Docker",
    "Java",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sraut2@binghamton.edu",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MrMaddy7",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shreemauli-raut/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Shreemauli7",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@shreemauliraut4524",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Infosys",
      href: "https://infosys.com",
      badges: [],
      location: "Bengaluru, India",
      title: "Software Development Engineer",
      logoUrl: "/infosys_logo.jpeg",
      start: "Oct 2021",
      end: "Jun 2024",
      description:
        "Expanded system capacity by 73%, supporting 2,300 concurrent users through NGINX load balancing with the Least Connections method. Led a legacy codebase migration, improving performance by 70% with React Redux Toolkit (RTK) and future-proofing with TypeScript.Engineered a Smart Content Navigator for a Big-4 client, achieving 99% SLA compliance with a Node.js/Express.js backend and React.js frontend. Streamlined deployments by leveraging Docker and migrating to AWS ECR, enhancing deployment efficiency by 40% and system reliability by 30%.",
    },
    {
      company: "Wolfx Digital Agency",
      badges: [],
      href: "https://wolfx.io",
      location: "Mumbai, India",
      title: "Software Engineer",
      logoUrl: "/wolfx_logo.jpeg",
      start: "Jul 2021",
      end: "Sep 2021",
      description:
        "Engineered 'Customer360,' a CRM dashboard for a Fortune 500 retail client, using Next.js, Node.js, and GraphQL, achieving a 40% faster data retrieval through API optimization and query caching.Implemented Prisma ORM with PostgreSQL on Supabase, boosting developer productivity by 25%. Optimized frontend performance with TypeScript and custom React Query hooks, improving dashboard load times by 30% and enhancing UI responsiveness.Reduced manual reporting time by 60% by creating an automated Excel and PDF export system in Next.js.",
    },
    {
      company: "Wolfx Digital Agency",
      badges: [],
      href: "https://wolfx.io",
      location: "Mumbai, India",
      title: "DevOps Engineer",
      logoUrl: "/wolfx_logo.jpeg",
      start: "Apr 2021",
      end: "Jun 2021",
      description:
        "Created 10 strategic SEO landing pages for Wolfx.io, driving a 40% increase in organic traffic within 3 months.Improved system architecture with microservices, maintained 30+ REST APIs, and redesigned UI/UX, boosting customer satisfaction by 88%.Secured user authentication with Google OAuth and JSON Web Tokens, reducing unauthorized access attempts by 15%.Enhanced performance using Redis caching and ensured secure handling of sensitive documents with AWS S3 and pre-signed URLs.",
    },
  ],
  education: [
    {
      school: "SUNY at Binghamton",
      href: "https://www.binghamton.edu/occ/",
      degree: "Masters's Degree of Computer Science (MSCS)",
      logoUrl: "/bing.jpeg",
      start: "2024",
      end: "2026",
    },
    {
      school: "NMIMS University",
      href: "https://www.nmims.edu/",
      degree: "Bachelor's Degree of Computer Engineering (B-Tech)",
      logoUrl: "/mpstme_logo.jpeg",
      start: "2016",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "ColorStack | Binghamton University",
      dates: "Sept 2024",
      location: "Binghamton, New York",
      description:
        "Winners of the 'Best UI' Category: Project Name: B-Happening : B-Happening is a dynamic, location-based platform that keeps Binghamton University students informed about real-time events. It allows personalized filtering of events by specific campus locations, enhancing campus life with ease.",
      image:
        "/ColorStack.jpeg",
      links: [],
    },
  ],
} as const;
