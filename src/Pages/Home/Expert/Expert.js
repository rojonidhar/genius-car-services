import React from 'react';

const Expert = ({expert}) => {
    const {name,img}=expert;
    return (
      <div className='g-5 gx-5 col-sm-12 col-md-6 col-lg-4 mt-5'>
          <div className="card ">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='btn btn-primary mx-auto'>Book:{name}</button>
      </div>
    </div></div>
          
        
    );
};

export default Expert;