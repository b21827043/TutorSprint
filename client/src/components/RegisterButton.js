import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


const Btn = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
  &:hover {
    background-color: #00008B;
  }
`


function RegisterButton() {
  let navigate = useNavigate();

  const navigateSignIn = () => {
    navigate("/register");
  }


  return (
    <Btn onClick={navigateSignIn}>
        Sign up
    </Btn>
  )
}

export default RegisterButton;