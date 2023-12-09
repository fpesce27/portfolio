import {
    DiReact,
    DiAngularSimple,
    DiPython,
    DiFirebase,
    DiGit,
    DiJava,
    DiJavascript1,
    DiHtml5,
    DiCss3
} from 'react-icons/di'
import {TbBrandNextjs} from 'react-icons/tb'
import styles from "@/styles/About.module.css";
import Citas from "@/public/Citas.png";
import ChatApp from "@/public/ChatApp.png";
import Kicote from "@/public/Kicote.png";
import OnlineManga from "@/public/OnlineManga.png";
import Portfolio from "@/public/Portfolio.png";
import OnlineMangaMobile from "@/public/OnlineMangaMobile.png";
import CitasMobile from "@/public/CitasMobile.png";
import ImagesFromUrl from "@/public/ImagesFromUrl.png";
import Monitoreo from "@/public/Monitoreo.png";

const projects = [
    /* {
      name: "First Ecommerce",
      description:
        "Being part of a course I took, my first fullstack project. Its a simple ecommerce with a CRUD of users and products.",
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
    }, */
    {
      name: "Chat App",
      description:
        "An app that I made with a friend, where I focus mainly on the frontend and he on the backend. It's a chat app where you can create rooms and chat with your friends.",
      link: "",
      image: ChatApp,
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
        link: '',
      image: Kicote,
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
        link: 'https://fpesce27.github.io/portfolio/',
      github: 'https://github.com/fpesce27/portfolio',
      image: Portfolio,
      tecnologies: [
        {
          icon: <TbBrandNextjs className={styles.icon}/>,
          name: 'Next.js',
          link: 'https://nextjs.org/',
        },
      ],
    },
    {
      name: 'Online Manga',
      description:
        'A manga reader where you can read your favorite mangas online, with a own api to get the mangas and chapters',
        link: 'https://onlinemanga.vercel.app/',
      github: 'https://github.com/fpesce27/my-anime-list-clone',
      image: OnlineManga,
      tecnologies: [
        {
          icon: <TbBrandNextjs className={styles.icon}/>,
          name: 'Next.js',
          link: 'https://nextjs.org/',
        },
      ],
    },
    {
      name: 'Online Manga Mobile',
      description:
        'A manga reader where you can read your favorite mangas online, with a own api to get the mangas and chapters',
        link: '',
      github: 'https://github.com/fpesce27/Online-Manga-Mobile',
      image: OnlineMangaMobile,
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
      name: "100 Dates Mobile (WIP)",
      description:
        "An app where you can keep track of the dates you've been on with your couple, following the 100 Dates trend.",
        link: "",
      github: 'https://github.com/fpesce27/100-Citas-Mobile',
      image: CitasMobile,
      tecnologies: [
        {
          icon: <DiReact className={styles.icon}/>,
          name: 'React Native',
          link: 'https://reactnative.dev/',
        },
        {
          icon: <DiFirebase className={styles.icon}/>,
          name: "Firebase",
          link: "https://firebase.google.com/",
        },
      ],
    },
    {
      name: "Images from url",
      description:
        "An api where, by sending the url, you get a list of the images urls. Also, you can filter by using the css style",
        link: "https://images-from-url.vercel.app/api/images",
      github: 'https://github.com/fpesce27/images-from-url',
      image: ImagesFromUrl,
      tecnologies: [
        {
          icon: <DiJavascript1 className={styles.icon}/>,
          name: 'Express',
          link: 'https://expressjs.com/es/',
        },
      ],
      showCustomImage: true,
    },
    {
      name: "Monitoreo de Estado de Servicio",
      description:
        "A web app where you as a user can join comunities to report certain incidents in services from your city. Also, you can create your own comunity and invite people to join it.",
        link: "https://tpa-mama-grupo-06.onrender.com/",
      github: 'https://github.com/fpesce27/2023-tpa-mama-grupo-06',
      image: Monitoreo,
      tecnologies: [
        {
          icon: <DiJava className={styles.icon}/>,
          name: 'Java (Javalin)',
          link: 'https://javalin.io/',
        },
        {
          icon: <DiHtml5 className={styles.icon}/>,
          name: 'HTML',
          link: 'https://es.wikipedia.org/wiki/HTML',
        },
        {
          icon: <DiCss3 className={styles.icon}/>,
          name: 'CSS',
          link: 'https://es.wikipedia.org/wiki/CSS',
        },
      ],
      showCustomImage: true,
    },
];

projects.reverse()

export default projects
