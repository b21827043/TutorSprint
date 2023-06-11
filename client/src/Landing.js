import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Explore from "./components/sections/Explore";
import Faq from "./components/sections/Faq";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import {light} from "./styles/Themes";
import {dark} from "./styles/Themes";


function Landing() {
    localStorage.setItem("registerStatus",false);

    return (
      <>
      <GlobalStyles />
        <ThemeProvider theme={light}>
          <Navigation />
          <Home />
          <About />
          <Explore />
          <Faq />
        </ThemeProvider>
      </>
    );
  }
  
  export default Landing;