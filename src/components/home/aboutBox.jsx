import React from "react";
import TempleteTitle from "../templeteTitle";

const AboutBox = () => {
  return (
    <section className="about-box">
      <div className="container">
        <TempleteTitle
          title="How It Works"
          secTitle="How It Works"
          subtitle="Our booking process is simple and efficient"
        />
        <div className="row">
          <div className="col-md-7 full-sm">
            <img src="/images/about/macbook.png" alt="" />
          </div>
          <div className="col-md-5 full-sm">
            <ul>
              <li>
                <h3>1 - Book Via App Or Web</h3>
                <p>
                  Enter your pickup & dropoff locations or the number of hours
                  you wish to book a car and driver for
                </p>
              </li>
              <li>
                <h3>2 - Choose Your Ride</h3>
                <p>
                  On the day of your ride, you will receive two email and SMS
                  updates - one informing you that your car is on its way, and a
                  second letting
                </p>
              </li>
              <li>
                <h3>3 - Enjoy Your Ride</h3>
                <p>
                  After your ride has taken place, we would appreciate it if you
                  could rate your car and driver.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
