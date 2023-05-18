import React from 'react';
import { Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Header from './common/Header';
import '../css/navbar.css';

import Kiosk from './Service/Kiosk/Kiosk';
import Indicator from './Service/Indicator/Indicator';
import Pager from './Service/Pager/Pager';
import Reservation from './Service/Reservation/Reservation';

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

const pages = [
  {
    id: 'kiosk',
    title: '발권기',
    button1Text: 'KIOSK 1',
    button2Text: 'KIOSK 2',
  },
  {
    id: 'indicator',
    title: '표시기',
    button1Text: '통합표시기 1',
    button2Text: '통합표시기 2',
  },
  {
    id: 'pager',
    title: '호출기',
    button1Text: '창구 ',
    button2Text: '창구',
  },
  {
    id: 'reservation',
    title: '예약',
    button1Text: '공과금',
  },
];

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const pageTitle = '지능형 키오스크 시스템';

  return (
    <ThemeProvider theme={theme}>
      <Header title={pageTitle} />
      <Container component="main" maxWidth="xl" className="container_wrap">
        <Box className="navbar-page" sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
          {pages.map((prod) => (
            <Button className="service-btn" key={prod.id}>
              <NavLink
                to={`/${prod.id}`}
                activeClassName="active"
                state={{
                  title: prod.title,
                  button1Text: prod.button1Text,
                  button2Text: prod.button2Text,
                }}
                style={{ textDecoration: 'none' }}
              >
                {prod.title}
              </NavLink>
            </Button>
          ))}
          <Button className="service-logout" onClick={handleLogout}>
            로그아웃
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Navbar;
