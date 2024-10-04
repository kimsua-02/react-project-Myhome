<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Point = () => {
  const [isok, setIsok] = useState(false);
  const [phoneInput, setPhoneInput] = useState("");
  const [message, setMessage] = useState("");
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  // 고객 데이터를 서버에서 가져옴
  useEffect(() => {
    fetch('http://localhost:3001/customers')  // Express 서버에서 데이터를 가져옴
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching customer data:', error));
  }, []);

  // 포인트 적립 처리 함수
  const pointAccrual = (customer) => {
    const updatedPoints = customer.points + 10; // 포인트 10 적립

    // 서버에 포인트 업데이트 요청 (PATCH)
    fetch(`http://localhost:3001/customers/${customer.phone}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ points: updatedPoints }),
    })
      .then((response) => response.json())
      .then((updatedCustomer) => {
        setMessage(`${updatedCustomer.name}님, 포인트가 적립되었습니다! 현재 포인트: ${updatedCustomer.points}`);
        
        // 상태 업데이트
        setCustomers((prevCustomers) =>
          prevCustomers.map((cust) =>
            cust.phone === updatedCustomer.phone ? updatedCustomer : cust
          )
        );
      })
      .catch((error) => console.error('Error updating customer points:', error));
  };

  // 적립하기 버튼 클릭 시 포인트 적립 처리
  const pointPlus = () => {
    if (phoneInput.length >= 10) {
      const foundCustomer = customers.find((customer) => customer.phone === phoneInput);
      if (foundCustomer) {
        pointAccrual(foundCustomer);  // 포인트 적립 함수 호출
      } else {
        setMessage("해당 번호로 등록된 고객을 찾을 수 없습니다.");
      }
    } else {
      setMessage("정확한 전화번호를 입력하세요.");
    }
  };

  return (
    <div>
      {!isok ? (
        <div>
          <h2>포인트 적립하시겠습니까?</h2>
          
          <button onClick={() => setIsok(true)}>네</button>
          <button onClick={() => navigate("/purchase")}>아니오</button>
        </div>
      ) : (
        <div>
          <h2>전화번호를 입력하세요</h2>
          <div>
            <input value={phoneInput} placeholder='번호 입력' readOnly />
            <div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ].map((num) => (
                <button key={num} onClick={() => setPhoneInput(phoneInput + num)}>
                  {num}
                </button>
              ))}
            </div>
            <div>
              <button onClick={() => setPhoneInput(phoneInput.slice(0, -1))}>삭제</button>
              <button onClick={pointPlus}>포인트 적립</button>
            </div>
          </div>
          <br />
          <button onClick={() => navigate("/purchase")}>적립없이 결제하기</button>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
>>>>>>> 07259ddbb8ca9f3e0694a0e1fe5216ab6fae75cc
};