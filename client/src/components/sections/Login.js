import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import LoginImg from "../LoginImg";
import { login , fetchUser ,fetchCourses, fetchAnalysis } from "../../services/HttpService";
import { ContextValue } from "../../context/Context";
import types from "../../services/types";



const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items:center;
  position: relative;
`


const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;


const Box1 = styled.div`
  width: 40%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Box2 = styled.div`
  width: 60%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  height: 80%;
  width: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormHeader = styled.h2`
  margin-bottom: 15px;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontxl};
  color: ${props => props.theme.text};
`;

const FormSubText = styled.h4`
  font-size: ${(props) => props.theme.fontmd};
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 100;

`;

const TextContainer = styled.div`
  width: 100%;
  height: 30%;
  margin: 5 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`


const Input = styled.input`
  margin-bottom: 20px;
  padding-top:10px;
  padding-bottom:10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  font-size: ${(props) => props.theme.fontmd};
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 100;
  outline: none;

  &:focus {
    border-color: #2ecc71;
  }
`;

const InputTitle = styled.h4`
  align-self : flex-start;
  font-size: ${(props) => props.theme.fontmd};
  color: ${props => props.theme.text};

  font-weight: 200;

`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding:10px;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightblue;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`

const StyledLink = styled.a`
  color: ${props => props.theme.text};
  cursor: pointer;
  align-self: flex-end;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }


`;




const Login = () => {
  const [state, dispatch] = ContextValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const storedRegisterStatus = localStorage.getItem('registerStatus');
    if (storedRegisterStatus) {
      setRegisterStatus(JSON.parse(storedRegisterStatus));
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic for sending a login request to the server here
    // For now, let's just redirect the user to the homepage
    //history.push("/");
  };

  
  const sendRequest = () => {
    login({email:email,password:password},dispatch
      ).then((res) => {
        console.log(res.data.userId);
        if (res.data.userId){
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          dispatch({
            type: types.FETCH_USER_INFO,
            payload:res.data
          })
          fetchUser(res.data.author,res.data.userId,dispatch).catch((err) => console.log(err))
          fetchCourses(dispatch)
          //fetchAnalysis(res.data.userId,dispatch)
          setEmail("")
          setPassword("")
          history("/courses")
        }
      }).catch((err) => console.log(err))
}



  const handleButton = () => {
    sendRequest()
  }


  return (
    
    <Section>
      <Container>
        <Box1>
          <LogoWrapper><Logo/></LogoWrapper>
          <Form onSubmit={handleSubmit}>

          <TextContainer>
                {registerStatus ? (
                <FormHeader>You have successfully registered. You can login.</FormHeader>
                ) : (
               <FormHeader>Welcome Back!</FormHeader>
                )}

            <FormSubText>Welcome back! Please enter your details.</FormSubText>
          </TextContainer>
          
          <InputContainer>
            <InputTitle>Email</InputTitle>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <InputTitle>Password</InputTitle>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          
          <StyledLink href="/"> Forgot password </StyledLink>

          <Button type="submit" onClick={() => handleButton()}>Login</Button>

          <StyledLink href="/register" style={{alignSelf:"center"}}>Not a member? Sign up</StyledLink>
        </Form>
        </Box1>
        <Box2>
          <LoginImg borderRadius="50px 0 50px 0" />
        </Box2>
      </Container>
    </Section>
  );
};

export default Login;