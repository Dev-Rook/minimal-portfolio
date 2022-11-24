import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Hero.module.scss";

const TitleVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 1.5,
    },
  },
};

const ButtonVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
};

const Hero = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <motion.h1
          className={Styles.Title}
          variants={TitleVariants}
          initial="hidden"
          animate="visible"
        >
          Developer Rook
        </motion.h1>

        <p className={Styles.Description}>
          Software engineer with 1 year overall web development experience.
          Current tool is React JS and it&apos;s many libraries. Accompanying
          React are my other tools: JavaScript, TypeScript, Html, Css,
          Scss..With this I am able to solve problems and create web
          applications conforming to modern UI/UX standards.
        </p>

        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={`https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFTMMVFnfhKRhlBJpxRKLKKtzflgzmrWcpjmvnwKHfbjTngpTpBXxzpVzmdhMWNjTDGV`}
        >
          <motion.button
            className={Styles.Contact_Button}
            variants={ButtonVariants}
            initial="hidden"
            animate="visible"
          >
            Get In Touch
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
