import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const {serviceID}=useParams();
    return (
        <div>
           <h2>Welcome to detail:{serviceID}</h2> 
        </div>
    );
};

export default ServiceDetail;