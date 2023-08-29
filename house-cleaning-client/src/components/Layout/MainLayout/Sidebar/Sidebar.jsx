import React from 'react';
import { Link } from 'react-router-dom';
import iconBlog from '../../../../assets/icon-blog.png';
import iconYoutube from '../../../../assets/icon-youtube.png';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-sns-link'>
        <a
          href='https://blog.naver.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={iconBlog} />
        </a>
      </div>
      <div className='sidebar-sns-link'>
        <a
          href='https://www.youtube.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={iconYoutube} />
        </a>
      </div>
      <div className='sidebar-inquiries'>
        <Link to='/support/inquiries'>
          <h4>견적문의</h4>
        </Link>
      </div>
      <div className='sidebar-contact-number'>
        <h4>대표번호</h4>
        <p>00-0000-0000</p>
      </div>
    </div>
  );
}

export default Sidebar;
