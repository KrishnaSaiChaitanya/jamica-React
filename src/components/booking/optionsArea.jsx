import React, { useState } from "react";

import SummaryBox from "./summaryBox";
import { useNavigate } from "react-router-dom";

const OptionsArea = ({ summaryBarOpen, setSummaryBarOpen }) => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [information, setInformation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // router.push("/booking/login");
  };
  const handlePopup = (e) => {
    setPopup(false);
    navigate("/booking/login");
  };
  return (
    <section className="options-area">
      <SummaryBox
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="form-options">
              <form
                action="#"
                method="post"
                accept-charset="utf-8"
                onSubmit={(e) => handleSubmit(e)}
              >
                {/* sdfdf */}
                {/* <div className="one-half first-name"></div> */}
                <div class="pick-date one-half first-name">
                  <label>Pick Up Date</label>
                  <input
                    id="date-range12"
                    size="40"
                    value=""
                    placeholder="WEB 19, 2018"
                    className="w-100"
                  />
                </div>
                <div class="pick-time js one-half first-name">
                  <label>Pick Up Time</label>
                  <select>
                    <option value="time-01" selected hidden>
                      12:25 am
                    </option>
                    <option value="time-02" hidden>
                      11:25 am
                    </option>
                    <option value="time-03" hidden>
                      10:25 am
                    </option>
                    <option value="time-04" hidden>
                      9:25 am
                    </option>
                  </select>
                </div>
                <div class="pick-date one-half first-name">
                  <label>Return Pick Up Date​</label>
                  <input
                    id="date-range11"
                    size="40"
                    value=""
                    placeholder="WEB 19, 2018"
                    className="w-100"
                  />
                </div>
                <div class="pick-time js one-half first-name">
                  <label>Return Pick Up Time​</label>
                  <select>
                    <option value="time-01" selected hidden>
                      12:25 am
                    </option>
                    <option value="time-02" hidden>
                      11:25 am
                    </option>
                    <option value="time-03" hidden>
                      10:25 am
                    </option>
                    <option value="time-04" hidden>
                      9:25 am
                    </option>
                  </select>
                </div>
                {/* xcg */}
                <div className="one-half number-pass">
                  <label for="number-pass">Number Of Passengers</label>
                  <div className="select">
                    <select name="number-pass" id="number-pass">
                      <option value="">05</option>
                      <option value="">06</option>
                      <option value="">07</option>
                      <option value="">08</option>
                    </select>
                  </div>
                </div>
                <div className="one-half number-bags">
                  <label for="number-bags">Number Of Bags</label>
                  <div className="select">
                    <select name="number-pass" id="number-pass">
                      <option value="">05</option>
                      <option value="">06</option>
                      <option value="">07</option>
                      <option value="">08</option>
                    </select>
                  </div>
                </div>
                <div className="one-half first-name">
                  <label for="arrival-flight">Arrival Flight #</label>
                  <input
                    type="text"
                    name="arrival-flight"
                    id="arrival-flight"
                    placeholder="AA1234"
                  />
                </div>
                <div className="one-half first-name">
                  <label for="return-flight">Return Flight #</label>
                  <input
                    type="text"
                    name="return-flight"
                    id="return-flight"
                    placeholder="AA1234"
                  />
                </div>

                <div className="infomation mb-20">
                  <label for="infomation">
                    <button
                      className="btn-information"
                      onClick={() => setInformation(!information)}
                    >
                      Additional Information
                      <span className="iconBox">
                        <svg class="icon">
                          <use
                            xlinkHref={`/icons.svg#icon-${
                              information ? "minus" : "plus"
                            }`}
                          ></use>
                        </svg>
                      </span>
                    </button>
                  </label>
                  {information && (
                    <textarea
                      name="infomation"
                      id="infomation"
                      placeholder="Lorem Ipsum "
                    ></textarea>
                  )}
                </div>

                <div className="one-half option-area-btns">
                  <button className="back w-100">Back</button>
                </div>
                <div className="one-half option-area-btns">
                  <button
                    type="submit"
                    className="submit w-100"
                    onClick={() => setPopup(true)}
                  >
                    CONTINUE
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>

      {/* <div class="calendar">
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
                className="calender-wrapper"></div>
              <div
                id="date-range11-container"
                className="calender-wrapper"></div>
              <div
                id="date-range10-container"
                className="calender-wrapper"></div>
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
                  motor yachts to classic sailing yachts, we have every type of
                  boat available to meet your needs.
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
      </div> */}
      {popup && (
        <div className="popup">
          <div className="content-wrapper">
            <p>
              For airtpot pickup, provide your flight number and if its late, we
              will wait
            </p>
            <div className="btns">
              <button onClick={handlePopup}>No thanks continnue</button>
              <button onClick={handlePopup}>Yes please go back</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OptionsArea;
