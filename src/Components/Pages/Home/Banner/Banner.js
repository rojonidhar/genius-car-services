import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import cake1 from '../../../../images/banner/cake1.jpg';
import cake2 from '../../../../images/banner/cake2.jpg';
import cake3 from '../../../../images/banner/cake3.jpg';
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cake1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='fs-1 mb-12px'>Welcome To My Website</h1>
            <h6 clasName="fs-3 ">We can provide you home made food !!</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cake2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h2>To Have Better Teste</h2>
            <p>We will make healthy and testy sweet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cake3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h3>We Baked Fresh Desert Daily</h3>
            <p>All your needs we will give you!!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    );
};

export default Banner;