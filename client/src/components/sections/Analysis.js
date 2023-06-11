import React, { useMemo, useState , useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement} from 'chart.js'
import {ContextValue} from '../../context/Context';
import { fetchAnalysis } from "../../services/HttpService";
import { useContext } from 'react';
Chart.register(ArcElement);

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

const Square = styled.div`
  color: ${props => props.theme.text};
  width: 40px;
  height: 10px;
  border: 1px solid;
  
  margin-right: 5px;
  background-color: ${props => props.bg};
`;




const Analysis = () => {


    const [state, dispatch] = ContextValue();
    
    const [currentPage, setCurrentPage] = useState(-1);

    const {Analysis} = state;
    //const [Analysis,setAnalysis] = useState([]);
    //const [best_rate,setBestRate] = useState(30);
    //const [worst_rate,setWorstRate] = useState(30);

useEffect(() => {

  }, [0]);


    

    const ChildrenWrapper = ({ id, children }) => {
        console.log(id);
        const handleClick = (event) => {
            event.stopPropagation();
            setCurrentPage(id);
        };
        const active = id === (currentPage);
        return (
            <Children id={id} onClick={handleClick} active={active}>
                {children}
            </Children>
        );
    };


    const Accordion = ({ title }) => {
        const [collapse, setCollapse] = useState(false);
        return (
            <AWrapper style={{ cursor: "pointer" }} active={collapse}>
                <Title onClick={() => setCollapse(!collapse)}  >
                    {title}
                </Title>
                <Reveal clicked={collapse}>
                    {Analysis.map((courses, index) => (
                        <Accordion2 title={"Chapters"} />
                    ))}
                </Reveal>
            </AWrapper>
        )
    };

    const Accordion2 = ({ title }) => {
        const [collapse, setCollapse] = useState(false);
        return (
            <AWrapper style={{ cursor: "pointer" }} active={collapse}>
                <Title onClick={() => setCollapse(!collapse)} >
                    {title}
                </Title>
                <Reveal clicked={collapse}>
                    {Analysis.map((courses, index) => (
                        courses.chapters.map((chapters, index) => (
                            <Accordion3 title={"Subchapters"} />
                        ))
                    ))}
                </Reveal>
            </AWrapper>
        )
    };

    const Accordion3 = ({ title }) => {
        const [collapse, setCollapse] = useState(false);
        return (
            <AWrapper style={{ cursor: "pointer" }} active={collapse}>
                <Title onClick={() => setCollapse(!collapse)} >
                    {title}
                </Title>
                <Reveal clicked={collapse}>
                    {Analysis.map((courses, index) => (
                        courses.chapters.map((chapters, index) => (
                            chapters.subChapters.map((subchapters, index) => (
                                <ChildrenWrapper key={index} id={subchapters.subChapterId}>
                                    <Circle currentPage={currentPage} id={subchapters.subChapterId} />
                                    <Subtitle>
                                        {subchapters.subChapterName}
                                    </Subtitle>
                                </ChildrenWrapper>
                            ))
                        ))
                    ))}
                </Reveal>
            </AWrapper>
        )
    };

    const PieChart = ({ totalNumber, trueNumber }) => {
        const data = {
            labels: ['True', 'False'],
            datasets: [
                {
                    data: [
                        { label: 'True', value: trueNumber, category: 'True Answer' },
                        { label: 'False', value: totalNumber - trueNumber, category: 'False Answer' },
                    ],
                    backgroundColor: ['#36A2EB', '#FF6384',],
                    hoverBackgroundColor: ['#36A2EB', '#FF6384',],
                },
            ],
        };

        const options = {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        const dataset = data.datasets[tooltipItem.datasetIndex];
                        const value = dataset.data[tooltipItem.index].value;
                        const category = dataset.data[tooltipItem.index].category;
                        return `${value}\% - ${category}`;
                    },
                },
            },
        };

        return (
            <div style={{ width: '400px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
                <Pie data={data} options={options} />
            </div>
        );
    };


    const GetBestRate = (list) => {
        let best_rate = null
        let best_id = 0
        {
            list.map((course, index) => (
                course.chapters.map((chapters, index) => (
                    chapters.subChapters.map((subchapters, index) => (
                        subchapters.AnalysisDto.trueRate > best_rate ? (
                            best_rate = subchapters.AnalysisDto.trueRate, best_id = subchapters.subChapterId
                        ) :
                            best_rate = best_rate
                    ))
                ))
            ))
        }

        return best_id
    }

    const GetWorstRate = (list) => {
        let worst_rate = 100
        let worse_id = 0
        {
            list.map((course, index) => (
                course.chapters.map((chapters, index) => (
                    chapters.subChapters.map((subchapters, index) => (
                        subchapters.AnalysisDto.trueRate < worst_rate ? (
                            worst_rate = subchapters.AnalysisDto.trueRate, worse_id = subchapters.subChapterId
                        ) :
                            worst_rate = worst_rate
                    ))
                ))
            ))
        }

        return worse_id
    }
    let best_rate = GetBestRate(Analysis);
    let worst_rate = GetWorstRate(Analysis);
    console.log(best_rate)
    console.log(worst_rate)

    return (
        <>
            <Nav />
            <Section>
                <Container>
                    <Box1>
                        <Wrapper border={null} border_bottom="none" padding="0.5rem" style={{ margin: "0 0 1rem 0" }} onClick={() => setCurrentPage(-1)}>
                            <Title>Analysis</Title>
                            <Subtitle>Course analysis</Subtitle>
                        </Wrapper>
                        <Accordion title="Classes" />
                    </Box1>
                    <Box2>
                        {currentPage === -1 ? (
                            Analysis.map((course, index) => (
                                course.chapters.map((chapter, index) => (
                                    chapter.subChapters.map((subchapter, index) => (
                                        <Box>
                                            {subchapter.subChapterId === best_rate ? (
                                                <>
                                                    <Wrapper border={null} border_bottom="1px solid" padding="none"><Title>Best rated subject is, {subchapter.subChapterName}</Title></Wrapper>
                                                    <Subtitle>{subchapter.subChapterIntroText}</Subtitle>
                                                    <PieChart totalNumber={subchapter.AnalysisDto.totalNumber} trueNumber={subchapter.AnalysisDto.trueNumber} />
                                                    <div style={{ width: '240px', height: '25px', marginLeft: 'auto', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                        <Square bg={'#36A2EB'} />
                                                        <Subtitle>No. of True Answers: {subchapter.AnalysisDto.trueNumber}</Subtitle>
                                                    </div>
                                                    <div style={{ width: '240px', height: '25px', marginLeft: 'auto', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                        <Square bg={'#FF6384'} />
                                                        <Subtitle>No. of False Answers: {subchapter.AnalysisDto.falseNumber}</Subtitle>
                                                    </div>
                                                </>
                                            ) : subchapter.subChapterId === worst_rate ? (
                                                <>
                                                    <Wrapper border={null} border_bottom="1px solid" padding="none"><Title>Worse rated subject is, {subchapter.subChapterName}</Title></Wrapper>
                                                    <Subtitle>{subchapter.subChapterIntroText}</Subtitle>
                                                    <PieChart totalNumber={subchapter.AnalysisDto.totalNumber} trueNumber={subchapter.AnalysisDto.trueNumber} />
                                                    <div style={{ width: '240px', height: '25px', marginLeft: 'auto', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                        <Square bg={'#36A2EB'} />
                                                        <Subtitle>No. of True Answers: {subchapter.AnalysisDto.trueNumber}</Subtitle>
                                                    </div>
                                                    <div style={{ width: '240px', height: '25px', marginLeft: 'auto', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                        <Square bg={'#FF6384'} />
                                                        <Subtitle>No. of False Answers: {subchapter.AnalysisDto.falseNumber}</Subtitle>
                                                    </div>
                                                </>
                                            ) : null}
                                        </Box>
                                    ))
                                ))
                            ))
                        ) :
                            Analysis.map((course, index) => (
                                course.chapters.map((chapter, index) => (
                                    <Box>
                                        <Wrapper border={null} border_bottom="1px solid" padding="none"><Title>{chapter.subChapters[currentPage].subChapterName}</Title></Wrapper>
                                        <Subtitle>{chapter.subChapters[currentPage].subChapterIntroText}</Subtitle>
                                        <PieChart totalNumber={chapter.subChapters[currentPage].AnalysisDto.totalNumber} trueNumber={chapter.subChapters[currentPage].AnalysisDto.trueNumber} />
                                        <div style={{ width: '240px', height: '25px', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Square bg={'#36A2EB'} />
                                            <Subtitle>No. of True Answers: {chapter.subChapters[currentPage].AnalysisDto.trueNumber}</Subtitle>
                                        </div>
                                        <div style={{ width: '240px', height: '25px', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Square bg={'#FF6384'} />
                                            <Subtitle>No. of False Answers: {chapter.subChapters[currentPage].AnalysisDto.falseNumber}</Subtitle>
                                        </div>
                                    </Box>
                                ))
                            ))
                        }

                    </Box2>
                </Container>
            </Section>
        </>
    )
};

export default Analysis