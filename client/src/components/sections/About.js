import React from 'react'
import styled from 'styled-components'
import AboutImg from '../AboutImg'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items:center;
position: relative;
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

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight:400;
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight:400;
`





const About = () => {
  return (
    <Section id='about'>
      <Container>
        <Box><AboutImg /></Box>
        <Box>
          <Title>
            Welcome to the TutorSprint
          </Title>
          <SubText>
            TutorSprint is a revolution in learning. Designed to cater to unique learning styles, we provide a flexible, digital platform that caters to both students and teachers, enhancing their academic journey.
          </SubText>
          <SubTextLight>
            Our dynamic features include personalized classrooms, smart tests, and diverse courses. Breaking away from traditional methods, TutorSprint offers a comprehensive learning experience, fostering a community of eager learners and passionate educators.
          </SubTextLight>
        </Box>
      </Container>
    </Section>
  )
}

export default About