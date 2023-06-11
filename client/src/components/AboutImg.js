import React from 'react'
import styled from 'styled-components'
import img from '../assets/studentstanding.png'


const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;

`




const AboutImg = () => {
  return (
    <Image src={img}/> 
  )
}

export default AboutImg