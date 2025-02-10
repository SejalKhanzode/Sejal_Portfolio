import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import javascript from "../assets/skills/js.png"
import java from "../assets/skills/java.png"
import C from "../assets/skills/C.png"
import mongodb from "../assets/skills/mongodb.png"
import tailwind from "../assets/skills/tailwind.png"
import redux from "../assets/skills/redux.png"
import sql from "../assets/skills/sql.png"
import node from "../assets/skills/node.png"
import nextjs from "../assets/skills/nextjs.png"
import git from "../assets/skills/git.png"
import github from "../assets/skills/github.png"
import bootstrap from "../assets/skills/bootstrap.png"
import express from "../assets/skills/express.png"
import react from "../assets/skills/react.png"

const SkillsData = [
    {
        id: 1,
        name: 'JavaScript',
        type: 'Programming Languages',
        image: javascript,   
        designation: 'console.log("Hello")'
    },
   
    {
        id: 3,
        name: 'Java',
        type: 'Programming Languages',
        image: java,
        designation: 'System.out.println("Hello")'
    },
    {
        id: 4,
        name: 'C',
        type: 'Programming Languages',
        image: C,
        designation: 'printf("Hello")'
    },
  
    {
        id: 7,
        name: 'HTML5',
        type: 'Front-End Technologies',
        image: html,
        designation: '<h1>Hello</h1>'
    },
    {
        id: 8,
        name: 'CSS3',
        type: 'Front-End Technologies',
        image: css,
        designation: 'h1{ color:red; }'
    },
    {
        id: 9,
        name: 'React.js',
        type: 'Front-End Technologies',
        image: react,
        designation: '<h1>Hello</h1>'
    },
    {
        id: 10,
        name: 'Next.js',
        type: 'Front-End Technologies',
        image: nextjs,
        designation: '<h1>Hello</h1>'
    },
   
    {
        id: 12,
        name: 'Tailwind CSS',
        type: 'Front-End Technologies',
        image: tailwind,
        designation: '<h1>Hello</h1>'
    },
  
    {
        id: 14,
        name: 'Bootstrap',
        type: 'Front-End Technologies',
        image: bootstrap,   designation: '<h1>Hello</h1>'
    },
    {
        id: 15,
        name: 'Redux',
        type: 'Front-End Technologies',
        image: redux,
        designation: '<h1>Hello</h1>'
    },
    {
        id: 16,
        name: 'Node.js',
        type: 'Back-End Technologies',
        image: node,
        designation: 'console.log("Hello")'
    },
    {
        id: 17,
        name: 'Express.js',
        type: 'Back-End Technologies',
        image:express,   designation: 'console.log("Hello")'
    },
  
    {
        id: 19,
        name: 'MongoDB',
        type: 'Databases',
        image: mongodb,
        designation: 'db.collection.insertOne({"hello": "world"})'
    },
    {
        id: 20,
        name: 'MySQL',
        type: 'Databases',
        image: sql,
        designation: 'SELECT "Hello, world!";'
    },
  
    {
        id: 22,
        name: 'Git',
        type: 'Version Controls',
        image: git,
        designation: 'echo "Hello";'
    },
    {
        id: 23,
        name: 'GitHub',
        type: 'Version Controls',
        image: github,
        designation: 'echo "Hello";'
    },
];

export default SkillsData



