import {Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Search(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");
    
    const [data, setData] = useState('');

    const baseUrl = "http://localhost:8080";
    
    useEffect(()=>{
        springDataSet();
    },[])

    

    async function springDataSet(){
        await axios
        .get(baseUrl + "/product/search?id="+id)
        .then((res)=>{
            console.log(res);
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return(
        <div>
        <h2>
            Search 화면 구현
            <div>
                {JSON.stringify(data)}
            </div>
        </h2>
        <div>
            <Link to = "/">
                돌아가기
            </Link>
        </div>
        </div>
    );
}

export default Search;