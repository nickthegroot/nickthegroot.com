import React from "react";
import ATVParallax from "react-atv-parallax";
import homerooms from "./static/homerooms.png";
import gmusic from "./static/gmusic.png";
import classclock from "./static/classclock.png";
import coursearrival from "./static/coursearrival.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faScroll } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  FlexContainer,
  Title,
  Subtitle,
  ProjectTitle,
  ProjectSubtitle,
  ProjectContainer,
} from "./styles/App.styles";

const SocialMedia: any[] = [
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/nick-degroot-377374141' },
  { icon: faGithub, url: 'https://github.com/nickthegroot' },
  { icon: faScroll, url: 'https://docs.google.com/document/d/1GVL7iipxgzTjYxMn8ocfuA8xMdIvzHo0JYwBIC8txVM/edit?usp=sharing' },
  { icon: faEnvelope, url: 'mailto:nbdegroot1@gmail.com' },
]

const Projects = [
  {
    title: "🏫 Homerooms",
    subtitle: "Say goodbye to paper slips!",
    url: "https://play.google.com/store/apps/details?id=com.nbdeg.homeroom",
    image: homerooms,
  },
  {
    title: "🕰 ClassClock",
    subtitle: "A better school scheduling tool",
    url: "https://classclock.app/",
    image: classclock,
  },
  {
    title: "🎶 vscode-gmusic",
    subtitle: "A VS Code extension that integrates with GPMDP",
    url:
      "https://marketplace.visualstudio.com/items?itemName=nbdeg.vscode-gmusic",
    image: gmusic,
  },
  {
    title: "📓 Course Arrival",
    subtitle: "Automatic scheduling helper for university courses",
    url: "https://devpost.com/software/course-arrival",
    image: coursearrival,
  },
];

const createIcons = (icons: typeof SocialMedia) => {
  let iconElements: JSX.Element[] = [];
  icons.forEach((social) => {
    iconElements.push(
      <a href={social.url}>
        <FontAwesomeIcon
          icon={social.icon}
          size="3x"
          color="white"
          style={{ padding: 10 }}
        />
      </a>
    );
  });

  return iconElements;
};

const createProjects = (projects: typeof Projects) => {
  let projectElements: JSX.Element[] = [];
  projects.forEach((project) => {
    projectElements.push(
      <div style={{ padding: 10 }}>
        <a href={project.url}>
          <ATVParallax style={{ width: 280, height: 520 }}>
            <img src={project.image} alt="Project Icon" />
            <ProjectContainer>
              <div
                style={{
                  paddingTop: 20,
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9))",
                }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              </div>
            </ProjectContainer>
          </ATVParallax>
        </a>
      </div>
    );
  });

  return projectElements;
};

const App: React.FC = () => {
  return (
    <Container>
      <Title>Nick DeGroot</Title>
      <Subtitle>Data Scientist and Software Engineer</Subtitle>

      <FlexContainer>{createIcons(SocialMedia)}</FlexContainer>

      <FlexContainer>{createProjects(Projects)}</FlexContainer>
    </Container>
  );
};

export default App;
