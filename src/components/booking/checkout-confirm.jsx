import React, { useState } from "react";
import SummaryBox from "./summaryBox";

const btnsData = [
  {
    id: 1,
    btn: "Cancellations​",
  },
  {
    id: 2,
    btn: "Changes",
  },
  {
    id: 3,
    btn: "Booking Fees​",
  },
];
const CheckoutConfirmArea = ({ summaryBarOpen, setSummaryBarOpen }) => {
  const [btnTab, setBtnTab] = useState(1);

  return (
    <div>
      <SummaryBox
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
      <div className="checkout-wrapper container">
        <div className="checkout-btns mb-20">
          {btnsData.map(({ id, btn }) => {
            return (
              <button
                className={
                  id == btnTab ? "btn-checkout active" : "btn-checkout"
                }
                key={id}
                onClick={() => setBtnTab(id)}
              >
                {btn}
              </button>
            );
          })}
        </div>
        {btnTab == 1 && (
          <div>
            <p className="top-text mb-20">
              Cancel 24 hours before your pickup time for a full refund, see our
              contact us page for details.​
            </p>
            <select name="cars" id="cars" className="mb-15">
              <option value="STRIPE (Cards, Apple Pay & G Pay)​" selected>
                STRIPE (Cards, Apple Pay & G Pay)​
              </option>
              <option value="STRIPE (Cards, Apple Pay & G Pay) 2​">
                STRIPE (Cards, Apple Pay & G Pay) 2​
              </option>
              <option value="STRIPE (Cards, Apple Pay & G Pay)​ 3">
                STRIPE (Cards, Apple Pay & G Pay) 3
              </option>
              <option value="STRIPE (Cards, Apple Pay & G Pay)​ 4">
                STRIPE (Cards, Apple Pay & G Pay)​ 4
              </option>
            </select>
            <div className="box-wrapper d-flex justify-content-between">
              <div class="box d-flex items-center">
                <div class="form-checkbox">
                  <input type="checkbox" />
                  <div class="form-checkbox__mark">
                    <div class="form-checkbox__icon">
                      {/* <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                          fill="white"></path>
                      </svg> */}
                      <svg class="icon icon-check">
                        <use xlinkHref="/icons.svg#icon-check"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="ml-10 terms-text">
                  I Accept
                  <a href="/jamaica/terms">Terms​ & Conditions</a> ​
                </div>
              </div>
              <div className="box box-price">Total: $555 USD</div>
            </div>
            <div class="btns d-flex align-items-center">
              <a href="/booking/card" class="button btn -md mt-20 btn-back">
                Back
              </a>
              <a
                href="/booking/checkout"
                class="button btn -md -dark-1 bg-accent-1 text-white mt-20"
              >
                Book
              </a>
            </div>
          </div>
        )}
        {btnTab == 2 && (
          <div>
            <p className="top-text mb-20">
              Cancel 24 hours before your pickup time for a full refund, see our
              contact us page for details.​
            </p>
            <select name="cars" id="cars" className="mb-15">
              <option value="STRIPE (Cards, Apple Pay & G Pay)​" selected>
                STRIPE (Cards, Apple Pay & G Pay)​
              </option>
              <option value="STRIPE (Cards, Apple Pay & G Pay) 2​">
                STRIPE (Cards, Apple Pay & G Pay) 2​
              </option>
              <option value="STRIPE (Cards, Apple Pay & G Pay)​ 3">
                STRIPE (Cards, Apple Pay & G Pay) 3
              </option>
              <option value="STRIPE (Cards, Apple Pay & G Pay)​ 4">
                STRIPE (Cards, Apple Pay & G Pay)​ 4
              </option>
            </select>
            <div className="box-wrapper d-flex justify-content-between">
              <div class="box d-flex items-center">
                <div class="form-checkbox">
                  <input type="checkbox" />
                  <div class="form-checkbox__mark">
                    <div class="form-checkbox__icon">
                      {/* <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                        fill="white"></path>
                    </svg> */}
                      <svg class="icon icon-check">
                        <use xlinkHref="/icons.svg#icon-check"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="ml-10 terms-text">
                  I Accept
                  <a href="/jamaica/terms">Terms​ & Conditions</a> ​
                </div>
              </div>
              <div className="box box-price">Total: $555 USD</div>
            </div>
            <div class="btns d-flex align-items-center">
              <a href="/booking/card" class="button btn -md mt-20 btn-back">
                Back
              </a>
              <a
                href="/booking/checkout"
                class="button btn -md -dark-1 bg-accent-1 text-white mt-20"
              >
                Book
              </a>
            </div>
          </div>
        )}
        {btnTab == 3 && (
          <div>
            <p className="top-text mb-20">
              Cancel 24 hours before your pickup time for a full refund, see our
              contact us page for details.​
            </p>
            <select name="cars" id="cars" className="mb-15">
              <option value="STRIPE (Cards, Apple Pay & G Pay)​" selected>
                STRIPE (Cards, Apple Pay & G Pay)​
              </option>
              <option value="STRIPE (Cards, Apple Pay & G Pay) 2​">
                STRIPE (Cards, Apple Pay & G Pay) 2​
              </option>
              <option value="STRIPE (Cards, Apple Pay & G Pay)​ 3">
                STRIPE (Cards, Apple Pay & G Pay) 3
              </option>
              <option value="STRIPE (Cards, Apple Pay & G Pay)​ 4">
                STRIPE (Cards, Apple Pay & G Pay)​ 4
              </option>
            </select>
            <div className="box-wrapper d-flex justify-content-between">
              <div class="box d-flex items-center">
                <div class="form-checkbox">
                  <input type="checkbox" />
                  <div class="form-checkbox__mark">
                    <div class="form-checkbox__icon">
                      {/* <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                        fill="white"></path>
                    </svg> */}
                      <svg class="icon icon-check">
                        <use xlinkHref="/icons.svg#icon-check"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="ml-10 terms-text">
                  I Accept
                  <a href="/jamaica/terms">Terms​ & Conditions</a> ​
                </div>
              </div>
              <div className="box box-price">Total: $555 USD</div>
            </div>
            <div class="btns d-flex align-items-center">
              <a href="/booking/card" class="button btn -md mt-20 btn-back">
                Back
              </a>
              <a
                href="/booking/checkout"
                class="button btn -md -dark-1 bg-accent-1 text-white mt-20"
              >
                Book
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutConfirmArea;
