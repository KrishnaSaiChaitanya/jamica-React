"use client";
import SummaryBar from "../../../components/booking/summaryBar";
import React, { useState } from "react";
import CheckoutConfirmArea from "../../../components/booking/checkout-confirm";

const CheckoutConfirm = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);

  return (
    <div className="checkout-confirm-page">
      <SummaryBar
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
        checkout={true}
      />
      <CheckoutConfirmArea
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
    </div>
  );
};

export default CheckoutConfirm;
