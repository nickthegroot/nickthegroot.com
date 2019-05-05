import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Container, SocialContainer, Title, Subtitle } from './styles/App.styles'

const createIcons = (icons: IconDefinition[]) => {
  let iconElements: JSX.Element[] = []
  icons.forEach(icon => {
    iconElements.push(
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        color="white"
        style={{ padding: 10 }}
      />
    )
  })

  return iconElements
}

const App: React.FC = () => {
  return (
    <Container>
      <Title>Nick DeGroot</Title>
      <Subtitle>Data Scientist and Software Engineer</Subtitle>
      <SocialContainer>
        {createIcons([faTwitter, faLinkedin, faEnvelope, faGithub])}
      </SocialContainer>
    </Container>
  );
}

export default App;
