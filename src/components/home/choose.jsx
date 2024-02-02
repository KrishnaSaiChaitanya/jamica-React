import React from "react";
import TempleteTitle from "../templeteTitle";

const Choose = () => {
  return (
    <>
      <TempleteTitle
        title="Why Choose Us"
        secTitle="Why Choose Us"
        subtitle="Explore our first class limousine & car rental services"
      />
      <section className="section-iconbox">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="iconbox center">
                <div className="iconbox-icon">
                  <img src="/images/iconbox/01.png" alt="" />
                </div>
                <div className="iconbox-content">
                  <h3>
                    <a href="#" title="">
                      Easy Online Booking
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean
                    commodo ligula eget dolor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="iconbox center">
                <div className="iconbox-icon">
                  <img src="/images/iconbox/02.png" alt="" />
                </div>
                <div className="iconbox-content">
                  <h3>
                    <a href="#" title="">
                      Professional Drivers
                    </a>
                  </h3>
                  <p>
                    A new shuttle train service between Singapore and Johor
                    Bahru kicked off on Wednesday.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="iconbox center">
                <div className="iconbox-icon">
                  <img src="/images/iconbox/03.png" alt="" />
                </div>
                <div className="iconbox-content">
                  <h3>
                    <a href="#" title="">
                      Variety of Car Brands
                    </a>
                  </h3>
                  <p>
                    The service, called Shuttle Tebrau, is operated by
                    Malaysia’s JB Sentral in just five minutes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="iconbox center">
                <div className="iconbox-icon">
                  <img src="/images/iconbox/04.png" alt="" />
                </div>
                <div className="iconbox-content">
                  <h3>
                    <a href="#" title="">
                      Online Payment
                    </a>
                  </h3>
                  <p>
                    York Airport Service is a private bus company that provides
                    transportation area airports and Manhattan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
