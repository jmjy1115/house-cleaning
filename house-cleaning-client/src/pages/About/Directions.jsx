import React from 'react';
import directionsImage from '../../assets/directions.jpg';
import './Directions.css';

function Directions() {
  return (
    <div className='directions-container'>
      <img
        src={directionsImage}
        alt='direction-image'
        className='directions-image'
      />
    </div>
  );
}

export default Directions;
