import React from "react";
import FleetArea from "../../components/fleet/fleetArea";
import Choose from "../../components/home/choose";
import CommonHero from "../../components/commonHero";

const Fleet = () => {
  return (
    <div className="fleet-page">
      <CommonHero
        title="FLEET"
        subtitle="Choose Your Dream Car From Among Six Different Categories"
        pageName="Fleet"
      />
      <FleetArea />
      <Choose />
    </div>
  );
};

export default Fleet;
