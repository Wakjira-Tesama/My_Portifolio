// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Service ",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company_name: "Self Employed",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Self Employed",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Internship  ",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2024 - Jan 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "independent",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Software Engineering student, studying core courses such as Algorithms, Databases, Web Development, and Software Design, gaining practical and theoretical knowledge in building software systems.",
    name: "ASTU",
    designation: "2023",
    company: "present",
    image: user1,
  },
  {
    testimonial:
      "AI Agentics , learning how intelligent agents perceive, reason, and act autonomously, gaining knowledge in designing and implementing AI-driven systems.",
    name: "FTL Agentic",
    designation: "2025",
    company: "2026",
    image: user2,
  },
  {
    testimonial:
      "Website Development , learning how to design, build, and maintain interactive and responsive websites using modern web technologies and best practices.",
    name: "Evan",
    designation: "2024",
    company: "2025",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "E-Learning ",
    description:
      "E-Learning website is one of the modern learning platforms used by students world-wide and allows users to access high-quality courses in interactive and various digital formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwaindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Wakjira-Tesama/E-Learning-",
    live_site_link: "https://e-learning-web-app.web.app/",
  },
  {
    name: "Oromia Tourism",
    description:
      "Oromia Tourism is one of the emerging tourism platforms used by travelers world-wide and allows users to explore high-quality cultural, historical, and natural attractions in various digital formats.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link:
      "https://github.com/Wakjira-Tesama/Oromia-Tourism-Website",
    live_site_link: "https://Users.netlify.app/",
  },
  {
    name: "Job Finder",
    description:
      "Job Finder is one of the modern employment platforms used by job seekers world-wide and allows users to discover high-quality job opportunities in various industries and digital formats.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Wakjira-Tesama/Job-Finder",
    live_site_link: "https://job-finder-react.netlify.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "A React JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "agile",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Wakjira-Tesama/Netflix",
    live_site_link: "https://netflix-clone-react.vercel.app/",
  },
  {
    name: "Oda Special ",
    description:
      "Oda Special  is one of the leading educational institutions serving students nationwide and provides high-quality learning environments through structured programs and modern teaching approaches.",
    tags: [
      {
        name: "jsreact",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link:
      "https://github.com/Wakjira-Tesama/ODA-Specail-Boarding-School",
    live_site_link: "https://oda-special.netlify.app/",
  },
  {
    name: "Farmer with Market",
    description:
      "Farmer with Market is one of the modern agricultural platforms used by farmers world-wide and allows them to connect directly with buyers to trade high-quality products through various digital channels.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/Wakjira-Tesama/Farmer_with_Market",
    live_site_link: "https://farmer-with-market.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@Wakjira-b8c",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/wakjira-tesama",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://www.instagram.com/Wak-Jira/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Wakjira-Tesama/",
  },
] as const;
