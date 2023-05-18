import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// css
import "../../../css/service.css";

function KioskButtonOne({ handleClick }) {
  const buttonName = "보험"; // 버튼명을 변경할 수 있음
  const standbyPeople = "1"; // 대기인원 수
  const [showTicket, setShowTicket] = useState(false); // kioskticket.js 컴포넌트의 표시 여부 상태
  const handleButtonClick = () => {
    setShowTicket(true); // kioskticket.js 컴포넌트를 표시하기 위해 상태를 true로 설정
    handleClick(); // 클릭 이벤트를 상위 컴포넌트로 전달
  };
  return (
    <div className="kiosk">
      <div className="kiosk_standby">
        <div className="standby_wrapp">
          <Typography className="standby_title" variant="h3">
            대기인수
          </Typography>
          <p className="standby_number"> {standbyPeople} </p>
          <Typography className="standby_title" variant="h3">
            명
          </Typography>
        </div>
      </div>
      <Typography
        variant="h1"
        className="kiosk_notice"
        align="center"
        sx={{ m: "1rem" }}
      >
        아래의 업무 버튼을 눌러주세요.
      </Typography>

      <Button className="kiosk_btn_wrap" onClick={handleClick}>
        <div className="kiosk_btn_title">{buttonName}</div>
      </Button>
    </div>
  );
}

export default KioskButtonOne;
