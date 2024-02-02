import React, { useState } from "react";
import { vehicleData } from "../data";

import { FaCheck } from "react-icons/fa6";
import MapInfo from "./mapInfo";

const VehicleArea = ({ summaryBarOpen, setSummaryBarOpen, fleetPage }) => {
  const [vehicleStateData, setVehicleStateData] = useState(vehicleData);

  const handleFlipCard = (id) => {
    const newData = vehicleStateData.map((item) => {
      // item.infoData = false;
      if (item.id == id) {
        if (item.infoData) {
          item.infoData = false;
        } else {
          item.infoData = true;
        }
      }
      return item;
    });
    setVehicleStateData(newData);
  };

  return (
    <section className="select-vehicle-area relative pt-0">
      {!fleetPage && (
        <>
          <MapInfo />
          <div className="summaryBtnBox mb-50">
            <div className="container">
              <div className="summaryBtnBox__wrapper">
                <p className="text">Trip Info</p>
                <button
                  className="summaryBtn d-flex"
                  onClick={() => setSummaryBarOpen(!summaryBarOpen)}
                >
                  <span>Booking Details</span>
                  <span className="iconBox">
                    <svg>
                      <use
                        xlinkHref={`/icons.svg#icon-${
                          summaryBarOpen ? "minus" : "plus"
                        }`}
                      ></use>
                    </svg>
                  </span>
                  {/* <svg>
            <use xlinkHref="/icons.svg#icon-minimize"></use>
          </svg> */}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="container">
        <div className="row">
          {/* className={s1 ? "select-car s1" : "select-car"} */}
          {vehicleStateData.map((item) => {
            const {
              id,
              title,
              img,
              subtitle,
              desc,
              author,
              mail,
              price,
              infoData,
            } = item;
            const s1 = id % 2 == 0 ? true : false;
            return (
              <div className="col-md-6" key={id}>
                <div className="select-car">
                  <div className="image-car one-half pb-20">
                    <img src={img} alt={title} />
                    <div className="vihicle-title-box mbl-vihicle-title-box mb-20">
                      <h3 className="text-center">
                        {title}
                        <button
                          className="vehicle-info-btn"
                          onClick={() => handleFlipCard(id)}
                        >
                          <svg class="icon">
                            <use xlinkHref="/icons.svg#icon-info-with-circle"></use>
                          </svg>
                        </button>
                      </h3>
                      <div className="box d-flex items-center position-relative">
                        <div className="list">
                          <img src="/images/max-img-1.png" alt="" /> {author}
                        </div>
                        <div className="list">
                          <img src="/images/max-img-2.png" alt="" /> {mail}
                        </div>
                      </div>
                    </div>
                    <div className="bottom-area d-flex">
                      <div className="priceBox">
                        <p className="price text-center">
                          ${price}
                          <span className="price-id">USD</span>{" "}
                        </p>
                        <a href="/booking/car-options" className="btn-select">
                          <span className="infoBox text-center">
                            Oneway <br /> Trip
                          </span>
                          SELECT
                        </a>
                      </div>
                      <div className="priceBox">
                        <div className="d-flex justify-content-center">
                          <p className="old-price">${price}</p>
                          <p className="price">
                            ${price} <span className="price-id">USD</span>{" "}
                          </p>
                        </div>
                        <a href="/booking/car-options" className="btn-select">
                          <span className="infoBox text-center">
                            Round <br /> Trip
                          </span>
                          SELECT
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box-text one-half d-none">
                    <div className="top">
                      <div className="vihicle-title-box d-none d-lg-flex ">
                        <h3>{title}</h3>
                        <div className="box d-flex items-center">
                          <div className="list">
                            <img src="/images/max-img-1.png" alt="" /> {author}
                          </div>
                          <div className="list">
                            <img src="/images/max-img-2.png" alt="" /> {mail}
                          </div>
                        </div>
                      </div>
                      <div className="vehicle-title-box d-none d-lg-flex ">
                        <div className="name-car">{subtitle}</div>
                      </div>
                      <div className="content">
                        {/* <p>{desc}</p> */}
                        <ul className="desc-list d-none d-lg-block">
                          <li className="d-flex align-items-center">
                            <FaCheck />
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <FaCheck />
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <FaCheck />
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <FaCheck />
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      infoData ? "vehicle-flip-box show" : "vehicle-flip-box"
                    }
                  >
                    <div className="vehicle-title-box">
                      <div className="name-car mb-20">{subtitle}</div>
                      <button
                        className="vehicle-info-btn vehicle-close-btn"
                        onClick={() => handleFlipCard(id)}
                      >
                        <svg class="icon">
                          <use xlinkHref="/icons.svg#icon-clear"></use>
                        </svg>
                      </button>
                    </div>
                    <ul className="desc-list">
                      <li className="d-flex align-items-center">
                        <FaCheck />
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <FaCheck />
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <FaCheck />
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <FaCheck />
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            );
          })}
          <div className="col-md-12"></div>
        </div>
      </div>
    </section>
  );
};

export default VehicleArea;
