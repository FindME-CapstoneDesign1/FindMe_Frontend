import {Link, useLocation, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import "./css/Search.css"

function SearchWithDateApi(){
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const START_YMD = queryParams.get("START_YMD");
    const END_YMD = queryParams.get("END_YMD");
    const PRDT_CL_CD_01 = queryParams.get("PRDT_CL_CD_01");
    const PRDT_CL_CD_02 = queryParams.get("PRDT_CL_CD_02");
    const LST_LCT_CD = queryParams.get("LST_LCT_CD");
    const pageNo = queryParams.get("pageNo");
    const numOfRows = queryParams.get("numOfRows");
    
    const [data, setData] = useState('');

    const [loading, setLoading] = useState(true);

    const baseUrl = "http://localhost:8080";
    
    useEffect(()=>{
        springDataSet();
    },[])

    

    async function springDataSet(){
        setLoading(true);
        await axios
        .post(baseUrl + "/api-with-date?" + "START_YMD="+START_YMD+"&END_YMD="+END_YMD+"&PRDT_CL_CD_01="+PRDT_CL_CD_01+"&PRDT_CL_CD_02="+PRDT_CL_CD_02+"&LST_LCT_CD="+LST_LCT_CD+"&pageNo="+pageNo+"&numOfRows="+numOfRows)
        .then((res)=>{
            console.log(res);
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        setLoading(false);
    }
    
    const goToDetailPage = (atcId) => {
        history.push("/api-info?ATC_ID="+atcId); // 상세 페이지의 경로로 이동합니다. 경로는 예시이며 실제 경로로 변경해야 합니다.
    };

    return(
        <div>
            <div>
            {loading ? <Loading /> : null}
            </div> 
            <table>
                <thead>
                    <tr>
                        <th>분실 제품명</th>
                        <th>분실 장소</th>
                        <th>분실 사항</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) ? (data.map(item => (
                        <tr key={item.atcId} onClick={() => goToDetailPage(item.atcId)}>
                            <td>{item.lstPrdtNm}</td>
                            <td>{item.lstPlace}</td>
                            <td>{item.lstSbjt}</td>
                        </tr>
                    ))) : (<p>Loading...</p>)}
                </tbody>
            </table>
        
            <Link to = "/">
                돌아가기
            </Link>
            <button onClick={() => history.goBack()}>
            뒤로 돌아가기
            </button>
        </div>
    );
}

export default SearchWithDateApi;