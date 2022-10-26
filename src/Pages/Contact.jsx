import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "../Styles/Page-Styles/Contact/Contact.module.css";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vo7z58h",
        "template_eltdcq8",
        form.current,
        "sQqr418TGzaMZjJK7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={Styles.Page}>
      <div className={Styles.Content_Container}>
        <div className={Styles.Title_Container}>
          <h3
            className={Styles.Title}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get In Touch
          </h3>

          <p
            className={Styles.Description}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            I am interested in freelance oppurtunities and or large/ambitious
            projects. However, if you have other requests or questions feel free
            to shoot me a message.
          </p>
        </div>

        <form action="" className={Styles.Form}>
          <fieldset className={Styles.Name__Eamil}>
            <input
              type="text"
              placeholder="Name"
              required
              className={Styles.Input}
            />
            <input
              type="Email"
              placeholder="Email"
              required
              className={Styles.Input}
            />
          </fieldset>
          <input
            type="Text"
            placeholder="Subject"
            required
            className={`${Styles.Input} ${Styles.Subject}`}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            required
            className={`${Styles.Input} ${Styles.Message}`}
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
