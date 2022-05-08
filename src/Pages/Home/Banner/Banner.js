import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?t=st=1651267524~exp=1651268124~hmac=5f3871be488d7ac4265d0b331f754ebe2b9ed11785e9a24830e1ad7f5e46f74c&w=900"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5 className='text-white'>Get Our Products with a decent discount</h5>
      <p>We offer the best products in the town .</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tse2.mm.bing.net/th?id=OIP.J_TGXiWeS9daPB7swG9vOAHaEx&pid=Api&P=0&w=239&h=154"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5 className='text-white'>Get Our Products with a decent discount</h5>
      <p>We offer the best products in the town .</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tse3.mm.bing.net/th?id=OIP.WG7DYepuPryW2bSEbrFlNAHaC9&pid=Api&P=0&w=457&h=183"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 className='text-white'>Get Our Products with a decent discount</h5>
      <p>We offer the best products in the town .</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;