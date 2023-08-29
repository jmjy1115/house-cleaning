import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import tmp1 from '../../assets/tmp1.jpg';
import tmp2 from '../../assets/tmp2.jpg';
import tmp3 from '../../assets/tmp3.jpg';
import './ServiceInfo.css';

function ServiceInfo() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className='service-info-container'>
      <div id='service-overview'>
        <img src={tmp1} />
      </div>
      <div id='service-process'>
        <img src={tmp2} />
      </div>
      <div id='expected-outcomes'>
        <img src={tmp3} />
      </div>
    </div>
  )
}

export default ServiceInfo;
