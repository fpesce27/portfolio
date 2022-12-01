import React from "react";
import { Box, Heading, Text, Page } from "grommet";
import { handleClick } from "../Home";
import "../App.css"

function Main() {
  return (  
    <Page background="main" fill className="page">
      <Box
        width="large"
        background={"secondary"}
        align="center"
        justify="center"
        id="start"
      >
        <Heading className="title">Franco Pesce</Heading>
        <Text className="subtitle">Software Engineer</Text>
      </Box>

      <Box width="large" align="center" justify="center" background="secondary">
        <Heading className="menuButtons" onClick={() => handleClick("about")}>
          About
        </Heading>
        <Heading
          className="menuButtons"
          onClick={() => handleClick("proyects")}
        >
          Projects
        </Heading>
        <Heading className="menuButtons" onClick={() => handleClick("contact")}>
          Contact Me
        </Heading>
      </Box>
    </Page>
  );
}

export default Main;
