import React from 'react'
import styled from 'styled-components'
import img from '../assets/studentview.png'


const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;

`




const HomeImg = () => {
  return (
    <Image src={img}/> 
  )
}

export default HomeImg