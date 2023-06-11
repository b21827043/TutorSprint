import React from 'react'
import styled from 'styled-components'
import logo from '../assets/G.png'

const LogoWrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

height: ${props => props.theme.navHeight};
`

const LogoImage= styled.img`
width: 100px;
height: 100px;
margin-right: -20px;
margin-top: 10px;
`

const LogoText = styled.h1`
font-family: 'Kanit';
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1)
}
`

const Logo = () => {
  return (
    <LogoWrapper>
        <LogoImage src={logo} alt= {"TutorSprint"}/>
        <LogoText>{"TutorSprint"}</LogoText>
    </LogoWrapper>
  )
}

export default Logo
