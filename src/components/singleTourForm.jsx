import React, { useState } from "react";

import PickupDate from "./booking/pickupDate";
import Swiper from "swiper";

const SingleTourForm = () => {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(1);

  const handleAdultCount = (option) => {
    if (option == "plus") {
      setAdult(adult + 1);
    } else {
      if (adult <= 1) {
        setAdult(1);
      } else {
        setAdult(adult - 1);
      }
    }
  };

  const handleChildCount = (option) => {
    if (option == "plus") {
      setChild(child + 1);
    } else {
      if (child <= 1) {
        setChild(1);
      } else {
        setChild(child - 1);
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-end js-pin-content options-area single-tour-form-wrapper">
        <div className="tourSingleSidebar -top-320 ">
          <div className="d-flex items-center">
            <p>Dunn’s River Falls Tour with Lunch Stop​</p>
            {/* <div className="text-20 fw-500 ml-10">$1,200</div> */}
          </div>
          <form className="single-tour-form">
            <div class="pick-date one-half">
              <input
                id="date-range1002"
                placeholder="Your Pickup Location​"
                className="w-100 mb-10"
              />
            </div>
            <div class="pick-date one-half d-flex align-items-center date-time">
              <input
                id="date-range12"
                placeholder="WEB 19, 2018"
                className="w-100"
              />
              {/* <input
              id="date-range12"
              placeholder="Tour Pickup Time​"
              className="w-100"
            /> */}
            </div>
          </form>

          <h5 className="text-18 fw-500 mb-5 mt-20">No. Of Persons​</h5>

          <div>
            <div className="d-flex items-center justify-between">
              <div className="text-14">Adult (Over 12 years)</div>

              <div className="d-flex items-center js-counter">
                <button
                  className="button size-30 border-1 rounded-full js-down"
                  onClick={() => handleAdultCount("minus")}
                >
                  <i className="icon-minus text-10"></i>
                </button>

                <div className="flex-center ml-10 mr-10">
                  <div className="text-14 size-20 js-count">{adult}</div>
                </div>

                <button
                  className="button size-30 border-1 rounded-full js-up"
                  onClick={() => handleAdultCount("plus")}
                >
                  <i className="icon-plus text-10"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="d-flex items-center justify-between">
              <div className="text-14">Child (Under 12 years)</div>

              <div className="d-flex items-center js-counter">
                <button
                  className="button size-30 border-1 rounded-full js-down"
                  onClick={() => handleChildCount("minus")}
                >
                  <i className="icon-minus text-10"></i>
                </button>

                <div className="flex-center ml-10 mr-10">
                  <div className="text-14 size-20 js-count">{child}</div>
                </div>

                <button
                  className="button size-30 border-1 rounded-full js-up"
                  onClick={() => handleChildCount("plus")}
                >
                  <i className="icon-plus text-10"></i>
                </button>
              </div>
            </div>
          </div>

          <h5 className="text-18 fw-500 mb-5 mt-20">Add Extra</h5>

          <div className="d-flex items-center justify-between">
            <div className="d-flex items-center">
              <div className="form-checkbox">
                <input type="checkbox" />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="ml-10">Falls Entrance Tickets | Per Person​</div>
            </div>

            <div className="text-14">$40</div>
          </div>

          <div className="line mt-20 mb-20"></div>

          <div className="d-flex items-center justify-between">
            <div className="text-18 fw-500">Total:</div>
            <div className="text-18 fw-500">$392.09</div>
          </div>

          <div className="btns d-flex align-items-center">
            <button className="button btn -md -dark-1 bg-accent-1 text-white mt-20 btn-back">
              Back
            </button>
            <button className="button btn -md -dark-1 bg-accent-1 text-white mt-20">
              Book
            </button>
          </div>
        </div>

        <div class="calendar">
          <span class="close">
            <img src="/images/icon/close_x.png" alt="" />
          </span>
          <div class="container">
            <div class="logo-calendar center">
              {/* <a href="/" title="">
              <img src="/images/logo.png" alt="" />
            </a> */}
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title center">
                  <h2>Please Select Date</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 center calenders">
                <div
                  id="date-range12-container"
                  className="calender-wrapper"
                ></div>
                <div
                  id="date-range11-container"
                  className="calender-wrapper"
                ></div>
                <div
                  id="date-range10-container"
                  className="calender-wrapper"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="time-open">
          <span class="close">
            <img src="/images/icon/close_x.png" alt="" />
          </span>
          <div class="container">
            <div class="logo-calendar center">
              <a href="/" title="">
                <img src="/images/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title center">
                  <h2>Pick Up Time</h2>
                  <p>
                    Choose from a wide selection of boats ranging from luxury
                    motor yachts to classic sailing yachts, we have every type
                    of boat available to meet your needs.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 center">
                <div class="box-time first">
                  <select id="hours">
                    <option value="hide">01</option>
                    <option value="january" rel="icon-temperature">
                      02
                    </option>
                    <option value="february">03</option>
                    <option value="march">04</option>
                    <option value="april">05</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 center">
                <div class="box-time">
                  <select id="minutes">
                    <option value="hide">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="calendar">
        <span class="close">
          <img src="/images/icon/close_x.png" alt="" />
        </span>
        <div class="container">
          <div class="logo-calendar center"></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title center">
                <h2>Please Select Date</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 center calenders">
              <div
                id="date-range12-container"
                className="calender-wrapper"
              ></div>
              <div
                id="date-range11-container"
                className="calender-wrapper"
              ></div>
              <div
                id="date-range10-container"
                className="calender-wrapper"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTourForm;
