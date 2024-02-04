import React from "react";
import CommonHero from "../../components/commonHero";
import ServicesArea from "../../components/services/servicesArea";

const Service = () => {
  return (
    <div className="service-page">
      <CommonHero
        title="SERVICES"
        subtitle="Service at the highest level!"
        pageName="Service"
      />
      <ServicesArea />
    </div>
  );
};

export default Service;
