import React from 'react';
import Banner from '../Banner/Banner';
import FoodServices from '../FoodServices/FoodServices';
import OurMenu from '../OurMenu/OurMenu';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <FoodServices></FoodServices>
            <OurMenu></OurMenu>
        </div>
    );
};

export default Home;