import React, { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import Styles from "../../../Styles/Component-Styles/Nav/Nav.module.css";

import MenuIcon from "@mui/icons-material/Menu";


const NavVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: .2,
      duration: 1.5
    }
  }
}


const Nav = () => {
  return (
    <motion.div className={Styles.Nav}
    variants={NavVariants}
    initial="hidden"
    animate="visible"
    >
      <div className={Styles.Left_Side}>
        <div className={Styles.Image_Container}>
          <img
            src={`https://github.com/Dev-Rook/minimal-portfolio/blob/main/src/Assets/Images/Carbon%20Claws.png?raw=true`}
            alt=""
            className={Styles.Logo}
          />
        </div>
      </div>

      <div className={Styles.Right_Side}>
        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <Link to={""} className={Styles.Navlink}>
              Home
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={""} className={Styles.Navlink}>
              About
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={""} className={Styles.Navlink}>
              Portfolio
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={""} className={Styles.Navlink}>
              Dev Logs
            </Link>
          </li>
        </ul>

        <MenuIcon
          sx={{ color: "white", fontSize: 30 }}
          className={Styles.Menu_Icon}
        />
      </div>
    </motion.div>
  );
};

export default Nav;
