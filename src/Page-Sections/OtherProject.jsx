import { DataArray } from "@mui/icons-material";
import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/Other-Projects/OtherProjects.module.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

import OtherProjectData from "../Components/Data/OtherProjectData.json";

const OtherProject = () => {
  const [data, setData] = useState(OtherProjectData);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <div className={Styles.Title_Container}>
          <h3
            className={Styles.Title}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Other Projects
          </h3>

          <p
            className={Styles.Description}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            These are some other noteworthy projects
          </p>
        </div>

        {data &&
          data.map((value) => {
            return (
              <div className={Styles.Card} key={value.id}>
                <div className={Styles.Head}>
                  <DriveFolderUploadIcon
                    sx={{ fontSize: 40, color: "white" }}
                  />

                  <div className={Styles.Links}>
                    <a
                      href={value.Links.Code}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      <GitHubIcon sx={{ fontSize: 25, color: "white" }} />
                    </a>
                    <a
                      href={value.Links.Demo}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      <LaunchIcon sx={{ fontSize: 25, color: "white" }} />
                    </a>
                  </div>
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
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OtherProject;
