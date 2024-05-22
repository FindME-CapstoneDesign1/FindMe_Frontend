// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import './SearchPage.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// // 지역 및 카테고리, 장소 선택 데이터
// const locations = [
//   { name: '서울특별시', code: 'LCA000' },
//   { name: '경기도', code: 'LCI000' },
//   { name: '부산광역시', code: 'LCT000' },
//   { name: '인천광역시', code: 'LCV000' },
//   { name: '대구광역시', code: 'LCR000' },
//   { name: '광주광역시', code: 'LCQ000' },
//   { name: '대전광역시', code: 'LCS000' },
//   { name: '울산광역시', code: 'LCU000' },
//   { name: '경상남도', code: 'LCJ000' },
//   { name: '경상북도', code: 'LCK000' },
//   { name: '충청남도', code: 'LCN000' },
//   { name: '충청북도', code: 'LCO000' },
//   { name: '전라남도', code: 'LCL000' },
//   { name: '전라북도', code: 'LCM000' },
//   { name: '강원도', code: 'LCH000' },
//   { name: '세종특별자치시', code: 'LCW000' },
//   { name: '제주특별자치도', code: 'LCP000' }
// ];

// const mainCategories = [
//   '휴대폰',
//   '지갑',
//   '가방',
//   '카드',
//   '쇼핑백',
//   '선택지에 없어요'
// ];

// const additionalCategories = [
//   '귀금속',
//   '도서용품',
//   '서류',
//   '산업용품',
//   '스포츠용품',
//   '악기',
//   '유가증권',
//   '의류',
//   '자동차',
//   '증명서',
//   '컴퓨터',
//   '현금',
//   '기타물품',
//   '유류품'
// ];

// const foundPlaces = [
//   '공공기관',
//   '공항',
//   '기차',
//   '기타',
//   '노상',
//   '놀이공원',
//   '백화점/매장',
//   '버스',
//   '불상',
//   '상점',
//   '영화관',
//   '우체국(통)',
//   '유원지',
//   '음식점(업소포함)',
//   '주택',
//   '지하철',
//   '직접입력',
//   '택시',
//   '학교',
//   '회사'
// ];

// const etcOptions = [
//   { name: '선택 장소만 조회', value: '0' },
//   { name: '기타 장소도 함께 조회', value: '1' }
// ];

// const SearchPage = () => {
//   const [form, setForm] = useState({
//     nfdlctcd: '',
//     placekeyword: '',
//     productCategory: '',
//     foundPlace: '',
//     ymd: '',
//     etc: ''
//   });

//   const [showAdditionalCategories, setShowAdditionalCategories] = useState(false);
//   const [showKeywordInput, setShowKeywordInput] = useState(false);
//   const [keywordEntered, setKeywordEntered] = useState(false);
//   const [selectedButton, setSelectedButton] = useState(null);

