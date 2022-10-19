import React from "react";
import Styles from "../Styles/Page-Styles/Landing/Landing.module.css";

import Hero from "../Page-Sections/Hero";

const Landing = () => {
  return <div className={Styles.Page}>
    <Hero />
  </div>;
};

export default Landing;
