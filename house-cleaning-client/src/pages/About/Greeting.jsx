import React from 'react';
import greetingImage from '../../assets/greeting.jpg';
import './Greeting.css';

function Greeting() {
  return (
    <div className='greeting-container'>
      <img
        src={greetingImage}
        alt='greeting-image'
        className='greeting-image'
      />
    </div>
  );
}

export default Greeting;
