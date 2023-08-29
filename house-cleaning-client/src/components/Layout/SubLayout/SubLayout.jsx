import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import preparation from '../../../assets/slide2.jpg';
import iconHome from '../../../assets/icon-home.png';
import iconDownArrow from '../../../assets/icon-down-arrow.png';
import './SubLayout.css';

const menuMapping = {
  "about": {
    name: "회사소개",
    subMenus: new Map([
      ["greeting", "인사말"],
      ["history", "연혁"],
      ["directions", "오시는길"],
    ])
  },
  "service-info": {
    name: "서비스소개",
    subMenus: new Map([
      ["service-overview", "서비스개요"],
      ["service-process", "프로세스"],
      ["expected-outcomes", "기대효과"],
    ])
  },
  "gallery": {
    name: "공사갤러리",
    subMenus: new Map([
      ["service-cases", "서비스사례"],
      ["reviews", "서비스후기"],
      ["related-news", "관련소식"],
    ])
  },
  "support": {
    name: "고객문의",
    subMenus: new Map([
      ["announcements", "공지사항"],
      ["faq", "자주묻는질문"],
      ["inquiries", "온라인문의"],
    ])
  },
}

function SubLayout({ children }) {
  // 라우터 주소로부터 현재 메뉴의 주소명 분리하기
  const location = useLocation();
  const menuAddresses = location.pathname.split('/');
  const mainMenuAddress = menuAddresses[1];
  const subMenuAddress = menuAddresses[2] + (location.hash ? location.hash : '');

  // 메뉴의 한글명 찾기
  const mainMenuName = menuMapping[mainMenuAddress].name;
  const currentSubMenuName = menuMapping[mainMenuAddress].subMenus.get(subMenuAddress);
  const subMenuNames = menuMapping[mainMenuAddress].subMenus;

  // 메뉴 선택을 위한 상태 Hook
  const [ isHovered, setIsHovered ] = useState(false);

  return (
    <div className='sub-layout'>
      <img
        src={preparation}
        alt='preparation'
        className='sub-layout-image'
      />
      <div className='nav-menu'>
        <Link to='/' className='nav-item'>
          <img 
            src={iconHome}
            alt='icon-home'
            className='nav-item-img'
          />
        </Link>
        <div className='nav-item'>
          <div className='nav-item-name'>{mainMenuName}</div>
        </div>
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='nav-item'
        >
          <div className='nav-current-menu'>{currentSubMenuName}</div>
          {isHovered && (
            <div className='nav-other-menus'>
              {Array.from(subMenuNames.entries()).map(([key, subMenuName], index) => {
                if (subMenuName !== currentSubMenuName) {
                  return (
                    <Link
                      to={`/${mainMenuAddress}/${key}`}
                      key={index}
                      className='nav-other-menu'
                    >
                      {subMenuName}
                    </Link>
                  );
                }
                // 조건에 부합하지 않는 경우 아무것도 렌더링하지 않음
                return null;
              })}
            </div>
          )}
          <img 
            src={iconDownArrow}
            alt='icon-arrow-down'
            className='nav-item-img'
          />
        </div>
        <div className="right-space"></div>
      </div>
      {children}
    </div>
  );
}

export default SubLayout;
