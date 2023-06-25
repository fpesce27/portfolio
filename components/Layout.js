import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";
import Head from "next/head";
import React from "react";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

const mobileBg = {
  position: "absolute",
  zIndex: -1,
  top: 0,
  left: 0,
  width: "100%",
  height: "175vh",
}

export default function Layout({ children, title }) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title + ' - Franco Pesce'}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Franco Pesce Portfolio" />
        <meta name="keywords" content="Franco Pesce, Portfolio" />
        <meta name="author" content="Franco Pesce" />

        <link rel="icon" href="/favicon.ico" />

      </Head>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        {children}
        <ParticlesBg type="cobweb" bg={isMobile ? mobileBg : true} />
      </motion.div>
    </>
  );
}

function Header() {
  return (
    <motion.header className={styles.header}
      initial={{ y: "-80px" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className={styles.logo}>
        Franco Pesce
      </Link>

      <div className={styles.links}>

        <Link href="/about" className={styles.link}>
          About
        </Link>

        <Link href="/projects" className={styles.link}>
          Projects
        </Link>

        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </div>

    </motion.header>
  );
}
