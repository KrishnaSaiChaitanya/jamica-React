import React from "react";
// const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import OwlCarousel from "react-owl-carousel";

const Vehicles = () => {
  return (
    <div className="wehicles">
      <OwlCarousel
        loop={true}
        items={1}
        responsiveRefreshRate={0}
        autoplay={true}
        autoplayTimeout={7000}
        autoplayHoverPause={true}
        nav={true}
        navText={[
          "<i className='icon-arrow-prev'></i>",
          "<i className='icon-arrow-next'></i>",
        ]}
        dots={false}
        margin={20}
      >
        <div className="item">1</div>
        <div className="item">2</div>
      </OwlCarousel>
    </div>
  );
};

export default Vehicles;
