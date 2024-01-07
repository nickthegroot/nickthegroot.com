import { FunctionalComponent } from "preact";
import styles from "./project.module.css";
import { Tilt } from "./tilt";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const Project: FunctionalComponent<ProjectProps> = ({
  title,
  description,
  image,
  url,
}) => (
  <a href={url}>
    <Tilt>
      <img class={styles["project-image"]} src={image} alt="Project Icon" />
      <div class={styles["project-backdrop"]} />
      <div class={styles["project-info"]}>
        <h3 class={styles["project-title"]}>{title}</h3>
        <p class={styles["project-description"]}>{description}</p>
      </div>
    </Tilt>
  </a>
);
