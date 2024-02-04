"use client";
import React, { useEffect, useState } from "react";
import SummaryBar from "../../../components/booking/summaryBar";
// import OptionsArea from "../../../components/booking/optionsArea";
import SummaryBox from "../../../components/booking/summaryBox";
import { Link } from "react-router-dom";

const extraItemData = [
  {
    id: 1,
    title: "Red Stripe Beer",
    price: "6",
    img: "/images/cars&Tours/tour-1.jpg",
    details: false,
    add: false,
  },
  {
    id: 2,
    title: "Red Stripe Beer",
    price: "6",
    img: "/images/cars&Tours/tour-1.jpg",
    details: false,
    add: false,
  },
  {
    id: 3,
    title: "Red Stripe Beer",
    price: "6",
    img: "/images/cars&Tours/tour-1.jpg",
    details: false,
    add: false,
  },
  {
    id: 4,
    title: "Red Stripe Beer",
    price: "6",
    img: "/images/cars&Tours/tour-1.jpg",
    details: false,
    add: false,
  },
  {
    id: 5,
    title: "Red Stripe Beer",
    price: "6",
    img: "/images/cars&Tours/tour-1.jpg",
    details: false,
    add: false,
  },
];

const Extras = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);
  const [itemData, setItemData] = useState(extraItemData);
  const [count, setCount] = useState(2);
  const [popup, setPopup] = useState(false);

  const Details = ({ show, id }) => {
    const handleDetailsClose = () => {
      const newItem = extraItemData.filter((item) => {
        if (item.id == id) {
          item.details = false;
        }
        return item;
      });
      setItemData(newItem);
    };

    return (
      <div className={show ? "details active" : "details"}>
        <ul className="list">
          <li className="item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-check"></use>
            </svg>
            <span>Ice Cold Red stripe Beers</span>
          </li>
          <li className="item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-check"></use>
            </svg>
            <span>Ice Cold Red stripe Beers</span>
          </li>
          <li className="item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-check"></use>
            </svg>
            <span>Ice Cold Red stripe Beers</span>
          </li>
          <li className="item">
            <svg class="icon">
              <use xlinkHref="/icons.svg#icon-check"></use>
            </svg>
            <span>Ice Cold Red stripe Beers</span>
          </li>
        </ul>
        <button className="btn-close" onClick={() => handleDetailsClose()}>
          <svg class="icon">
            <use xlinkHref="/icons.svg#icon-clear"></use>
          </svg>
        </button>
      </div>
    );
  };

  const Add = ({ show, id }) => {
    const handleDetailsClose = () => {
      const newItem = extraItemData.filter((item) => {
        if (item.id == id) {
          item.add = false;
        }
        return item;
      });
      setItemData(newItem);
    };

    const handleCount = (condition) => {
      if (condition == "plus") {
        setCount(count + 1);
      } else {
        if (count != 0) {
          setCount(count - 1);
        }
      }
    };

    const handleConfirm = () => {
      handleDetailsClose();
      setPopup(true);
    };

    return (
      <div className={show ? "details add active" : "details add"}>
        <div className="add-form">
          <select name="airport" id="airport">
            <option value="Select Airport" selected>
              Select Airport
            </option>
            <option value="Select Airport 2">Select Airport 2</option>
            <option value="Select Airport 3">Select Airport 3</option>
          </select>
          <select name="journey" id="journey">
            <option value="Select Journey​" selected>
              Select Journey​
            </option>
            <option value="Select Journey​ 2">Select Journey​ 2</option>
            <option value="Select Journey​ 3">Select Journey​ 3</option>
          </select>
          <select name="beer" id="beer">
            <option value="Select Beer Type​" selected>
              Select Beer Type​
            </option>
            <option value="Select Beer Type​ 2">Select Beer Type​ 2</option>
            <option value="Select Beer Type​ 3">Select Beer Type​ 3</option>
          </select>
          <div className="count mb-5">
            <button onClick={() => handleCount("minus")}>
              <svg class="icon">
                <use xlinkHref="/icons.svg#icon-minus"></use>
              </svg>
            </button>
            {count}
            <button onClick={() => handleCount("plus")}>
              <svg class="icon">
                <use xlinkHref="/icons.svg#icon-plus"></use>
              </svg>
            </button>
          </div>
          <div className="bottom">
            <button className="btn-cencel" onClick={() => handleDetailsClose()}>
              Cencel
            </button>
            <div className="price">
              <h4>$9</h4>USD
            </div>
            <button className="btn-confirm" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleDetails = (btn, id) => {
    const newItem = extraItemData.filter((item) => {
      if (btn == "details") {
        if (item.id === id) {
          item.details = true;
        }
      } else {
        if (item.id === id) {
          item.add = true;
        }
      }
      return item;
    });
    setItemData(newItem);
  };

  return (
    <div className="extras-page options-area">
      {/* <MapArea /> */}
      <SummaryBar
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />

      <SummaryBox
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />

      <div className="extras-wrapper container">
        <div className="nav">
          <h4>Make It Special​</h4>
          <Link href="/booking/checkout" className="btn-skip">
            SKIP EXTRAS​
          </Link>
        </div>
        <div className="list row g-4">
          {itemData.map((item) => {
            const { id, title, img, details, add, price } = item;
            return (
              <div className="col-12 col-sm-6 col-lg-4" key={id}>
                <div className="item">
                  <img src={img} alt={title} />
                  <div className="content">
                    <div className="left">
                      <h5>{title}</h5>
                      <div className="price">From ${price}</div>
                    </div>
                    <div className="btns">
                      <button
                        className="btn btn-info"
                        onClick={() => handleDetails("details", id)}
                      >
                        INFO
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={() => handleDetails("add", id)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                  <Details show={details} id={id} />
                  <Add show={add} id={id} />
                </div>
              </div>
            );
          })}
          {/* <div className="col-12 col-sm-6 col-lg-3">
            <div className="item">
              <img src="/images/cars&Tours/tour-1.jpg" alt="" />
              <div className="content">
                <div className="left">
                  <h5>Red Stripe Beer</h5>
                  <div className="price">From $6</div>
                </div>
                <div className="btns">
                  <button className="btn btn-info">INFO</button>
                  <button className="btn btn-info">ADD</button>
                </div>
              </div>
              <Details />
              <Add />
            </div>
          </div> */}
        </div>

        <div class="option-area-btns mt-30 d-flex align-items-center gap-20">
          <div class="one-half">
            <button class="back">Back</button>
          </div>
          <div class="one-half">
            <button type="submit" class="submit">
              CONTINUE
            </button>
          </div>
        </div>
      </div>

      <div className={popup ? "popup active" : "popup"}>
        <div className="popup-wrapper">
          <h4 className="title">Extras</h4>
          <figure className="logo mb-20">
            <img src="/images/check.png" alt="" />
          </figure>
          <h4 className="">1 Red Stripe Beer</h4>
          <h4 className="success">Successfully Added</h4>
          <button className="btn-close-popup" onClick={() => setPopup(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extras;
