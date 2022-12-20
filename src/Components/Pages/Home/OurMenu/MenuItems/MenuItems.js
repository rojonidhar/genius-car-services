import React from 'react';
import './././MenuItems.css'
const MenuItems = ({menu}) => {
    const{id,name,img}=menu;
    
    return (
        <div className='service '>
            <img className='h-5px w-10px' src={img} alt=""/>
            <h5 className=' opacity-75'>{name}</h5>
           
           
        </div>
    );
};

export default MenuItems;