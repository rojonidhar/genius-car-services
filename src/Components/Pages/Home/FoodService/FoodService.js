import React from 'react';
import { useNavigate } from 'react-router';
import './FoodService.css';

const FoodService = ({service}) => {
    const{id,name,img,description,price}=service;
    const navigate = useNavigate();

    const navigateToServiceDetail =id =>{
        navigate(`/service/${id}`)
    }

    return (
        <div className="row d-flex align-items-center justify-content-between rounded-3  g-4">
        <div className="col-lg-12 ">
          <div className="card border-0 shadow-lg h-100">
            <img src={img} className="card-img-top img" alt="..."/>
            <div className="card-body fst-italic">
              <h5 className="card-title ">{name}</h5>
              <p className="card-text lh-base ">{description}</p>
              <p className="card-text fs-5 ">$ {price}</p>
              

            </div>
            <div className="m-4 fst-italic mr-10" >
               
               <button onClick={()=> navigateToServiceDetail(id)} className="order-btn2 " >Book now</button>  
                  
            </div>
          </div>
        </div>
        </div>
    );
};



export default FoodService;