// src/components/Loading.js
import React from 'react';
import './Loading.css'; // CSS 파일을 임포트합니다.

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <div className="loading-text">Loading...</div>
        </div>
    );
};

export default Loading;
