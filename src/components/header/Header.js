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
          <nav className="nav-links">
            <Link to="/search">습득물 검색</Link>
            <Link to="/lost-posts">물건을 잃어버렸어요</Link>
            <Link to="/found-posts">물건을 주웠어요</Link>
          </nav>


        </div>
    </header>
  );
}

export default Header;
