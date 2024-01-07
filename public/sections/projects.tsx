import { Project } from "../components/project";
import styles from "./projects.module.css";

export const Projects = () => (
  <div class={styles.section}>
    <Project
      title="🍔 Recipe Recommendation"
      description={
        '"Personalized Recipe Recommendation Using Heterogeneous Graphs" (2023)'
      }
      image="/assets/recipe.webp"
      url="https://recipe.nickthegroot.com"
    />

    <Project
      title="🏫 Homerooms"
      description="Say goodbye to paper slips!"
      image="/assets/homerooms.webp"
      url="https://github.com/nickthegroot/homerooms"
    />

    <Project
      title="🕰 ClassClock"
      description="A better school scheduling tool"
      image="/assets/classclock.webp"
      url="https://classclock.app"
    />

    <Project
      title="🎶 vscode-gmusic"
      description="A VS Code extension that integrates with GPMDP"
      image="/assets/gmusic.webp"
      url="https://marketplace.visualstudio.com/items?itemName=nbdeg.vscode-gmusic"
    />

    <Project
      title="📓 Course Arrival"
      description="Automatic scheduling helper for university courses"
      image="/assets/coursearrival.webp"
      url="https://devpost.com/software/course-arrival"
    />
  </div>
);
