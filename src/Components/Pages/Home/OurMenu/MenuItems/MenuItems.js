import React from 'react';
import './././MenuItems.css'
const MenuItems = ({menu}) => {
    const{id,name,img}=menu;
    
    return (
        <div className='service '>
            <img src={img} alt=""/>
            <h3>{name}</h3>
           
           
        </div>
    );
};

export default MenuItems;