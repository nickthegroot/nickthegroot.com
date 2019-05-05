import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Container, SocialContainer, Title, Subtitle } from './styles/App.styles'

const socialMedia = [
  { icon: faTwitter, url: 'https://twitter.com/OfficialNbd9' },
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/nick-degroot-377374141' },
  { icon: faGithub, url: 'https://github.com/nbd9' },
  { icon: faEnvelope, url: 'mailto:contact@nbdeg.com' },
]

const createIcons = (icons: {icon: IconDefinition, url: string}[]) => {
  let iconElements: JSX.Element[] = []
  icons.forEach(social => {
    iconElements.push(
      <a href={social.url}>
        <FontAwesomeIcon
          icon={social.icon}
          size="3x"
          color="white"
          style={{ padding: 10 }}
        />
      </a>
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
        {createIcons(socialMedia)}
      </SocialContainer>
    </Container>
  );
}

export default App;
