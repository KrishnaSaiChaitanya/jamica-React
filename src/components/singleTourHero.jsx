import React from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SingleTourHero = () => {
  return (
    <div className="single-tour-hero">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper">
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SingleTourHero;
