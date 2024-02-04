"use client";
import React, { useState } from "react";
import StepsBar from "@/components/booking/stepsBar";
import SummaryBar from "@/components/booking/summaryBar";
import BookingCardArea from "@/components/booking/bookingCardArea";
import Choose from "@/components/home/choose";
import MapArea from "@/components/booking/mapArea";

const Bookingcard = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);
  return (
    <div>
      {/* <MapArea /> */}
      <SummaryBar
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
      {/* <StepsBar
        stepNo={4}
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      /> */}
      <BookingCardArea
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
      <Choose />
    </div>
  );
};

export default Bookingcard;
