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
    { href: "https://drive.google.com/file/d/1evVM75HwskoBCvoSEnSZoZ31XxBkW48p/view?usp=sharing", icon: NotebookIcon, label: "Resume" },
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
      company: "Fermi Energy",
      href: "https://www.fermienergy.com/",
      badges: [],
      location: "New York, NY",
      title: "Software Development Engineer",
      logoUrl: "/FermiLogo.jpeg",
      start: "May 2024",
      end: "Present",
      description:
        "I developed a real-time analytics dashboard for Fermi Energy’s Battery Intelligence Platform using Next.js and Node.js, enabling stakeholders to monitor production metrics and make data-driven decisions in EV battery manufacturing. I architected a GraphQL API layer to aggregate data from supply chain databases, optimizing query performance through batching and caching strategies and achieving a sustained 30 percent reduction in API response times. In collaboration with cross-functional teams, I transitioned legacy systems into a microservices architecture—maintaining over 30 RESTful APIs—which improved system scalability by 40 percent and reduced deployment time by 30 percent. Finally, I engineered Redis caching mechanisms to store frequently accessed data, reducing database load and improving page load times by 20 percent, ultimately delivering a smoother experience for engineers and analysts.",
    },
    {
      company: "Infosys",
      badges: [],
      href: "https://infosys.com",
      location: "Bengaluru, India",
      title: "Software Development Engineer",
      logoUrl: "/infosys_logo.jpeg",
      start: "Oct 2021",
      end: "Jun 2024",
      description:
        "I developed and maintained the Smart Content Navigator application for a Big-4 client, achieving 99 percent SLA compliance by architecting a Node.js/Express.js backend and a React.js frontend for efficient data rendering. To support over 2,000 concurrent users during load tests, I scaled system capacity by 50 percent through NGINX load balancing using the Least Connections algorithm. I also migrated the legacy codebase to React Redux Toolkit (RTK), which reduced the average page load time from 5.5 seconds to 1.2 seconds and improved UI responsiveness by 25 percent through optimized asynchronous flows and state management. Finally, I containerized the applications with Docker and migrated them to AWS ECR, cutting deployment time by 25 percent and reducing configuration errors by 20 percent.",
    },
    {
      company: "Wolfx Digital Agency",
      badges: [],
      href: "https://wolfx.io",
      location: "Mumbai, India",
      title: "DevOps Engineer",
      logoUrl: "/wolfx_logo.jpeg",
      start: "Apr 2021",
      end: "Sep 2021",
      description:
        "Delivered Customer360, a comprehensive CRM dashboard for a Fortune 500 retail client, which contributed to a 30 percent increase in organic traffic within three months as tracked by AWS Brand Analytics. Leveraged Prisma ORM with PostgreSQL on Supabase to eliminate boilerplate code and streamline database interactions. Optimized API payloads by 35 percent through GraphQL-driven selective fetching and React Query caching, reducing dashboard load time from 2.4 seconds to 1.8 seconds and cutting API response times from 500 ms to 320 ms. Streamlined reporting of web tables by integrating SheetJS and jsPDF to generate Excel and PDF reports dynamically",
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
      dates: "Oct 2024 - Jan 2025",
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
          href: "https://sorcerers-script.vercel.app/",
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
      dates: "Jul 2024 - Aug 2024",
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
