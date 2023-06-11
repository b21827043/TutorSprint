import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'

const Section = styled.section`
min-height:100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;

`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;

`

const Container = styled.div`
width: 70%;
height: 200vh;
background-color: ${props => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items;
`

const Items = styled.ul`
list-style:none;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
background-color: ${props => props.theme.body};

&>*:nth-of-type(2n +1){
  justify-content: start;
  div{
    border-radius: 50px 0 50px 0;
    text-align: right;
  }
  p{
    border-radius: 40px 0 40px 0;
  }
}
&>*:nth-of-type(2n){
  justify-content: end;
  div{
    border-radius: 0 50px 0 50px;
    text-align:left;
  }
  p{
    border-radius: 0 40px 0 40px;
  }
}
`

const Item = styled.li`
width:100%;
height: 100%;
display:flex;
`

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};
`
const Parag = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
display:block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};

`
const Text = styled.span`
display:block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};

font-weight:400;
margin: 0.5rem 0;
`


const ExploreSection = ({ title, subtext, addToRef }) => {

  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Parag>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Parag>
      </ItemContainer>
    </Item>


  )
}



const Explore = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    console.log(revealRefs)

    return () => {

    };
  }, [])
  return (
    <Section id='explore'>
      <Title>Explore</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <ExploreSection addToRef={addToRefs} title="Personalized Classrooms" subtext="Experience learning that truly caters to your needs. Our classrooms are tailored to match individual learning styles, ensuring a comfortable environment that promotes effective knowledge acquisition." />
          <ExploreSection addToRef={addToRefs} title="Smart Tests" subtext={"Say goodbye to traditional, rigid testing. Our smart tests adapt to your level of understanding, providing appropriate challenges that enhance your academic growth and measure your progress accurately."} />
          <ExploreSection addToRef={addToRefs} title="Diverse Courses" subtext={"Explore a plethora of courses spanning various subjects, from English and Math to niche fields. Our comprehensive curriculum is designed by experts to promote deep understanding and foster lifelong learning."} />
          <ExploreSection addToRef={addToRefs} title="Interactive Community" subtext={"Join a community of avid learners and passionate educators. Engage in insightful discussions, share knowledge, and foster a collaborative environment that enhances learning experiences beyond the classroom."} />



        </Items>
      </Container>
    </Section>
  )
}

export default Explore