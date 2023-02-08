import Layout from "@/components/Layout";
import React from "react";
import { motion } from "framer-motion";
import {
  BsArrowUpRight,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import profilePic from "../public/profilePic.png";
import Button from "@/components/Button";

export default function Home() {
  const openCv = () => {
    window.open("/cv.pdf", "_blank");
  };

  return (
    <Layout>
      <div className={styles.sections}>
        <div className={styles.leftContainer}>
          <h1>
            Hi There!, <br />
            I`m <span className={styles.name}>Franco Pesce</span>
          </h1>
          <span className={styles.job}> Software Engineer Student </span>

          <Button onClick={openCv}>
            Check out my cv
            <BsArrowUpRight />
          </Button>

          <div className={styles.socials}>
            <SocialButton
              href="https://github.com/fpesce27"
              icon={<BsGithub />}
            />
            <SocialButton
              href="https://www.instagram.com/francopescee/"
              icon={<BsInstagram />}
            />
            <SocialButton
              href="https://www.linkedin.com/in/franco-pesce-951739215/"
              icon={<BsLinkedin />}
            />
            <SocialButton
              href="https://twitter.com/ae29a7519600495"
              icon={<BsTwitter />}
            />
          </div>
        </div>

        <div className={styles.rightContainer}>
          <Image
            src={profilePic}
            alt="Picture Picture"
            width={500}
            height={500}
            placeholder="blur"
            className={styles.image}
          />
        </div>
      </div>
    </Layout>
  );
}

function SocialButton(props) {
  return (
    <button
      className={styles.socialButton}
      onClick={() => window.open(props.href, "_blank")}
    >
      {props.icon}
    </button>
  );
}
