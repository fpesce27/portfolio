/* eslint-disable react-hooks/rules-of-hooks */
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import styles from "@/styles/Contact.module.css";
import React from "react";

function index() {
  const [from_name, setName] = React.useState("");
  const [reply_to, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    send(
      "service_kcgevji",
      "template_llh0uaq",
      { from_name, to_name: "Franco", reply_to, message },
      "FQZ0k8mSqFAU1QugN"
    );
  };

  return (
    <Layout>
      <div className={styles.sections}>
        <div className={styles.contactContainer}>
          
          <h1 className={styles.highlight}>Contact Me</h1>
          <p className={styles.description}>
            If you would like to contact me, please fill out the form below and
            I will get back to you as soon as possible.
          </p>

          <div className={styles.form}>

            <form onSubmit={sendEmail}>

              <div className={styles.leftForm}>
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name.."
                  value={from_name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email.."
                  value={reply_to}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.rightForm}>
                <label for="subject">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                
                <div className={styles.buttons}>
                  <button type="reset">Reset</button>
                  <button type="submit">Send</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
