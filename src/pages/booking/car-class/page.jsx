"use client";
import React, { useState } from "react";
import SummaryBar from "../../../components/booking/summaryBar";
import VehicleArea from "../../../components/booking/vehicleArea";
import MapArea from "../../../components/booking/mapArea";

const CarClass = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);

  return (
    <div className="car-class-page">
      <MapArea />
      <SummaryBar
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
      <VehicleArea
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
    </div>
  );
};

export default CarClass;
