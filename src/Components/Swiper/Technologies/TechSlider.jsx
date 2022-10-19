import React, { useState } from "react";
import Styles from "../../../Styles/Component-Styles/Swiper-Styles/Tech-Slider/TechSlider.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import TechData from "../../Data/TechData.json";

const TechSlider = () => {
  const [data, setData] = useState(TechData);

  return (
    <div className={Styles.Swiper_Container}>
      <h3 className={Styles.Swiper_Title}>Technologies Used</h3>
      <Swiper
        speed={800}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          380: {
            width: 380,
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            width: 480,
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            width: 768,
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1920: {
            width: 1920,
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
      >
        {data &&
          data.map((value) => {
            const { id, Image, Title } = value;

            return (
              <SwiperSlide key={value.id}>
                <div className={Styles.Card}>
                  <div className={Styles.Image_Container}>
                    <img src={value.Image} alt="" className={Styles.Image} />
                  </div>
                  <p className={Styles.Card_Title}>{value.Title}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default TechSlider;
