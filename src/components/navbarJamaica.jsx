import React, { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/router";
import { gsap } from "gsap";
import Taxis from "./taxis";
import Tours from "./tours";
import { useLocation } from "react-router-dom";

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
        title: "Passenger Info",
        url: "/booking/passenger-info",
      },
      {
        title: "Booking Card",
        url: "/booking/card",
      },
      {
        title: "Checkout Confirm",
        url: "/booking/checkout-confirm",
      },
      {
        title: "Checkout",
        url: "/booking/checkout",
      },
      {
        title: "Checkout Tours",
        url: "/booking/checkout-tours",
      },
      {
        title: "Extras",
        url: "/booking/extras",
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
        title: "Contact US",
        url: "/jamaica/contact-us",
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

export default function Navbar() {
  const [taxisActive, setTaxisActive] = useState(false);
  const [toursActive, setToursActive] = useState(false);
  const [bg_black, setBg_black] = useState(false);
  const { pathname } = useLocation();

  const taxiRef = useRef(null);
  const toursRef = useRef(null);

  useEffect(() => {
    taxiRef.current.addEventListener("click", (ev) => {
      console.log("TAXI", ev);
      ev.stopPropagation();
      setTaxisActive((taxisActive) => !taxisActive);
      setToursActive(false);
    });

    toursRef.current.addEventListener("click", (ev) => {
      ev.stopPropagation();
      setToursActive((toursActive) => !toursActive);
      setTaxisActive(false);
    });
  }, []);

  useEffect(() => {
    if (taxisActive || toursActive) {
      document.addEventListener("click", closeAllDropdowns);
    } else {
      document.removeEventListener("click", closeAllDropdowns);
    }
    return () => {
      document.removeEventListener("click", closeAllDropdowns);
    };
  }, [taxisActive, toursActive]);

  function dropdown() {
    const targets = document.querySelectorAll(".js-dropdown");
    if (!targets.length) return;

    targets.forEach((target) => {
      const title = target.querySelector(".js-title");
      const button = target.querySelector(".js-button");
      const menuItems = target.querySelectorAll(".js-menu-items > *");

      if (button) {
        button.addEventListener("click", () => {
          closeAllDropdowns();
          target.classList.toggle("is-active");
        });
      }

      menuItems.forEach((el) => {
        el.addEventListener("click", () => {
          if (!target.classList.contains("js-dont-close")) {
            target.classList.toggle("is-active");
            title.innerHTML = el.innerHTML;
          }
        });
      });
    });
  }

  function closeAllDropdowns(ev) {
    if (
      ev.target.classList.contains("vehicles") ||
      ev.target.classList.contains("tours")
    )
      return;
    console.log("TF", ev);

    const targets = document.querySelectorAll(".js-form-dd");
    if (!targets) return;

    targets.forEach((el) => {
      if (el.querySelector(".is-active")) {
        el.querySelector(".is-active").classList.remove("is-active");
      }
    });

    const alldds = document.querySelectorAll(".js-dropdown.is-active");

    alldds.forEach((el) => {
      el.classList.remove("is-active");
    });

    setTaxisActive(false);
    setToursActive(false);
  }
  function menuEvents() {
    let isMenuOpen = false;
    const menuButtons = document.querySelectorAll(".js-menu-button");

    menuButtons.forEach((el) => {
      el.addEventListener("click", (e) => {
        if (!isMenuOpen) {
          menuOpen();
          isMenuOpen = true;
        } else {
          menuClose();
          isMenuOpen = false;
        }
      });
    });
  }

  function menuOpen() {
    const menu = document.querySelector(".js-menu");
    const header = document.querySelector(".js-header");

    gsap.timeline().to(menu, {
      opacity: 1,
      onStart: () => {
        menu.classList.add("-is-active");
        document.body.classList.add("overflow-hidden");
        header.classList.add("-dark");
      },
    });
  }

  function menuClose() {
    const menu = document.querySelector(".js-menu");
    const header = document.querySelector(".js-header");

    gsap.timeline().to(menu, {
      opacity: 0,
      onStart: () => {
        menu.classList.remove("-is-active");
        document.body.classList.remove("overflow-hidden");
        header.classList.remove("-dark");
      },
    });
  }

  const Tabs = (function () {
    function init() {
      const targets = document.querySelectorAll(".js-tabs");
      if (!targets) return;

      targets.forEach((el) => {
        singleTab(el);
      });
    }

    function singleTab(target) {
      const controls = target.querySelector(".js-tabs-controls");
      const controlsItems = target.querySelectorAll(
        ".js-tabs-controls .js-tabs-button"
      );
      const content = target.querySelector(".js-tabs-content");

      for (let l = 0; l < controlsItems.length; l++) {
        const el = controlsItems[l];

        el.addEventListener("click", (e) => {
          const selector = el.getAttribute("data-tab-target");

          controls
            .querySelector(".is-tab-el-active")
            .classList.remove("is-tab-el-active");
          content
            .querySelector(".is-tab-el-active")
            .classList.remove("is-tab-el-active");

          el.classList.add("is-tab-el-active");
          content.querySelector(selector).classList.add("is-tab-el-active");
        });
      }
    }

    return {
      init: init,
    };
  })();

  useEffect(() => {
    function headerSticky() {
      const target = document.querySelector(".js-header");
      if (!target) return;

      window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
          target.classList.add("-is-sticky");
        } else {
          target.classList.remove("-is-sticky");
        }
      });
    }
    const Header = (function () {
      let navList;
      let navBtnListBack;
      let menuDeepLevel;
      let timeline = gsap.timeline();

      function updateVars() {
        navList = document.querySelector(".js-navList");
        navBtnListBack = document.querySelectorAll(".js-nav-list-back");
        menuDeepLevel = 0;
      }

      function init() {
        updateVars();
        menuListBindEvents();
      }

      function deepLevelCheck(level) {
        return level;
      }

      function menuListBindEvents() {
        const listItems = document.querySelectorAll(
          ".js-navList .js-has-submenu"
        );
        if (!listItems.length) return;

        navBtnListBack.forEach((el) => {
          el.addEventListener("click", () => {
            const visibleList = navList.querySelector("ul.-is-active");
            const parentList = visibleList.parentElement.parentElement;

            menuDeepLevel--;
            menuListStepAnimate(visibleList, parentList, menuDeepLevel);
          });
        });

        listItems.forEach((el) => {
          const parenta = el.querySelector("li > a");
          parenta.removeAttribute("href");

          parenta.addEventListener("click", () => {
            const parent = el.parentElement;
            const subnavList = el.lastElementChild;

            menuDeepLevel++;
            menuListStepAnimate(
              parent,
              subnavList,
              menuDeepLevel,
              parenta.innerHTML
            );
          });
        });
      }

      function menuListStepAnimate(hideList, showList, level) {
        let hideListItems = hideList.children;
        hideListItems = Array.from(hideListItems);
        const hideListas = hideListItems.map((item) =>
          item.querySelector("li > a")
        );

        let showListItems = showList.children;
        showListItems = Array.from(showListItems);
        const showListas = showListItems.map((item) =>
          item.querySelector("li > a")
        );

        // let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        // if (width < 1199 || document.querySelector('.js-desktopMenu')) {}

        timeline.clear();

        if (!deepLevelCheck(level)) {
          gsap.to(navBtnListBack, {
            ease: "quart.inOut",
            duration: 0.2,
            opacity: 0,
          });
        }

        timeline.to(hideListas, {
          ease: "quart.out",
          stagger: -0.04,
          duration: 0.4,
          y: "100%",
          onStart: () => {
            showList.classList.add("-is-active");
          },
          onComplete: () => {
            hideList.classList.remove("-is-active");
          },
        });

        if (deepLevelCheck(level)) {
          timeline.to(
            navBtnListBack,
            {
              ease: "quart.inOut",
              duration: 0.4,
              y: "0px",
              opacity: 1,
            },
            ">-0.5"
          );
        }

        timeline.to(
          showListas,
          {
            ease: "quart.out",
            stagger: 0.08,
            duration: 0.5,
            y: "0%",
          },
          ">-0.6"
        );
      }

      function headerSticky() {
        const header = document.querySelector(".js-header");
        if (!header) return;

        let classList = "";

        if (header.getAttribute("data-add-bg")) {
          classList = header.getAttribute("data-add-bg");
        }

        new ScrollMagic.Scene({ offset: "6px" })
          .setClassToggle(header, classList)
          .addTo(App.SMcontroller);

        new ScrollMagic.Scene({ offset: "6px" })
          .setClassToggle(header, "is-sticky")
          .addTo(App.SMcontroller);
      }

      return {
        headerSticky: headerSticky,
        init: init,
      };
    })();
    window.onclick = function (event) {
      if (!event.target.closest(".js-form-dd")) {
        console.log("test");
        closeAllDropdowns();
      }

      if (!event.target.closest(".js-select")) {
        const targets = document.querySelectorAll(".js-select");
        if (!targets) return;

        targets.forEach((el) => {
          if (el.querySelector(".-is-visible")) {
            el.querySelector(".-is-visible").classList.remove("-is-visible");
          }
        });
      }

      if (!event.target.closest(".js-multiple-select")) {
        const targets = document.querySelectorAll(".js-multiple-select");
        if (!targets) return;

        targets.forEach((el) => {
          if (el.querySelector(".-is-visible")) {
            el.querySelector(".-is-visible").classList.remove("-is-visible");
          }
        });
      }
    };
    Header.init();
    dropdown();
    headerSticky();
    menuEvents();

    Tabs.init();

    return () => {
      window.removeEventListener("scroll", headerSticky);
    };
  }, []);

  useEffect(() => {
    if (
      pathname.includes("/booking") ||
      (pathname.includes("/jamaica") &&
        pathname != "/jamaica/home" &&
        pathname != "/jamaica/tours-list")
    ) {
      setBg_black(true);
    } else {
      setBg_black(false);
    }
  }, [pathname]);

  return (
    <>
      <header className="header -type-10 js-header ">
        <div
          className={
            !bg_black ? "header__container" : "header__container homepage"
          }
        >
          <div className="headerMobile__left">
            <button
              className="header__menuBtn js-menu-button"
              // onClick={toggleSidebar}
            >
              <i className="icon-main-menu text-white"></i>
            </button>
          </div>

          <div className="header__left">
            <div className="header__logo">
              <a href="/" className="header__logo">
                <img
                  src="/img/general/logo.png"
                  alt="logo icon"
                  className="header_img d-none d-sm-block"
                />
                <img
                  src="/img/general/small-logo.png"
                  alt="logo icon"
                  className="header_img header_small_img d-sm-none"
                />
              </a>

              <div className="xl:d-none ml-30">
                <div className="desktopNav -light">
                  {navigationData.map((item) => {
                    const { id, title, url, items } = item;
                    if (!items) {
                      return (
                        <div className="desktopNav__item" key={id}>
                          <a href={url}>{title}</a>
                        </div>
                      );
                    } else {
                      return (
                        <div className="desktopNav__item" key={id}>
                          <a>
                            {title} <i className="icon-chevron-down"></i>
                          </a>

                          <div className="desktopNavSubnav">
                            <div className="desktopNavSubnav__content">
                              {items.map(({ title, url }, index) => {
                                return (
                                  <div
                                    className="desktopNavSubnav__item"
                                    key={index}
                                  >
                                    <a href={url}>{title}</a>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="headerMobile__right d-flex">
            <a href="#" className="d-flex ml-20">
              <svg className="icon">
                <use xlinkHref="/icons.svg#icon-person"></use>
              </svg>
            </a>
            <button href="#" className="d-flex tours" ref={toursRef}>
              <svg className="icon">
                <use
                  xlinkHref={`/icons.svg#icon-${
                    toursActive ? "clear" : "beach"
                  }`}
                ></use>
              </svg>
            </button>
            <button className="d-flex vehicles" ref={taxiRef}>
              <svg className="icon">
                <use
                  xlinkHref={`/icons.svg#icon-${
                    taxisActive ? "clear" : "automobile"
                  }`}
                ></use>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="menu js-menu">
        <div className="menu__overlay js-menu-button"></div>
        <div className="menu__container">
          <div className="menu__header">
            <h4>Main Menu</h4>

            <button className="js-menu-button">
              <i className="icon-cross text-10"></i>
            </button>
          </div>

          <div className="menu__content">
            <ul className="menuNav js-navList">
              {navigationData.map((item) => {
                const { id, title, url, items } = item;
                if (!items) {
                  return (
                    <li className="menuNav__item js-menu-button" key={id}>
                      <a href={url}>{title}</a>
                    </li>
                  );
                } else {
                  return (
                    <li
                      className="menuNav__item -has-submenu js-has-submenu"
                      key={id}
                    >
                      <a>
                        {title}
                        <i className="icon-chevron-right"></i>
                      </a>

                      <ul className="submenu">
                        <li className="submenu__item js-nav-list-back">
                          <a>Back</a>
                        </li>

                        {items.map(({ title, url }, index) => {
                          return (
                            <li
                              className="submenu__item js-menu-button"
                              key={index}
                            >
                              <a href={url}>{title}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className="menu__footer">
            <i className="icon-headphone text-50"></i>

            <div className="text-20 lh-12 fw-500 mt-20">
              <div>Speak to our expert at</div>
              <div className="text-accent-1">1-800-453-6744</div>
            </div>

            <div className="d-flex items-center x-gap-10 pt-30">
              <div>
                <a className="d-block">
                  <i className="icon-facebook"></i>
                </a>
              </div>

              <div>
                <a className="d-block">
                  <i className="icon-twitter"></i>
                </a>
              </div>

              <div>
                <a className="d-block">
                  <i className="icon-instagram"></i>
                </a>
              </div>

              <div>
                <a className="d-block">
                  <i className="icon-aedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Taxis taxisActive={taxisActive} setTaxisActive={setTaxisActive} />
      <Tours toursActive={toursActive} />
    </>
  );
}
