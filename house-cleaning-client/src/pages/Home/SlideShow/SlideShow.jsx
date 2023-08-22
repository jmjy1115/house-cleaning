import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SlideShow.css";

function SlideShow() {
  return (
    <Carousel
      animationHandler={'fade'}
      autoPlay={true}
      centerMode={true}
      centerSlidePercentage={100}
      dynamicHeight
      infiniteLoop={true}
      interval={2000}
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      showIndicators={true}
      stopOnHover={false}
      useKeyboardArrows  
    >
      <div>
        <img src={slide1} alt="Slide 1" />
      </div>
      <div>
        <img src={slide2} alt="Slide 2" />
      </div>
      <div>
        <img src={slide3} alt="Slide 3" />
      </div>
    </Carousel>
  );
}

export default SlideShow;
