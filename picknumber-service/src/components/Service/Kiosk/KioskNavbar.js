import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../../css/service.css";
import NavbarLayout from "../../common/NavbarLayout";
import Kiosk from "./Kiosk";
import Button from "@mui/material/Button";

function KioskNavbar() {
  const { kioskId } = useParams();
  const navigate = useNavigate();
  const [kioskData, setKioskData] = useState(null);

  // API 요청을 통해 kioskId에 해당하는 데이터를 가져오는 함수
  const fetchKioskData = async (kioskId) => {
    // API 호출 및 데이터 처리 로직 구현
    // 예시: fetch(`/api/kiosks/${kioskId}`).then((response) => response.json()).then((data) => setKioskData(data));
  };

  useEffect(() => {
    fetchKioskData(kioskId);
  }, [kioskId]);

  const handleButtonClick = (kioskId) => {
    navigate(`/kiosk/${kioskId}`);
  };

  const button1Text = "KIOSK 1";
  const button2Text = "KIOSK 2";

  return (
    <div>
      <NavbarLayout />
      <div className="button_wrap">
        <Button
          className="navbar_btn"
          onClick={() => handleButtonClick(button1Text.toLowerCase())}
          sx={{ mb: "1rem" }}
        >
          {button1Text}
        </Button>
        <Button
          className="navbar_btn"
          onClick={() => handleButtonClick(button2Text.toLowerCase())}
        >
          {button2Text}
        </Button>
      </div>
      {kioskData && <Kiosk kioskId={kioskId} data={kioskData} />}{" "}
      {/* kioskData가 있을 때만 KioskLayout을 렌더링 */}
    </div>
  );
}

export default KioskNavbar;
