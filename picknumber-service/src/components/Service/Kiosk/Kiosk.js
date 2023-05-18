import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import KioskRoot from "../../../pages/KioskRoot";
import KioskButtonOne from "./KioskButtonOne";
import KioskButtonMultiple from "./KioskButtonMultiple";
import KioskTicket from "./KioskTicket";

import "../../../css/service.css";

function Kiosk() {
  const navigate = useNavigate();
  const numberOfButtons = 2; // 버튼 개수에 따라 변경 가능
  const [showTicket, setShowTicket] = useState(false); // kioskticket.js 컴포넌트의 표시 여부 상태

  const handleClick = () => {
    setShowTicket(true); // kioskticket.js 컴포넌트를 표시하기 위해 상태를 true로 설정
  };

  const handleBack = () => {
    setShowTicket(false); // kioskticket.js 컴포넌트를 숨기기 위해 상태를 false로 설정
  };

  return (
    <div>
      <KioskRoot />
      {!showTicket && numberOfButtons === 1 && (
        <KioskButtonOne handleClick={handleClick} />
      )}
      {!showTicket && numberOfButtons > 1 && (
        <KioskButtonMultiple handleClick={handleClick} />
      )}
      {showTicket && <KioskTicket handleBack={handleBack} />}
    </div>
  );
}

export default Kiosk;
