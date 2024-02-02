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

const Hero = () => {
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
      <section class="tp-banner">
        {/* <!-- start REVOLUTION SLIDER --> */}
        <div
          id="rev_slider_1078_1_wrapper"
          class="rev_slider_wrapper fullwidthbanner-container"
          data-alias="classic4export"
          data-source="gallery"
          style={{
            margin: "0px auto",
            backgroundColor: "transparent",
            padding: "0px",
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          {/* <!-- START REVOLUTION SLIDER 5.3.0.2 auto mode --> */}
          <div
            id="rev_slider_1078_1"
            class="rev_slider fullwidthabanner"
            style={{ display: "none" }}
            data-version="5.3.0.2"
          >
            <div class="slotholder"></div>
            <ul>
              {/* <!-- SLIDE  --> */}
              {/* <!-- SLIDE 1 --> */}
              <li
                data-index="rs-3049"
                data-transition="slideremovedown"
                data-slotamount="7"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="Power3.easeInOut"
                data-easeout="Power3.easeInOut"
                data-masterspeed="2000"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Ken Burns"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
              >
                {/* <!-- MAIN IMAGE --> */}
                <img
                  src="/images/slider/home.jpg"
                  alt=""
                  // data-bgposition="center center"
                  data-kenburns="off"
                  data-duration="30000"
                  data-ease="Linear.easeNone"
                  data-scalestart="100"
                  data-scaleend="120"
                  data-rotatestart="0"
                  data-rotateend="0"
                  data-offsetstart="0 0"
                  data-offsetend="0 0"
                  data-bgparallax="10"
                  class="rev-slidebg"
                  data-no-retina
                />
                {/* <!-- LAYERS --> */}
                <div
                  class="tp-caption color-white"
                  id="slide-3049-layer-1"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-28','-16','6','6']"
                  data-fontsize="['90','60','40','26']"
                  data-lineheight="['90','60','50','32']"
                  data-fontweight="['400','400','400','400']"
                  data-width="100%"
                  data-height="auto"
                  data-type="text"
                  data-whitespace="normal"
                  data-responsive_offset="on"
                  data-frames='[{"delay":0,"split":"chars","splitdelay":0.05,"speed":1000,"frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 16, whiteSpace: "nowrap", fontWeight: 400 }}
                >
                  Drive Of Your Life
                </div>
                <div
                  class="tp-caption sub_title"
                  id="slide-3049-layer-1"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['55','55','60','60']"
                  data-fontsize="['23','23','23','23']"
                  data-lineheight="['27','27','27','27']"
                  data-fontweight="['300','300','300','300']"
                  data-width="100%"
                  data-height="auto"
                  data-type="text"
                  data-whitespace="normal"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1100,"speed":3000,"frame":"0","from":"x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;","mask":"x:[100%];y:0;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[15,0,0,0"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[10,0,0,0"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 16, whiteSpace: "nowrap", fontWeight: 300 }}
                >
                  Offering the Best Limo Service in New York. Experience It Now
                  !
                </div>
              </li>
              {/* <!-- SLIDE 1 --> */}
              <li
                data-index="rs-3050"
                data-transition="slideremovedown"
                data-slotamount="7"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="Power3.easeInOut"
                data-easeout="Power3.easeInOut"
                data-masterspeed="2000"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Ken Burns"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
              >
                {/* <!-- MAIN IMAGE --> */}
                <img
                  src="/images/slider/home-2.jpg"
                  alt=""
                  // data-bgposition="center center"
                  data-kenburns="off"
                  data-duration="30000"
                  data-ease="Linear.easeNone"
                  data-scalestart="100"
                  data-scaleend="120"
                  data-rotatestart="0"
                  data-rotateend="0"
                  data-offsetstart="0 0"
                  data-offsetend="0 0"
                  data-bgparallax="10"
                  class="rev-slidebg"
                  data-no-retina
                />
                {/* <!-- LAYERS --> */}
                <div
                  class="tp-caption color-white"
                  id="slide-3049-layer-1"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-28','-16','6','6']"
                  data-fontsize="['90','60','40','26']"
                  data-lineheight="['90','60','50','32']"
                  data-fontweight="['400','400','400','400']"
                  data-width="100%"
                  data-height="auto"
                  data-type="text"
                  data-whitespace="normal"
                  data-responsive_offset="on"
                  data-frames='[{"delay":0,"split":"chars","splitdelay":0.05,"speed":1000,"frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 16, whiteSpace: "nowrap", fontWeight: 400 }}
                >
                  Drive Of Your Life
                </div>
                <div
                  class="tp-caption sub_title"
                  id="slide-3049-layer-1"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['55','55','60','60']"
                  data-fontsize="['23','23','23','23']"
                  data-lineheight="['27','27','27','27']"
                  data-fontweight="['300','300','300','300']"
                  data-width="100%"
                  data-height="auto"
                  data-type="text"
                  data-whitespace="normal"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1100,"speed":3000,"frame":"0","from":"x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;","mask":"x:[100%];y:0;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[15,0,0,0"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[10,0,0,0"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 16, whiteSpace: "nowrap", fontWeight: 300 }}
                >
                  Offering the Best Limo Service in New York. Experience It Now
                  !
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- END REVOLUTION SLIDER --> */}
        <div class="book-adress">
          {/* <div class="container">
            <div class="logo-calendar center"></div>
          </div> */}

          <div class="container mt-15">
            <div class="form-address">
              <div className="title-box">
                <p>Where From</p>
                <span class="close">
                  <svg class="icon">
                    <use xlinkHref="/icons.svg#icon-clear"></use>
                  </svg>
                </span>
              </div>
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
          <div class="schedule-booking fw d-block">
            <h1 class="text-over">RESERVE NOW</h1>
            <form class="form-booking" method="get" action="#">
              <div class="pick-address js">
                <label>Pick Up Address</label>
                <input
                  type="text"
                  name="pick-up"
                  placeholder="From: address, airport, hotel, ..."
                />
              </div>
              <div class="pick-dropday js">
                <label>Drop Off Address</label>
                <input
                  type="text"
                  name="pick-up"
                  placeholder="From: address, airport, hotel, ..."
                />
              </div>
              <div class="btn-submit">
                <a href="#" class="register_now">
                  Reserve Now
                  <img src="/images/icon/arrow-white.png" alt="" />
                </a>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
