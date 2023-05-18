import React from "react";
import Typography from "@mui/material/Typography";
import "../../css/header.css"; // Header에 대한 CSS 파일
import kiosklogo from "../../image/header_logo.png";

function ServiceHeader() {
  return (
    <div className="kiosk_header">
      <img src={kiosklogo} alt="logo" />
    </div>
  );
}

export default ServiceHeader;
