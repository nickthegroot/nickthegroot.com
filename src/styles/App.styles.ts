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
    paddingBottom: 20,
})

export const SocialContainer = styled.div({
    display: 'flex',
    justifyContent: 'center'
})