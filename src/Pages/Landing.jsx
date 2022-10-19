import React from "react";
import Styles from "../Styles/Page-Styles/Landing/Landing.module.css";

import Hero from "../Page-Sections/Hero";
import About from "../Page-Sections/About";

const Landing = () => {
  return <div className={Styles.Page}>
    <Hero />
    <About />
  </div>;
};

export default Landing;
