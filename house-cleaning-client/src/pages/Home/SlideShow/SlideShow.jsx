import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SlideShow() {
  return (
    <Carousel
      showArrows={true}
      
      interval={2000}
      infiniteLoop={true}    
    >
      <div>
        <img src="/slide1.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="/slide2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="/slide3.jpg" alt="Slide 3" />
      </div>
    </Carousel>
  );
}

export default SlideShow;