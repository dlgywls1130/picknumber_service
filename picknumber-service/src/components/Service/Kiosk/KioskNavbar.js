import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

function KioskNavbar() {
  const { kioskId } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = (kioskId) => {
    navigate(`/kiosk/${kioskId}`);
  };

  const button1Text = 'KIOSK 1';
  const button2Text = 'KIOSK 2';

  return (
    <div>
      <div className="button_wrap">
        <Button className="navbar_btn" onClick={() => handleButtonClick(1)}>
          {button1Text}
        </Button>
        <Button className="navbar_btn" onClick={() => handleButtonClick(2)}>
          {button2Text}
        </Button>
      </div>
    </div>
  );
}

export default KioskNavbar;