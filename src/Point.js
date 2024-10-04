/**
 * Point.js
 * 포인트 적립 
 */
import { useEffect, useState } from "react";
import point from "../json/user.json";
import NumberPad from "./NumberPad";
import { useNavigate } from "react-router-dom";

export const Point = () => {
    const [user, setUser] = useState({});
    const [isOk, setIsOk] = useState(false); // 포인트 적립 여부 상태

    const navigate = useNavigate();


    // 포인트 적립 여부 확인 핸들러
    const clickOk = () => {
        setIsOk(true);
    };

    const clickNo = () => {
        setIsOk(false);
        alert('포인트 적립이 취소되었습니다.');
        navigate("/purchase")
  
    };

    useEffect(() => {
        setUser(point); // 사용자 정보를 가져옵니다.
    }, []);
   
    return (
        <>
            <h2>포인트 적립</h2>
            {!isOk ? (
                <>
                    <p>포인트 적립하시겠습니까?</p>
                    <button onClick={clickOk}>네</button>
                    <button onClick={clickNo}>아니오</button>
                </>
            ) : (
                <NumberPad
                    originalPhone={user.phone}
                    name={user.name}
                    originalPoint={user.point}
                />
            )}
        </>
    );
};