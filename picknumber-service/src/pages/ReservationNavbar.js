import React from 'react';
import Header from '../components/Header';

function ReservationNavbar(){
    const pageTitle = '발권기';
    return(
        <div>
            <Header title={pageTitle} /> 
        </div> 
    );
}

export default ReservationNavbar