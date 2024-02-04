import TourCard from "../../../components/TourCard";
import { Link } from "react-router-dom";
// import Accordion from "@/utils/functions";
import React, { useEffect } from "react";

const ToursList = () => {
  const tourData = [
    {
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "/img/tourCards/1/1.png",
    },
    {
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "/img/tourCards/1/2.png",
    },
    {
      location: "London, UK",
      title: "Westminster Walking Tour & Westminster Abbey Entry",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "/img/tourCards/1/3.png",
    },
    {
      location: "Paris, France",
      title: "Space Center Houston Admission Ticket",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "/img/tourCards/1/4.png",
    },
    {
      location: "New York, USA",
      title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "/img/tourCards/1/5.png",
    },
    {
      location: "London, UK",
      title: "History and Hauntings of Salem Guided Walking Tour",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "/img/tourCards/1/6.png",
    },
    {
      location: "Paris, France",
      title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "/img/tourCards/1/7.png",
    },
    {
      location: "New York, USA",
      title:
        "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "/img/tourCards/1/8.png",
    },
    {
      location: "London, UK",
      title: "Starlight with Sea Cave Kayaking and Loy Krathong Floating",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "/img/tourCards/1/9.png",
    },
    {
      location: "Paris, France",
      title: "Full-Day Phi Phi Islands, Maiton island Trip by Speed Catamaran",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "/img/tourCards/1/10.png",
    },
    {
      location: "New York, USA",
      title: "Phi Phi Islands Day Tour from Phuket",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "/img/tourCards/1/11.png",
    },
    {
      location: "London, UK",
      title: "Karon View Point, Big Buddha & Wat Chalong",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "/img/tourCards/1/12.png",
    },
  ];

  const Accordion = (function () {
    function init() {
      const targets = document.querySelectorAll(".js-accordion");
      if (!targets) return;

      for (let i = 0; i < targets.length; i++) {
        const items = targets[i].querySelectorAll(".accordion__item");

        for (let l = 0; l < items.length; l++) {
          const button = items[l].querySelector(".accordion__button");
          const content = items[l].querySelector(".accordion__content");
          const titleChange = items[l].querySelector(
            "[data-open-change-title]"
          );
          let buttonOrigTitle;
          let buttonNewTitle;

          if (items[l].classList.contains("js-accordion-item-active")) {
            items[l].classList.toggle("is-active");
            content.style.maxHeight = content.scrollHeight + "px";
          }

          if (titleChange) {
            buttonOrigTitle = titleChange.innerHTML;
            buttonNewTitle = titleChange.getAttribute("data-open-change-title");
          }

          button.addEventListener("click", (e) => {
            items[l].classList.toggle("is-active");

            if (titleChange) {
              if (items[l].classList.contains("is-active")) {
                titleChange.innerHTML = buttonNewTitle;
              } else {
                titleChange.innerHTML = buttonOrigTitle;
              }
            }

            if (content.style.maxHeight) {
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
          });
        }
      }
    }

    return {
      init: init,
    };
  })();
  useEffect(() => {
    // Call the init function from the Accordion object
    Accordion.init();
    // calendarSlider();
    // calendarInteraction();
  }, []);

  return (
    <div>
      <section className="hero -type-10 jamaica-page">
        <div className="hero__bg">
          <img src="/img/hero/10/1.jpg" alt="background" />
        </div>

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-9 col-lg-10">
              <div className="hero__content">
                <h1 className="hero__title text-white mb-30">
                  Explore Jamaica’s Best Tours & Excursions
                </h1>
                <form action="#" className="hero-form">
                  <div className="form-wrapper">
                    <svg class="icon">
                      <use xlinkHref="/icons.svg#icon-beach"></use>
                    </svg>
                    <input
                      type="text"
                      placeholder="search by tour name or location"
                    />
                    <button type="submit" className="btn-submit">
                      <svg class="icon">
                        <use xlinkHref="/icons.svg#icon-search"></use>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pb-xl mt-20">
        <div className="container">
          <div className="pl-tag__grid mobile-css-slider-2">
            <div className="">
              <a href="#" className="pl-tag">
                <div className="pl-tag__icon">
                  <i className="icon-office text-24 text-accent-1"></i>
                </div>

                <div className="pl-tag__title text-dark-1">City Tours</div>
              </a>
            </div>

            <div className="">
              <a href="#" className="pl-tag">
                <div className="pl-tag__icon">
                  <i className="icon-bank text-24 text-accent-1"></i>
                </div>

                <div className="pl-tag__title text-dark-1">Cultural Tours</div>
              </a>
            </div>

            <div className="">
              <a href="#" className="pl-tag">
                <div className="pl-tag__icon">
                  <i className="icon-boat text-24 text-accent-1"></i>
                </div>

                <div className="pl-tag__title text-dark-1">Day Cruises</div>
              </a>
            </div>

            <div className="">
              <a href="#" className="pl-tag">
                <div className="pl-tag__icon">
                  <i className="icon-bus text-24 text-accent-1"></i>
                </div>

                <div className="pl-tag__title text-dark-1">Bus Tours</div>
              </a>
            </div>

            <div className="">
              <a href="#" className="pl-tag">
                <div className="pl-tag__icon">
                  <i className="icon-beach text-24 text-accent-1"></i>
                </div>

                <div className="pl-tag__title text-dark-1">Beach Tours</div>
              </a>
            </div>

            <div className="">
              <a href="#" className="pl-tag">
                <div className="pl-tag__icon">
                  <i className="icon-menu-1 text-24 text-accent-1"></i>
                </div>

                <div className="pl-tag__title text-dark-1">Food Tours</div>
              </a>
            </div>
          </div>
          <div className="pt-30">
            <div className="">
              <div className="row y-gap-5 justify-between">
                <div className="col-auto">
                  <div>1362 results</div>
                </div>

                <div className="col-auto">
                  <button className="btn-show-map">Show On Map</button>
                  {/* <div
                    className="dropdown -type-2 js-dropdown js-form-dd"
                    data-main-value="">
                    <div className="dropdown__button js-button">
                      <span>Sort by: </span>
                      <span className="js-title">Featured</span>
                      <i className="icon-chevron-down"></i>
                    </div>

                    <div className="dropdown__menu js-menu-items">
                      <div className="dropdown__item" data-value="fast">
                        Fast
                      </div>

                      <div className="dropdown__item" data-value="steady">
                        Steady
                      </div>

                      <div className="dropdown__item" data-value="speedy">
                        Speedy
                      </div>

                      <div className="dropdown__item" data-value="furious">
                        Furious
                      </div>

                      <div className="dropdown__item" data-value="grind">
                        Grind
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="row y-gap-30 pt-30">
                {tourData.map((tour, index) => (
                  <div className="col-lg-4 col-sm-6">
                    <a
                      href="#"
                      className="tourCard -type-1 border-1 rounded-12 -hover-shadow ratio"
                    >
                      <TourCard key={index} {...tour} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToursList;
