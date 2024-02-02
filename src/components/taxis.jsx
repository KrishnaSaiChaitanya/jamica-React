import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const taxisData = [
  {
    id: 1,
    title: "Business Class",
    img: "/images/cars&Tours/bus-1.jpg",
  },
  {
    id: 2,
    title: "Business Class",
    img: "/images/cars&Tours/bus-2.jpg",
  },
  {
    id: 3,
    title: "Business Class",
    img: "/images/cars&Tours/bus-3.jpg",
  },
  {
    id: 4,
    title: "Business Class",
    img: "/images/cars&Tours/bus-4.jpg",
  },
  {
    id: 5,
    title: "Business Class",
    img: "/images/cars&Tours/bus-5.jpg",
  },
  {
    id: 6,
    title: "Business Class",
    img: "/images/cars&Tours/bus-1.jpg",
  },
  {
    id: 7,
    title: "Business Class",
    img: "/images/cars&Tours/bus-2.jpg",
  },
  {
    id: 8,
    title: "Business Class",
    img: "/images/cars&Tours/bus-3.jpg",
  },
];
const Taxis = ({ taxisActive, setTaxisActive }) => {
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
    <div className={`wehicles ${taxisActive ? "active" : "visibility-hidden"}`}>
      <div className="fleet-carousel">
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
                    <h4 className="fleet-title">
                      <a href="/booking/car-options">{title}</a>
                    </h4>
                    <div className="box d-flex items-center justify-content-center">
                      <div className="list">
                        <img src="/images/max-img-1.png" alt="" /> Max . 3
                      </div>
                      <div className="list">
                        <img src="/images/max-img-2.png" alt="" /> Max . 2
                      </div>
                    </div>
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
                <h4 className="fleet-title">
                  <a href="/booking/car-options">{title}</a>
                </h4>
                <div className="box d-flex items-center justify-content-center">
                  <div className="list">
                    <img src="/images/max-img-1.png" alt="" /> Max . 3
                  </div>
                  <div className="list">
                    <img src="/images/max-img-2.png" alt="" /> Max . 2
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}
        {/* <div className="owl-carousel">
        </div> */}
      </div>
      <div className="serach-wrapper">
        <button
          className="btn-search"
          onClick={() => setTaxisActive(!taxisActive)}
        >
          Close
          <svg className="icon">
            <use xlinkHref="/icons.svg#icon-clear"></use>
          </svg>
        </button>
        <a href="/fleet" className="btn-search">
          Search Taxi
          <svg className="icon">
            <use xlinkHref="/icons.svg#icon-arrow-up-right"></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Taxis;
