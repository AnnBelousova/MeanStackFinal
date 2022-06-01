import React from "react";
import "../cssFiles/newarrivals.css";
import Carousel from 'react-bootstrap/Carousel'

const NewArrivals = () => {
return(
	
<div className="row text-center">
  <h1 className="text-uppercase">New Arrivals</h1>
    <div className="col-md-4 accessories">
      <p className="accessories-text">Accessories</p>
      <img 
      className="img-accessories" 
      src="/images/sunglasses.jpg" 
      alt="First slide"/>
    </div>
  <div className="col-md-4">
    <Carousel className="slider">
        <Carousel.Item>
        <img 
          className="img-newarr" 
          src="/Items/1.jpg" 
          alt="First slide"/>
          <Carousel.Caption className="d-none d-md-block ">
        <p className="set-name">Track Set 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="img-newarr"
            src="/Items/2.jpg" 
            alt="Second slide"
        />
          <Carousel.Caption className="d-none d-md-block ">
          <p className="set-name">Track Set 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="img-newarr"
          src="/Items/3.jpg" 
          alt="Third slide"
        />
        <Carousel.Caption className="d-none d-md-block ">
      <p className="set-name">Track Set 3</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  </div>
  <div className="col-md-4 discount">
    <p className="discount-text">Order now <br/> and get <br/> a 15% discount <br/> on the spring <br/>collection</p>
  </div>
</div>

)
}

export default NewArrivals;