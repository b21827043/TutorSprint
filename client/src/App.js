import React, { useState } from 'react';
import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Explore from "./components/sections/Explore";
import Faq from "./components/sections/Faq";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/Themes";
import { dark } from "./styles/Themes";
import Landing from "./Landing";
import Login from "./components/sections/Login"
import Register from "./components/sections/Register"
import QuizPage from './components/sections/QuizPage';
import Course from './components/sections/Course';
import Courses from './components/sections/Courses';
import CoursePage from './components/sections/CoursePage';
import Analysis from "./components/sections/Analysis"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/sections/HomePage';
import AddClassroom from "./components/sections/AddClassroom";

function App() {
  //const [state, dispatch] = ContextValue();
  //const [isLoggedIn , setIsLoggedIn] = useState(false);
  //const {userInfo} =  state;
  //if (userInfo.userId){
  //  setIsLoggedIn(true);
  //}

  /*
  const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  */
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Router>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/add-classroom" element={<AddClassroom />} />
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/courses/:id" element={<Course />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route exact path="/courses/:id/:id" element={<CoursePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
