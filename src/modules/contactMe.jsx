import React, {useState} from 'react'
import { Box, Heading, Page, Paragraph, Form, FormField, Button, TextInput, TextArea } from 'grommet'
import { handleClick } from '../Home';
import * as Icons from "grommet-icons";

function ContactMe() {

    
  const [form, setForm] = useState({});

  return (
    <Page
        fill
        align="center"
        justify="center"
        id="contact"
        className="page"
        background="secondary"
      >
        <Box align="center" justify="center" width="large">
          <Heading className="title">Contact Me</Heading>
          <Paragraph>
            If you would like to contact me, please fill out the form below and
            I will get back to you as soon as possible.
          </Paragraph>
          <Box
            align="center"
            justify="center"
            gap="medium"
            direction="row"
            pad="small"
          >
            <Icons.Instagram
              size="large"
              onClick={() =>
                window.open("https://www.instagram.com/francopescee")
              }
            />
            <Icons.Github
              size="large"
              onClick={() => window.open("https://https://github.com/fpesce27")}
            />
            <Icons.LinkedinOption
              size="large"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/franco-pesce-951739215"
                )
              }
            />
            <Icons.LinkUp size="large" onClick={() => handleClick("start")} />
          </Box>
        </Box>

        <Box align="center" justify="center" width="large">
          <Form
            form={form}
            onChange={(nextForm) => setForm(nextForm)}
            onReset={() => setForm({})}
            onSubmit={({ form }) => {}}
          >
            <FormField
              name="fullname"
              htmlFor="text-input-id"
              label="Fullname"
              width="medium"
            >
              <TextInput
                id="text-input-id"
                name="fullname"
                placeholder="John Smith"
              />
            </FormField>
            <FormField name="email" htmlFor="text-input-id" label="Email">
              <TextInput
                id="text-input-id"
                name="email"
                placeholder="Johnsmith@gmail.com"
              />
            </FormField>
            <FormField name="message" htmlFor="text-area" label="Message">
              <TextArea
                id="text-area"
                name="message"
                placeholder="Hello Franco, I would like to get in touch with you..."
              />
            </FormField>
            <Box direction="row" gap="medium">
              <Button type="submit" primary label="Submit" />
              <Button type="reset" label="Reset" />
            </Box>
          </Form>
        </Box>
      </Page>
  )
}

export default ContactMe