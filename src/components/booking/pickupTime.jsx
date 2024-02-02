import React from "react";

const PickupTime = () => {
  return (
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
                Choose from a wide selection of boats ranging from luxury motor
                yachts to classic sailing yachts, we have every type of boat
                available to meet your needs.
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
  );
};

export default PickupTime;
