import React from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'

const Section = styled.section`
min-height:100vh;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;

display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl}; 
text-transform: uppercase;
color: ${props => props.theme.body};
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display:flex;
justify-content: space-between;
align-content: center;
`

const Box = styled.div`
width: 45%;

`


const Faq = () => {
  return (
    <Section id='faq'>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="What is TutorSprint?" children={"TutorSprint is an online education platform that provides personalized classrooms, adaptive tests, and a variety of courses. It caters to both students seeking to improve their knowledge and teachers who wish to deliver effective lessons."} />
          <Accordion title="How do I sign up?" children={"Go to our main page and click on the 'Sign Up' button there, fill out the required information, and create your account. You'll be able to access our features as soon as your account is set up."} />
          <Accordion title="Can I use TutorSprint both as a student and a teacher?" children={"While you can access resources suitable for both roles, accounts are specific to either students or teachers for a streamlined experience. You can certainly create separate accounts if you wish to use TutorSprint in both capacities."} />

        </Box>
        <Box>
          <Accordion title="What subjects do you offer?" children={"We offer a wide array of subjects including English, Math, and others. Our goal is to cater to diverse learning needs and interests by providing comprehensive resources for various fields of study."} />
          <Accordion title="How does the smart testing system work?" children={"Our smart tests adapt to your level of understanding, posing challenges that match your current knowledge. These tests provide an accurate gauge of your progress and help enhance your learning process."} />
          <Accordion title="Do you have online classrooms?" children={"Yes, we do! Our online classrooms offer interactive and personalized learning experiences. This feature allows students to engage with teachers effectively, making learning more engaging and enjoyable."} />
        </Box>
      </Container>
    </Section>
  )
}

export default Faq