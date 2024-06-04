import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // 헤더 CSS 파일 임포트
import { useAuth } from '../auth/AuthContext';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();


  return (
    <header>
      <div className="header-container">
        
          <div className="text-stone-900 custom-font">
            <Link to="/">FindME</Link>
          </div>
        
          <nav className="nav-links">
            <Link to="/search">습득물 검색</Link>
            <Link to="/lost-posts">물건을 잃어버렸어요</Link>
            <Link to="/found-posts">물건을 주웠어요</Link>
          </nav>
        
          <div className="login-button">
          {isLoggedIn ? (
            <>
              <Link to="/mypage">MyPage</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
