import React from 'react';
import iconBlog from '../../../../assets/icon-blog.png';
import iconYoutube from '../../../../assets/icon-youtube.png';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-contents'>
        <div className='footer-info'>
          <span>하우스크리닝</span>
          <span>대표이사: 홍길동</span>
          <span>사업자등록번호: 000-00-00000</span>
          <span>이메일: abc@abc.com</span></div>
        <div className='footer-contact'>
          <span>전화: 00-0000-0000</span>
          <span>팩스: 00-0000-0000</span></div>
        <div className='footer-address'>
          <span>주소: 00시 00구 00로 00, 000동 000호</span>
        </div>
      </div>
      <div className='footer-sns-link'>
        <a
          href='https://blog.naver.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={iconBlog} alt='naver-blog'/>
        </a>
        <a
          href='https://www.youtube.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={iconYoutube} alt='youtube'/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
