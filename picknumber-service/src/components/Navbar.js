import * as React from 'react';
import '../css/navbar.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from '@mui/material/Box';

import Header from './Header';
import Kiosk from './service/Kiosk';
import Indicator from './service/Indicator';
import Pager from './service/Pager';
import Reservation from './service/Reservation';

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

const pages_ = [
  {
    menuTitle: "발권기",
    pageURL: "/navbar/kiosk"
  },
  {
    menuTitle: "표시기",
    pageURL: "/navbar/indicator"
  },
  {
    menuTitle: "호출기",
    pageURL: "/navbar/pager"
  },
  {
    menuTitle: "예약",
    pageURL: "/navbar/reservation"
  },
  {
    menuTitle: "로그아웃",
    pageURL: "/"
  }
];

export default function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const pageTitle = '지능형 키오스크 시스템';
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header title={pageTitle} />
        <Container component="main" maxWidth="xl" className='container_wrap'>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 2 }}>
            {pages_.map((page, index) => {
              const { menuTitle, pageURL } = page;
              return (
                <Button
                  key={index}
                  component={Link}
                  to={pageURL}
                  variant="outlined"
                  sx={{ ml: 1 }}
                >
                  {menuTitle}
                </Button>
              );
            })}
          </Box>
          <Routes>
            <Route path="/navbar/kiosk" element={<Kiosk />} />
            <Route path="/navbar/indicator" element={<Indicator />} />
            <Route path="/navbar/pager" element={<Pager />} />
            <Route path="/navbar/reservation" element={<Reservation />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  );
}
