import React from 'react';
import Header from '../Header';

function Reservation(){
    const pageTitle = '예약';
    return(
        <div>
            <Header title={pageTitle} /> 
        </div>
    );
}

export default Reservation