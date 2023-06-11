import React from 'react'
import styled from 'styled-components'
import logo from '../assets/timer.jpg'

const LogoImage= styled.img`
width: 30px;
height: 30px;
`


function LogoImg() {
  return (
    <LogoImage src={logo}/>
  )
}

export default LogoImg