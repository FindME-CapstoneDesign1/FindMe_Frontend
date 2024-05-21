import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MainPage.css';
import Loading from '../loading/Loading';

const MainPage = () => {
  const [data, setData] = useState({ foundItemCount: 0, notFoundItemCount: 0 });
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        // 백엔드 API 호출
        axios.get('http://localhost:8080/main')
            .then(response => {
                setData(response.data);
                setLoading(false); // 데이터 로딩 완료 후 로딩 상태 업데이트
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // 오류 발생 시에도 로딩 상태 업데이트
            });
    }, []);

    if (loading) {
      return <Loading />; // 로딩 중일 때 로딩 컴포넌트를 표시합니다.
  }

  return (
    <div className="main-container">
      <div className="background-overlay">
        <div className="what-is-findme">
          <h1>" FindME "</h1>
          <p>FindME는 공공데이터포털에서 제공되는 유실물 데이터 조회 API를 사용하여 FindME 자체 DB에 2달간의 데이터를 저장 중 입니다.<br />
          유실물 관련 법령 확인은 "LOST112" 를 통해 확인 가능합니다.</p>
        </div>
        <div className="to-search-filter">
          <Link to="/search" className="anim-button">나의 잃어버린 물건 찾아보기</Link>
        </div>
        <div className="data-display">
        <div className="data-item">
            <h2>주인 품으로 돌아간 물품</h2>
            <p>{data.foundItemCount.toLocaleString()}</p>
          </div>
          <div className="data-item">
            <h2>주인을 기다리는 물품</h2>
            <p>{data.notFoundItemCount.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

