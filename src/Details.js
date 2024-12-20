// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import vue from "./assets/techstack/vue.webp";
import js from "./assets/techstack/js.png";
import tailwind from "./assets/techstack/tailwind.png";
import vscode from "./assets/techstack/vscode.png";
import git from "./assets/techstack/git.png";
import postman from "./assets/techstack/postman.png";
import bash from "./assets/techstack/bash.png";
import java from "./assets/techstack/java.svg";
import linux from "./assets/techstack/linux.svg";
import postgresql from "./assets/techstack/postgresql.svg";
import sqlite from "./assets/techstack/sqlite.svg";
import python from "./assets/techstack/python.svg";
// Porject Images
import projectImage1 from "./assets/projects/pluxee.png";
import projectImage2 from "./assets/projects/finfin.png";
import projectImage3 from "./assets/projects/sudoku.png";
import projectImage4 from "./assets/projects/raspberry.jpg";
import projectImage5 from "./assets/projects/homeautomation.png";
import projectImage6 from "./assets/projects/project3.jpg";
// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Thibaut Capuano",
  tagline: "I am an Analyst at 5th Floor",
  img: profile,
  about_1: `I specialize in engineering and developing software solutions. With a Master's in Computer Science and a specialization in Data Science, I am keen on learning more about software architecture, performance optimization, and machine learning.`,
  about_2: `My expertise includes software engineering, agile backend development, Domain-Driven Design, and SaaS. I worked as a technical analyst and developer for multiple years, helping set up energy operation management platform. I now work as an analyst at 5th Floor contributing to the development of a business management SaaS tailored for nurseries and child-related centers.`,
  about_3: `I love problem-solving challenges, enjoy collaborative teamwork, and I'm keen on learning and growing. 👩‍💻` // Currently seeking opportunities in software architecture and analysis. Feel free to reach out to discuss potential collaborations or job opportunities! 😊👩‍💻`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/thibaut-capuano",
  github: "https://www.github.com/Tib612",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Analyst",
    Company: `5th Floor Software`,
    Location: "Watermael-Boitsfort , Belgium",
    Type: "Full Time",
    Duration: "August 2024 - Now",
  },
  {
    Position: "Architecte/Software Engineer",
    Company: `Haulogy`,
    Location: "Liège, Belgium",
    Type: "Full Time",
    Duration: "July 2021 - July 2024",
  },
  {
    Position: "Machine learning developer",
    Company: `Blacklight analytics`,
    Location: "Liège, Belgium",
    Type: "Full Time",
    Duration: "Sep 2020 - July 2021",
  },
  {
    Position: "Internship",
    Company: `Université de Montréal`,
    Location: "Montreal, Canada",
    Type: "Internship",
    Duration: "Feb 2020 - May 2020",
  },
  {
    Position: "Developer",
    Company: `open Summer of codeopen`,
    Location: "Brussels, Belgium",
    Type: "Internship",
    Duration: "July 2019 - July 2019",
  },
  {
    Position: "Internship",
    Company: `Service public de Wallonie`,
    Location: "Namur, Belgium",
    Type: "Internship",
    Duration: "Jan 2017 - May 2017",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master's degree, IT",
    Company: "Université de Namur",
    Location: "Namur, Belgium",
    Type: "Full Time",
    Duration: "Sept 2017 - Jun 2020",
  },
  {
    Position: "ERASMUS: Computer Science",
    Company: "Högskolan i Halmstad",
    Location: "Halmstad, Sweden",
    Type: "Full Time",
    Duration: "Sept 2016 - Jan 2016",
  },
  {
    Position: "Bachelor's degree, IT",
    Company: `HeNaLLux`,
    Location: "Namur, Belgium",
    Type: "Full Time",
    Duration: "Sept 2014 - Jun 2017",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  vue: vue,
  tailwind: tailwind,
  vscode: vscode,
  postman: postman,
  git: git,
  python: python,
  postgresql: postgresql,
  linux: linux,
  sqlite: sqlite,
  java: java,
  bash: bash
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Pluxee API",
    image: projectImage1,
    description: `A python API to access Pluxee (Sodexo) balance and transactions. It also provides an asynchronous API.`,
    techstack: "Python, Pytest",
    previewLink: "https://pypi.org/project/pluxee-api/",
    githubLink: "https://github.com/Tib612/pluxee-api",
  },
  {
    title: "Finance dashboard",
    image: projectImage2,
    description: `A personal finance dashboard along with a python backend and per user DB.`,
    techstack: "Vue, Tailwind, Vite, HTML/CSS, JavaScript, Shadcn, Python",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Home server",
    image: projectImage4,
    description: `A home server accessible through VPN hosting a NAS, RetroPie, Picture server, Home assistant, Seedbox...`,
    techstack: "Shell",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Sudoku solver",
    image: projectImage3,
    description: `Given a Sudoku problem, provide a quick solution if the sudoku is solvable along with a step by step explanation.`,
    techstack: "HTML/CSS, PyScript",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Hass Pluxee integration",
    image: projectImage5,
    description: `Helped on developing and maintaining a Home assistant module to display Pluxee balance on a dashboard.`,
    techstack: "Python",
    previewLink: "https://github.com/Tib612/ha-custom-component-sodexo-be",
    githubLink: "https://github.com/Tib612/ha-custom-component-sodexo-be",
  },
  {
    title: "Smart mirror",
    image: projectImage6,
    description: `Build and configure a smart mirror using Home assistant. It displays agenda, meteo and todo list`,
    techstack: "Raspberry, Home assistant, Shell",
    previewLink: "",
    githubLink: "",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hi@example.com",
  phone: "+12 345/67.89.10",
  linkedin: "https://www.linkedin.com/in/thibaut-capuano",
};
