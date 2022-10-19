import React from "react";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/About/About.module.css";

import TechSlider from "../Components/Swiper/Technologies/TechSlider";


const About = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>About Developer Rook</h1>

        <p className={Styles.Description}>
          My journey in coding begun around 2019-2018 when I decided to try my
          hand at learning Python because it seemed cool to code & from my
          research was the “Easiest Programing Language To Learn”. Due to not
          having a set goal or purpose in coding, I lost interest after a while.
{/* 
          <br />
          <br />

          However, late 2021 the passion for coding was reignited when I worked
          and got myself a proper laptop. This time I properly researched the
          different programing languages and researched the different fields
          extensively before setling on Web Development which entails: Html,
          Css, JavaScript... I managed to pick up the basics in a few months and
          in that process found myself a valuable assets to my journey as a
          developer, Jason Clarke. 
          
          <br />
          <br />
          
          With his guidance I excelled beyond my own
          expectations and a class on web development I had at the time.
          Five months into my Developer journey, I transitioned over to React JS,
          my current tool for business. I got used to it in a matter of weeks
          with my new skill of googling and by watching tutorials. But majority
          of what I learned became second nature by building and debuging
          projects day in, day out. */}
        </p>

        <TechSlider />
      </div>
    </div>
  );
};

export default About;
