import React, { useEffect, useState } from "react";

const pickAddressTabData = ["Airpots", "Hotels", "Ships"];
const pickAdressdata = [
  {
    id: 1,
    text: "Montago buy airpots, Jamaica",
    subject: "Airpots",
  },
  {
    id: 2,
    text: "Montago buy airpots, Jamaica",
    subject: "Airpots",
  },
  {
    id: 3,
    text: "Montago buy airpots, Jamaica",
    subject: "Airpots",
  },
  {
    id: 4,
    text: "Montago buy airpots, Jamaica",
    subject: "Airpots",
  },
  {
    id: 4,
    text: "Sandals hotel montago buy, jamaica",
    subject: "Hotels",
  },
  {
    id: 5,
    text: "Sandals hotel montago buy, jamaica",
    subject: "Hotels",
  },
  {
    id: 6,
    text: "Sandals hotel montago buy, jamaica",
    subject: "Hotels",
  },
  {
    id: 7,
    text: "Sandals hotel montago buy, jamaica",
    subject: "Hotels",
  },
  {
    id: 8,
    text: "Sandals ships montago buy, jamaica",
    subject: "Ships",
  },
  {
    id: 9,
    text: "Sandals ships montago buy, jamaica",
    subject: "Ships",
  },
  {
    id: 10,
    text: "Sandals ships montago buy, jamaica",
    subject: "Ships",
  },
  {
    id: 11,
    text: "Sandals ships montago buy, jamaica",
    subject: "Ships",
  },
];

const MapInfo = () => {
  const [pickAddressTab, setPickAddressTab] = useState(pickAddressTabData[0]);
  const [adressLists, setAdressLists] = useState(false);

  const handlePopup = () => {
    const bookAddress = document.querySelector(".book-adress");
    bookAddress.classList.remove("open");
  };

  const handlePickAddressTab = (btn) => {
    console.log(btn);
    setPickAddressTab(btn);
  };

  return (
    <>
      {/* <!-- END REVOLUTION SLIDER --> */}
      <div class="book-adress">
        <span class="close">
          <svg class="icon">
            <use xlinkHref="/icons.svg#icon-clear"></use>
          </svg>
        </span>
        <div class="container">
          <div class="logo-calendar center"></div>
        </div>
        <div class="container mt-5">
          <div class="form-address">
            <form
              action="#"
              method="get"
              class="search-address"
              accept-charset="utf-8"
            >
              <input
                type="text"
                name="search"
                class="pic-add"
                placeholder="Pick Up Address"
              />
              <div className="tab-wrapper">
                <div className="tab-btns">
                  {pickAddressTabData.map((btn, i) => {
                    return (
                      <button
                        className={
                          btn == pickAddressTab ? "tab-btn active" : "tab-btn"
                        }
                        key={i}
                        onClick={() => handlePickAddressTab(btn)}
                      >
                        {btn}
                      </button>
                    );
                  })}
                </div>
              </div>
              <ul class="list-address active">
                {pickAdressdata
                  .filter((item) => item.subject == pickAddressTab)
                  .map(({ id, text }) => {
                    return (
                      <li key={id}>
                        <a href="#" onClick={handlePopup}>
                          {text}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </form>
          </div>
        </div>
      </div>

      <section class="sdl-booking">
        <div className="container">
          <div class="schedule-booking fw d-block">
            <form class="form-booking" onSubmit={(e) => e.preventDefault()}>
              <div class="pick-address js">
                <label>Where From​</label>
                <input
                  type="text"
                  name="pick-up"
                  placeholder="Enter your pickup location​"
                />
              </div>
              <div class="pick-dropday js">
                <label>Where To</label>
                <input
                  type="text"
                  name="pick-up"
                  placeholder="enter your dropoff  location​"
                />
              </div>
              <div class="btn-submit d-flex align-items-center gap-3">
                <button class="btn btn-mins">90 Mins | 102 Km​</button>
                <button class="btn btn-hidemap">Hide Map</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <section class="tp-banner"></section> */}
    </>
  );
};

export default MapInfo;
