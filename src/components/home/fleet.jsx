import TempleteTitle from "../templeteTitle";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import OwlCarousel from "react-owl-carousel";
// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
// });

const fleetData = {
  btns: [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "1-4 Pax",
    },
    {
      id: 3,
      title: "6-9 Pax",
    },
    {
      id: 4,
      title: "10+ Pax",
    },
  ],
  content: [
    {
      id: 1,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 2,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 3,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 4,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 5,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 6,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 7,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 8,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 9,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
  ],
};

const Fleet = () => {
  const [fleetTab, setFleetTab] = useState("All");

  return (
    <section className="block-fleet fleet-section primary-slider change_bg">
      <div className="container">
        <TempleteTitle
          title="The Prodrive Fleet"
          secTitle="The Prodrive Fleet"
          subtitle="We also take custom orders and will help you acquire a specific yacht"
        />
        <ul className="tab_menu">
          {fleetData.btns.map(({ id, title }) => {
            return (
              <li className={fleetTab == title ? "current" : ""} key={id}>
                <a onClick={() => setFleetTab(title)}>{title}</a>
              </li>
            );
          })}
        </ul>
        {/* item all */}
        <div className="fleet-carousel active">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
            {fleetData.content
              .filter((item) => item.id >= 4)
              .map((item) => {
                const { id, title, img, author, automatic, mail } = item;
                return (
                  <SwiperSlide key={id}>
                    <div className="fleet-item">
                      <div className="images px-5">
                        <img src={img} alt={title} />
                      </div>
                      <div className="fleet-content">
                        <h4 className="fleet-title">
                          <a href="#">{title}</a>
                        </h4>
                        <h4 className="automatic">{automatic}</h4>
                        <ul>
                          <li className="author">
                            <a href="#">
                              <img src="/images/icon/author.png" alt="" />
                              {author}
                            </a>
                          </li>
                          <li className="mail">
                            <a href="#">
                              <img src="/images/icon/mail.png" alt="" />
                              {mail}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        {/* item Party Bus */}
        <div className="fleet-carousel">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
            {fleetData.content
              .filter((item) => item.id >= 4)
              .map((item) => {
                const { id, title, img, author, automatic, mail } = item;
                return (
                  <SwiperSlide key={id}>
                    <div className="fleet-item">
                      <div className="images px-5">
                        <img src={img} alt={title} />
                      </div>
                      <div className="fleet-content">
                        <h4 className="fleet-title">
                          <a href="#">{title}</a>
                        </h4>
                        <h4 className="automatic">{automatic}</h4>
                        <ul>
                          <li className="author">
                            <a href="#">
                              <img src="/images/icon/author.png" alt="" />
                              {author}
                            </a>
                          </li>
                          <li className="mail">
                            <a href="#">
                              <img src="/images/icon/mail.png" alt="" />
                              {mail}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        {/* item Sedan */}
        <div className="fleet-carousel">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
            {fleetData.content
              .filter((item) => item.id >= 4)
              .map((item) => {
                const { id, title, img, author, automatic, mail } = item;
                return (
                  <SwiperSlide key={id}>
                    <div className="fleet-item">
                      <div className="images px-5">
                        <img src={img} alt={title} />
                      </div>
                      <div className="fleet-content">
                        <h4 className="fleet-title">
                          <a href="#">{title}</a>
                        </h4>
                        <h4 className="automatic">{automatic}</h4>
                        <ul>
                          <li className="author">
                            <a href="#">
                              <img src="/images/icon/author.png" alt="" />
                              {author}
                            </a>
                          </li>
                          <li className="mail">
                            <a href="#">
                              <img src="/images/icon/mail.png" alt="" />
                              {mail}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        {/* item Stretch Limo */}
        <div className="fleet-carousel">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
            {fleetData.content
              .filter((item) => item.id >= 4)
              .map((item) => {
                const { id, title, img, author, automatic, mail } = item;
                return (
                  <SwiperSlide key={id}>
                    <div className="fleet-item">
                      <div className="images px-5">
                        <img src={img} alt={title} />
                      </div>
                      <div className="fleet-content">
                        <h4 className="fleet-title">
                          <a href="#">{title}</a>
                        </h4>
                        <h4 className="automatic">{automatic}</h4>
                        <ul>
                          <li className="author">
                            <a href="#">
                              <img src="/images/icon/author.png" alt="" />
                              {author}
                            </a>
                          </li>
                          <li className="mail">
                            <a href="#">
                              <img src="/images/icon/mail.png" alt="" />
                              {mail}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
