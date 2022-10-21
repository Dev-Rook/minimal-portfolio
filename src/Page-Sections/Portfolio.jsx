import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/Portfolio/Portfolio.module.css";

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

import ProjectData from "../Components/Data/ProjectData.json";

const Portfolio = () => {
  const [data, setData] = useState(ProjectData);

  return (
    <div className={Styles.Section}>
      <h3 className={Styles.Title}>Some Things I have Built</h3>
      <div className={Styles.Project_Wrapper}>
        {data &&
          data.map((value) => {
            return (
              <div className={Styles.Project_Card}>
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
                    <div className={Styles.Stack}>{value.Stacks.Stack_1}</div>
                    <div className={Styles.Stack}>{value.Stacks.Stack_2}</div>
                    <div className={Styles.Stack}>{value.Stacks.Stack_3}</div>
                    <div className={Styles.Stack}>{value.Stacks.Stack_4}</div>
                    <div className={Styles.Stack}>{value.Stacks.Stack_5}</div>
                    <div className={Styles.Stack}>{value.Stacks.Stack_6}</div>
                  </div>
                  {/* </div> */}

                  <div className={Styles.Bottom}>
                    <GitHubIcon sx={{ fontSize: 40, color: "white" }} />
                    <LaunchIcon sx={{ fontSize: 40, color: "white" }} />
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
