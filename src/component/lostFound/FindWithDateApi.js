import {Link, useLocation, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import "../css/Search.module.css"

export default function FindWithDateApi(){
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const pageNo = queryParams.get("pageNo");
    const numOfRows = queryParams.get("numOfRows");    
    const PRDT_CL_CD_01 = queryParams.get("PRDT_CL_CD_01");
    const PRDT_CL_CD_02 = queryParams.get("PRDT_CL_CD_02");
    const CLR_CD = queryParams.get("CLR_CD");
    const START_YMD = queryParams.get("START_YMD");
    const END_YMD = queryParams.get("END_YMD");
    const N_FD_LCT_CD = queryParams.get("N_FD_LCT_CD");

    
    const [data, setData] = useState('');

    const [loading, setLoading] = useState(true);

    const baseUrl = "http://localhost:8080";
    
    useEffect(()=>{
        springDataSet();
    },[])

    

    async function springDataSet(){
        setLoading(true);
        await axios
        .post(baseUrl + "/api-find-with-date?" + "START_YMD="+START_YMD+"&END_YMD="+END_YMD+"&PRDT_CL_CD_01="+PRDT_CL_CD_01+"&PRDT_CL_CD_02="+PRDT_CL_CD_02+"&CLR_CD="+CLR_CD+"&pageNo="+pageNo+"&numOfRows="+numOfRows+"&N_FD_LCT_CD="+N_FD_LCT_CD)
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
                        <th>습득 제품명</th>
                        <th>습득 장소</th>
                        <th>습득 특이 사항</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) ? (data.map(item => (
                        <tr key={item.atcId} onClick={() => goToDetailPage(item.atcId)}>
                            <td>{item.fdPrdtNm}</td>
                            <td>{item.depPlace}</td>
                            <td>{item.fdSbjt}</td>
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

 