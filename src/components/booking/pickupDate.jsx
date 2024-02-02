import React from "react";

const PickupDate = () => {
  return (
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
            <div id="date-range12-container" className="calender-wrapper"></div>
            <div id="date-range11-container" className="calender-wrapper"></div>
            <div id="date-range10-container" className="calender-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDate;
