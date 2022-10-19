import React from "react";
import Styles from "../../Styles/Component-Styles/Social-Icon-Bar/IconBar.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialIconColumn = () => {
  return (
    <div className={Styles.IconBar}>
      <GitHubIcon sx={{ fontSize: "20"}} />
      <LinkedInIcon sx={{ fontSize: "20"}} />
      <TwitterIcon sx={{ fontSize: "20"}} />
    </div>
  );
};

export default SocialIconColumn;
