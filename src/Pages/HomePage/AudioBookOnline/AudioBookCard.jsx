import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoBagHandleOutline } from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import usePublic from "../../../Hooks/usePublic";

const AudioBookCard = () => {
  const [audioData, setAudioData] = useState([])
  const axiosPublic = usePublic()
  axiosPublic.get('/audioBooks')
  .then(res => {
    setAudioData(res.data)
  })
  console.log(audioData)
  return (
    <div className="mt-7 mb-7" >
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="card mb-7 w-72 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-left">
                <h2 className="card-title">Horror Stories 1</h2>
                <div className="card-actions flex justify-between">
                  <h1 className="font-bold text-xl">$1.00</h1>
                  <button className="btn btn-sm bg-green-600 text-white"><IoBagHandleOutline /> Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        
        
      </Swiper>
    </div>
  );
};

export default AudioBookCard;
