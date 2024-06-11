import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Parallax,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";

/**
 * A React component for creating a slider using Swiper.js library.
 *
 * @param {object} childrenList - An array of React elements to be displayed as slides.
 * @returns {JSX.Element} The Slider component.
 */
export default function Slider(childrenList) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        speed={800}
        parallax={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {childrenList.children &&
          childrenList.children.map((child) => (
            <SwiperSlide key={child.props.title}>{child}</SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
