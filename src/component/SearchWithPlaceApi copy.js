import {Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import "./css/Search.css"

function SearchWithPlaceApi(){
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
                        <tr key={item.atcId}>
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
        </div>
    );
}

export default SearchWithPlaceApi;