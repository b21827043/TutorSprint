import React from 'react'
import styled from 'styled-components'
import HomeImg from '../HomeImg'
import HomeText from '../HomeText'

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`  };
width: 100vw;
position:relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width: 50%;
height: 100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`




function Home() {
  return (
    <Section>
      <Container>
        <Box><HomeText/></Box>
        <Box><HomeImg/></Box>
      </Container>
    </Section>
  )
}

export default Home