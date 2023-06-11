import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';


const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
width: 100%;
align-self: flex-start;


span{
  text-transform: uppercase;
  font-family: 'Kanit';
}
`

const Subtitle = styled.h3`
font-size: ${(props) => props.theme.fontlg};
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 100;
width: 80%;
align-self: flex-start;
`

const ButtonContainer= styled.div`
width: 80%;
align-self: flex-start;
`



const Btn = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  margin-top: 1rem;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9FE2BF;
  }
`

const HomeText = () => {
  return (
    <>
    <Title>
      Discover a new era of personalized
      <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
  onInit={(typewriter) => {
    typewriter.typeString('<span>Education.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span>Tutoring.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span>Tuition.</span>')
    .pauseFor(2000)
    .deleteAll()
    .start()
      
  }}
/>

    </Title>
    <Subtitle>Bored of traditional methods?</Subtitle>
    <Subtitle>Try something new.</Subtitle>
    <ButtonContainer><Btn>Explore</Btn></ButtonContainer>
    </>
  )
}

export default HomeText