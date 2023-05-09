import React from 'react';
import Typography from '@mui/material/Typography';
import '../css/header.css'; // Header에 대한 CSS 파일
import logo from '../image/header_logo.png'

const Header = ({ title }) => {
  return (
    <div className="header_wrap">
      <div className="header_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_title">
        <Typography variant="h3" align="center" sx={{ p: '1rem' }}>
          {title}
        </Typography>
      </div>
    </div>
  );
}

export default Header;