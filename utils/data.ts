import FooterLinks from "./FooterLinks";
import NavLink from "./NavLink";
import Projects from "./projects";
import Skills from "./Skills";

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

export const NAV_LINKS: NavLink[] = [
  {
    id: 1,
    label: "Home",
    page: "home",
  },
  {
    id: 2,
    label: "About",
    page: "about",
  },
  {
    id: 3,
    label: "Projects",
    page: "projects",
  },
  {
    id: 4,
    label: "Contact",
    page: "contact",
  },
];

export const skills: Skills[] = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Java" },
  { skill: "SpringBoot" },
];

export const projects: Projects[] = [
  {
    id: 1,
    title: "Nike Sneakers Store",
    description:
      "Nike Sneaker Store is a Dropshipping store for Sneakers, which enable users view available sneakers and purchase them easily from their comfort zone.",
    img: "/Nike-Dropshipping-Store.png",
    githubLink: "https://github.com/codexive-zech/Nike-Shoes-Store",
    liveLink: "https://nikesneakr.netlify.app/",
  },
  {
    id: 2,
    title: "Jobstr App",
    description:
      "Jobstr is a powerful and easy to use job tracking application system that helps users to in managing of jobs, organizing of jobs and tracking of jobs app for users.",
    img: "/jobstr.png",
    githubLink: "https://github.com/codexive-zech/jobster",
    liveLink: "https://jobstr.netlify.app/",
  },
  {
    id: 3,
    title: "Homey Soft Store",
    description:
      "Homey Soft is an E-commerce store which enable users to buy varieties of comfortable home furniture for personal use.",
    img: "/HomeySoft.png",
    githubLink: "https://github.com/codexive-zech/Homey-Soft-ecommerce",
    liveLink: "https://homeysoft.netlify.app/",
  },
  {
    id: 4,
    title: "Lilies Food App",
    description:
      "Lilies Food is a food ordering app which allows users to order for delicious meals they are craving for and have it delivered to them.",
    img: "/lilies-food.png",
    githubLink: "https://github.com/codexive-zech/Lilies-Food",
    liveLink: "https://homeysoft.netlify.app/",
  },
  {
    id: 5,
    title: "Tint and Shades Color",
    description:
      "Tints and shades generator tool is a tool that allows it's users to easily get lighter and darker variations of any color they want.",
    img: "/tint-shade-color.png",
    githubLink: "https://github.com/codexive-zech/Light-and-Dark-Color-Gen",
    liveLink: "https://liliesfood.netlify.app/",
  },
];
