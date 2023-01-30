import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

export default function Layout({ children }) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      {children}
      <ParticlesBg bg={true} type="cobweb" />
    </motion.div>
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
