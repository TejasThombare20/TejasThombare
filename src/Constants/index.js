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
  docker,
  threejs,
  Billion,
  QueryQuill,
  TextTwinAPI,
  BillionLOGO,
  IIITMLOGO,
  MarronLOGO,
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
    title: "Full stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Data Scrapper",
    icon: backend,
  },
  {
    title: "Product Management",
    icon: creator,
  },
];

const technologies = [
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Free Lancer",
    company_name: "1Billions-The Cafe",
    icon: BillionLOGO,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Led 1 Billion campus food delivery website using MERN and Firebase for seamless UX, data efficiency.Developing and maintaining web applications using React.js and other related technologies.",
      "Designed responsive UI with Tailwind CSS, Material-UI for engaging user experience.",
      "Implemented animations via React Motion for enhanced visuals and UX.",
      "Ensured user security using Firebase authentication, boosting trust and registrations.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "T&P website of ABV-IITM",
    icon: IIITMLOGO,
    iconBg: "#E6DEDD",
    date: "May2023- June-2023",
    points: [
      "Resolved frontend glitches addressed and fixed minor bugs and inconsistencies to enhance user experience.",
      "Responsive design optimized website layout to ensure seamless display across various screen sizes.",
      "Content integration added relevant data and content enhancements to enrich user engagement and information availability.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Marron Engineering Solution",
    icon: MarronLOGO,
    iconBg: "#383E56",
    date: "Aug 2023 - Nov 2023",
    points: [
      "Developed a sophisticated inventory management website from scratch, managing a product database of 2000+ items, utilizing the MERN stack.",
      "Successfully deployed an Express backend application on Google Cloud Platform (GCP) utilizing services like Compute Engine and Cloud database for scalability and database management.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed a streamlined backend API with Swagger documentation for optimal functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tejas proved me wrong.",
    name: "Vishnu Agrawal",
    designation: "SDE 1",
    company: "Salesforce",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tejas does.",
    name: "Gaurav Srivastav",
    designation: "Manager",
    company: "Marron Engineering Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Query Quill",
    description:
      "QueryQuill: A versatile platform for seamless querying and documentation, combining powerful search capabilities with intuitive document editing.",
    tags: [
      {
        name: "NextJS 13.5",
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
      {
        name: "WebHook",
        color: "pink-text-gradient",
      },
    ],
    image: QueryQuill,
    source_code_link: "https://github.com/TejasThombare20/QueryQuill",
  },
  {
    name: "TextTwin API",
    description:
      "TextTwinAPI: A robust API service leveraging OpenAI to calculate text similarity between two paragraphs, with comprehensive documentation for seamless integration via POSTMAN.",
    tags: [
      {
        name: "nextJS 14",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn",
        color: "pink-text-gradient",
      },
      {
        name: "Web Vitals",
        color: "pink-text-gradient",
      },
    ],
    image: TextTwinAPI,
    source_code_link: "https://github.com/TejasThombare20/TextTwin-API",
  },
  {
    name: "1Billion-Cafe",
    description:
      "1Billion - Your go-to food delivery platform in our campus area. Discover a wide range of delicious meals from local restaurants. Convenient ordering process with real-time tracking. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },

      {
        name: "Framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: Billion,
    source_code_link:
      "https://github.com/TejasThombare20/1Billion-The-Startup-CAFE",
  },
];

export { services, technologies, experiences, testimonials, projects };
