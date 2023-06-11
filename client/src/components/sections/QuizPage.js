import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../Pagination";
import Logo from "../Logo";
import LogoImg from "../LogoImg";
import { ContextValue } from '../../context/Context';



const Section = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  display: flex;
`;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftBand = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 5%;
  background-color: #CCFFCC;
  min-height: 100vh;
`;

const TopBand = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
`;

const Timer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
`;

const Title = styled.h2`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.text};
width: auto;

span{
  font-family: 'Kanit';
}
`

const Subtitle = styled.h3`
font-size: ${(props) => props.theme.fontlg};
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 100;
width: auto;
`



const QuizPage = () => {

  const [state, dispatch] = ContextValue();
  const currentQuiz = state.currentQuiz;

  /*
  const quiz = {
    title: "Trigonometric Functions Practice Test - 1",
    time: {
      minutes:10,
      seconds:30
    } 
  };
  */

  const CountdownTimer = ({ minutes, seconds }) => {
    const [time, setTime] = useState(minutes * 60 + seconds);
  
    useEffect(() => {
      const timer =
        time > 0 &&
        setInterval(() => {
          setTime(time - 1);
        }, 1000);
      return () => clearInterval(timer);
    }, [time]);
  
    const displayTime = () => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
      <Timer>
        <Subtitle>Time Remaining : {displayTime()} </Subtitle>
      </Timer>
    );
  };

  return (
    <Section>
      
      <Container>
        <TopBand>
          <Title>{currentQuiz.examName}</Title>
          <Subtitle>{currentQuiz.examIntroText}</Subtitle>
          <CountdownTimer minutes={currentQuiz.examDuration} seconds={0} />
          </TopBand>
        <Pagination />
      </Container>
    </Section>
  );
};


export default QuizPage;
