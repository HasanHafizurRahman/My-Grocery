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
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?t=st=1651267524~exp=1651268124~hmac=5f3871be488d7ac4265d0b331f754ebe2b9ed11785e9a24830e1ad7f5e46f74c&w=900"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?t=st=1651267524~exp=1651268124~hmac=5f3871be488d7ac4265d0b331f754ebe2b9ed11785e9a24830e1ad7f5e46f74c&w=900"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;