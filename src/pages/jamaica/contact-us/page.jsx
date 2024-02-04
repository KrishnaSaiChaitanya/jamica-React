"use client";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const ContactSection = () => {
  const [help, setHelp] = useState(false);

  return (
    <div className="contact-page options-area">
      <div className="summaryBtnBox mb-50">
        <div className="container">
          <div className="summaryBtnBox__wrapper">
            <p className="text">Contact US</p>
            <button
              className="summaryBtn d-flex"
              onClick={() => setHelp(!help)}
            >
              <span>Urgent Help</span>
              <span className="iconBox">
                <svg>
                  <use
                    xlinkHref={`/icons.svg#icon-${help ? "minus" : "plus"}`}
                  ></use>
                </svg>
              </span>
              {/* <svg>
            <use xlinkHref="/icons.svg#icon-minimize"></use>
          </svg> */}
            </button>
          </div>
        </div>
      </div>
      <div className="contact-wrapper container">
        <div className="social">
          <a href="#" className="social__item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-facebook"></use>
            </svg>
            Facebook
          </a>
          <a href="#" className="social__item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-gmail"></use>
            </svg>
            Email
          </a>
          <a href="#" className="social__item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-whatsapp"></use>
            </svg>
            WhatsApp
          </a>
        </div>
        <ul className="details">
          <li className="details__item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-phone"></use>
            </svg>
            <p>
              <strong>US :</strong> +1 2345 67891​
            </p>
          </li>
          <li className="details__item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-phone"></use>
            </svg>
            <p>
              <strong> UK : </strong>+44 1234 5678​
            </p>
          </li>
          <li className="details__item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-phone"></use>
            </svg>
            <p>
              <strong>JA :</strong> +1876 1234 567​
            </p>
          </li>
          <li className="details__item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-paper-plane-o"></use>
            </svg>
            <p>
              <strong>EM :</strong> hello@jamaicataxi.com​
            </p>
          </li>
        </ul>
      </div>
      <div className="footer">
        <div className="container">
          <div className="list">
            <Link href="#">Get Quote</Link>
            <Link href="#">Book Tour</Link>
            <Link href="#">Book Taxi​</Link>
          </div>
          <div className="list">
            <Link href="#">Login/Register</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">News & Tips​</Link>
          </div>
          <div className="social">
            <a href="#">
              <svg class="icon">
                <use xlinkHref="/icons.svg#icon-twitter"></use>
              </svg>
            </a>
            <a href="#">
              <svg class="icon">
                <use xlinkHref="/icons.svg#icon-facebook1"></use>
              </svg>
            </a>
            <a href="#">
              <svg class="icon">
                <use xlinkHref="/icons.svg#icon-instagram"></use>
              </svg>
            </a>
            <a href="#">
              <svg class="icon">
                <use xlinkHref="/icons.svg#icon-linkedin2"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={help ? "help active" : "help"}>
        <div className="container help__wrapper">
          <p>
            Use this option if: you are waiting for your ride or need very
            urgent support?​
          </p>
          <h3 className="title">Contact Our Dispatcher​</h3>​
          <div className="d-flex box">
            <span>WhatsApp:​</span>
            <a href="#">WhatsApp Message</a>
          </div>
          <div className="d-flex box">
            <span>WhatsApp:​</span>
            <a href="#"> WhatsApp Call​</a>
          </div>
          <div className="d-flex box">
            <span>Phone:​</span>
            <a href="#">+1 876 1234567​</a>
          </div>
          <button className="btn-close" onClick={() => setHelp(false)}>
            Close Urgent Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
