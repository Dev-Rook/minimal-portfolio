import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Section-Styles/Hero/Hero.module.css";

const Hero = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>Developer Rook</h1>

        <p className={Styles.Description}>
          Software engineer with 1 year overall web development experience.
          Current tool is React JS and it&apos;s many libraries. Accompanying
          React are my other tools: JavaScript, TypeScript, Html, Css,
          Scss..With this I am able to solve problems and create web
          applications conforming to modern UI/UX standards.
        </p>

        <Link to={"Contact"}>
          <button className={Styles.Contact_Button}>Get In Touch</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
