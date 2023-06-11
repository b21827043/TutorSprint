import React from 'react'
import styled from 'styled-components'
import img from '../assets/login_image.png'


const Image = styled.img`
  width: 95%;
  height: 95%;
  border-radius: ${props => props.borderRadius};
  `


const LoginImg = ({ borderRadius }) => {
  return (
    <Image src={img} borderRadius={borderRadius} /> 
  )
}

export default LoginImg