import {Link, useLocation, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import "../css/Search.module.css"


function SearchInfoApi(){
    let history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const ATC_ID = queryParams.get("ATC_ID");
    
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const baseUrl = "http://localhost:8080";
    
    useEffect(()=>{
        springDataSet();
    },[])

    async function springDataSet(){
        setLoading(true);
        await axios
        .post(baseUrl + "/api-info?" + "ATC_ID="+ATC_ID)
        .then((res)=>{
            console.log(res);
            setData(res.data);
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
        setLoading(false);
    }
    
    return(
        <div>
            <div>
            {loading ? <Loading /> : null}
            </div> 
            <div>
                {data.lstFilePathImg ? (
                    <img src={data.lstFilePathImg} alt="설명" style={{ maxWidth: "100%", height: "auto" }} />
                ) : (
                <p>이미지가 없습니다.</p>
                )}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>물품명</th>
                        <th>분실장소구분명</th>
                        <th>기관전화번호</th>
                        <th>기관명</th>
                        <th>기관ID</th>
                        <th>게시제목</th>
                        <th>분실지역명</th>
                        <th>특이사항</th>
                        <th>분실물 상태명</th>
                        <th>물품 분류명</th>
                        <th>분실 장소</th>
                        <th>분실 시간</th>
                        <th>분실 일자</th>
                        <th>관리 ID</th>
                    </tr>
                </thead>
                <tbody>    
                    <td>{data.lstPrdtNm}</td>
                    <td>{data.lstPlaceSeNm}</td>
                    <td>{data.tel}</td>
                    <td>{data.orgNm}</td>
                    <td>{data.orgId}</td>
                    <td>{data.lstSbjt}</td>
                    <td>{data.lstLctNm}</td>
                    <td>{data.uniq}</td>
                    <td>{data.lstSteNm}</td>
                    <td>{data.prdtClNm}</td>
                    <td>{data.lstPlace}</td>
                    <td>{data.lstHor}</td>
                    <td>{data.lstYmd}</td>
                    <td>{data.atcId}</td>
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

export default SearchInfoApi;