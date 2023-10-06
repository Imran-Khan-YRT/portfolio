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
  ecoFarming,
  socioPedial,
  amazonUI,
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
    id: "projects",
    title: "Projects"
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
    name: "mimodz",
    description: "Eco farming with new technology. A revolution in agri-tech section in Gambia. Watch out!!!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI library",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      }
    ],
    image: ecoFarming,
    source_code_link: "https://mimodz.com/",
  },
  {
    name: "Sociopedial",
    description:
      "Stay connected with your friends. Add,Like,Share. WHO NEEDS FACEBOOK when you have Sociopedial?",
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
        name: "MUI library",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      }
    ],
    image: socioPedial,
    source_code_link: "https://github.com/Imran-Khan-YRT/SOCIAL_APP",
  },
  {
    name: "Amazon UI Clone",
    description:
      "Buy, Sell, watch movies for free. You don't have to pay cause there is no payment option",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: amazonUI,
    source_code_link: "https://challenge-36772.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };