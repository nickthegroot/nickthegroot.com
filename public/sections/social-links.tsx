import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  ResumeIcon,
} from "../components/icons";
import styles from "./social-links.module.css";

export const SocialLinks = () => (
  <div class={styles.section}>
    <a href="https://linkedin.com/in/nickthegroot">
      <LinkedInIcon />
    </a>

    <a href="https://github.com/nickthegroot">
      <GitHubIcon />
    </a>

    <a href="https://docs.google.com/document/u/0/export?format=pdf&id=1GVL7iipxgzTjYxMn8ocfuA8xMdIvzHo0JYwBIC8txVM">
      <ResumeIcon />
    </a>

    <a href="mailto:nick@nickthegroot.com">
      <EmailIcon />
    </a>
  </div>
);
