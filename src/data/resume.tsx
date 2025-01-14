import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shreemauli Raut",
  initials: "SR",
  url: "https://www.mauliciousware.com",
  location: "Binghamton, NY",
  locationLink: "https://maps.app.goo.gl/xFh2P25Ww8NRG3fB9",
  description:
    "Software Engineer | Athlete",
  summary:
    "I'm an international-level jump rope athlete and a Master's student in Computer Science at SUNY Binghamton, set to yeet my cap in May 2026. I run a [YouTube channel](https://www.youtube.com/@shreemauliraut4524) for coding and gaming, engage in hackathons, and at [Infosys](https://www.infosys.com/), I have solid experience working with a 'big' tech client (let's just say they're fruit-based). At [Wolfx](https://wolfx.io/), a startup where I navigated through chaos like it's just another Tuesday. When I'm not building software or practicing jump rope, you'll find me cruising with the [Bing Skate Club](https://careertools.binghamton.edu/organizations/binghamton-skate-club/).",
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
    { href: "https://drive.google.com/file/d/12PZByFwgxTn0U85bYV0fWVbU0UEaZhL5/view?usp=sharing", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "sraut2@binghamton.edu",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mauliciousware",
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
      title: "Sorcerer's Script",
      href: "https://sorcerers-script.vercel.app/",
      dates: "Sept 2023 - Dec 2023",
      active: true,
      description:
        "Engineered a Wizarding World-themed knowledge base application with React Redux Toolkit and SCSS",
        technologies: [
          "React.js",
          "React Redux Toolkit (RTK)",
          "SCSS",
          "OAuth",
          "Mongoose",
          "MongoDB",
          "Node.js",
          "Express",
          "Docker",
        ],
      links: [
        {
          type: "Website",
          href: "https://sorcerers-script-git-main-mauliciouswares-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://potfolio-website.s3.us-west-1.amazonaws.com/vid1.mp4",
    },
    {
      title: "Being Desi",
      href: "https://beingdesi.online/show_products",
      dates: "Dec 2020 - Dec 2022",
      active: true,
      description:
        "Designed and developed an e-commerce website for 'Being Desi,' showcasing and selling panchgavya and organic products, with a focus on promoting healthy living",
      technologies: [
        "HTML",
        "CSS",
        "NodeJs",
        "AWS EC2",
        "S3",
        "Route53",
      ],
      links: [
        {
          type: "Website",
          href: "https://beingdesi.online/show_products",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video: "https://potfolio-website.s3.us-west-1.amazonaws.com/vid2.mp4",
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
