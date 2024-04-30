import {Link, useLocation, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";
import "../css/Search.module.css"


function SearchWithPlaceApi(){
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const place = queryParams.get("LST_PLACE");
    const selectedSubcategory = queryParams.get("LST_PRDT_NM");
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
        .post(baseUrl + "/api-with-place?LST_PLACE="+place.toString()+"&LST_PRDT_NM="+selectedSubcategory.toString()+"&pageNo=1&numOfRows=10")
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
                        <th>관리ID</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) ? (data.map(item => (
                        <tr key={item.atcId} onClick={() => goToDetailPage(item.atcId)}>
                            <td>{item.lstPrdtNm}</td>
                            <td>{item.lstPlace}</td>
                            <td>{item.lstSbjt}</td>
                            <td>{item.atcId}</td>
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