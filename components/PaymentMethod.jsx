import { Typography } from "@mui/material";
import React, { useState } from "react";

export default function PaymentMethod() {
  const [selectedPaymentM, setSelectedPaymentM] = useState();
  return (
    <>
      <input
        type="radio"
        id="caseonDelivery"
        name="spm"
        value="caseonDelivery"
        onChange={() => setSelectedPaymentM("cod")}
      />
      <label htmlFor="cod">Cash on Delivery</label>
      <input
        type="radio"
        id="ssl"
        name="spm"
        value="ssl"
        onChange={() => setSelectedPaymentM("ssl")}
      />
      
    </>
  );
}
