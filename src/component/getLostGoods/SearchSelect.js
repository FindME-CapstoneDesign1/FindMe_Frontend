import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function SearchSelect(){
    let history = useHistory();

    const goToSearchWithDate = () => {
        history.push('/search-with-date');
    };

    const goToSearchWithPlace = () => {
        history.push('/search-with-place');
    };
    
    return (
        <div>
            <div>
                searchSelect 화면 구현
            </div>
            <div>
                <button onClick={goToSearchWithDate}>
                    날자로 조회하기</button>
                <button onClick={goToSearchWithPlace}>
                    분실한 위치로 조회하기</button>
            </div>
            <div>
                <Link to = "/">
                    돌아가기
                </Link>
            </div>
        </div>

    );
}