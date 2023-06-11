import React, { useState ,useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Nav from '../Nav';
import { ContextValue } from '../../context/Context';
import { fetchCourses , fetchStartExam } from "../../services/HttpService";
import types from '../../services/types';

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position:relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width: 75%;
margin: 0 auto;
min-height: 100%;

display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
`

const Box1 = styled.div`
  width: 20%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const Box2 = styled.div`
  width: 60%;
  height: 100%;
  display:flex;
  padding-left: 78px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

const Box = styled.div`
  height: auto;
  width: 100%;
  border-radius: 5px;
  border: 1px solid;
  align-items: center;
  margin-bottom: 5px;

`

const Title = styled.h2`
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.text};
    width: auto;

    span{
    font-family: 'Kanit';
    }
`

const Subtitle = styled.h3`
    font-size: ${(props) => props.theme.fontmd};
    color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
    font-weight: 100;
    width: auto;
`

const Reveal = styled.div`
    display: ${(props) => props.clicked ? 'block' : 'none'};
    margin-top: 1rem;
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 300;
    line-height: 1.1rem;
`

const Wrapper = styled.div`
  height:30px;
  width:100%;
  padding: ${props => props.padding};
  display:flex;
  flex-direction: column;
  border: ${props => props.border};
  border-bottom: ${props => props.border_bottom};
  align-self: flex-start;
  justify-content:center;
  margin-bottom: 0.3rem;
  border-radius: 5px;
  cursor: pointer;
`

const AWrapper = styled.div`
height: ${props => props.active ? "auto" : "30px"};
width:100%;
padding: 0.5rem;
display:flex;
flex-direction: column;
border: 1px solid;
justify-content:center;
margin-bottom: 0.3rem;
border-radius: 5px;
`

const Children = styled.div`
    display:flex;
    width:100%;
    height: 30px;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) => props.theme.body};

    &:hover {
      background-color: rgb(245,247,248);
    }

    background-color: ${props => props.active ? "rgb(245,247,248)" : ""};
`


const Circle = styled.div`
  color: ${props => props.theme.text};
  height:20px;
  width: 20px;
  border: 1px solid;
  border-radius: 100px;
  margin-right: 5px;
  background-color : none;
  ${props => props.currentPage === props.id && `
    background-color: rgb(195,197,198);
  `}

