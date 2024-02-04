import React from "react";
import FleetDetails from "../../../components/singleFleet/fleetDetails";
import CommonHero from "../../../components/commonHero";

const SingleFeet = () => {
  return (
    <div className="single-fleet-page">
      <CommonHero
        title="FLEET"
        subtitle="Choose Your Dream Car From Among Six Different Categories"
        pageName="Fleet"
      />
      <FleetDetails />
    </div>
  );
};

export default SingleFeet;
