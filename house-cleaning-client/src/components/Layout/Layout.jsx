import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem/MenuItem";
import companyLogo from "../../assets/company-logo.jpeg";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="container">
      <div className='header'>
        <Link to="/" className="company-logo">
          <img src={companyLogo} alt="company-logo" />
          <h4>HOUSE CLEANING</h4>
        </Link>
        <div className='top-menu'>
          <MenuItem
            title={ "회사소개" }
            mainAddress={ "about" }
            subMenuItems={[ "인사말", "연혁", "오시는길" ]}
            subAddresses={[ "greeting", "history", "directions" ]}
          />
          <MenuItem
            title={ "서비스소개" }
            mainAddress={ "service-info" }
            subMenuItems={[ "서비스개요", "프로세스", "기대효과" ]}
            subAddresses={[ "service-overview", "service-process", "expected-outcomes" ]}
          />
          <MenuItem
            title={ "갤러리" }
            mainAddress={ "gallery" }
            subMenuItems={[ "서비스사례", "서비스후기", "관련소식" ]}
            subAddresses={[ "service-cases", "reviews", "related-news" ]}
          />
          <MenuItem
            title={ "고객센터" }
            mainAddress={ "support" }
            subMenuItems={[ "공지사항", "자주묻는질문", "온라인문의" ]}
            subAddresses={[ "announcements", "faq", "inquiries" ]}
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
