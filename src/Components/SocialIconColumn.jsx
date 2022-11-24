import React from "react";
import Styles from "../Styles/Component-Styles/IconBar.module.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialIconColumn = () => {
  return (
    <div className={Styles.IconBar}>
      <a href="https://github.com/Dev-Rook" target={"_blank"} rel={"noreferrer"}>
        <GitHubIcon sx={{ fontSize: "20" }} />
      </a>
      <a href="https://www.linkedin.com/in/dev-rook/" target={"_blank"} rel={"noreferrer"}>
        <LinkedInIcon sx={{ fontSize: "20" }} />
      </a>
      <a href="https://twitter.com/Dev_Rook" target={"_blank"} rel={"noreferrer"}>
        <TwitterIcon sx={{ fontSize: "20" }} />
      </a>
    </div>
  );
};

export default SocialIconColumn;
