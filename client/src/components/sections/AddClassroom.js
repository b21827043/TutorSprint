import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import { ContextValue } from '../../context/Context';
import { fetchAllUsers,addClassroom } from "../../services/HttpService";
import { Link, useNavigate } from "react-router-dom";

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
    width:150px;
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

const Circle2 = styled.div`
  color: ${props => props.theme.text};
  height:20px;
  width: 20px;
  border: 1px solid;
  border-radius: 100px;
  margin-right: 5px;
  background-color : none;
  ${props => props.active === true && `
    background-color: rgb(195,197,198);
  `}
`

const Input = styled.input`
height:30px;
width:100%;
padding: none;
display:flex;
flex-direction: column;
border: 1px solid;

align-self: flex-start;
justify-content:center;

border-radius: 5px;
`




const AddClassroom = () => {
    const [state, dispatch] = ContextValue();
    const [query, setQuery] = useState("");
    const history = useNavigate();
    const [students,setStudents] = useState([]);

    useEffect(() => {
        fetchAllUsers(dispatch).then((res) => {
            setStudents(state.users);
        })
      }, [0]);

    const classroom = {
        classroomIntroText: "Welcome to our English Grammar Course! This comprehensive course is designed to help you master the essential elements of English grammar. From tenses and verb usage to gerunds and infinitives, you will gain a solid foundation in grammar rules and improve your overall language skills. Get ready to enhance your English proficiency and communicate with confidence!",
        classroomName: "English",
        studentIdList: [
            
        ]
    }


    /*
    const students = [
        {
            email: "string",
            fullName: "Barış Anılır",
            id: 0,
            imgUrl: "string"
        }, {
            email: "string",
            fullName: "Misbah Bilgili",
            id: 1,
            imgUrl: "string"
        }

    ]
    */

    const Results = ({ studentId, studentName }) => {
        const [active, setActive] = useState(false);
        const HandleSelectQuestion = () => {
            setActive(!active);
            if (classroom.studentIdList.includes(studentId)) {
                classroom.studentIdList.splice(classroom.studentIdList.indexOf(studentId), 1);
            } else {
                classroom.studentIdList.push(studentId);
            }
            console.log(classroom.studentIdList);
        };
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onClick={HandleSelectQuestion}>
                <Circle2 active={active} />
                <Title>{studentName}</Title>
            </div>
        );
    }

    const keys = ["classroomName", "classroomIntroText"];
    const placeholders = ["Classroom Name", "Classroom Introduction"]

    const GetInfo = ({ key, i, value, handleFieldChange }) => {
        const [inputValue, setInputValue] = useState(value || "");

        const handleBlur = () => {
            handleFieldChange(keys[i], inputValue);
        };

        return (
            <Input
                type="text"
                value={inputValue}
                placeholder={placeholders[i]}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleBlur}
                key={key}
            />
        );
    };

    const [info, setInfo] = useState({
        classroomIntroText: null,
        classroomName: null,
    });
    const handleFieldChange = (fieldKey, value) => {
        setInfo(prevInfo => ({
            ...prevInfo,
            [fieldKey]: value
        }));
        if (fieldKey === 'classroomIntroText') {
            classroom.classroomIntroText = value;
        } else if (fieldKey === 'classroomName') {
            classroom.classroomName = value;
        }
        console.log(classroom);
    };

    const addClassroomFunc = () => {
        let body = {
            classroomIntroText: info.classroomIntroText,
            classroomName: info.classroomName,
            studentIdList: classroom.studentIdList,
            teacherId: state.userInfo.userId
        };
        addClassroom(body);
        history("/courses");
    }

    return (
        <>
            <Nav />
            <Section>
                <Container>
                    <Box1>
                        <Wrapper border={null} border_bottom="none" padding="0.5rem" style={{ margin: "0 0 1rem 0" }}>
                            <Title>Create a Classroom</Title>
                            <Subtitle>Fill in the details and create a classroom</Subtitle>
                        </Wrapper>
                    </Box1>
                    <Box2>
                        <>
                            {keys.map((key, i) => (
                                <Box>
                                    <Wrapper style={{ marginBottom: '0', justifyContent: 'flex-end', height: '20px' }} border={null} border_bottom="none" padding="none">
                                        <Title>{placeholders[i]}</Title>
                                    </Wrapper>
                                    <GetInfo
                                        key={i} // Unique key here
                                        i={i}
                                        value={info[key]}
                                        handleFieldChange={handleFieldChange}
                                    />
                                </Box>

                            ))}
                            <Box>
                                <Wrapper style={{ marginBottom: '0', justifyContent: 'flex-end', height: '20px' }} border={null} border_bottom="none" padding="none">
                                    <Title>Pick Students</Title>
                                </Wrapper>
                                <Input type="text" value={query} placeholder='What do you want to learn?' onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                                {students.filter((asd) => asd.fullName.toLowerCase().includes(query)).length != 0 && query != "" && (<Reveal clicked={true}>{students.filter((asd) => asd.fullName.toLowerCase().includes(query)).map((student) => <Children key={student.id}><Results studentId={student.id} studentName={student.fullName} /></Children>)}</Reveal>)}
                            </Box>
                            <button style={{ width: '100px', height: '25px', cursor: 'pointer' }} onClick={addClassroomFunc}>Create</button>
                            {/* USE THIS BUTTON TO PUSH '' to BACKEND */}
                        </>
                    </Box2>
                </Container>
            </Section>
        </>
    )


}

export default AddClassroom