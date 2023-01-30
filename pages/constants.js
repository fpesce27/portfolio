import {
    DiReact,
    DiAngularSimple,
    DiPython,
    DiFirebase,
    DiGit,
    DiJava,
} from 'react-icons/di'
import {TbBrandNextjs} from 'react-icons/tb'
import styles from "@/styles/About.module.css";
import ChatApp from "@/public/ChatApp.png";
import FirstEcommerce from "@/public/FirstEcommerce.png";
import Dates from "@/public/100Dates.png";
import Kicote from "@/public/Kicote.png";
import Portfolio from "@/public/Portfolio.png";

const projects = [
    {
      name: "First Ecommerce",
      description:
        "Being part of a course I took, my first fullstack project. Its a simple ecommerce with a CRUD of users and products.",
      image: FirstEcommerce,
      link: "https://curso-java-frontend.web.app/",
      github: 'https://github.com/fpesce27/Frontend',
      tecnologies: [
        {
          icon: <DiAngularSimple className={styles.icon}/>,
          name: "Angular",
          link: "https://angular.io/",
        },
        {
          icon: <DiJava className={styles.icon}/>,
          name: "Springboot",
          link: "https://spring.io/projects/spring-boot",
        },
      ],
    },
    {
      name: "100 Dates",
      description:
        "My first independent project. It's an app where you can keep track of the dates you've been on.",
      image: Dates,
      link: "https://citas-85ff9.web.app/",
      github: 'https://github.com/fpesce27/100-Dates',
      tecnologies: [
        {
          icon: <DiAngularSimple className={styles.icon}/>,
          name: "Angular",
          link: "https://angular.io/",
        },
        {
          icon: <DiFirebase className={styles.icon}/>,
          name: "Firebase",
          link: "https://firebase.google.com/",
        },
      ],
    },
    {
      name: "Chat App",
      description:
        "An app that I made with a friend, where I focus mainly on the frontend and he on the backend. It's a chat app where you can create rooms and chat with your friends.",
      image: ChatApp,
      link: "",
      github: 'https://github.com/fpesce27/chatApp',
      tecnologies: [
        {
          icon: <DiPython className={styles.icon}/>,
          name: "Flask",
          link: "https://www.python.org/",
        },
      ],
    },
    {
      name: 'Kicote',
      description: 
        'My first Mobile App. An ecommerce where the school can sell their products to the students, and the students can buy them. It is fully functional, with notifications, authentication, etc.',
      image: Kicote,
      link: '',
      github: 'https://github.com/fpesce27/KiCoTe',
      tecnologies: [
        {
          icon: <DiReact className={styles.icon}/>,
          name: 'React Native',
          link: 'https://reactnative.dev/',
        },
        {
          icon: <DiFirebase className={styles.icon}/>,
          name: 'Firebase',
          link: 'https://firebase.google.com/',
        },
      ],
    },
    {
      name: 'Portfolio',
      description:
        'My portfolio, where I show my projects and my skills',
      image: Portfolio,
      link: 'https://fpesce27.github.io/portfolio/',
      github: 'https://github.com/fpesce27/portfolio',
      tecnologies: [
        {
          icon: <TbBrandNextjs className={styles.icon}/>,
          name: 'Next.js',
          link: 'https://nextjs.org/',
        },
      ],
    }
];

projects.reverse()

export default projects