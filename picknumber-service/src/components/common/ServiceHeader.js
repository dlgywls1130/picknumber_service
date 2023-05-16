import React from 'react';
import Typography from '@mui/material/Typography';
import '../../css/header.css'; // Header에 대한 CSS 파일

const ServiceHeader = ({ title }) => {
  return (
    <div className="header_wrap">
      <div className="header_title">
        <Typography variant="h3" align="center" sx={{ p: '1rem' }}>
          {title}
        </Typography>
      </div>
    </div>
  );
}

export default ServiceHeader;