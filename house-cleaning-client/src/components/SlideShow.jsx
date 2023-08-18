import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SlideShow.css"

function SlideShow() {
  const [ index, setIndex ] = useState(0);
  const handleIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slide-show">
      <Carousel
      interval={2000}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      onChange={handleIndex}
      >
        <div>
          <img src="/slide1.jpg" />
        </div>
        <div>
          <img src="/slide2.jpg" />
        </div>
        <div>
          <img src="/slide3.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default SlideShow;
