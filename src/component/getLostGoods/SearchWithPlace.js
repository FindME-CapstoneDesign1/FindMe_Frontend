import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Button from '@mui/material/Button';
import {Link, useHistory} from "react-router-dom";


export default function Lost() {
  const categories = {
    가방: ['여성용가방', '남성용가방', '기타가방'],
    귀금속: ['반지','목걸이', '귀걸이', '시계','기타'],
    도서용품: ['학습서적', '소설','컴퓨터서적','만화책','기타서적'],
    서류: ['서류','기타물품'],
    산업용품:['기타물품'],
    쇼핑백:['쇼핑백'],
    스포츠용품:['스포츠용품'],
    악기:['건반악기','관악기','타악기','현악기','기타악기'],
    유가증권:['어음','상품권','채권','기타'],
    의류:['여성의류','남성의류','아기의류','모자','신발','기타의류'],
    자동차:['자동차열쇠','네비게이션','자동차번호판','임시번호판','기타용품'],
    전자기기:['태블릿','스마트워치','무선이어폰','카메라','기타용품'],
    지갑:['여성용 지갑','남성용 지갑','기타 지갑'],
    증명서:['신분증','면허증','여권','기타'],
    컴퓨터:['삼성노트북','LG노트북','애플노트북','기타'],
    카드:['신용(체크)카드','일반카드','기타카드'],
    현금:['현금','수표','외화','기타'],
    휴대폰:['삼성휴대폰','아이폰','LG휴대폰','기타휴대폰','기타통신기기'],
    기타물품: ['안경', '선글라스','매장문화재','기타'],
    유류품: ['유류품']
  };

  const history = useHistory();

  const [place, setPlace] = useState('');
  
  const [selectedCategory, setSelectedCategory] = useState('가방');
  const [selectedSubcategory, setSelectedSubcategory] = useState(categories['가방'][0]);
  
  const handleCategoryChange = (e) => {
          const category = e.target.value;
      setSelectedCategory(category);
      setSelectedSubcategory(categories[category][0]);
  };
  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };
  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handleSubmit = () => {

    
    
    const endpoint = "api-with-place?LST_PLACE="+place.toString()+"&LST_PRDT_NM="+selectedSubcategory.toString()+"&pageNo=1&numOfRows=50";

    history.push(endpoint);
  };

  return (
    <div>
    <div>
        <label htmlFor="placeInput">장소:</label>
        <input
          id="placeInput"
          type="text"
          value={place}
          onChange={handlePlaceChange}
        />
      </div>
    
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {Object.keys(categories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
        {categories[selectedCategory].map((subcategory) => (
          <option key={subcategory} value={subcategory}>
            {subcategory}
          </option>
        ))}
      </select>
    </div>
    <Button variant="contained" onClick={handleSubmit}>
        Submit
    </Button>
    <div>
      <Link to = "/">
        돌아가기
      </Link>
    </div>
    <div>
    <button onClick={() => history.goBack()}>뒤로 돌아가기</button>
    </div>
    
    </div>
  );
}
