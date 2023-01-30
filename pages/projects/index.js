import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { TecnologyTag } from "../about/index";
import projects from "../../constants";
import styles from "@/styles/Projects.module.css";
import Button from "@/components/Button";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    if (currentProject < projects.length - 1) {
      setCurrentProject(currentProject + 1);
    }
  };

  const prevProject = () => {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1);
    }
  };

  return (
    <Layout>
      <div className={styles.projectsPageContainer}>

        <div className={styles.sections}>

          <div className={styles.projectInfo}>

            <div className={styles.tecnologiesContainer}>

              <h1 className={styles.highlight}>{projects[currentProject].name}</h1>
              <div className={styles.description}>{projects[currentProject].description}</div>

              <br />
              <br />

              <h3 className={styles.highlight}>This project was made using:</h3>
              <div className={styles.tecnologies}>
                {projects[currentProject].tecnologies.map(
                  (tecnology, index) => (
                    <TecnologyTag
                      icon={tecnology.icon}
                      name={tecnology.name}
                      link={tecnology.link}
                      key={index}
                    />
                  )
                )}
              </div>

            </div>

          </div>

          <div className={styles.projectShow}>

            <div className={styles.projectImageContainer}>

              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].name}
                width={500}
                height={400}
                className={styles.projectImage}
              />

              <div className={styles.projectButtons}>
                <Button onClick={() => window.open(projects[currentProject].link, "_blank")} disabled={projects[currentProject].link === ""}>
                  Live Demo  
                </Button>
                <Button onClick={() => window.open(projects[currentProject].github, "_blank")}>
                  Github
                </Button>
              </div>

            </div>

          </div>

        </div>

        <div className={styles.controls}>
          <button className={styles.controlsButton} onClick={prevProject}>
            <BsArrowLeft />
          </button>
          <button className={styles.controlsButton} onClick={nextProject}>
            <BsArrowRight />
          </button>
        </div>

      </div>
    </Layout>
  );
}

export default index;
