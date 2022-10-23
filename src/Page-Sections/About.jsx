import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "../Styles/Page-Section-Styles/About/About.module.css";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1
          className={Styles.Title}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          About Developer Rook
        </h1>

        <p
          className={Styles.Description}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My journey in code begun back in 2019-2020. Python was my first
          programming language but currently React JS and it's many libraries
          are my main tool for solving problems and building websites/web
          applications.
        </p>

        <div className={Styles.Technolgies_Container}>
          <p className={Styles.Container_Title}>Technologies:</p>

          <div className={Styles.Tech_List_Container}>
            <ul className={Styles.Tech_List}>
              <li className={Styles.List_Item}>
                <NavigateNextIcon sx={{ fontSize: 10, color: "#319795" }} />
                React JS
              </li>
              <li className={Styles.List_Item}>
                <NavigateNextIcon sx={{ fontSize: 10, color: "#319795" }} />
                javaScript
              </li>
              <li className={Styles.List_Item}>
                <NavigateNextIcon sx={{ fontSize: 10, color: "#319795" }} />
                TypeScript
              </li>
              <li className={Styles.List_Item}>
                <NavigateNextIcon sx={{ fontSize: 10, color: "#319795" }} />
                Html & Css
              </li>
            </ul>

            <ul className={Styles.Tech_List}>
              <li className={Styles.List_Item}>
                <NavigateNextIcon sx={{ fontSize: 10, color: "#319795" }} />
                Axios
              </li>
              <li className={Styles.List_Item}>
                <NavigateNextIcon sx={{ fontSize: 10, color: "#319795" }} />
                Sass
              </li>
              <li className={Styles.List_Item}>
                <NavigateNextIcon sx={{ fontSize: 10, color: "#319795" }} />
                Matuerial UI
              </li>
              <li className={Styles.List_Item}>
                <NavigateNextIcon sx={{ fontSize: 10, color: "#319795" }} />
                NPM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
