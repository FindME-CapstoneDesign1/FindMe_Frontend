import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import './ResultsPage.css';
import Loading from '../loading/Loading';

const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { page } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [totalResults, setTotalResults] = useState(0);

  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const springSearch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8080/search/${page}`, {
        params: {
          nfdlctcd: query.get('nfdlctcd'),
          placekeyword: query.get('placekeyword'),
          productCategory: query.get('productCategory'),
          foundPlace: query.get('foundPlace'),
          ymd: query.get('ymd'),
          placeEtc: query.get('placeEtc'),
          itemEtc: query.get('itemEtc')
        }
      });
      setResults(res.data.items);
      setTotalResults(res.data.totalResults);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [page, query]);

  useEffect(() => {
    springSearch();
  }, [springSearch]);

  if (loading) {
    return (<Loading />);
  }

  const handleItemClick = (atcid) => {
    history.push(`/info/${atcid}`);
  };

  const handleBackToSearch = () => {
    history.push('/search');
  };

  return (
    <div className="results-page">
      <button className='back-button' onClick={handleBackToSearch}>검색으로 돌아가기</button>
      <h1>검색 결과</h1>
      {results.length === 0 ? (
        <div className="no-results">
        <img src={`${process.env.PUBLIC_URL}/images/noResult.png`} alt="No results" className="empty-image"/>
        <p>검색결과가 없습니다! 다시 검색하시겠습니까?</p>
        <button onClick={handleBackToSearch}>검색으로 돌아가기</button>
      </div>
      ) : (
        <>
          <p>{totalResults}개의 검색결과</p>
          <div className="results-table">
            <ul>
              {results.map((item) => (
                <li key={item.atcId} onClick={() => handleItemClick(item.atcId)}>
                  <div className='a'>
                    <img src={item.fdFilePathImg} alt={item.fdPrdtNm} />
                  </div>
                  <div className='b'>
                    <h2>{item.fdPrdtNm}</h2>
                  </div>
                  <div className='info'>
                    <p>보관 장소: {item.depPlace}</p>  
                    <p>습득 일자: {new Date(item.fdYmd).toLocaleDateString()}</p>  
                    <p>습득 위치: {item.fdPlace}</p>  
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="pagination">
            {parseInt(page) > 1 && (
              <a
                href={`/search/${parseInt(page) - 1}${location.search}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/find/${parseInt(page) - 1}${location.search}`;
                }}
              >
                &lt; Previous
              </a>
            )}
            <a
              href={`/search/${parseInt(page) + 1}${location.search}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/find/${parseInt(page) + 1}${location.search}`;
              }}
            >
              Next &gt;
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultsPage;
