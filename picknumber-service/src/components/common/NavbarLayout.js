import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import KioskNavbar from '../Service/Kiosk/KioskNavbar';
import IndicatorNavbar from '../Service/Indicator/IndicatorNavbar';
import PagerNavbar from '../Service/Pager/PagerNavbar';
import ReservationNavbar from '../Service/Reservation/ReservationNavbar';

function NavbarLayout() {
  const params = useParams();
  const location = useLocation();
  const { title, button1Text, button2Text } = location.state || {};

  return (
    <div className="navbar_contain">
      <Typography className="navbar_title" variant="h3" align="center" sx={{ p: '1rem' }}>
        {title}
      </Typography>
      {params.navbarId === 'kiosk' && <KioskNavbar button1Text={button1Text} button2Text={button2Text} />}
      {params.navbarId === 'indicator' && <IndicatorNavbar button1Text={button1Text} button2Text={button2Text} />}
      {params.navbarId === 'pager' && <PagerNavbar button1Text={button1Text} button2Text={button2Text} />}
      {params.navbarId === 'reservation' && <ReservationNavbar button1Text={button1Text} />}
    </div>
  );
}

export default NavbarLayout;
