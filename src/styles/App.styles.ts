import styled from '@emotion/styled'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '30vh'
})

export const Title = styled.p({
    color: 'rgba(0,0,0,0)',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    WebkitTextStroke: '0.01em white',
    margin: 0,
})

export const Subtitle = styled.p({
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 0,
})

export const FlexContainer = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
})

export const ProjectContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    margin: 0,
})

export const ProjectTitle = styled.p({
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: "center",
    margin: 0,
})

export const ProjectSubtitle = styled.p({
    fontSize: 20,
    color: 'white',
    textAlign: "center",
    marginTop: 0,
    paddingLeft: 5,
    paddingRight: 5,
})