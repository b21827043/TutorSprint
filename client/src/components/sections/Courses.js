import React, { useState, useEffect, useRef , Component} from 'react'
import { ContextValue } from '../../context/Context';
import styled from "styled-components";
import Nav from '../Nav';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { textAlign } from '@mui/system';
import { Link, useNavigate } from "react-router-dom";

import { fetchUser } from "../../services/HttpService";
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
  margin-top: 20px;
`
const Box2 = styled.div`
  width: 70%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
`

const Results = styled.ul`
  display:flex;
  list-style: none;
  width: 100%;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 5px;
`

const Result = styled.li`
  flex-grow: 0;
  max-width: 33.333333%;
  flex-basis: 33.33333%;
`

const Box = styled.div`
height: 100%;
padding: 0px 6px 24px;
box-sizing: border-box;
`

const CardWrapper = styled.div`
cursor: pointer;
display: grid;
height: inherit;
box-sizing: inherit;
border: 1px solid;
border-radius: 5px;
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

const Reveal = styled.div`
    display: ${(props) => props.clicked ? 'block' : 'none'};
    margin-top: 1rem;
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 300;
    line-height: 1.1rem;
`

const Desc = styled.div`
    display: flex;
    padding: 8px;
    flex: 1 0 auto;
    flex-direction: column;
    row-gap: 8px;
    justify-content: space-between;
    box-sizing: inherit
`

const Author = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`

const CardContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CourseDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const CourseTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const CourseDescription = styled.p`
  font-size: 0.9rem;
  flex-grow: 1;
  margin-bottom: 1rem;
`;

const Explore = styled.a`
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
  width: 200px;
  height: auto;
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

const Courses = () => {

  const [state, dispatch] = ContextValue();
  const history = useNavigate();
  const navigate = useNavigate();
  const arr = []
  let userInfo  = state.userInfo;

  const [courses, setCourses] = useState([]);
  const [classroom_data, setClassroomData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const classrooms = state.user.classrooms;

    let courses_fil = [];
    let classroom_data_fil = [];
    let data_fil = [
      { title: "Subjects", id: 1, items: [] },
      { title: "Level", id: 2, items: ["Beginner", "Intermediate", "Advanced", "Mixed"] },
      { title: "Language", id: 3, items: ["Turkish", "English"] },
    ]
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
 
    fetchUser(userInfo.author,userInfo.userId,dispatch)

    if (classrooms) {
      classrooms.forEach(element => {
        if (element.classroomId == 2 || element.classroomId == 3) {
          data_fil[0].items.push(element.classroomName);
          courses_fil.push(element);
        } else {
          classroom_data_fil.push(element);
        }
      });

      setCourses(courses_fil);
      setClassroomData(classroom_data_fil);
      setData(data_fil);
    }

  }, [state.user.classrooms]);

  const handleExploreClick = (classroomId) => {
    courses.forEach(element => {
      if (element.classroomId == classroomId){
        dispatch({
          type: types.FETCH_CURRENT_CLASSROOM,
          payload:element
        })
      }
    });
    classroom_data.forEach(element => {
      if (element.classroomId == classroomId){
        dispatch({
          type: types.FETCH_CURRENT_CLASSROOM,
          payload:element
        })
      }
    });
    history(classroomId.toString());
  };

  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + '...';
    }
    return str;
  }

  const navigateAddClass = ()  => {
    history("/add-classroom")
  }

  const ChildrenWrapper = ({ id, children }) => {
    const [active, setActive] = useState(false);
    const prevActiveRef = useRef(false);

    const handleClick = (event) => {
      event.stopPropagation();
      setActive(!active);
    };

    useEffect(() => {

      if (active !== prevActiveRef.current) {
        if (active) {
          console.log(active)
          arr.push(id)
          console.log(arr)
        } else {
          arr.shift()
          console.log(arr)
        }
        prevActiveRef.current = active
      }
    }, [active]);

    return (
      <Children onClick={handleClick} >
        <>
          {active ? (
            <CheckBoxIcon style={{ color: "black" }} />
          ) : (
            <CheckBoxOutlineBlankIcon style={{ color: "black" }} />
          )}
          {children}
        </>
      </Children>
    );
  };

  const Accordion = ({ title, id }) => {
    const [collapse, setCollapse] = useState(false)

    return (
      <AWrapper
        style={{ cursor: "pointer" }}
        active={true}
        onClick={() => setCollapse(!collapse)}
      >
        <Title>{title}</Title>
        <Reveal clicked={true}>
          {data.map((material, index) => {
            if (material.id === id) {
              return material.items.map((item, i) => (
                <ChildrenWrapper key={i} id={id}>
                  <Title>{item}</Title>
                </ChildrenWrapper>
              ));
            }
            return null;
          })}
        </Reveal>
      </AWrapper>
    );
  };


  return (
    <>
      <Nav/>
      <Section>
        <Container>
          <Box1>
            <Title>Filter by</Title>
            <Accordion title="Subjects" id={1} />
            <Accordion title="Level" id={2} />
            <Accordion title="Language" id={3} />
          </Box1>

          <div style={{display: 'flex', flexDirection:'column' , justifyContent: 'space-between'}}>
            { userInfo.author === "student" &&
              <Box2>
              <Title style={{ marginLeft:'20px', width: "100%" }}>Courses</Title>
              <Results>
                {courses.map((result, index) => (
                  <Result key={index}>
                    <Box>{ }
                      <CardContainer>

                        <CourseImage src="https://fastly.picsum.photos/id/1/200/250.jpg?hmac=5JkAIpEsl4QghQILpcPNAH2jBymEyhrvQzKRZfgHta8" alt={result.classroomName}></CourseImage>
                        <CourseDetails>
                          <CourseTitle>{result.classroomName}</CourseTitle>
                          <CourseDescription>{truncateString(result.classroomIntroText, 40)}</CourseDescription>
                          <Explore onClick={() => handleExploreClick(result.classroomId)}>Explore {'>'}</Explore>
                        </CourseDetails>

                      </CardContainer>
                    </Box>
                  </Result>
                ))}
              </Results>
            </Box2>
            }
            

            <Box2>
              <div style={{ width: "600px", display: 'flex', flexDirection:'row'}}>
              <Title style={{ marginLeft:'20px', width: "100%" }}>Classrooms</Title>
              {userInfo.author === "teacher" && (
                <Btn style={{cursor:"pointer",width:"200px" ,alignSelf:"flex-end"}} onClick={navigateAddClass}> Add Classroom</Btn>
              )}
              </div>
              <Results>
                {classroom_data.map((result, index) => (
                  <Result key={index}>
                    <Box>{ }
                      <CardContainer>

                        <CourseImage src="https://fastly.picsum.photos/id/1/200/250.jpg?hmac=5JkAIpEsl4QghQILpcPNAH2jBymEyhrvQzKRZfgHta8" alt={result.classroomName}></CourseImage>
                        <CourseDetails>
                          <CourseTitle>{result.classroomName}</CourseTitle>
                          <CourseDescription>{truncateString(result.classroomIntroText, 40)}</CourseDescription>
                          <Explore onClick={() => handleExploreClick(result.classroomId)}>Explore {'>'}</Explore>
                        </CourseDetails>

                      </CardContainer>
                    </Box>
                  </Result>
                ))}
              </Results>
            </Box2>
          </div>




        </Container>
      </Section>



      
    </>
  )
}

export default Courses