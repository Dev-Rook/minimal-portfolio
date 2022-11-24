import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import Styles from "../../Styles/Component-Styles/Nav.module.scss";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
// import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// // import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
// import LogoDevIcon from "@mui/icons-material/LogoDev";

// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InsertLinkIcon from "@mui/icons-material/InsertLink";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";

// // Material UI Accordion Imports Start
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// // Material UI Accordion Imports End

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
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  // const [expanded, setExpanded] = React.useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

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
          {/* <li className={Styles.NavItem}>
            <Link to={""} className={Styles.Navlink}>
              Home
            </Link>
          </li> */}
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
            <ScrollLink
              to={"GIT"}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={Styles.Navlink}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        <MenuIcon
          sx={{ fontSize: 30, color: "white" }}
          className={Styles.MenuIcon}
          onClick={showMenu}
        />
      </div>

      {/* Mobile Menu Start */}

      <div
        className={`${Styles.Mobile_Menu_Container} ${
          menu ? Styles.Reveal : ""
        }`}
      >
        <div className={Styles.Content_Container}>
          <div className={Styles.Header}>
            <div className={Styles.Logo_Container}>
              <Link to={"/"}>
                <img src="" alt="" className={Styles.Logo} />
              </Link>
            </div>

            <CloseIcon
              sx={{ fontSize: 30, color: "white" }}
              className={Styles.CloseIcon}
              onClick={showMenu}
            />
          </div>

          <ul className={Styles.Mobile_Navlink_Container}>
            <Link to={""} className={Styles.Mobile_Navlink}>
              <li onClick={showMenu} className={Styles.Mobile_NavItem}>
                Knots & Ropes
              </li>
            </Link>
            <Link to={""} className={Styles.Mobile_Navlink}>
              <li onClick={showMenu} className={Styles.Mobile_NavItem}>
                Sails
              </li>
            </Link>
            <Link to={""} className={Styles.Mobile_Navlink}>
              <li onClick={showMenu} className={Styles.Mobile_NavItem}>
                Hull
              </li>
            </Link>
            <Link to={""} className={Styles.Mobile_Navlink}>
              <li onClick={showMenu} className={Styles.Mobile_NavItem}>
                Rigging
              </li>
            </Link>
            <Link to={""} className={Styles.Mobile_Navlink}>
              <li onClick={showMenu} className={Styles.Mobile_NavItem}>
                Maneuvering
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Menu  End */}
    </motion.div>
  );
};

export default Nav;
