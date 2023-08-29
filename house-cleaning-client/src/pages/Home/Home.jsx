import React from 'react';
import { Link } from 'react-router-dom';
import SlideShow from './SlideShow/SlideShow';
import imgPreparation from '../../assets/preparation.jpg';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <SlideShow />
      <div className="service-cases">
        <div className="cases-header">
          <h1>서비스사례</h1>
          <Link
            to="/gallery/service-cases"
            className="cases-view-more"
          >
            + 더보기
          </Link>
        </div>
        <div className="cases-gallery">
          <img src={imgPreparation} alt="Description 1" className="cases-image" />
          <img src={imgPreparation} alt="Description 2" className="cases-image" />
          <img src={imgPreparation} alt="Description 3" className="cases-image" />
          <img src={imgPreparation} alt="Description 4" className="cases-image" />
          <img src={imgPreparation} alt="Description 5" className="cases-image" />
          <img src={imgPreparation} alt="Description 6" className="cases-image" />
        </div>
      </div>
      <div className="service-introduction">
        <div className="service-header">
          <h1>서비스소개</h1>
          <Link
            to="/service-info/service-info"
            className="service-view-more"
          >
            + 더보기
          </Link>
        </div>
        <div className='service-content'></div>
      </div>
    </div>
  );
}

export default Home;
