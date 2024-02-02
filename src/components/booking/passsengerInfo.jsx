import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const countryData = [
  {
    name: "England",
    code: "+44",
  },
  {
    name: "United States",
    code: "+1",
  },
  {
    name: "Dubai",
    code: "+971",
  },
  {
    name: "Bangladesh",
    code: "+880",
  },
];

const PassengerInfoArea = () => {
  const [countryValue, setCountryValue] = useState("+44");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // router.push("/booking/card");
  };

  const handleCountryCHnage = (e) => {
    const value = e.target.value;
    countryData.filter((item) => {
      if (item.name == value) {
        setCountryValue(item.code);
      }
    });
  };

  return (
    <section className="login-booking-area">
      {/* <figure className="mx-auto mb-20 text-center logo">
        <img src="/img/general/small-logo.png" alt="" />
      </figure> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="login-booking">
              <ul className="login-tab-list">
                <li className="active">Lead Passenger Info</li>
              </ul>
              <div className="login-content">
                <div>
                  <div className="register-form">
                    <form
                      action="#"
                      method="get"
                      accept-charset="utf-8"
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      <div className="one-half first-name">
                        <label for="firstname">First Name </label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          placeholder="Dave"
                        />
                      </div>
                      <div className="one-half last-name">
                        <label for="lastname">Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="Everton"
                        />
                      </div>
                      <div className="email one-half">
                        <label for="email">Email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="hello@jamrocktaxi.com"
                        />
                      </div>
                      <div className="one-half number-bags">
                        <label for="country">Country</label>
                        <select
                          name="country"
                          id="country"
                          onChange={(e) => handleCountryCHnage(e)}
                        >
                          {countryData.map(({ name, code }, i) => {
                            return (
                              <option value={name} key={i}>
                                {name}
                              </option>
                            );
                          })}
                          {/* <option value="England">England</option>
                          <option value="United States">United States</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Bangladesh">Bangladesh</option> */}
                        </select>
                        {/* <div className="select"></div> */}
                      </div>
                      <div className="one-half phone">
                        <label for="phone">Phone</label>
                        <div className="country-input">
                          <span>{`(${countryValue})`}</span>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder=" 538 658 96 315"
                          />
                        </div>
                      </div>
                      <div className="option-area-btns">
                        <div className="one-half">
                          <button className="back">Back</button>
                        </div>
                        <div className="one-half">
                          <button type="submit" className="submit">
                            CONTINUE
                          </button>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </section>
  );
};

export default PassengerInfoArea;
