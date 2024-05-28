import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className='footer-box'>
        <div className='footer-text'>
          <p>
            <span>Dankook univ Computer Engineering CapstoneDesign</span><br/>
            <span>Contact us : 32184682@dankook.ac.kr</span><br/>
            <a href="https://github.com/FindME-CapstoneDesign1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>&copy; 2024 FindME. All rights reserved.</span>
            
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
