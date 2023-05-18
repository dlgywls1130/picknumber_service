import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KioskTicket from "./KioskTicket";

function KioskButtonMultiple({ handleClick }) {
  const buttonNames = ["보험", "수익증권"]; // 버튼명을 추가/변경할 수 있음
  const [showTicket, setShowTicket] = useState(false); // kioskticket.js 컴포넌트의 표시 여부 상태

  const handleButtonClick = () => {
    setShowTicket(true); // kioskticket.js 컴포넌트를 표시하기 위해 상태를 true로 설정
    handleClick(); // 클릭 이벤트를 상위 컴포넌트로 전달
  };

  return (
    <div>
      <Typography className="kiosk_notice" align="center" sx={{ m: "1rem" }}>
        해당하는 업무의 버튼을 눌러주세요.
      </Typography>

      {buttonNames.map((name, index) => (
        <Button
          key={index}
          className="kiosk_btn_wrap"
          onClick={handleButtonClick}
        >
          {name}
        </Button>
      ))}

      {showTicket && <KioskTicket />}
    </div>
  );
}

export default KioskButtonMultiple;
