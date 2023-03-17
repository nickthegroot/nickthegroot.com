import React from "react";
import Project from "./components/project";
import SocialMedia from "./components/socialMedia";
import Projects from "./consts/projects";
import Socials from "./consts/socials";
import { Container, FlexContainer, Subtitle, Title } from "./styles/App.styles";

const App: React.FC = () => {
  return (
    <Container>
      <Title>Nick DeGroot</Title>
      <Subtitle>Data Scientist and Software Engineer</Subtitle>

      <FlexContainer>
        {Socials.map((sm) => (
          <SocialMedia sm={sm} />
        ))}
      </FlexContainer>

      <FlexContainer>
        {Projects.map((project) => (
          <Project project={project} />
        ))}
      </FlexContainer>
    </Container>
  );
};

export default App;
