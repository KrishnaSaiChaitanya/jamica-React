import React from "react";
import SummaryBox from "./summaryBox";
import { useNavigate } from "react-router-dom";

const BookingCardArea = ({ summaryBarOpen, setSummaryBarOpen }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking/checkout");
  };

  return (
    <section className="card-area">
      <SummaryBox
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-card">
              <form
                action="#"
                method="get"
                acceptCharset="utf-8"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="row">
                  <div className="one-half name">
                    <label htmlFor="name">Cardholder name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Ali TUF..."
                    />
                  </div>
                  <div className="one-half card-number">
                    <label htmlFor="card-number">Card number </label>
                    <input
                      type="text"
                      name="card-number"
                      id="card-number"
                      placeholder="043......"
                    />
                  </div>
                  <div className="one-half date">
                    <label htmlFor="month">Expiration date</label>
                    <div className="one-half">
                      <input
                        type="text"
                        name="month"
                        id="month"
                        placeholder="MM"
                      />
                    </div>
                    <div className="one-half">
                      <input type="text" name="year" placeholder="YY" />
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="one-half cvv">
                    <label htmlFor="cvv">cvv</label>
                    <input type="text" name="cvv" id="cvv" placeholder="567" />
                    <span>
                      <img src="images/icon/card.png" alt="" />
                    </span>
                  </div>
                  <div className="clearfix"></div>
                  <p>
                    <span>Please note:</span> you will be able to review your
                    ride on the next page before confirming your reservation.
                    Your card will not be charged until after your ride.
                  </p>
                  <div className="col-md-12">
                    <div className="btn-submit">
                      <button type="submit">CONTINUE</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </section>
  );
};

export default BookingCardArea;
