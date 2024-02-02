import React from "react";

const SummaryBox = ({ summaryBarOpen, setSummaryBarOpen }) => {
  return (
    <div className="summaryBtnBox mb-20">
      <div className="container">
        <div className="summaryBtnBox__wrapper">
          <p className="text">Trip Info</p>
          <button
            className="summaryBtn d-flex"
            onClick={() => setSummaryBarOpen(!summaryBarOpen)}>
            <span>Booking Details</span>
            <span className="iconBox">
              <svg>
                <use
                  xlinkHref={`/icons.svg#icon-${
                    summaryBarOpen ? "minus" : "plus"
                  }`}></use>
              </svg>
            </span>
            {/* <svg>
            <use xlinkHref="/icons.svg#icon-minimize"></use>
          </svg> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;
