import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const tabBtns = [
  {
    id: 2,
    title: "User Info",
  },
  {
    id: 1,
    title: "Login",
  },
];

const LoginArea = () => {
  const [tabBtnActive, setTabBtnActive] = useState(2);
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // router.push("/booking/card");
  };
  const handlePopup = (e) => {
    setPopup(false);
    navigate("/booking/card");
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
                {tabBtns.map(({ id, title }) => {
                  return (
                    <li
                      className={tabBtnActive == id ? "active" : ""}
                      key={id}
                      onClick={() => setTabBtnActive(id)}
                    >
                      {title}
                    </li>
                  );
                })}
              </ul>
              <div className="login-content">
                <p>fbjhvu</p>
                {tabBtnActive == 1 ? (
                  <div>
                    <div className="login-form">
                      <form
                        action="#"
                        method="post"
                        accept-charset="utf-8"
                        onSubmit={(e) => handleSubmit(e)}
                      >
                        <div className="one-half w-100">
                          <div className="form-email">
                            <label for="">Email</label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              placeholder="hello@jamrocktaxi.com"
                            />
                          </div>
                        </div>
                        <div className="one-half">
                          <div className="form-password">
                            <label for="">Password</label>
                            <input
                              type="password"
                              name="email"
                              id="email"
                              placeholder="************"
                            />
                          </div>
                        </div>
                        <div className="one-half d-flex flex-column">
                          <label className="invisible">submit</label>
                          <button
                            type="submit"
                            className="form-password login-btn"
                          >
                            LOGIN
                          </button>
                        </div>
                        <div className="clearfix"></div>
                        <div className="d-flex justify-content-between align-items-center mx-3">
                          <div className="remember">
                            <input
                              type="checkbox"
                              name="remember"
                              id="remember"
                            />
                            <label for="remember">Remember me</label>
                          </div>
                          <div className="btn-submit">
                            <a href="#" title="">
                              Lost Your Password ?
                            </a>
                          </div>
                        </div>
                        {/* <div className="d-flex justify-content-center">
                          <button type="submit">LOGIN</button>
                        </div> */}
                        <div className="clearfix"></div>
                      </form>
                    </div>
                    <div className="login-social">
                      <span>OR</span>
                      <p>You can log in quickly with your account.</p>
                      <ul className="social d-flex align-items-center justify-content-center">
                        <li className="facebook">
                          <a href="#" title="">
                            <svg class="icon icon-facebook1">
                              <use xlinkHref="/icons.svg#icon-facebook1"></use>
                            </svg>
                            Connect with Facebook
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#" title="">
                            <svg class="icon icon-facebook1">
                              <use xlinkHref="/icons.svg#icon-google"></use>
                            </svg>
                            Connect with Google
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
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
                          <select name="country" id="country">
                            <option value="England">England</option>
                            <option value="United States">United States</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Bangladesh">Bangladesh</option>
                          </select>
                          {/* <div className="select"></div> */}
                        </div>
                        <div className="one-half phone">
                          <label for="phone">Phone</label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="(+90) 538 658 96 315"
                          />
                        </div>
                        <div className="one-half pass">
                          <label for="pass">Password</label>
                          <input type="text" name="pass" id="pass" />
                        </div>
                        <div className="one-half re-pass">
                          <label for="re-pass">Repeat Password</label>
                          <input type="password" name="phone" id="re-pass" />
                        </div>
                        {/* <div className="checkbox">
                          <input type="checkbox" name="accept" id="accept" />
                          <label for="accept">
                            Accept
                            <a href="#" title="">
                              terms & conditions
                            </a>{" "}
                            and the
                            <a href="#" title="">
                              privacy policy
                            </a>{" "}
                            input
                          </label>
                        </div> */}
                        <div className="option-area-btns">
                          <div className="one-half">
                            <button className="back">Back</button>
                          </div>
                          <div className="one-half">
                            <button
                              type="submit"
                              className="submit"
                              onClick={() => setPopup(true)}
                            >
                              CONTINUE
                            </button>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>

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

export default LoginArea;
