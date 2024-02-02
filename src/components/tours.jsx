import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const taxisData = [
  {
    id: 1,
    title: "Business Class",
    img: "/images/cars&Tours/tour-1.jpg",
  },
  {
    id: 2,
    title: "Business Class",
    img: "/images/cars&Tours/tour-2.jpg",
  },
  {
    id: 3,
    title: "Business Class",
    img: "/images/cars&Tours/tour-3.jpg",
  },
  {
    id: 4,
    title: "Business Class",
    img: "/images/cars&Tours/tour-4.jpg",
  },
  {
    id: 5,
    title: "Business Class",
    img: "/images/cars&Tours/tour-5.jpg",
  },
  {
    id: 6,
    title: "Business Class",
    img: "/images/cars&Tours/tour-6.jpg",
  },
  {
    id: 7,
    title: "Business Class",
    img: "/images/cars&Tours/tour-7.jpg",
  },
  {
    id: 8,
    title: "Business Class",
    img: "/images/cars&Tours/tour-8.jpg",
  },
];

const Tours = ({ toursActive }) => {
  const breakpoints = {
    250: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <div
      className={
        toursActive
          ? "wehicles tours active"
          : "wehicles tours visibility-hidden"
      }
    >
      <div className="fleet-carousel" data-columns="6">
        <Swiper
          pagination={false}
          modules={[Pagination]}
          // slidesPerView={3}
          // spaceBetween={30}
          breakpoints={breakpoints}
          className="mySwiper"
        >
          {taxisData.map(({ id, title, img }) => {
            return (
              <SwiperSlide key={id}>
                <div className="fleet-item">
                  <div className="images">
                    <img src={img} alt={title} />
                  </div>
                  <div className="fleet-content">
                    <p className="location">
                      <svg className="icon">
                        <use xlinkHref="/icons.svg#icon-location2"></use>
                      </svg>
                      Kingston​
                    </p>
                    <h4 className="fleet-title">
                      <a href="/jamaica/tours-list/123">{title}</a>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* {taxisData.map(({ id, title, img }) => {
          return (
            <div className="fleet-item" key={id}>
              <div className="images">
                <img src={img} alt={title} />
              </div>
              <div className="fleet-content">
                <p className="location">
                  <svg className="icon">
                    <use xlinkHref="/icons.svg#icon-location2"></use>
                  </svg>
                  Kingston​
                </p>
                <h4 className="fleet-title">
                  <a href="/jamaica/tours-list/123">{title}</a>
                </h4>
              </div>
            </div>
          );
        })} */}
        {/* <div className="owl-carousel">
        </div> */}
      </div>
      <div className="serach-wrapper">
        <a href="/jamaica/tours-list" className="btn-search">
          Search Tour
          <svg className="icon">
            <use xlinkHref="/icons.svg#icon-arrow-up-right"></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Tours;
