import React from "react";
import Styles from "../Styles/Page-Styles/Landing/Landing.module.css";

import Hero from "../Page-Sections/Hero";
import About from "../Page-Sections/About";
import Portfolio from "../Page-Sections/Portfolio";
import OtherProject from "../Page-Sections/OtherProject";
import GetInTouch from "../Page-Sections/GetInTouch"

const Landing = () => {
  return <div className={Styles.Page}>
    <Hero />
    <About />
    <Portfolio />
    <OtherProject />
    <GetInTouch />
  </div>;
};

export default Landing;
