import { Link } from "react-router-dom";
import React from "react";

const Checkout = () => {
  return (
    <section className="check-out-area">
      <div className="container">
        {/* <figure class="mx-auto mb-20 text-center logo">
          <img src="/img/general/small-logo.png" alt="" />
        </figure> */}
        <div className="row">
          <div className="col-md-12">
            <div className="check-out">
              <div className="top">
                <div className="thanks">
                  <span>
                    <img src="/images/icon/thanks.png" alt="" />
                  </span>
                  THANK YOU <span className="name">DAVE</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  <br />
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="middle">
                <h2>
                  YOUR <span className="name">TAXI</span> BOOKING INFORMATION​
                </h2>
                <div className="details">
                  <div className="content">
                    <p className="text">
                      <strong> Passenger Details​</strong>
                    </p>
                    <p className="text">Dave Elliott | +44 7595152720 ​</p>
                    <p className="text">UK | daveevertonelliott@gmail.com​</p>
                    <p className="text">
                      <strong>Service:</strong> Taxi/Family/Round Trip​
                    </p>
                    <p className="text">
                      <strong>Duration:</strong> About 5 hours & 123 km​
                    </p>
                    <p className="text">
                      <strong>Persons/Bags:</strong> 4/3​
                    </p>
                    <p className="text">
                      <strong>From:</strong> Sangster International Airport,
                      Montego Bay….​
                    </p>
                    <p className="text">
                      <strong>To:</strong> Hilton Hotel, Montego Bay, Jamaica​
                    </p>
                    <p className="text">
                      <strong>Extras​:</strong>
                    </p>
                    <p className="text">1. Bay Car Seat (MBJ/6YO) x2​</p>
                    <p className="text">2. Red Stripe Beers (AD/RJ) x1</p>
                  </div>

                  <div className="content">
                    <p className="text">
                      <strong>Pickup Date & Time:</strong> 13th Sep 2023 3:30pm​
                    </p>
                    <p className="text">
                      <strong>Return Date & Time:</strong> 20th Sep 2023 9:15am​
                    </p>
                    <p className="text">
                      <strong>Pickup FLT#:</strong> AA1234
                    </p>
                    <p className="text">
                      <strong>Return Flight#:</strong>
                      BB1234
                    </p>

                    <p className="text">
                      <strong> Additional Information:​</strong>
                    </p>
                    <p className="text">
                      Please remember to bring the baby car seat​
                    </p>
                  </div>
                </div>

                {/* <ul className="summary-bar">
                  <li>
                    <div className="info">Pick Up Address</div>
                    <p>Airport Istanbul-Atatürk (IST) ...</p>
                  </li>
                  <li>
                    <div className="info">Drop Off Address</div>
                    <p>Airport Ankara-Esenboğa (ESB)...</p>
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
                    <p>About 5 hours – Distance: 476.2 km</p>
                  </li>
                </ul> */}
                <div className="btns mt-20 d-md-none">
                  <Link href="#" className="btn">
                    Book A Taxi​
                  </Link>
                  <Link href="#" className="btn">
                    Book A Tour
                  </Link>
                  <Link href="#" className="btn">
                    Contact Us​
                  </Link>
                  <Link href="#" className="btn">
                    FAQs
                  </Link>
                </div>
              </div>

              <div className="bottom">
                <h2>BOOKED TAXI​</h2>
                <p>Family</p>
                <div className="car-choose">
                  <img src="/images/booking/car-01.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
