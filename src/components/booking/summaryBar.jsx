import React from "react";

const SummaryBar = ({ summaryBarOpen, setSummaryBarOpen, checkout }) => {
  return (
    <section
      className={
        summaryBarOpen
          ? "summary-bar-area summary-bar-area-open open"
          : "summary-bar-area"
      }>
      <div className="container">
        {!checkout ? (
          <div className="row">
            <div className="col-md-12">
              <ul className="summary-bar">
                <li>
                  <div className="info">Pick Up Address</div>
                  <p>Airport Istanbul-Atatürk (IST) ...</p>
                </li>
                <li>
                  <div className="info">Drop Off Address</div>
                  <p>Airport Ankara-Esenboğa (ESB)... </p>
                </li>
                <li>
                  <div className="info">Pick Up Date</div>
                  <p>Sep 15, 2017</p>
                </li>
                <li>
                  <div className="info">Pick Up Time</div>
                  <p>9:45PM (21:45)</p>
                </li>
                <li>
                  <div className="info">Duration</div>
                  <p>About 5 hours – Distance: 476.2 km </p>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="checkout-summary">
            <div className="car-box">
              <img src="/images/cars&Tours/bus-1.jpg" alt="" />
            </div>
            <p className="text">
              <strong>Service:</strong> Taxi/Family/Round Trip​
            </p>
            <p className="text">
              <strong>Duration:</strong> About 5 hours & 123 km​
            </p>
            <p className="text">
              <strong>Persons/Bags:</strong> 4/3
            </p>
            <p className="text">
              <strong>From: </strong> Sangster International Airport, Montego
              Bay​
            </p>
            <p className="text">
              <strong>To: </strong> Hilton Hotel, Montego Bay​
            </p>
            <p className="text">
              <strong>Pickup Date & Time:</strong> 13th Sep 2023 3:30pm​
            </p>
            <p className="text">
              <strong>Return Date & Time:</strong> 20th Sep 2023 9:15am​
            </p>
            <p className="text">
              <strong>Pickup Flight#:</strong> AA1234 Return Flight#: BB1234​
            </p>
            <p className="text">
              <strong>Additional Information</strong> Please remember to bring
              the baby car seat
            </p>
            <p className="text">
              <strong>Extras​</strong>
            </p>
            <p className="text">1. Bay Car Seat (MBJ/6YO) x2​</p>
            <p className="text">2. Red Stripe Beers (AD/RJ) x1​</p>
            <p className="text">
              <strong> Passenger Info​</strong>
            </p>
            <p className="text">Dave Elliott ​</p>
            <p className="text">United Kingdom. +44 7595152720 ​</p>
            <a href="mailto:daveevertonelliott@gmail.com" className="text">
              daveevertonelliott@gmail.com
            </a>
            <ul className="list">
              <li className="item">
                <span className="title">SERVICE: </span>
                <span className="title">$20</span>
              </li>
              <li className="item">
                <span className="title">OTHER: </span>
                <span className="title">$0</span>
              </li>
              <li className="item">
                <span className="title">EXTRAS:</span>
                <span className="title">$35</span>
              </li>
              <li className="item">
                <span className="title">TOTAL:</span>
                <span className="title">$55</span>
              </li>
            </ul>
          </div>
        )}
      </div>
      <button
        className="close-summarybar"
        onClick={() => setSummaryBarOpen(false)}>
        <svg class="icon">
          <use xlinkHref="/icons.svg#icon-clear"></use>
        </svg>
      </button>
    </section>
  );
};

export default SummaryBar;
