import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "../Styles/Page-Section-Styles/Portfolio.module.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import ProjectData from "../Components/Data/ProjectData.json";

const Portfolio = () => {
  const [data, setData] = useState(ProjectData);
  const [visible, setVisible] = useState(2)

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={Styles.Section} id={"Portfolio"}>
      <div className={Styles.Content_Container}>
        <div className={Styles.Title_Container}>
          <h3
            className={Styles.Title}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Some Things I have Built
          </h3>

          <p className={Styles.Description}>
            These are a handful of featured projects
          </p>
        </div>

        {data &&
          data.slice(0, visible).map((value) => {
            return (
              <div
                className={Styles.Project_Card}
                data-aos="fade-up"
                data-aos-duration="1000"
                key={value.id}
              >
                <div className={Styles.Image_Container}>
                  <img
                    src={value.Image}
                    alt="Project Logo"
                    className={Styles.Image}
                  />
                </div>

                <div className={Styles.Information_Box}>
                  {/* <div className={Styles.Top}> */}
                  <h3 className={Styles.Project_Title}>{value.Title}</h3>
                  <p className={Styles.Description}>{value.Description}</p>

                  <div className={Styles.Stack_Container}>
                    <div className={Styles.Stack}>{value.Stacks.stack_1}</div>
                    <div className={Styles.Stack}>{value.Stacks.stack_2}</div>
                    <div className={Styles.Stack}>{value.Stacks.stack_3}</div>
                    <div className={Styles.Stack}>{value.Stacks.stack_4}</div>
                    <div className={Styles.Stack}>{value.Stacks.stack_5}</div>
                    <div className={Styles.Stack}>{value.Stacks.stack_6}</div>
                  </div>
                  {/* </div> */}

                  <div className={Styles.Bottom}>
                    <a
                      href={value.Links.Code}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      <GitHubIcon sx={{ fontSize: 40, color: "white" }} />
                    </a>
                    <a
                      href={value.Links.Demo}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      <LaunchIcon sx={{ fontSize: 40, color: "white" }} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Portfolio;
