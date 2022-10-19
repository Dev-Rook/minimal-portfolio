import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../../Styles/Component-Styles/Nav/Nav.module.css";

import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  return (
    <div className={Styles.Nav}>
      <div className={Styles.Left_Side}>
        <div className={Styles.Image_Container}>
          <img src="" alt="" className={Styles.Logo} />
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
              Prtfolio
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
    </div>
  );
};

export default Nav;
