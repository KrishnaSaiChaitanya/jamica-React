import React, { useEffect, useState } from "react";

const stepsData = [
  {
    id: 1,
    img: "/images/booking/car.png",
    title: "CAR CLASS",
    url: "/booking/car-class",
    isActive: false,
  },
  {
    id: 2,
    img: "/images/booking/options.png",
    title: "OPTIONS",
    url: "/booking/car-class",
    isActive: false,
  },
  {
    id: 3,
    img: "/images/booking/login.png",
    title: "LOGIN",
    url: "/booking/car-class",
    isActive: false,
  },
  {
    id: 4,
    img: "/images/booking/card.png",
    title: "CREADIT CARD",
    url: "/booking/car-class",
    isActive: false,
  },
  {
    id: 5,
    img: "/images/booking/check-out.png",
    title: "CHECK OUT",
    url: "/booking/car-class",
    isActive: false,
  },
];

const StepsBar = ({ stepNo, summaryBarOpen, setSummaryBarOpen }) => {
  const [stepsStateData, setStepsStateData] = useState(stepsData);

  const handleSteps = () => {
    const newStepsData = stepsStateData.map((item) => {
      if (item.id <= stepNo) {
        item.isActive = true;
        return item;
      } else {
        item.isActive = false;
        return item;
      }
    });
    setStepsStateData(newStepsData);
  };

  useEffect(() => {
    handleSteps();
  }, [stepNo]);

  return (
    <section
      className={
        summaryBarOpen
          ? "booking-steps-area summary-bar-area-open"
          : "booking-steps-area"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* for desktop */}
            <ul className="booking-steps d-none d-lg-block">
              {stepsStateData.map((item) => {
                const { id, img, title, isActive } = item;
                return (
                  <li className={isActive ? "active" : ""} key={id}>
                    <span>{id}</span>
                    <div className="icon">
                      <img src={img} alt={title} />
                    </div>
                    <div className="text">{title}</div>
                  </li>
                );
              })}
              {/* <li
                className="m-0 show-details-btn"
                onClick={() => setSummaryBarOpen(!summaryBarOpen)}>
                <span>
                  <svg>
                    <use xlinkHref="/icons.svg#icon-plus"></use>
                  </svg>
                </span>
                <div className="icon">Show Details</div>
              </li> */}
            </ul>

            {/* for mbl */}
            <ul className="booking-steps d-flex justify-content-between d-lg-none">
              {stepsStateData.map((item) => {
                const { id, img, title, isActive } = item;
                return (
                  <li className={isActive ? "active m-0" : " m-0"} key={id}>
                    <span>{id}</span>
                    <div className="icon">
                      <img src={img} alt={title} />
                    </div>
                  </li>
                );
              })}
              <li
                className="m-0 show-details-btn"
                onClick={() => setSummaryBarOpen(!summaryBarOpen)}
              >
                <span>
                  <svg>
                    <use xlinkHref="/icons.svg#icon-plus"></use>
                  </svg>
                </span>
                <div className="icon">
                  {summaryBarOpen ? "Hide" : "Show"} Details
                </div>
              </li>
            </ul>
            <div
              className={
                summaryBarOpen
                  ? "details active mt-2 d-none d-lg-flex"
                  : "details mt-2 d-none d-lg-flex"
              }
            >
              <p className="text-white">Booking Details</p>
              <button
                className="btn btn-primary"
                onClick={() => setSummaryBarOpen(!summaryBarOpen)}
              >
                {summaryBarOpen ? "Hide" : "Show"}
                <span className="ion-ios-arrow-thin-down"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsBar;
