import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faScroll, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SocialMediaInfo } from "../components/socialMedia";

const Socials: SocialMediaInfo[] = [
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/nick-degroot-377374141",
  },
  { icon: faGithub, url: "https://github.com/nickthegroot" },
  {
    icon: faScroll,
    url: "https://docs.google.com/document/u/0/export?format=pdf&id=1GVL7iipxgzTjYxMn8ocfuA8xMdIvzHo0JYwBIC8txVM",
  },
  { icon: faEnvelope, url: "mailto:nick@nickthegroot.com" },
];

export default Socials;
