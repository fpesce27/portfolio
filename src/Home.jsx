import React from "react";
import { Grommet } from "grommet";
import "./App.css";
import Main from "./modules/main";
import AboutMe from "./modules/aboutMe";
import ContactMe from "./modules/contactMe";
import Projects from "./modules/projects";

const theme = {
  global: {
    colors: {
      main: "#0d1b2a",
      secondary: "#1b263b",
      accent: "#415a77",
      accent2: "#778da9",
      accent3: "#e0e1dd",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

export const handleClick = (section) => {
  const element = document.getElementById(section);
  element.scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  return (
    <Grommet background="main" full theme={theme}>
      <Main />
      <AboutMe />
      <Projects />
      <ContactMe />
    </Grommet>
  );
};

export default Home;
