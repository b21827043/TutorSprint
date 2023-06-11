import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../assets/ts.png'
import ProfilePage from './ProfilePage';
import { FilterRounded } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import {ContextValue} from '../context/Context';

const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body};
`

const NavBar = styled.nav`
display:  flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
`

const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after{
  content:' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;

}

&:hover::after{
    width: 100%;
    
    }
`

const Search = styled.input`
width:100%;
height: 30px;
border: 1px solid black;
border-radius: 4px 0 0 4px;
padding: 0 10px;
color: ${props => props.theme.text};
`

const SearchResults = styled.div`
margin-top: 5px;
width: 100%;
height: 200px;
background-color: white;
box-shadow: rgba(0,0,0,0.35) 0pc 5px 15px;
overflow: hidden;
overflow-y: auto;
z-index: 1;
`

const Wrapper = styled.div`
display:flex;
width: ${props => props.width};
justify-content: space-between;
align-items: center;
`

const Profile = styled.button`
cursor: pointer;
display:flex;
width: 200px;
justify:content: center;
align-items: center;
border: none;
border-left: 1px solid;
background-color: white;
align-self: center;
`

const Title = styled.h2`
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.text};
    width: auto;
    align-self: center;

    span{
    font-family: 'Kanit';
    }
`
const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background:none;
  padding-left: 5px;
  transition: transform 0.1s;
  margin-bottom: 5px;
  
  &::before {
    align-self: center;
    content: "";
    width: 0.5em;
    height: 0.5em;
    border: solid black;
    border-width: ${props => props.borderWidth};
    transform: rotate(135deg);
  }
`
const Reveal = styled.div`
    width: 263px;
    display: ${(props) => props.clicked ? 'block' : 'none'};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 300;
    line-height: 1.1rem;
    position: fixed;
    top: ${props => props.theme.navHeight};
    z-index: 1;
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

const AWrapper = styled.div`
  height: auto;
  width: auto;
  padding: 0.5rem;
  display:flex;
  flex-direction: column;
  justify-content:center;
  margin-bottom: 0.3rem;
  border-radius: 5px;
`


const LogoImage = styled.img`
width: 50px;
height: 50px;
margin-right: 5px;
`

const SearchWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`

const Nav = () => {
  let navigate = useNavigate();
  const [state, dispatch] = ContextValue();
  const [collapse, setCollapse] = useState(false)
  const [notifCollapse, setNotifCollapse] = useState(false)
  const [query, setQuery] = useState("")
  const {user} = state;
  let userInfo = state.userInfo;

  const data = [
    { id: 1, title: "Limit" },
    { id: 2, title: "Functions" },
    { id: 3, title: "Integrals" },
    { id: 4, title: "Geometry" },
  ]

  const navigateCourses = () => {
    navigate("/courses");
  }
  const navigateSmartTest = () => {
    navigate("/smart-test");
  }
  const navigateAnalysis = () => {
    navigate("/analysis");
  }

  const Accordion = () => {
    return (
      <AWrapper>
        <Profile onClick={() => setCollapse(!collapse)}>
          <AccountCircleRoundedIcon style={{ fontSize: "50px", color: "blue" }}></AccountCircleRoundedIcon>
          <Title>{user.fullName}</Title>
          <Arrow borderWidth="0.1em 0.1em 0 0"></Arrow>
        </Profile>
        <Reveal clicked={collapse}>
          <Children><Title onClick={() => handleProfileClick()}>Profile</Title></Children>
          {isProfileOpen && (
            <ProfilePage onClose={handleProfileClick} />
          )}
          <Children><Title>My Classes</Title></Children>
          <Children><Title>Settings</Title></Children>
          <Children><Title>Updates</Title></Children>
        </Reveal>
      </AWrapper>
    )
  };

  const Notification = () => {
    return (
      <AWrapper style={{ cursor: "pointer" }} onClick={() => setNotifCollapse(!notifCollapse)}>
        {notifCollapse === false ? (
          <NotificationsNoneIcon></NotificationsNoneIcon>
        ) :
          <NotificationsIcon></NotificationsIcon>}
        <Reveal clicked={notifCollapse}>
          <Children><Title>Notif1</Title></Children>
        </Reveal>
      </AWrapper>
    )
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };





  return (

    <Section>
      <NavBar>
        <Wrapper width="350px">
          <LogoImage src={logo} />
          <SearchWrapper>
            <Search type="text" value={query} placeholder='What do you want to learn?' onChange={(e) => setQuery(e.target.value.toLowerCase())} />
            <SearchIcon style={{ fontSize: "30px", color: "white", border: "1px solid black", borderRadius: "0 4px 4px 0", backgroundColor: "blue", cursor: "pointer" }}></SearchIcon>
            {data.filter((asd) => asd.title.toLowerCase().includes(query)).length != 0 && query != "" && (<Reveal clicked={true}>{data.filter((asd) => asd.title.toLowerCase().includes(query)).map((course) => <Children key={course.id}><Title>{course.title}</Title></Children>)}</Reveal>)}
          </SearchWrapper>
        </Wrapper>
        {null}
        <Wrapper width="500px">
          <Menu>
            <MenuItem onClick={navigateCourses} >Home</MenuItem>
            <MenuItem onClick={navigateSmartTest}>Smart Test</MenuItem>
            {
              userInfo.author === "student" && 
              <MenuItem onClick={navigateAnalysis}>Analysis</MenuItem>
            }
          </Menu >
          <Notification></Notification>
          <Accordion></Accordion>
        </Wrapper>
      </NavBar>
    </Section>
  )
}

export default Nav