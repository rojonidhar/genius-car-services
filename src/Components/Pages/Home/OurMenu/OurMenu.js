import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems/MenuItems';



const OurMenu = () => {

    const [menus,setMenus ]=useState([]);

    useEffect(()=>{
        fetch('menus.json')
        .then(res=>res.json())
        .then(data=>setMenus(data));
    },[])
    return (
        <div id='services' className='container'>
             <div className='row' >
          <div className='d-flex aline-item-center justify-content-center  mt-5 '>
            <div>
                <h3 className='fs-1 fw-bolder opacity-40  mb-2'><small className='fs-2 fw-bolder opacity-75  mb-2'>Menu</small>
                <br></br>
                What We Serve
                </h3>

            </div>
            <div className='mt-5 m-5'>
                <p className='fs-6  opacity-75'>Here our best choices only for you  :</p>

            </div>
        </div>
        <div className='services-container'>
           {
               menus.map(menu=><MenuItems key={menu.id}
                     menu={menu} ></MenuItems>)
            }
           </div>

      </div>
        </div>
     
    );
};

export default OurMenu;