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
  const [currentPage, setCurrentPage] = useState(parseInt(page, 10) || 1);
  const itemsPerPage = 15;

  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const springSearch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8080/search/`, {
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

      // 검색 결과를 localStorage에 저장
      localStorage.setItem('searchResults', JSON.stringify(res.data.items));
      localStorage.setItem('totalResults', JSON.stringify(res.data.totalResults));
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [query]);

  useEffect(() => {
    const cachedResults = localStorage.getItem('searchResults');
    const cachedTotal = localStorage.getItem('totalResults');
    if (cachedResults && cachedTotal) {
      setResults(JSON.parse(cachedResults));
      setTotalResults(JSON.parse(cachedTotal));
      setLoading(false);
    } else {
      springSearch();
    }
  }, [springSearch]);

  const paginate = (array, page_number) => {
    return array.slice((page_number - 1) * itemsPerPage, page_number * itemsPerPage);
  };

  if (loading) {
    return (<Loading />);
  }

  const handleItemClick = (atcid) => {
    const selectedItem = results.find(item => item.atcId === atcid);
    localStorage.setItem(`item_${atcid}`, JSON.stringify(selectedItem));
    history.push(`/info/${atcid}`);
  };

  const handleBackToSearch = () => {
    history.push('/search');
  };

  const paginatedResults = paginate(results, currentPage);

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
              {paginatedResults.map((item) => (
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
            {currentPage > 1 && (
              <a
                href={`/search/${currentPage - 1}${location.search}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(currentPage - 1);
                }}
              >
                &lt; Previous
              </a>
            )}
            {currentPage < Math.ceil(results.length / itemsPerPage) && (
              <a
                href={`/search/${currentPage + 1}${location.search}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(currentPage + 1);
                }}
              >
                Next &gt;
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ResultsPage;
