import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import Styles from "../../../Styles/Component-Styles/Nav/Nav.module.css";

import MenuIcon from "@mui/icons-material/Menu";

const NavVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 1.5,
    },
  },
};

const Nav = () => {
  return (
    <motion.div
      className={Styles.Nav}
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
            <ScrollLink
              to={"About"}
              py={true}
              smooth={true}
              offset={50}
              duration={500}
              className={Styles.Navlink}
            >
              About
            </ScrollLink>
          </li>
          <li className={Styles.NavItem}>
            <ScrollLink
              to={"Portfolio"}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={Styles.Navlink}
            >
              Portfolio
            </ScrollLink>
          </li>
          <li className={Styles.NavItem}>
            <Link to={"Contact"} className={Styles.Navlink}>
              Contact
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
