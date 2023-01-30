import Layout from "../../components/Layout";
import {
    DiReact,
    DiAngularSimple,
    DiPython,
    DiFirebase,
    DiGit,
    DiJava,
} from 'react-icons/di'
import styles from "@/styles/About.module.css";
import Button from "@/components/Button";

function index() {
  return (
    <Layout>
      <div className={styles.sections}>
        <div className={styles.skills}>
          <h1>Skills</h1>
          <div className={styles.skillsContainer}>
            <TecnologyTag
              icon={<DiReact className={styles.icon} />}
              name="React Native"
              link="https://reactnative.dev/"
            />
            <TecnologyTag
              icon={<DiReact className={styles.icon} />}
              name="React"
              link="https://reactjs.org/"
            />
            <TecnologyTag
              icon={<DiAngularSimple className={styles.icon} />}
              name="Angular"
              link="https://angular.io/"
            />
            <TecnologyTag
              icon={<DiPython className={styles.icon} />}
              name="Python"
              link="https://www.python.org/"
            />
            <TecnologyTag
              icon={<DiJava className={styles.icon} />}
              name="Java"
              link="https://www.java.com/es/"
            />
            <TecnologyTag
              icon={<DiFirebase className={styles.icon} />}
              name="Firebase"
              link="https://firebase.google.com/"
            />
            <TecnologyTag
              icon={<DiGit className={styles.icon} />}
              name="Git"
              link="https://git-scm.com/"
            />
          </div>
        </div>

        <div className={styles.aboutMe}>
          <h1>About Me</h1>
          <p className={styles.aboutMeText}>
            I am a <span className={styles.highlight}>Systems Engineering</span>{" "}
            student at <span className={styles.highlight}>UTN</span>. Currently 20
            years old with experience in{" "}
            <span className={styles.highlight}>web and mobile development. </span>
            My passion is technology and problem-solving. In my free time, I
            enjoy experimenting with new technologies and programming languages.
            Feel free to explore my website and learn more about my{" "}
            <span className={styles.highlight}>Projects</span>. If you have any
            questions or would like to collaborate on a project, please{" "}
            <span className={styles.highlight}>Contact Me</span>.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export function TecnologyTag(props) {
  return (
    <Button onClick={() => window.open(props.link, "_blank")}>
        {props.icon}
        <span className={styles.tecnologyName}>{props.name}</span>
    </Button>
  );
}

export default index;
