import React from 'react';
import historyImage from '../../assets/history.jpg';
import './History.css';

function History() {
  return (
    <div className='history-container'>
      <img
        src={historyImage}
        alt='history-image'
        className='history-image'
      />
    </div>
  );
}

export default History;
