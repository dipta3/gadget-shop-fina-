import React from "react";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div style={{ background: "#9e9e9e" ,padding:"10px",textAlign:"center"}}>
      Copyright © {currentYear} Online Gadget Zone. All rights reserved.
    </div>
  );
}
