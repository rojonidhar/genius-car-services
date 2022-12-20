import React from 'react';

import {  Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceID}=useParams();
    return (
        <div>
           <h2>Welcome to detail:{serviceID}</h2> 
         <div className='text-center'>
         <Link to="/checkout">
                    <button className='order-btn2 w-50'>Proceed Checkout</button>
                </Link>
         </div>
        </div>
    );
};

export default ServiceDetail;