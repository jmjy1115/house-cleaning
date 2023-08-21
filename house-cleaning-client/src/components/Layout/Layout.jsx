import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="container">
      <div className='header'>
        <a href="https://www.naver.com" className="company-logo">
          <img src="/company-logo.jpeg" alt="company-logo" />
          <h2>HOUSE CLEANING</h2>
        </a>
        <div className='top-menu'>
          <MenuItem
            title={ "회사소개" }
            menuNumber={ 1 }
            subMenuItems={[ "인사말", "연혁", "오시는길" ]}
          />
          <MenuItem
            title={ "서비스소개" }
            menuNumber={ 2 }
            subMenuItems={[ "서비스개요", "프로세스", "기대효과" ]}
          />
          <MenuItem
            title={ "갤러리" }
            menuNumber={ 3 }
            subMenuItems={[ "서비스사례", "서비스후기", "관련소식" ]}
          />
          <MenuItem
            title={ "고객센터" }
            menuNumber={ 4 }
            subMenuItems={[ "공지사항", "자주 묻는 질문", "온라인문의" ]}
          />
          <div className="main-menu">(전체)</div>
        </div>
      </div>
      {children}
      <div className="footer">
      </div>
    </div>
  );
}

export default Layout;