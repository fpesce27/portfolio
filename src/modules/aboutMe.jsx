import React from 'react'
import { Box, Heading, Image, Page, Paragraph, List } from 'grommet'

function AboutMe() {
  return (
    <Page
        background="main"
        fill
        align="center"
        justify="center"
        className="page"
        id="about"
      >
        <Box align="center" justify="center" width="large">
          <Image
            src="https://avatars.githubusercontent.com/u/44456350?v=4"
            fit="contain"
          />
        </Box>

        <Box align="center" justify="center" width="large">
          <Heading className="title">About Me</Heading>
          <Paragraph>
            I am a software engineer with a passion for building web
            applications. I have experience with a variety of technologies such
            as:
            <List
              data={["React", "Angular", "SpringBoot", "Java", "Python", "C++"]}
              pad="small"
              margin="small"
              border="bottom"
            />
          </Paragraph>
        </Box>
      </Page>
  )
}

export default AboutMe