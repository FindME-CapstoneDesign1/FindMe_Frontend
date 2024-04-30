import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Button from '@mui/material/Button';
import {Link, useHistory} from "react-router-dom";


export default function FindWithDate() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  

  const handleSubmit = () => {
    const startDateString = formatDateToString(startDate);
    const endDateString = formatDateToString(endDate);

    const endpoint = "api-find-with-date?pageNo=1&numOfRows=10&PRDT_CL_CD_01=PRH000&PRDT_CL_CD_02=PRH200&CLR_CD=CL1002&START_YMD="+startDateString+"&END_YMD="+endDateString+"&N_FD_LCT_CD=LCA000";
    history.push(endpoint);
  };

  const formatDateToString = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    return year+month+day;
  };

  return (
    <div>    
    <div className="date-selector">
      {/* 시작일 선택 */}
        <div className="date-picker-container">
            <label>시작일:</label>
            <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="시작일을 선택하세요"
            className="date-picker"
            />
        </div>
      {/* 종료일 선택 */}
        <div className="date-picker-container">
            <label>종료일:</label>
            <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="종료일을 선택하세요"
            className="date-picker"
            />
        </div>
      </div>

    <div>
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
    <div>
      <Link to = "/">
          돌아가기
      </Link>
    </div>
    </div>
  );
}
