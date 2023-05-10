import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Header from './Header';
import KioskNavbar from '../pages/KioskNavbar';
import IndicatorNavbar from '../pages/IndicatorNavbar';
import PagerNavbar from '../pages/PagerNavbar';
import ReservationNavbar from '../pages/ReservationNavbar';
import '../css/navbar.css';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
});

function NavbarNav() {


  const menus = [
    {
      id: 1,
      text: "발권기",
      url: "/pages/kioskNavbar"
    },
    {
      id: 2,
      text: "표시기",
      url: "/pages/indicatorNavbar"
    },
    {
      id: 3,
      text: "호출기",
      url: "/pages/pagerNavbar"
    },
    {
      id: 4,
      text: "예약",
      url: "/pages/reservationNavbar"
    },
    {
      id: 5,
      text: "로그아웃",
      url: "/"
    }
  ];

  const pageTitle = '지능형 키오스크 시스템';

  return (
    <ThemeProvider theme={theme}>
      <Header title={pageTitle} />
      <Container component="main" maxWidth="xl" className='container_wrap'>
        <nav>
          <div>
            <ul>
              {menus.map(menu => (
                <li key={menu.id} className="nav-item">
                  <Link to={menu.url} className="nav-link text-white">
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </ThemeProvider>
  );
}
function Navbar() {
  return (
    <Routes>
      <Route path="/" element={<NavbarNav />} />
      <Route path="/pages/kiosk" element={<KioskNavbar />} index/>
      <Route path="/pages/indicator" element={<IndicatorNavbar />} index/>
      <Route path="/pages/pager" element={<PagerNavbar />} index/>
      <Route path="/pages/reservation" element={<ReservationNavbar />} index/>
    </Routes>
  );
}
export default Navbar

