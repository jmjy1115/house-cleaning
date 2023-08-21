import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

function MenuItem({ title, menuNumber, subMenuItems }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="main-menu"
    >
      <Link to={`/main/${menuNumber}/sub/1`}>{title}</Link>
      {isHovered && <SubMenu items={subMenuItems} mainMenuNumber={menuNumber} />}
    </div>
  );
}

function SubMenu({ items, mainMenuNumber }) {
  return (
    <div className="sub-menu">
      {items.map((item, index) => (
        <Link to={`/main/${mainMenuNumber}/sub/${index + 1}`} key={index}>{item}</Link>
      ))}
    </div>
  );
}

export default MenuItem;