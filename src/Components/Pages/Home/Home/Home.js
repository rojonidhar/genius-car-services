import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import FoodServices from '../FoodServices/FoodServices';
import OurMenu from '../OurMenu/OurMenu';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <FoodServices></FoodServices>
            <OurMenu></OurMenu>
       <Footer></Footer>
        </div>
    );
};

export default Home;