//   const history = useHistory();

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleDateChange = (date) => {
//     setForm({
//       ...form,
//       ymd: date ? date.toISOString().split('T')[0] : ''
//     });
//   };

//   const handleKeywordChange = (e) => {
//     handleChange(e);
//     if (e.target.value) {
//       setKeywordEntered(true);
//     } else {
//       setKeywordEntered(false);
//     }
//   };

//   const handleCategoryClick = (category) => {
//     if (category === '선택지에 없어요') {
//       setShowAdditionalCategories(true);
//       setForm({ ...form, productCategory: '' });
//     } else {
//       setShowAdditionalCategories(false);
//       setForm({ ...form, productCategory: category });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const queryParams = new URLSearchParams(form).toString();
//     history.push(`/find/1?${queryParams}`);
//   };

//   return (
//     <div className="search-page">
//       <form onSubmit={handleSubmit}>
//         <h2>어느 지역에서 잃어버리셨나요?</h2>
//         <select name="nfdlctcd" value={form.nfdlctcd} onChange={handleChange}>
//           <option value="">지역 선택</option>
//           {locations.map(loc => (
//             <option key={loc.code} value={loc.code}>{loc.name}</option>
//           ))}
//         </select>

//         {form.nfdlctcd && (
//           <>
//             <h2>잃어버린 물건의 종류를 알려주세요!</h2>
//             <div className="button-group">
//               {mainCategories.map(cat => (
//                 <button
//                   type="button"
//                   key={cat}
//                   className={form.productCategory === cat ? 'selected' : ''}
//                   onClick={() => handleCategoryClick(cat)}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//             {showAdditionalCategories && (
//               <select name="productCategory" value={form.productCategory} onChange={handleChange}>
//                 <option value="">카테고리 선택</option>
//                 {additionalCategories.map(cat => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             )}
//           </>
//         )}


//         {form.productCategory && (
//           <>
//             <h2>잃어버린 장소가 어디인가요?</h2>
//             <p>잘 모르시겠다면, "모르겠음"을 선택해 주세요!</p>
//             <select name="foundPlace" value={form.foundPlace} onChange={handleChange}>
//               <option value="">항목 선택</option>
//               {foundPlaces.map(place => (
//                 <option key={place} value={place}>{place}</option>
//               ))}
//             </select>
//           </>
//         )}

//         {form.foundPlace && (
//           <>
//             <h2>잃어버린 날짜가 기억나시나요?</h2>
//             <DatePicker
//               selected={form.ymd ? new Date(form.ymd) : null}
//               onChange={handleDateChange}
//               dateFormat="yyyy-MM-dd"
//               placeholderText="날짜 선택"
//             />
//           </>
//         )}

//         {form.ymd && (
//           <>
//             <h2>습득 위치를 정확히 알 수 없는 물품도 조회 할까요?</h2>
//             <p>"기타 장소도 함께 조회"를 선택하시면, "기타", "노상", "불상"의 검색 결과가 포함되어 원하는 물건을 찾기 어려울 수 있습니다.</p>
//             <select name="etc" value={form.etc} onChange={handleChange}>
//               <option value="">기타 선택</option>
//               {etcOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.name}</option>
//               ))}
//             </select>
//           </>
//         )}
//         {form.etc && (
//           <>
//             <h2>위치나 장소에 대한 키워드를 포함해서 검색할까요?</h2>
//             <div className="button-group">
//               <button
//                 type="button"
//                 className={selectedButton === 'yes' ? 'selected' : ''}
//                 onClick={() => {
//                   setShowKeywordInput(true);
//                   setSelectedButton('yes');
//                   setKeywordEntered(false); // 초기화
//                 }}
//               >
//                 예
//               </button>
//               <button
//                 type="button"
//                 className={selectedButton === 'no' ? 'selected' : ''}
//                 onClick={() => {
//                   setShowKeywordInput(false);
//                   setKeywordEntered(true); // '아니오'를 선택하면 바로 Search 버튼이 보이게 설정
//                   setSelectedButton('no');
//                   setForm({ ...form, placekeyword: '' }); // 입력된 키워드를 빈 값으로 설정
//                 }}
//               >
//                 아니오
//               </button>
//             </div>
//           </>
//         )}

//         {showKeywordInput && (
//           <>
//             <p>예시: "에버랜드", "잠실역"</p>
//             <input type="text" name="placekeyword" placeholder="Place Keyword" value={form.placekeyword} onChange={handleKeywordChange} />
//           </>
//         )}

//         {(selectedButton === 'no' || keywordEntered) && <button type="submit">Search</button>}
//       </form>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchPage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// 지역 및 카테고리, 장소 선택 데이터
const locations = [
  { name: '서울특별시', code: 'LCA000' },
  { name: '경기도', code: 'LCI000' },
  { name: '부산광역시', code: 'LCT000' },
  { name: '인천광역시', code: 'LCV000' },
  { name: '대구광역시', code: 'LCR000' },
  { name: '광주광역시', code: 'LCQ000' },
  { name: '대전광역시', code: 'LCS000' },
  { name: '울산광역시', code: 'LCU000' },
  { name: '경상남도', code: 'LCJ000' },
  { name: '경상북도', code: 'LCK000' },
  { name: '충청남도', code: 'LCN000' },
  { name: '충청북도', code: 'LCO000' },
  { name: '전라남도', code: 'LCL000' },
  { name: '전라북도', code: 'LCM000' },
  { name: '강원도', code: 'LCH000' },
  { name: '세종특별자치시', code: 'LCW000' },
  { name: '제주특별자치도', code: 'LCP000' }
];

const mainCategories = [
  '휴대폰', '지갑', '가방', '카드', '쇼핑백', '선택지에 없어요'
];

const additionalCategories = [
  '귀금속', '도서용품', '서류', '산업용품', '스포츠용품', '악기',
  '유가증권', '의류', '자동차', '증명서', '컴퓨터', '현금', '기타물품', '유류품'
];


const foundPlaces = {
  '대중교통': ['공항', '기차', '버스', '지하철', '택시'],
  '공공장소': ['공공기관', '우체국(통)', '유원지', '학교', '놀이공원'],
  '상업시설': ['백화점/매장', '상점', '영화관', '음식점(업소포함)', '회사'],
  '주거지': ['주택'],
  '기타': ['기타', '노상', '불상']
};

const placeEtc = [
  { name: '선택 장소만 조회', value: '0' },
  { name: '기타 장소도 함께 조회', value: '1' }
];

const itemEtc = [
  { name: '선택 물품 카테고리만 조회', value: '0' },
  { name: '기타 물품도 함께 조회', value: '1' }
]

const SearchPage = () => {
  const [form, setForm] = useState({
    nfdlctcd: '',
    placekeyword: '',
    productCategory: '',
    foundPlaceCategory: '',
    foundPlace: '',
    ymd: '',
    placeEtc: '',
    itemEtc: '0'
  });

  const [showKeywordInput, setShowKeywordInput] = useState(false);
  const [keywordEntered, setKeywordEntered] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [showAdditionalCategories, setShowAdditionalCategories] = useState(false);

  const history = useHistory();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date) => {
    setForm({
      ...form,
      ymd: date ? date.toISOString().split('T')[0] : ''
    });
  };

  const handleKeywordChange = (e) => {
    handleChange(e);
    if (e.target.value) {
      setKeywordEntered(true);
    } else {
      setKeywordEntered(false);
    }
  };

  const handleCategoryClick = (category) => {
    if (category === '선택지에 없어요') {
      setShowAdditionalCategories(true);
      setForm({
        ...form,
        productCategory: ''
      });
    } else {
      setForm({
        ...form,
        productCategory: category
      });
      setShowAdditionalCategories(false);
    }
  };
  const handleFoundPlaceCategoryChange = (e) => {
    const { value } = e.target;
    setForm({
      ...form,
      foundPlaceCategory: value,
      foundPlace: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(form).toString();
    history.push(`/find/1?${queryParams}`);
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSubmit}>
        <h2>어느 지역에서 잃어버리셨나요?</h2>
        <select name="nfdlctcd" value={form.nfdlctcd} onChange={handleChange}>
          <option value="">지역 선택</option>
          {locations.map(loc => (
            <option key={loc.code} value={loc.code}>{loc.name}</option>
          ))}
        </select>

        {form.nfdlctcd && (
          <>
            <h2>잃어버린 물건의 종류를 알려주세요!</h2>
            <div className="button-group">
              {mainCategories.map(cat => (
                <button
                  type="button"
                  key={cat}
                  className={form.productCategory === cat ? 'selected' : ''}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            {showAdditionalCategories && (
              <select name="productCategory" value={form.productCategory} onChange={handleChange}>
                <option value="">카테고리 선택</option>
                {additionalCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            )}

            {form.productCategory && (
              <>
                <h2>잃어버린 물건의 종류에 대한 선택 사항</h2>
                <select name="itemEtc" value={form.itemEtc} onChange={handleChange}>
                  <option value="">선택</option>
                  {itemEtc.map(option => (
                    <option key={option.value} value={option.value}>{option.name}</option>
                  ))}
                </select>
              </>
            )}
          </>
        )}

        {form.productCategory && (
          <>
            <h2>잃어버린 장소가 어디인가요?</h2>
            {/* <p>잘 모르시겠다면, "모르겠음"을 선택해 주세요!</p> */}
            <select name="foundPlaceCategory" value={form.foundPlaceCategory} onChange={handleFoundPlaceCategoryChange}>
              <option value="">장소 유형 선택</option>
              {Object.keys(foundPlaces).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {form.foundPlaceCategory && (
              <select name="foundPlace" value={form.foundPlace} onChange={handleChange}>
                <option value="">장소 선택</option>
                {foundPlaces[form.foundPlaceCategory].map(place => (
                  <option key={place} value={place}>{place}</option>
                ))}
              </select>
            )}
          </>
        )}

        {form.foundPlace && (
          <>
            <h2>잃어버린 날짜가 기억나시나요?</h2>
            <DatePicker className='datePicker'
              selected={form.ymd ? new Date(form.ymd) : null}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="날짜 선택"
            />
          </>
        )}

        {form.ymd && (
          <>
            <h2>습득 위치를 정확히 알 수 없는 물품도 조회 할까요?</h2>
            <p>"기타 장소도 함께 조회"를 선택하시면, "기타", "불상"의 검색 결과가 포함됩니다.</p>
            <select name="placeEtc" value={form.placeEtc} onChange={handleChange}>
              <option value="">기타 선택</option>
              {placeEtc.map(option => (
                <option key={option.value} value={option.value}>{option.name}</option>
              ))}
            </select>
          </>
        )}

        {form.placeEtc && (
          <>
            <h2>위치나 장소에 대한 키워드를 포함해서 검색할까요?</h2>
            <div className="button-group">
              <button
                type="button"
                className={selectedButton === 'yes' ? 'selected' : ''}
                onClick={() => {
                  setShowKeywordInput(true);
                  setSelectedButton('yes');
                  setKeywordEntered(false); // 초기화
                }}
              >
                예
              </button>
              <button
                type="button"
                className={selectedButton === 'no' ? 'selected' : ''}
                onClick={() => {
                  setShowKeywordInput(false);
                  setKeywordEntered(true); // '아니오'를 선택하면 바로 Search 버튼이 보이게 설정
                  setSelectedButton('no');
                  setForm({ ...form, placekeyword: 'none' }); // 입력된 키워드를 빈 값으로 설정
                }}
              >
                아니오
              </button>
            </div>
          </>
        )}

        {showKeywordInput && (
          <>
            <p>예시: "에버랜드", "잠실역", "서초"</p>
            <input type="text" name="placekeyword" placeholder="Place Keyword" value={form.placekeyword} onChange={handleKeywordChange} />
          </>
        )}
        <div className='search-button'>
        {keywordEntered && <button>Search</button>}
        </div>
        
      </form>
    </div>
  );
};

export default SearchPage;
