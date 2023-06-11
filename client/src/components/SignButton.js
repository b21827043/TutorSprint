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

  &:hover {
    background-color: #00008B;
  }
`


function SignButton() {
  let navigate = useNavigate();

  const navigateSignIn = () => {
    navigate("/login");
  }


  return (
    <Btn onClick={navigateSignIn}>
        Sign in
    </Btn>
  )
}

export default SignButton;