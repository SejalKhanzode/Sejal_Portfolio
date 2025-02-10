import mongodb from "../assets/skills/mongodb.png";
import tailwind from "../assets/skills/tailwind.png";
import node from "../assets/skills/node.png";
import github from "../assets/skills/github.png";
import express from "../assets/skills/express.png";
import react from "../assets/skills/react.png";
import globe from "../assets/skills/globe.png";
import redux from "../assets/skills/redux.png"
import formspree from "../assets/skills/formspree.png"
import skillFlare from "../assets/project/skillflare.png";
import portfolio from "../assets/project/portfolio.png";

const ProjectsData = [
    {
        icon: portfolio,
        name: "Portfolio",
        duration: "10/2024-01/2025",
        links: [
            {
                src: globe,
                name: "Website Link",
                link: "https://portfolio-sejalkhanzode.vercel.app/",
              },
          {
            src: github,
            name: "Github Link",
            link: "https://github.com/SejalKhanzode/Sejal_Portfolio",
          },
        ],
        main: [
          "A fully responsive Portfolio site to showcase my work."  ],
        tech: [
          { name: "React", src: react },
           { name: "Formspree",src: formspree },
          { name: "Tailwind", src: tailwind },  
         
        ],
        flex: 10,
      },
  {
    icon: {},
    name: "Supremacy",
    duration: "10/2024-01/2025",
    links: [
      {
        src: github,
        name: "Github Link",
        link: "https://github.com/SejalKhanzode/Supremacy",
      },
    ],
    main: [
      " Developing a MERN stack web application designed to help students gain proficiency in Data Structures and Algorithms (DSA) through interactive quizzes and problem-solving exercises.",
      " Implementing features that track user progress and provide personalized guidance, helping students identifyareas of improvement and achieve their learning goals.",
    ],
    tech: [
      { name: "React", src: react },
      { name: "Node.js", src: node },
      { name: "MongoDB", src: mongodb },
      { name: "Express",src: express },
      { name: "Tailwind", src: tailwind },
    ],
    flex: 10,
  },
  {
    icon: skillFlare,
    name: "SkillFlare",
    duration: "02/2023 - 07/2023",
    links: [
      {
        src: globe,
        name: "Website Link",
        link: "https://skill-flare.vercel.app/",
      },
      {
        src: github,
        name: "Github Link",
        link: "https://github.com/SejalKhanzode/skillflare_clg.git",
      },
    ],
    main: [
      "SkillFlare is a innovative EdTech platform that connects learners with industry-leading experts, enabling them to access high-quality education and gain valuable skills for career advancement.",
      "Empowers users to create, consume, and rate educational content, fostering an interactive learning environment led by industry experts.",
    ],
    tech: [
        { name: "React", src: react },
        { name: "Node.js", src: node },
        { name: "MongoDB", src: mongodb },
        { name: "Express",src: express },
        { name: "Tailwind", src: tailwind },
        { name: "Redux", src: redux },
       
      {},
      {},
      {},
    ],
    flex: 5,
  },
];

export default ProjectsData;
