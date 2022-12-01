import React from "react";
import { Box, Heading, Image, Page, Paragraph, Carousel, Text } from "grommet";

function Projects() {
  const projects = [
    {
      name: "First Ecommerce",
      description:
        "This project is a simple ecommerce website that I made using Angular and SpringBoot.",
      image: "https://via.placeholder.com/150",
      link: "https://curso-java-frontend.web.app/",
    },
    {
      name: "100 Dates",
      description:
        "If you wanna keep track of your dates, this is the website for you. Made with Angular and Firebase.",
      image: "https://via.placeholder.com/150",
      link: "https://citas-85ff9.web.app/",
    },
    {
      name: "Chat App",
      description:
        "This was my most recent project, made with a friend. It's a chat app made with Flask for the CS50 Harvard Course.",
      image: "https://via.placeholder.com/150",
      link: "https://github.com/fpesce27/chatApp",
    },
  ];

  return (
    <Page
      fill
      align="center"
      justify="center"
      background="accent"
      id="proyects"
    >
      <Heading className="title">Projects</Heading>

      <Box align="center" justify="center" direction="row">
        <Carousel fill>
          {projects.map((project) => (
            <Box
              align="center"
              justify="center"
              width="large"
              pad="small"
              onClick={() => window.open(project.link, "_blank")}
            >
              <Text>{project.name}</Text>
              <Image src={project.image} fit="cover" />
              <Paragraph>{project.description}</Paragraph>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Page>
  );
}

export default Projects;
