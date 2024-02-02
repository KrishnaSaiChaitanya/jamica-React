import React from "react";
import TempleteTitle from "../templeteTitle";
import { vehicleData } from "../data";

import { FaCheck } from "react-icons/fa6";
import VehicleArea from "../booking/vehicleArea";

const FleetArea = () => {
  return (
    <section className="our-fleet-area fix-loadmore select-vehicle-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TempleteTitle
              title="The Prodrive Fleet"
              secTitle="The Prodrive Fleet"
              subtitle="We also take custom orders and will help you acquire a specific
          yacht."
            />
          </div>
        </div>
        <VehicleArea fleetPage={true} />
        <div className="row">
          <div className="col-md-12">
            {vehicleData.map((item) => {
              const { id, title, img, subtitle, desc, author, mail, price } =
                item;
              const s1 = id % 2 == 0 ? true : false;
              return (
                <div className={s1 ? "select-car s1" : "select-car"} key={id}>
                  <div className="image-car one-half pb-2">
                    <img src={img} alt={title} />
                    <div className="bottom-area d-flex">
                      <div className="priceBox">
                        <a
                          href="/fleet/single-fleet"
                          className="btn-select justify-content-center"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                    <div className="box">
                      <div className="list">
                        <img src="/images/booking/people.png" alt="" /> {author}
                      </div>
                      <div className="list">
                        <img src="/images/booking/vali.png" alt="" /> {mail}
                      </div>
                    </div>
                  </div>
                  <div className="box-text one-half">
                    <div className="top">
                      <h3>{title}</h3>
                      <div className="name-car">{subtitle}</div>
                    </div>
                    <div className="content">
                      {/* <p>{desc}</p> */}
                      <ul className="desc-list">
                        <li className="d-flex align-items-center">
                          <FaCheck />
                          <span>Lorem ipsum dolor sit amet consectetur.</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <FaCheck />
                          <span>Lorem ipsum dolor sit amet consectetur.</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <FaCheck />
                          <span>Lorem ipsum dolor sit amet consectetur.</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <FaCheck />
                          <span>Lorem ipsum dolor sit amet consectetur.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              );
            })}
          </div>
          <div className="loadmore">
            <a href="#" title="">
              Load More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetArea;
