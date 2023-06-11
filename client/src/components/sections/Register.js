import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import LoginImg from "../LoginImg";
import { register } from "../../services/HttpService";
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
  width: 60%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Box2 = styled.div`
  width: 40%;
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
  align-self: flex-start;
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

const Btn = styled.button`
  width: 150px;
  height: 150px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin:10px;
  &:hover {
    background-color: #00008B;
  }
`
const PrevBtn = styled.button`
  width: 60px;
  height: 30px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin:10px;
  &:hover {
    background-color: #00008B;
  }
`

const Register = () => {
  const [state, dispatch] = ContextValue();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [part, setPart] = useState(true);
  const [authorName,setAuthorName] = useState("");
  const history = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic for sending a Register request to the server here
    // For now, let's just redirect the user to the homepage
    history.push("/");
  };


  const sendRequest = (author) => {
    register(author,{email:email,fullName:fullName,password:password}
      ).then((res) => {
        if (res.data.userId){
          console.log(res);
          localStorage.setItem("registerStatus",true);
          //localStorage.setItem("user",JSON.stringify(res.data));
          //dispatch({
          //  type: types.FETCH_USER,
          //  payload:res.data
          //})
        }
      }).catch((err) => console.log(err))
}



  const handleButton = () => {
    sendRequest(authorName)
    setFullName("")
    setEmail("")
    setPassword("")
    setRePassword("")
    console.log(localStorage)
    history("/login")
  }

  const handleSelection = (selection) => {
    setAuthorName(selection);
    setPart(false);
  };

  const prevHandle = () => {
    setPart(true);
  }
  
  return (
    
    <Section>
      <Container>
        <Box1>
          <LoginImg borderRadius={"0 50px 0 50px"}/>
        </Box1>
        <Box2>
          <Form onSubmit={handleSubmit}>
          <LogoWrapper><Logo/></LogoWrapper>


          <TextContainer>
            <FormHeader>Create an account</FormHeader>
            <FormSubText>Let's get started with your free trial.</FormSubText>
          </TextContainer>

          { part ? 
              (<div>
                {/*<Btn style={{ width: '150px', height: '150px', backgroundColor: '#ffffff',margin:'10px' }} onClick={() => handleSelection('student')}>Student</Button>*/}

                <Btn onClick={() => handleSelection('student')}>Student</Btn>
                <Btn onClick={() => handleSelection('teacher')}>Teacher</Btn>
              </div>) : (
                
              <div>

                <FormSubText>You are registering as a {authorName}.</FormSubText>
                <br />
                
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <PrevBtn onClick={prevHandle}>Prev</PrevBtn>
                </div>
                
                <InputContainer>
                  <InputTitle>Full Name</InputTitle>
                  <Input
                    type="name"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                  />
                </InputContainer>

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
                    placeholder="Enter your Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </InputContainer>

                <InputContainer>
                  <InputTitle>Password(Again)</InputTitle>
                  <Input
                    type="password"
                    placeholder="Re-enter your password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </InputContainer>
                

                <Button type="submit" onClick={() => handleButton()}>Register</Button>

                <StyledLink href="/login" style={{alignSelf:"center"}}>Already have an account? Sign in</StyledLink>
              </div>

              )

        
          }

          
        </Form>
        </Box2>
      </Container>
    </Section>
  );
};

export default Register;