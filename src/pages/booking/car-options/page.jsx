"use client";
import React, { useState } from "react";
// import StepsBar from "../../../components/booking/stepsBar";
import SummaryBar from "../../../components/booking/summaryBar";
import OptionsArea from "../../../components/booking/optionsArea";
// import MapArea from "../../../components/booking/mapArea";

const CarOptions = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);
  return (
    <div>
      {/* <MapArea /> */}
      <SummaryBar
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
      <OptionsArea
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
    </div>
  );
};

export default CarOptions;
