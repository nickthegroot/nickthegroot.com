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

    <a href="https://raw.githubusercontent.com/nickthegroot/resume/refs/heads/main/resume_public.pdf">
      <ResumeIcon />
    </a>

    <a href="mailto:nick@nickthegroot.com">
      <EmailIcon />
    </a>
  </div>
);
