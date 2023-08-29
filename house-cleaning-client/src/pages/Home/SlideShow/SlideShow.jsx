import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './SlideShow.css';

function SlideShow() {
  return (
    <Carousel
      animationHandler={'fade'}
      autoPlay={true}
      centerMode={true}
      centerSlidePercentage={100}
      dynamicHeight
      infiniteLoop={true}
      interval={3000}
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      showIndicators={false}
      stopOnHover={false}
      useKeyboardArrows  
    >
      <div>
        <img src={slide1} alt='Slide 1' />
        <div className='message'>
          <p className='main-message'>고객의 가치를 위해 헌신하는 기업, <span>하우스크리닝</span></p>
          <p className='sub-message'>고객의 만족만을 위해 오지게 달리는 참된 기업</p>
          <p className='sub-message'>우리는 고객의 깨끗하고 건강한 안식처를 위해 일합니다 </p>
        </div>
      </div>
      <div>
        <img src={slide2} alt='Slide 2' />
        <div className='message'>
          <p className='main-message'>고객의 가치를 위해 헌신하는 기업, <span>하우스크리닝</span></p>
          <p className='sub-message'>고객의 만족만을 위해 오지게 달리는 참된 기업</p>
          <p className='sub-message'>우리는 고객의 깨끗하고 건강한 안식처를 위해 일합니다 </p>
        </div>
      </div>
      <div>
        <img src={slide3} alt='Slide 3' />
        <div className='message'>
          <p className='main-message'>고객의 가치를 위해 헌신하는 기업, <span>하우스크리닝</span></p>
          <p className='sub-message'>고객의 만족만을 위해 오지게 달리는 참된 기업</p>
          <p className='sub-message'>우리는 고객의 깨끗하고 건강한 안식처를 위해 일합니다 </p>
        </div>
      </div>
    </Carousel>
  );
}

export default SlideShow;
