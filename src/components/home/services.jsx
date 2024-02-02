import React, { useState } from "react";
import TempleteTitle from "../templeteTitle";

const serviceData = {
  btns: [
    {
      id: 1,
      img: "/images/icon/forma1.png",
      title: "Limousine Service",
    },
    {
      id: 2,
      img: "/images/icon/forma1.png",
      title: "Limousine Service",
    },
    {
      id: 3,
      img: "/images/icon/forma1.png",
      title: "Limousine Service",
    },
  ],
  content: [
    {
      id: 1,
      title: "The exclusive way to travel",
      desc1:
        "Enjoy the comfort of our limousines and business vans. Prepare for your next business meeting in peace, or let your chauffeur show you the highlights of the city.",
      desc2:
        "However you may spend your time – you can fully rely on your chauffeur, stay relaxed, and reach your destination safely. Step right in and sit back. We will take care of everything else.",
    },
    {
      id: 2,
      title: "The exclusive way to travel",
      desc1:
        "Enjoy the comfort of our limousines and business vans. Prepare for your next business meeting in peace, or let your chauffeur show you the highlights of the city.",
      desc2:
        "However you may spend your time – you can fully rely on your chauffeur, stay relaxed, and reach your destination safely. Step right in and sit back. We will take care of everything else.",
    },
    {
      id: 3,
      title: "The exclusive way to travel",
      desc1:
        "Enjoy the comfort of our limousines and business vans. Prepare for your next business meeting in peace, or let your chauffeur show you the highlights of the city.",
      desc2:
        "However you may spend your time – you can fully rely on your chauffeur, stay relaxed, and reach your destination safely. Step right in and sit back. We will take care of everything else.",
    },
  ],
};

const Services = () => {
  const [serviceTab, setServiceTab] = useState(1);

  return (
    <div className="services-section">
      <TempleteTitle
        title="Our Services"
        secTitle="Our Services"
        subtitle="Our aim is to fill a gap in niche market of Trade"
      />
      <section className="icon-box">
        <div className="container">
          <ul className="tab_services">
            {serviceData.btns.map(({ id, title, img }) => {
              return (
                <li className={serviceTab === id ? "active" : ""} key={id}>
                  <a href="#sv-1" onClick={() => setServiceTab(id)}>
                    <img src={img} alt={title} />
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
          {serviceData.content.map((item) => {
            const { id, title, desc1, desc2 } = item;
            return (
              <div
                className={
                  serviceTab == id
                    ? "content-box d-block"
                    : "content-box d-none"
                }
                key={id}
              >
                <div className="position-content">
                  <p className="left-content">{title}</p>
                  <p className="center-content">{desc1}</p>
                  <p className="right-content">{desc2}</p>
                </div>
                <div className="view_service">
                  <a href="#">
                    More Service
                    <img src="/images/icon/arrow-next.png" alt="" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
