import {Link, useLocation, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import "../css/Search.module.css"


function SearchWithPlaceApi(){
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);


    const START_YMD = queryParams.get("START_YMD");
    const END_YMD = queryParams.get("END_YMD");
    const place = queryParams.get("DEP_PLACE");
    const selectedSubcategory = queryParams.get("PRDT_NM");
    const pageNo = queryParams.get("pageNo");
    const numOfRows = queryParams.get("numOfRows");
    const [placeData, setPlaceData] = useState('');
    const [loading, setLoading] = useState(true);

    const baseUrl = "http://localhost:8080";
    
    useEffect(()=>{
        springFindWithPlaceDataSet();
    },[])

    async function springFindWithPlaceDataSet(){
        setLoading(true);
        await axios
        .post(baseUrl + "/api-find-with-place?DEP_PLACE="+place.toString()+"&PRDT_NM="+selectedSubcategory.toString()+"&pageNo="+pageNo+"&numOfRows="+numOfRows+"&START_YMD="+START_YMD+"&END_YMD="+END_YMD)
        .then((res)=>{
            console.log(res);
            setPlaceData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        setLoading(false);
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    }

    // const goToDetailPage = (atcId) => {
    //     history.push("/api-info?ATC_ID="+atcId); // 상세 페이지의 경로로 이동합니다. 경로는 예시이며 실제 경로로 변경해야 합니다.
    // };
    
    return(
        <div>
            <div>
            {loading ? <Loading /> : null}
            </div> 
            <table>
                <thead>
                    <tr>
                        <th>습득물 게시제목</th>
                        <th>관리 ID</th>
                        <th>습득 일자</th>
                        <th>보관 장소</th>
                        <th>물품 분류 명</th>
                        <th>색상명</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(placeData) ? (placeData.map(item => (
                        <tr key={item.atcId} >
                            <td>{item.fdSbjt}</td>
                            <td>{item.atcId}</td>
                            <td>{formatDate(item.fdYmd)}</td>
                            <td>{item.depPlace}</td>
                            <td>{item.prdtClNm}</td>
                            <td>{item.clrNm}</td>
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

export default SearchWithPlaceApi;