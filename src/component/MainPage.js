import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./css/MainPage.css"
import { useState, useEffect } from "react";
export default function MainPage(){



    return(
        <div className="mainFrame">
            <div className="subframe">
                <div className="innerFrame">

                    <div className="menu">
                        <div className="menubox">

                        </div>
                        <div className="paddingbox">

                        </div>
                        <div className="loginbox">
                            <Link to="/login" 
                            className="clickbox"> 
                                <div className="logintxt">
                                    Login
                                </div>

                            </Link>

                        </div>

                    </div>

                    <div className="info">
                        <div className="infoTextFrame">
                            <div className="Heading1">
                                <div className="infotxt1">
                                무언가를 간절히 찾고 있나요?
                                </div>
                            </div>
                            <div className="Heading2">
                                <div className="infotxt2">
                                지금 FindME를 사용 해 보세요.
                                </div>
                            </div>
                        </div>
                        <div className="plainText">
                            <div className="useapi">
                                Lost112 API를 사용하여 정보를 조회합니다.
                            </div>
                            <div className="useapi">
                                추가적인 탐색 옵션을 제공하여 보다 쉽게 해당 물품을 특정할 수 있습니다.
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <Link to="/find-with-place" className="bt2frame">
                                <div className="bt2box">
                                    <div className="getitem">
                                    습득물 조회하기
                                    </div>
                                </div>                                
                            </Link>
                            <Link to="/search-select" className="bt1frame">
                                <div className="bt1box">
                                    <div className="wantfind">
                                    분실물 조회하기
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="image">
                    </div>
                </div>
            </div>
        </div>
    );
}