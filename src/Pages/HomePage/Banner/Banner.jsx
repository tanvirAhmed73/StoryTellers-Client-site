import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SiAudiomack } from "react-icons/si";
import { FaFileAudio } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center">
            {" "}
            {/* Wrap the content in a flex container */}
            <img
              className="relative"
              src="https://i.ibb.co/Vp9ZCcZ/1-1920x940.jpg"
              alt=""
            />
            <div className="absolute w-full md:w-1/2 mx-auto bottom-0 top-0 md:top-20 lg:top-32 md:ml-2 md:text-left">
              <h2 className="md:bg-green-600 text-xs text-green-600 md:text-white md:text-sm md:text-left md:pl-3 md:mb-3 md:font-bold rounded-3xl lg:text-xl">
                <div className="flex items-center">
                  {" "}
                  {/* Use flexbox to align icon and text */}
                  <SiAudiomack className="" />
                  <Marquee>
                    ACTUAL PLAYING: Audofeels Book (John N.Doe): 2:31
                  </Marquee>
                </div>
              </h2>
              <h1 className="text-green-600 md:text-3xl md:mb-3 font-bold lg:text-4xl">
                Audiobook's Online Store
              </h1>
              <button className="bg-green-600 text-white rounded-xl px-2 md:text-xl md:font-bold lg:text-3xl">
                <div className="flex items-center">
                  {" "}
                  {/* Use flexbox to align icon and text */}
                  <FaFileAudio />
                  <span className="ml-1">Show Audiobooks</span>{" "}
                  {/* Added ml-1 for some spacing */}
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center">
            {" "}
            {/* Wrap the content in a flex container */}
            <img
              className="relative"
              src="https://i.ibb.co/zZBx645/2-1920x940.jpg"
              alt=""
            />
            <div className="absolute w-full md:w-1/2 mx-auto bottom-0 top-0 md:top-20 lg:top-32 md:ml-2 md:text-left">
              <h2 className="md:bg-green-600 text-xs text-green-600 md:text-white md:text-sm md:text-left md:pl-3 md:mb-3 md:font-bold rounded-3xl lg:text-xl">
                <div className="flex items-center">
                  {" "}
                  {/* Use flexbox to align icon and text */}
                  <SiAudiomack className="" />
                  <Marquee>
                    ACTUAL PLAYING: Audofeels Book (John N.Doe): 2:31
                  </Marquee>
                </div>
              </h2>
              <h1 className="text-green-600 md:text-3xl md:mb-3 font-bold lg:text-4xl">
                Audiobook's Online Store
              </h1>
              <button className="bg-green-600 text-white rounded-xl px-2 md:text-xl md:font-bold lg:text-3xl">
                <div className="flex items-center">
                  {" "}
                  {/* Use flexbox to align icon and text */}
                  <FaFileAudio />
                  <span className="ml-1">Show Audiobooks</span>{" "}
                  {/* Added ml-1 for some spacing */}
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
