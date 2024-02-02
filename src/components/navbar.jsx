import React, { useState } from "react";
import Taxis from "./taxis";
import ScrollToTop from "./scrollToTop";

const navigationData = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Our Fleet",
    items: [
      {
        title: "Our Fleet 03",
        url: "/fleet",
      },
      {
        title: "Our Fleet Single 2",
        url: "/fleet/single-fleet",
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
  },
  {
    id: 4,
    title: "Blog",
    items: [
      {
        title: "Blog Grid",
        url: "/blog",
      },
      {
        title: "Single Blog",
        url: "/blog/12",
      },
    ],
  },
  {
    id: 5,
    title: "Pages",
    items: [
      {
        title: "Booking Car Class",
        url: "/booking/car-class",
      },
      {
        title: "Booking Car Options",
        url: "/booking/car-options",
      },
      {
        title: "Login",
        url: "/booking/login",
      },
      {
        title: "Booking Card",
        url: "/booking/card",
      },
      {
        title: "Booking Checkout",
        url: "/booking/checkout",
      },
    ],
  },
  {
    id: 6,
    title: "Jamaica Pages",
    items: [
      {
        title: "Home",
        url: "/jamaica/home",
      },
      {
        title: "About",
        url: "/jamaica/about",
      },
      {
        title: "Destinations",
        url: "/jamaica/destinations",
      },
      {
        title: "Booking",
        url: "/jamaica/booking",
      },
      {
        title: "Contact",
        url: "/jamaica/contact",
      },
      {
        title: "Blogs",
        url: "/jamaica/blog",
      },
      {
        title: "single Blog",
        url: "/jamaica/blog/123",
      },
      {
        title: "Booking Status",
        url: "/jamaica/booking-status",
      },
      {
        title: "Help Center",
        url: "/jamaica/help-center",
      },
      {
        title: "Invoice",
        url: "/jamaica/invoice",
      },
      {
        title: "Tour Map",
        url: "/jamaica/tour-map",
      },
      {
        title: "Tours List",
        url: "/jamaica/tours-list",
      },
      {
        title: "Tour Details",
        url: "/jamaica/tours-list/123",
      },
      {
        title: "Taxi Home",
        url: "/jamaica/taxi-home",
      },
      {
        title: "Terms",
        url: "/jamaica/terms",
      },
      {
        title: "Login",
        url: "/jamaica/Login",
      },
      {
        title: "Register",
        url: "/jamaica/register",
      },
    ],
  },
];

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [navigationStateData, setNavigationStateData] =
    useState(navigationData);
  const [taxisActive, setTaxisActive] = useState(false);

  const handleNavigationDropdown = (id) => {
    console.log("first");
    const newData = navigationData.map((item) => {
      if (item.id === id) {
        item.isActive = !item.isActive;
        return item;
      } else {
        return item;
      }
    });
    setNavigationStateData(newData);
  };

  return (
    <>
      <header id="header" className="header-03 gfhyg">
        <div className="container-fluid d-md-block d-flex align-items-center">
          {/* <div
            className="onclick d-md-none mr-3 mr-md-0"
            onClick={() => setNavigation(true)}>
            <span></span>
          </div> */}
          <div className="onclick" onClick={() => setNavigation(true)}>
            <span></span>
            <p className="d-none d-md-block">Menu</p>
          </div>
          <ul className="info-contact">
            <li>Tours</li>
            <li
              className="vehicle"
              onClick={() => setTaxisActive(!taxisActive)}
            >
              Taxis
            </li>
            <li>(880) 172 380 956</li>
          </ul>

          <div className={navigation ? "navigation active" : "navigation"}>
            <div
              id="main-menu"
              className={navigation ? "main-menu active" : "main-menu"}
            >
              <ul className="top-menuleft d-flex align-items-center justify-content-between">
                <li className="x_logo">
                  <a href="/" title="logo prodrive">
                    <img src="/images/logowhite.png" alt="" />
                  </a>
                </li>
                <li className="x_language mb-0">
                  <img src="/images/icon/web.png" alt="" />
                  <select id="languages">
                    <option value="saab">KR</option>
                    <option value="vw">FR</option>
                    <option value="audi" selected>
                      TR
                    </option>
                  </select>
                </li>
                <li className="x_close mb-0">
                  <a
                    href="#"
                    className="close_x"
                    onClick={() => setNavigation(false)}
                  >
                    <img src="/images/icon/close_x.png" alt="" />
                  </a>
                </li>
              </ul>
              <ul className="menu">
                {navigationStateData.map(
                  ({ id, title, url, items, isActive }) => {
                    if (!items) {
                      return (
                        <li className="has-dropdown" key={id}>
                          {/* <span>Home</span> */}
                          <a href={url} onClick={() => setNavigation(false)}>
                            <span>{title}</span>
                          </a>
                        </li>
                      );
                    } else {
                      return (
                        <li
                          className="has-dropdown"
                          key={id}
                          onClick={() => handleNavigationDropdown(id)}
                        >
                          <span>{title}</span>
                          <ul
                            className="menu-dropdown"
                            style={
                              isActive
                                ? { display: "block" }
                                : { display: "none" }
                            }
                          >
                            {items.map(({ title, url }, index) => {
                              return (
                                <li key={index}>
                                  <a
                                    href={url}
                                    onClick={() => setNavigation(false)}
                                  >
                                    {title}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    }
                  }
                )}
              </ul>
              <div className="button">
                <div className="d-flex align-items-center mb-3">
                  <a href="#" className="quote mr-3 " title="">
                    Login?Register
                  </a>
                  <a href="#" className="booking" title="">
                    Online Booking
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <a href="#" className="booking mr-3" title="">
                    Contact Us
                  </a>
                  <a href="#" className="quote" title="">
                    Get A Quote
                  </a>
                </div>
              </div>
              <ul className="social-ft">
                <li>
                  <a href="#" title="Facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Instagram">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Pinterest">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Dribble">
                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Google">
                    <i className="fa fa-google" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="logo" className="logo-pro">
            <a href="/" title="logo prodrive">
              <img src="/images/logo_dark.png" alt="" className="w-auto" />
            </a>
          </div>
          <div className="box-right">
            <div className="login">
              <a href="#">Login/</a>
              <a href="#">Register</a>
            </div>
            <ul className="quocte-booking">
              <li>
                <a href="#">Get A Quote</a>
              </li>
              <li>
                <a href="#">Online Booking</a>
              </li>
            </ul>
          </div>
          <ul className="info-contact d-flex flex-nowrap d-md-none ml-auto info-contact-mbl">
            <li className="border-l-0">Tours</li>
            <li
              className={taxisActive ? "vehicle active" : "vehicle"}
              onClick={() => setTaxisActive(!taxisActive)}
            >
              Taxis
            </li>
          </ul>
        </div>
      </header>
      <Taxis taxisActive={taxisActive} />
      <ScrollToTop />
    </>
  );
};

export default Navbar;
