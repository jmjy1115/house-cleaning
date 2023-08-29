import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

function MenuItem({ title, mainAddress, subMenuItems, subAddresses }) {
  const [ isHovered, setIsHovered ] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="main-menu"
    >
      <Link to={`/${mainAddress}/${subAddresses[0]}`}>
        {title}
      </Link>
      {isHovered && (
        <SubMenu 
          items={subMenuItems} 
          mainAddress={mainAddress} 
          subAddresses={subAddresses} 
        />
      )}
    </div>
  );
}

function SubMenu({ items, mainAddress, subAddresses }) {
  return (
    <div className="sub-menu">
      {items.map((item, index) => (
        <Link
          to={`/${mainAddress}/${subAddresses[index]}`} 
          key={index}
          className="sub-item"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

export default MenuItem;
