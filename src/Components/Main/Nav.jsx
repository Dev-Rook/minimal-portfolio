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
// import CodeIcon from "@mui/icons-material/Code";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material UI Accordion Imports Start
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Material UI Accordion Imports End

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

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const doubleFunction = () => {
  //   showMenu();
  //   scrollUp();
  // };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
              py={"true"}
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

      {/* Mobile Menu Start  */}

      <div
        // onClick={showMenu}
        className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}
      >
        <div className={Styles.Content_Container}>
          <div className={Styles.Header}>
            <div className={Styles.Menu_Left_Side}>
              <div className={Styles.Logo_Container}>
                <img
                  src={`https://github.com/Dev-Rook/rookdev/blob/master/src/Assests/Images/Logo.png?raw=true`}
                  className={Styles.Logo}
                  alt=""
                />
              </div>

              <h3 className={Styles.Brand}>Dev Rook</h3>
            </div>

            <CloseIcon
              sx={{ fontSize: 25 }}
              onClick={showMenu}
              className={Styles.Close_Icon}
            />
          </div>

          <ul className={Styles.Mobile_Navlink_Container}>

            <li className={Styles.Menu_NavItem}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className={Styles.Accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  {/* <Typography
                    sx={{ width: "33%", flexShrink: 0, color: "#319795" }}
                  >
                    Discord -
                  </Typography> */}
                  <Typography
                    className={Styles.Accordion_Title}
                    sx={{ color: "white" }}
                  >
                    Code Runners - &nbsp;
                    <a
                      className={Styles.Discord_Link}
                      target={"_blank"}
                      rel={"noreferrer"}
                      href="https://discord.gg/ce7mtCbgmG"
                    >
                      {/* <img
                        src={require("../../../Assets/Icons/Discord-Logo.png")}
                        alt=""
                        className={Styles.Discord_Icon}
                      /> */}
                    </a>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={Styles.Code_Runners_Description}>
                    Code Runners is a server that mainly focusses on Web
                    Development. However there are categories for other forms of
                    coding/programing.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </li>
          </ul>

          <div className={Styles.Menu_Separater}></div>

          {/* Weblink Container Start */}
          <ul className={Styles.Weblink_Container}>
            <h3 className={Styles.Title}>On The Web -</h3>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              onClick={showMenu}
              href="https://www.linkedin.com/in/dev-rook/"
              className={Styles.Weblink}
            >
              <li className={Styles.Weblink_Item}>
                <LinkedInIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Weblink_Icon}
                />
                Daniel Brown
              </li>
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              onClick={showMenu}
              href="https://github.com/Dev-Rook"
              className={Styles.Weblink}
            >
              <li className={Styles.Weblink_Item}>
                <GitHubIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Weblink_Icon}
                />
                Dev-Rook
              </li>
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              onClick={showMenu}
              href="https://twitter.com/Dev_Rook"
              className={Styles.Weblink}
            >
              <li className={Styles.Weblink_Item}>
                <TwitterIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Weblink_Icon}
                />
                Dev_Rook
              </li>
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              onClick={showMenu}
              href="https://rxresu.me/dev.rook121/developer-resume"
              className={Styles.Weblink}
            >
              <li className={Styles.Weblink_Item}>
                <InsertLinkIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Weblink_Icon}
                />
                Developer Resume
              </li>
            </a>
          </ul>
          {/* Weblink Container End */}
        </div>
      </div>
      {/* Mobile Menu End */}
    </motion.div>
  );
};

export default Nav;
