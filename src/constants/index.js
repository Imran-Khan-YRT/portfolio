import {
  mobile,
  backend,
  creator,
  web,
  cypress,
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
  me_logo,
  tekarsh_logo,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  moinul,
  rezaul,
  noor
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Automation Engineer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Competitive Programming",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Cypress",
    icon: cypress
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Automation Engineer",
    company_name: "MarginEdge",
    icon: me_logo,
    iconBg: "#FFF",
    date: "Jan 2021 - Present",
    points: [
      "Restructure the Automation codebase with newly implemented auth0 login",
      "Automate Regression suite",
      "Write clean robust code and maintain is stabilty",
      "Implementing the code maintaing cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Automation Engineer",
    company_name: "Tekarsh",
    icon: tekarsh_logo,
    iconBg: "#FFF",
    date: "Jan 2021 - Present",
    points: [
      "Restructure the Automation codebase with newly implemented auth0 login",
      "Automate Regression suite",
      "Write clean robust code and maintain is stabilty",
      "Implementing the code maintaing cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Always a cozy enviroment with Imran around. Not to mention his incredible work ethics & attention to details!",
    name: "Rezaul Islam",
    designation: "Mobile App Developer",
    company: "Marginedge",
    image: rezaul
  },
  {
    testimonial:
      "Need any help with automation, Better Call Imran! Voila solved!",
    name: "Moinul Hasan",
    designation: "Ex-Developer",
    company: "Marginedge",
    image: moinul
  },
  {
    testimonial:
      "His ability to process everything and then find a solution to any problem - Glad we met!",
    name: "Nazmur Rashid Noor",
    designation: "Developer",
    company: "Google",
    image: noor
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };