// src/components/Loading.js
import React from 'react';
import './Loading.css'; // CSS 파일을 임포트합니다.

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <div className="loading-text">Loading...</div>
            <div className="loading-text">10~20초 소요될 것 으로 예측 됩니다. 잠시만 기다려 주세요.</div>
        </div>
    );
};

export default Loading;
