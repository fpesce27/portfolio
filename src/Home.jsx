import React, { useState } from "react";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
  Layer,
  Header,
  Menu,
  Markdown,
  Text,
  Carousel,
  Image,
  Main,
  Page,
  PageContent,
    Paragraph,
    List,
    Form,
    FormField,
    TextInput,
    TextArea
} from "grommet";
import * as Icons from "grommet-icons";
import "./App.css";

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

const Home = () => {

    const projects = [
        {
            name: "First Ecommerce",
            description: "This project is a simple ecommerce website that I made using Angular and SpringBoot.",
            image: "https://via.placeholder.com/150",
            link: "https://curso-java-frontend.web.app/"
        },
        {
            name: "100 Dates",
            description: "If you wanna keep track of your dates, this is the website for you. Made with Angular and Firebase.",
            image: "https://via.placeholder.com/150",
            link: "https://citas-85ff9.web.app/"
        },
        {
            name: "Chat App",
            description: "This was my most recent project, made with a friend. It's a chat app made with Flask for the CS50 Harvard Course.",
            image: "https://via.placeholder.com/150",
            link: "https://github.com/fpesce27/chatApp"
        },
    ]

    const handleClick = (section) => {
        const element = document.getElementById(section);
        element.scrollIntoView({behavior: 'smooth'});
    };

    const [form, setForm] = useState({});

  return (
    <Grommet theme={theme} full>
      <Page background="main" fill direction="row">

        <Box width="large" background={"secondary"} align="center" justify="center" id="start">
          <Heading className="title">Franco Pesce</Heading>
          <Text className="subtitle">Software Engineer</Text>
        </Box>

        <Box width="large" align="center" justify="center" background="secondary">
            <Heading className="menuButtons" onClick={() => handleClick("about")}>About</Heading>
            <Heading className="menuButtons" onClick={() => handleClick("proyects")}>Projects</Heading>
            <Heading className="menuButtons" onClick={() => handleClick("contact")}>Contact Me</Heading>
        </Box>

      </Page>

      <Page background="main" fill align="center" justify="center" direction="row" id="about">

        <Box align="center" justify="center" width="large">
            <Image src="https://avatars.githubusercontent.com/u/44456350?v=4" fit="contain" />
        </Box>

        <Box align="center" justify="center" width="large">
        <Heading className="title">About Me</Heading>
            <Paragraph>
                I am a software engineer with a passion for building web applications. 
                I have experience with a variety of technologies such as:
                <List 
                    data={["React", "Angular", "SpringBoot", "Java", "Python" ,"C++"]}
                    pad="small"
                    margin="small"
                    border="bottom"
                     
                />
            </Paragraph>
        </Box>

      </Page>

      <Page fill align="center" justify="center" background="accent" id="proyects">

        <Heading className="title">Projects</Heading>

        <Box align="center" justify="center" direction="row">
            <Carousel fill>
                {projects.map((project) => (
                        <Box align="center" justify="center" width="large" pad="small" onClick={() => window.open(project.link, "_blank")}>
                            <Text>{project.name}</Text>
                            <Image src={project.image} fit="cover"/>
                            <Paragraph>{project.description}</Paragraph>
                        </Box>
                ))}
            </Carousel>
        </Box>

      </Page>

      <Page fill align="center" justify="center" id="contact" direction="row" background="secondary">
        
        <Box align="center" justify="center" width="large" >
            <Heading className="title">Contact Me</Heading>
            <Paragraph>
                If you would like to contact me, please fill out the form below and I will get back to you as soon as possible.
            </Paragraph>
            <Box align="center" justify="center" gap="medium" direction="row" pad="small">
                <Icons.Instagram size="large" onClick={() => window.open("https://www.instagram.com/francopescee")}/>
                <Icons.Github size="large" onClick={() => window.open("https://https://github.com/fpesce27")}/>
                <Icons.LinkedinOption size="large" onClick={() => window.open("https://www.linkedin.com/in/franco-pesce-951739215")}/>
                <Icons.LinkUp size="large" onClick={() => handleClick("start")}/>   
            </Box>
        </Box>

        <Box align="center" justify="center" 
            width="large"
        >
            <Form
                form={form}
                onChange={nextForm => setForm(nextForm)}
                onReset={() => setForm({})}
                onSubmit={({ form }) => {}}
            >
                <FormField name="fullname" htmlFor="text-input-id" label="Fullname" width="medium">
                    <TextInput id="text-input-id" name="fullname" placeholder="John Smith"/>
                </FormField>
                <FormField name="email" htmlFor="text-input-id" label="Email">
                    <TextInput id="text-input-id" name="email" placeholder="Johnsmith@gmail.com"/>
                </FormField>
                <FormField name="message" htmlFor="text-area" label="Message">
                    <TextArea id="text-area" name="message" placeholder="Hello Franco, I would like to get in touch with you..."/>
                </FormField>
                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Submit" />
                    <Button type="reset" label="Reset" />
                </Box>
            </Form>
        </Box>

      </Page>
    </Grommet>
  );
};

export default Home;
