import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "../Styles/Page-Section-Styles/Get-In-Touch/GetInTouch.module.css";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1
          className={Styles.Title}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Get In Touch?
        </h1>

        <p
          className={Styles.Description}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          I am interested in freelance oppurtunities and or large/ambitious
          projects. However, if you have other requests or questions feel free
          to shoot me a message.
        </p>

        <Link to={"Contact"}>
          <button
            className={Styles.Contact_Button}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetInTouch;
