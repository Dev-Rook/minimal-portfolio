import React from "react";
import Styles from "../Styles/Component-Styles/IconBar.module.scss";
import {motion} from "framer-motion"

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Column = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0,
      duration: 2,
      ease: "easeInOut"
    },
  },
};


const SocialIconColumn = () => {
  return (
    <motion.div className={Styles.IconBar}
    // variants={Column}
    // initial="hidden"
    // animate="visible"
    >
      <a href="https://github.com/Dev-Rook" target={"_blank"} rel={"noreferrer"}>
        <GitHubIcon sx={{ fontSize: "20" }} />
      </a>
      <a href="https://www.linkedin.com/in/dev-rook/" target={"_blank"} rel={"noreferrer"}>
        <LinkedInIcon sx={{ fontSize: "20" }} />
      </a>
      <a href="https://twitter.com/Dev_Rook" target={"_blank"} rel={"noreferrer"}>
        <TwitterIcon sx={{ fontSize: "20" }} />
      </a>
    </motion.div>
  );
};

export default SocialIconColumn;
