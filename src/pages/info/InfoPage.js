import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import './InfoPage.css';
import Loading from '../loading/Loading';

const InfoPage = () => {
  const { atcid } = useParams();
  const [item, setItem] = useState(() => {
    const savedItem = localStorage.getItem(`item_${atcid}`);
    return savedItem ? JSON.parse(savedItem) : null;
  });
  const [loading, setLoading] = useState(!item);
  const history = useHistory();
  const apiKey = process.env.REACT_APP_KAKAO_API_KEY;
  const [coords, setCoords] = useState({ lat: 37.49676871972202, lng: 127.02474726969814 }); //eslint-disable-line no-unused-vars
  const [XandY, setXandY] = useState({ lat: 37.49676871972202, lng: 127.02474726969814 });

  const springInfoData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8080/info/${atcid}`);
      setItem(res.data);
      localStorage.setItem(`item_${atcid}`, JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [atcid]);

  useEffect(() => {
    if (!item) {
      springInfoData();
    }
  }, [springInfoData, item]);

  useEffect(() => {
    if (!loading && item) {
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
      script.async = true;
      script.onerror = () => console.error("Failed to load Kakao Maps script.");
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById('map');
          if (!container) {
            console.error('Map container not found');
            return;
          }
          const options = {
            center: new window.kakao.maps.LatLng(37.49676871972202, 127.02474726969814),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          const ps = new window.kakao.maps.services.Places();

          const placesSearchCB = function (data, status, pagination) {
            if (status === window.kakao.maps.services.Status.OK) {
              const newSearch = data[0];
              const coords = {
                lat: parseFloat(newSearch.y),
                lng: parseFloat(newSearch.x),
              };
              setXandY({ lat: parseFloat(newSearch.y), lng: parseFloat(newSearch.x) });
              setCoords(coords);
              console.log('Search Coordinates:', coords);

              new window.kakao.maps.Marker({
                map: map,
                position: new window.kakao.maps.LatLng(coords.lat, coords.lng),
              });

              // 지도의 중심을 마커의 위치로 설정
              map.setCenter(new window.kakao.maps.LatLng(coords.lat, coords.lng));
            } else {
              console.error('Places Search Error:', status);
            }
          };

          ps.keywordSearch(item.depPlace, placesSearchCB);
        });
      };

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [loading, item, apiKey]);

  useEffect(() => {
    console.log('XandY updated:', XandY.lat, XandY.lng);
  }, [XandY]);

  if (loading) {
    return <Loading />;
  }

  if (!item) {
    return <div>No item found</div>;
  }

  const mapLink = `https://map.kakao.com/link/map/${item.depPlace},${XandY.lat},${XandY.lng}`;
  const directionLink = `https://map.kakao.com/link/to/${item.depPlace},${XandY.lat},${XandY.lng}`;

  return (
    <div className="info-page">
      <h1 className="info-header">"{item.fdPrdtNm}"의 상세 정보</h1>
      <button className="back-button" onClick={() => history.goBack()}>돌아가기</button>
      <div className="item-details">
        <div className="item-image">
          <img src={item.fdFilePathImg} alt={item.fdPrdtNm} />
        </div>
        <div className="item-info">
          <p className="info-text">보관 장소: {item.depPlace}</p>
          <p className="info-text">습득 일자: {new Date(item.fdYmd).toLocaleDateString()}</p>
          <p className="info-text">습득 위치: {item.fdPlace}</p>
          <p className="info-text">상태: {item.csteSteNm}</p>
          <p className="info-text">연락처: {item.tel}</p>
          <p className="info-text">특징: {item.uniq}</p>
        </div>
      </div>
      <div className="map-container">
        <div id="map"></div>
      </div>
      <div className="map-buttons">
        <a href={mapLink} target="_blank" rel="noopener noreferrer">
          <button className="map-button">지도 바로가기</button>
        </a>
        <a href={directionLink} target="_blank" rel="noopener noreferrer">
          <button className="map-button">길찾기 바로가기</button>
        </a>
      </div>
      <div className='bottom-box'>
        <button className="bottom-back-button" onClick={() => history.goBack()}>
          목록으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default InfoPage;
