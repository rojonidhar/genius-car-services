import React, { useEffect, useState } from 'react';
import FoodService from '../FoodService/FoodService';
import './FoodServies.css';


const FoodServices = () => {


    const [services,setServices ]=useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div id='services' className='container mb-20px'>
           <div className='row'>
           <h2 className='services-tittle fs-2 fw-bolder opacity-75  mt-5 mb-2'>Our Baking Services</h2>
            <div className='services-container'>
          
           
           
           {
                services.map(service=><FoodService key={service.id}
                    service={service} ></FoodService> )
            }
           </div> 

           </div>
        </div>
    );
};

export default FoodServices;