`

const VideoPlayer = styled.video`
width: 100%;
aspect-ratio: 16/9;
`




const Course = () => {
  const [state, dispatch] = ContextValue();
  const [collapse, setCollapse] = useState(false);
  const [currentPage, setCurrentPage] = useState(4);
  const history = useNavigate();
  let userInfo  = state.userInfo;

  const [classroom_data, setClassroomData] = useState({});

  useEffect(() => {
    const currentClassroom = state.currentClassroom;
    setClassroomData(currentClassroom);
  }, [state.currentClassroom]);
  
  
  const course = {
    title: "Limits",
    class: "Mathematics",
    course_info: "This course is designed for high school and college students taking their first semester of calculus and who are learning limits and continuity.",
    course_material: [
      { id: 1, title: "Limit", context: "In this module, you'll learn about Limit", course_material: [{ title: "History", video: "href", context: "History" }, { title: "Applications", video: "href", context: "History" }] },
      { id: 2, title: "Limit of a function", context: "In this module, you'll learn about Limit of a function", course_material: [{ title: "History", video: "href", context: "History" }] },
      { id: 3, title: "Limit of a sequence", context: "In this module, you'll learn about Limit of a sequence", course_material: [{ title: "History", video: "href", context: "History" }] },
      { id: 4, title: "Inederminate form", context: "In this module, you'll learn about Inederminate form of Limit", course_material: [{ title: "History", video: "href", context: "History" }] }
    ]
  }

  const exams = [
    {
      examDuration: 0,
      examId: 0,
      examIntroText: "string",
      examName: "string",
      expired: true,
      expiredDate: "2023-06-09T19:10:08.484Z"
    }, {
      examDuration: 0,
      examId: 0,
      examIntroText: "string",
      examName: "string",
      expired: true,
      expiredDate: "2023-06-09T19:10:08.484Z"
    }
  ]


  const ChildrenWrapper = ({ id, children }) => {
    console.log(id);
    const handleClick = (event) => {
      event.stopPropagation();
      setCurrentPage(id - 1);
    };
    const active = id === (currentPage + 1);
    return (
      <Children id={id} onClick={handleClick} active={active}>
        {children}
      </Children>
    );
  };

  const WrapperFunction = ({ padding, border, border_bottom, id, children }) => {
    const handleClick = (event) => {
      event.stopPropagation();
      setCurrentPage(id);
    };
    return (
      <Wrapper padding={padding} border={border} border_bottom={border_bottom} id={id} onClick={handleClick}>
        {children}
      </Wrapper>
    );
  };

  /*
  const Accordion = ({ title }) => {
    return (
      <AWrapper style={{ cursor: "pointer" }} active={collapse} onClick={() => setCollapse(!collapse)}>
        <Title  >
          {title}
        </Title>
        <Reveal clicked={collapse}>
          {course.course_material.map((material, index) => (
            <ChildrenWrapper key={index} id={material.id}>
              <Circle currentPage={currentPage} id={material.id - 1} />
              <Subtitle>
                {material.title}
              </Subtitle>
            </ChildrenWrapper>
          ))}
        </Reveal>
      </AWrapper>
    )
  };
  */
  const navigateAddTest = () => {
      history("/add-test");
  }

  const startExamPage = (examId) => {
    if (state.userInfo.author === "teacher"){
      const foundExam = state.currentClassroom.exams.find((exam) => exam.examId === examId);
      console.log(foundExam);
      dispatch({
        type: types.FETCH_QUIZ,
        payload:foundExam
      })
    }
    else {
      fetchStartExam(state.userInfo.userId,examId,dispatch);

    }
    history("/quiz");
    
  }

  return (
    <>
      <Nav />
      <Section>
        <Container>
          <Box1>
            <Wrapper border={null} border_bottom="none" padding="0.5rem" style={{ margin: "0 0 1rem 0" }}>
              <Title>{classroom_data.classroomName}</Title>
              <Subtitle></Subtitle>
            </Wrapper>
            <WrapperFunction border="1px solid" border_bottom={null} padding="0.5rem" id={course.course_material.length}><Title>Course Info</Title></WrapperFunction>
            <WrapperFunction border="1px solid" border_bottom={null} padding="0.5rem" id={course.course_material.length + 1}><Title>Grades</Title></WrapperFunction>
            <WrapperFunction border="1px solid" border_bottom={null} padding="0.5rem" id={course.course_material.length + 2}><Title>Resources</Title></WrapperFunction>
            <WrapperFunction border="1px solid" border_bottom={null} padding="0.5rem" id={course.course_material.length + 3}><Title>Practice</Title></WrapperFunction>
            <>
              {userInfo.author === "teacher" && (
                <WrapperFunction border="1px solid" border_bottom={null} padding="0.5rem" id={course.course_material.length + 4}><Title>Add a quiz</Title></WrapperFunction>
              )}
            </>
            
          
          </Box1>
          <Box2>
            {currentPage === course.course_material.length ? (
              <Box>
                <Wrapper border={null} border_bottom="1px solid" padding="none"><Title>Course Info</Title></Wrapper>
                <Subtitle>{classroom_data.classroomIntroText}</Subtitle>
              </Box>
            ) : currentPage === course.course_material.length + 1 ? ( //Get the grades from user profile
              <Box>
                <Wrapper border={null} border_bottom="1px solid" padding="none"><Title>Grades</Title></Wrapper>
              </Box>
            ) : currentPage === course.course_material.length + 2 ? ( //Resources used for the course + that are useful on the subject.
              <Box>
                <Wrapper border={null} border_bottom="1px solid" padding="none"><Title>Resources</Title></Wrapper>
              </Box>
            ) : currentPage === course.course_material.length + 3 ? ( //Practice test on the subject
              <>
              <Box>
                <Wrapper border={null} border_bottom="1px solid" padding="none"><Title>Exams</Title></Wrapper>
              </Box>
              {classroom_data.exams.map((exam, index) => (
                exam.expired === true ? (
                  <>
                    <Box>
                      <Wrapper border={null} border_bottom="1px solid" padding="none" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <Title>Name: {exam.examName}</Title>
                          <Title>Duration: {exam.examDuration}</Title>
                        </div>
                        <div>
                          <Title>Expire Date: {exam.expiredDate.split("T")[0]}</Title>
                          <Title>Exam is Expired</Title>
                        </div>
                      </Wrapper>
                      <Subtitle>{exam.examIntroText}</Subtitle>
                    </Box>
                    <button style={{ width: '100px', height: '25px', cursor: 'pointer' }} onClick={() => startExamPage(exam.examId)}>Start Exam</button>
                  </>
                ) :
                  <>
                    <Box>
                      <Wrapper border={null} border_bottom="1px solid" padding="none" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <Title>Name: {exam.examName}</Title>
                          <Title>Duration: {exam.examDuration}</Title>
                        </div>
                        <div>
                          <Title>Expire Date: {exam.expiredDate.split("T")[0]}</Title>
                          <Title>Exam is not Expired</Title>
                        </div>
                      </Wrapper>
                      <Subtitle>{exam.examIntroText}</Subtitle>
                    </Box>
                    <button style={{ width: '100px', height: '25px', cursor: 'pointer' }} onClick={() => startExamPage(exam.examId)} >Start Exam</button>
                  </>
              ))}
              </>
            ) : currentPage === course.course_material.length + 4 ? ( //Practice test on the subject
              <>
              {userInfo.author === "teacher" && (
                <Box>
                  <Wrapper border={null} border_bottom="1px solid" padding="none" onClick={navigateAddTest()}><Title>Add a test</Title></Wrapper>
                </Box>
              )}
              </>
            ) :
              <Box>
                <Title>This is page diff</Title>
              </Box>
            }
          </Box2>
        </Container>
      </Section>
    </>
  )
};

export default Course