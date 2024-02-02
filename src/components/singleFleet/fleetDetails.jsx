import React, { useState } from "react";
import TempleteTitle from "../templeteTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const fleetTabs = {
  btns: [
    {
      id: 1,
      title: "Distance",
    },
    {
      id: 2,
      title: "Hourly",
    },
    {
      id: 3,
      title: "Flat Rate",
    },
  ],
};

const FleetDetails = () => {
  const [fleetTab, setFleetTab] = useState(1);

  return (
    <section className="our-fleet-single primary-slider">
      <div className="container">
        <TempleteTitle
          title="Ecomnomy Premium Limousine"
          secTitle="Ecomnomy Premium Limousine"
          subtitle="We also take custom orders and will help you acquire a specific
          yacht."
        />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 fix-bst">
            <article className="block-customs-single">
              <div className="featured-customs">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="images">
                      <img src="/images/fleet/detail_fleet.jpg" alt="" />
                      <a href="#" className="bkings">
                        Online Booking
                        <img src="/images/icon/arrow-white.png" alt="" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="images">
                      <img src="/images/fleet/detail_fleet.jpg" alt="" />
                      <a href="#" className="bkings">
                        Online Booking
                        <img src="/images/icon/arrow-white.png" alt="" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="images">
                      <img src="/images/fleet/detail_fleet.jpg" alt="" />
                      <a href="#" className="bkings">
                        Online Booking
                        <img src="/images/icon/arrow-white.png" alt="" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="images">
                      <img src="/images/fleet/detail_fleet.jpg" alt="" />
                      <a href="#" className="bkings">
                        Online Booking
                        <img src="/images/icon/arrow-white.png" alt="" />
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="info-fleet">
                <h3 className="title">
                  Hiring a Mercedes E-Class with Prodrive
                </h3>
                <h5 className="sub-title">Mercedes E Class</h5>
                <p>
                  The Mercedes Benz E Class chauffeur car is the perfect
                  executive level chauffeur car for all types of business trips
                  and airport transfers. The E Class packs safety, luxury and
                  style into one very affordable package. The executive E Class
                  has always been popular and like it is big brother the S Class
                  Limousine features many of the hallmarks that have made
                  Mercedes-Benz one of the finest automobile manufacturers.
                </p>
              </div>
            </article>
            {/* <div className="bottom-content row">
              <div className="col-xs-12 col-sm-12 col-md-4 fix-bst">
                <ul className="detail-info">
                  <li>
                    <span>Passengers</span>
                    <p>4</p>
                  </li>
                  <li>
                    <span>Interior</span>
                    <p>Black Leather</p>
                  </li>
                  <li>
                    <span>DVD Player</span>
                    <p>Yes</p>
                  </li>
                  <li>
                    <span>On Board Wifi</span>
                    <p>Yes</p>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 fix-bst">
                <ul className="detail-info">
                  <li>
                    <span>Passengers</span>
                    <p>4</p>
                  </li>
                  <li>
                    <span>Interior</span>
                    <p>Black Leather</p>
                  </li>
                  <li>
                    <span>DVD Player</span>
                    <p>Yes</p>
                  </li>
                  <li>
                    <span>On Board Wifi</span>
                    <p>Yes</p>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 fix-bst">
                <ul className="detail-info">
                  <li>
                    <span>Passengers</span>
                    <p>4</p>
                  </li>
                  <li>
                    <span>Interior</span>
                    <p>Black Leather</p>
                  </li>
                  <li>
                    <span>DVD Player</span>
                    <p>Yes</p>
                  </li>
                  <li>
                    <span>On Board Wifi</span>
                    <p>Yes</p>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 fix-bst">
            <div className="sidebar">
              <div className="sdl-booking add-box not-fixed">
                {/* <ul className="tab_booking">
                  {fleetTabs.btns.map(({ id, title }) => {
                    return (
                      <li
                        className={fleetTab == id ? "active" : ""}
                        key={id}
                        onClick={() => setFleetTab(id)}>
                        <a>{title}</a>
                      </li>
                    );
                  })}
                </ul> */}
                <div className="schedule-booking d-block">
                  <form className="form-booking" method="get" action="#">
                    <div className="pick-address">
                      <label>Pick Up Address</label>
                      <input
                        type="text"
                        name="pick-up"
                        placeholder="From: address, airport, hotel, ..."
                      />
                    </div>
                    <div className="pick-dropday">
                      <label>Drop Off Address</label>
                      <input
                        type="text"
                        name="pick-up"
                        placeholder="From: address, airport, hotel, ..."
                      />
                    </div>
                    <div className="pick-date">
                      <label>Pick Up Date</label>
                      <div
                        className="date form_date"
                        data-date=""
                        data-date-format="dd MM yyyy"
                        data-link-field="dtp_input2"
                        data-link-format="yyyy-mm-dd"
                      >
                        <input
                          size="16"
                          type="text"
                          value=""
                          placeholder="Wed 19 July, 2017"
                          readonly
                        />
                        <span className="add-on">
                          <i className="icon-remove"></i>
                        </span>
                        <span className="add-on">
                          <i className="icon-th"></i>
                        </span>
                      </div>
                      <input type="hidden" id="dtp_input2" value="" />
                      <br />
                    </div>
                    <div className="pick-time">
                      <label>Pick Up Time</label>
                      <div
                        className="controls input-append date form_time"
                        data-date=""
                        data-date-format="hh:ii p"
                        data-link-field="dtp_input3"
                        data-link-format="hh:ii"
                      >
                        <input
                          size="16"
                          type="text"
                          value=""
                          placeholder="12:25 am"
                          readonly
                        />
                        <span className="add-on">
                          <i className="icon-remove"></i>
                        </span>
                        <span className="add-on">
                          <i className="icon-th"></i>
                        </span>
                      </div>
                      <input type="hidden" id="dtp_input3" value="" />
                      <br />
                    </div>
                    <div className="btn-submit">
                      <a href="#" className="register_now">
                        Reserve Now
                        <img src="images/icon/arrow-white.png" alt="" />
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="popular-fleet">
                <div className="items">
                  <div className="content">
                    <h3 className="title">PER HOUR RATE</h3>
                    <div className="price">
                      <span>$29</span> / hour
                    </div>
                    <p>*$3/hour Fuel Sercharges</p>
                  </div>
                  <div className="images">
                    <img src="images/icon/fr1.png" alt="" />
                  </div>
                </div>
                <div className="items">
                  <div className="content">
                    <h3 className="title">PER HOUR RATE</h3>
                    <div className="price">
                      <span>$529</span> / hour
                    </div>
                    <p>*$3/hour Fuel Sercharges</p>
                  </div>
                  <div className="images">
                    <img src="images/icon/fr2.png" alt="" />
                  </div>
                </div>
                <div className="items">
                  <div className="content">
                    <h3 className="title">PER HOUR RATE</h3>
                    <div className="price">
                      <span>$129</span> / hour
                    </div>
                    <p>*depend on picking up area</p>
                  </div>
                  <div className="images">
                    <img src="images/icon/fr3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetDetails;
