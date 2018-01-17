import React, { Component } from 'react'
import butterbeer from '../images/butterbeer.jpg'
import unityplanner from '../images/unityplanner.png'
import homeroom from '../images/homeroom.png'
import Parallax from 'react-springy-parallax'
import { SocialIcon } from 'react-social-icons'
import { Card, CardHeader, CardActions, FlatButton } from 'material-ui'

import './styles/App.css'

const styles = {
  fontFamily: 'Menlo-Regular, Menlo, monospace',
  fontSize: 14,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

class App extends Component {
  render () {
    return (
      <Parallax ref='parallax' pages={3}>

        <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} />
        <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <Parallax.Layer
          offset={0}
          speed={0.5}
          style={{ ...styles, backgroundImage: `url(${butterbeer})`, backgroundSize: 'cover' }}
          onClick={() => this.refs.parallax.scrollTo(1)}>
          <div>
            <h1><mark>Nick DeGroot</mark></h1>
            <p><i><mark>Programmer, Student, Leader</mark></i></p>
            <div style={{ backgroundColor: 'white' }} >
              <SocialIcon style={{ margin: 5 }} url={'http://twitter.com/OfficialNbd9'} />
              <SocialIcon style={{ margin: 5 }} url={'https://github.com/nbd9'} />
              <SocialIcon style={{ margin: 5 }} url={'https://www.linkedin.com/in/nick-degroot-377374141'} />
              <SocialIcon style={{ margin: 5 }} url={'mailto:contact@nbdeg.com'} network='email' />
            </div>
          </div>
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={-0.1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(2)}>
          <div>
            <p>Hello! I'm currently a junior in high school. My intrests include coding, running cross country, and hanging out with friends.</p>
            <p>I love working with Javascript (including React and React Native), Python, and Java; although I'm learning new languages all the time.</p>
          </div>
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={0.5}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(0)}>
          <div>
            <h2>My Projects:</h2>
            <p><i>I'm constantly working on new and exciting projects, so be sure to check back!</i></p>
            <div>
              <Card style={{ margin: 10 }} >
                <CardHeader
                  title='Homerooom'
                  subtitle='An app to connect teachers and learners. Coming soon to Android and iOS.'
                  avatar={homeroom} />
              </Card>
              
              <Card style={{ margin: 10 }}>
                <CardHeader
                  avatar={unityplanner}
                  title='Unity Planner'
                  subtitle='The planner to unify your school life.' />
                <CardActions>
                  <FlatButton
                    label='GitHub Repo'
                    onClick={() => window.open('https://github.com/nbd9/UnityPlanner', '_blank')} />
                  <FlatButton
                    label='Play Store'
                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.nbdeg.unityplanner', '_blank')} />
                  <FlatButton
                    label='Public Beta'
                    onClick={() => window.open('hhttps://play.google.com/apps/testing/com.nbdeg.unityplanner', '_blank')} />
                </CardActions>
              </Card>

              <Card style={{ margin: 10 }}>
                <CardHeader
                  title='vscode-gmusic'
                  subtitle='A VS Code extension that intergrates with the unofficial Google Play Music Desktop Player.' />
                <CardActions>
                  <FlatButton
                    label='GitHub Repo'
                    onClick={() => window.open('https://github.com/nbd9/vscode-gmusic', '_blank')} />
                  <FlatButton
                    label='Visual Studio Marketplace'
                    onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=nbdeg.vscode-gmusic', '_blank')} />
                </CardActions>
              </Card>
            </div>
          </div>
        </Parallax.Layer>

      </Parallax>
    )
  }
}

export default App
