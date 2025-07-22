import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { swipperBigCards } from "../../data/data.js";

import "swiper/css/autoplay";
import Img from "../LazyLoadImg/Img.jsx";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SwipperBigCards = () => {
  return (
    <div className="relative container w-full max-w-5xl mx-auto my-4 lg:my-8">
      <Swiper
        navigation={{
          prevEl: "#swiper-prev",
          nextEl: "#swiper-next",
        }}
        modules={[Navigation, Autoplay]}
        initialSlide={1}
        className="rounded-xl overflow-hidden lg:h-[400px] md:h-[300px] h-[200px]"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={0}
      >
        {swipperBigCards.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-light w-full h-full">
              <Img
                src={slide.imgUrl}
                alt={slide.title || `Slide`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="absolute text-xl  cursor-pointer hidden lg:block top-[50%] left-5 -translate-y-[50%] bg-[#ffffffb3]  text-black p-2 rounded-full z-10"
        id="swiper-prev"
      >
        <BsChevronLeft />
      </button>
      <button
        className="absolute text-xl cursor-pointer hidden lg:block top-[50%] right-5 -translate-y-[50%] bg-[#ffffffb3] text-black p-2 rounded-full z-10"
        id="swiper-next"
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default SwipperBigCards;
