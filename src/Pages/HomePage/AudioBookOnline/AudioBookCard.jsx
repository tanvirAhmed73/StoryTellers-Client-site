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
import AudioBookCardMaking from "./AudioBookCardMaking";

const AudioBookCard = () => {
  const [audioData, setAudioData] = useState([])
  const axiosPublic = usePublic()
  axiosPublic.get('/audioBooks')
  .then(res => {
    setAudioData(res.data)
  })
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
            slidesPerView: 3,
            spaceBetween: 180,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 180,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          audioData?.map(audio => 
            <SwiperSlide key={audio._id}>
              <AudioBookCardMaking  data={audio}></AudioBookCardMaking>
            </SwiperSlide>
          )
        }
        
        
        
      </Swiper>
    </div>
  );
};

export default AudioBookCard;
