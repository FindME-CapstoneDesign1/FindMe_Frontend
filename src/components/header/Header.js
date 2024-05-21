import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // 헤더 CSS 파일 임포트

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <div className="text-stone-900 custom-font">
            <Link to="/">FindME</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
