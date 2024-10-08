/*
 * Purchase.js
 * 결제 페이지
 * 포인트 적립 / 사용, 각종 페이, 카드 결제, 기프티콘 및 상품권 결제 버튼 구현
*/



import React, { useState } from 'react';

const Purchase = () => {
  const [currentComponent, setCurrentComponent] = useState('Main');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Main':
        return <MainComponent setCurrentComponent={setCurrentComponent} />;
      case 'Payment':
        return <PaymentComponent setCurrentComponent={setCurrentComponent} />;
      default:
        return <MainComponent setCurrentComponent={setCurrentComponent} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

const MainComponent = ({ setCurrentComponent }) => {
  return (
    <div>
      <button onClick={() => setCurrentComponent('Payment')}>매장</button>
      <button onClick={() => setCurrentComponent('Payment')}>포장</button>
    </div>
  );
};

const PaymentComponent = ({ setCurrentComponent }) => {
  const [totalPrice, setTotalPrice] = useState('');
  const [pointFormVisible, setPointFormVisible] = useState(false);
  const [points, setPoints] = useState('');
  const [isEarning, setIsEarning] = useState(null); // null로 초기화하여 기본 선택 없음

  const handlePriceChange = (e) => {
    setTotalPrice(e.target.value);
  };

  const applyDiscount = () => {
    const price = parseFloat(totalPrice); // 숫자로 변환
    if (isNaN(price)) {
      alert('유효한 결제 금액을 입력하세요.');
      return;
    }
    const discount = price * 0.05;
    const newPrice = price - discount;
    setTotalPrice(newPrice.toFixed(2)); // 숫자를 다시 문자열로 변환하여 저장
    alert(`5% 할인 적용! 새로운 결제 금액: ${newPrice.toFixed(2)} 원`);
  };


  const submitPoints = () => {
    const price = parseFloat(totalPrice);
      if (isNaN(price) || price <= 0){
        alert('유효한 결제 금액을 입력하세요.');
        return;
      }

      // const earnedPoints = isEarning ? (price * 0.05).toFixed(2) : 0;
      // alert(`${earnedPoints} 포인트가 적립되었습니다.`);

      let earnedPoints = 0;
      if (isEarning) {
        earnedPoints = (price * 0.05).toFixed(2);
        alert(`${earnedPoints} 포인트가 적립되었습니다.`);
      } else {
        if(points && !isNaN(points) && points > 0){
          alert(`${points} 포인트가 사용되었습니다.`);
        } else {
          alert('유효한 포인트를 입력하세요.');
          return;
        }
      }

      const finalPrice = price - (isEarning ? earnedPoints : 0);
      alert(`최종 결제 금액 : ${finalPrice.toFixed(2)} 원`);

      setPointFormVisible(false);
      setPoints('');
    };

  return (
    <div>
      <button onClick={() => setCurrentComponent('Main')}>뒤로 가기</button>
      <h2>결제 페이지</h2>

      <input
        type="number"
        value={totalPrice}
        onChange={handlePriceChange}
        placeholder="결제 금액 입력"
      />
      
      <button onClick={() => setPointFormVisible(true)}>포인트 적립/사용</button>
      <button onClick={applyDiscount}>할인</button>

      {pointFormVisible && (
        <div>
          <input
            type="radio"
            name="point-action"
            onChange={() => {
              setIsEarning(true);
              setPoints(''); // 포인트 사용 선택 시 포인트 입력 초기화
            }}
            checked={isEarning === true}
          /> 적립
          <input
            type="radio"
            name="point-action"
            onChange={() => {
              setIsEarning(false);
              setPoints(''); // 포인트 적립 선택 시 포인트 입력 초기화
            }}
            checked={isEarning === false}
          /> 사용
          <input
            type="text"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            placeholder="포인트 입력"
            disabled={isEarning === true} // 적립 선택 시 입력 비활성화
          />
          <button onClick={submitPoints}>확인</button>
        </div>
      )}

      <h3>결제 금액: {totalPrice ? `${parseFloat(totalPrice).toFixed(2)} 원` : '0 원'}</h3>
      <div>
        <button onClick={() => alert('네이버페이로 결제합니다.')}>네이버페이</button>
        <button onClick={() => alert('카카오페이로 결제합니다.')}>카카오페이</button>
        <button onClick={() => alert('카드로 결제합니다.')}>카드</button>
        <button onClick={() => alert('페이코로 결제합니다.')}>페이코</button>
      </div>

      <button onClick={() => alert('기프티콘/상품권 기능은 아직 구현되지 않았습니다.')}>기프티콘/상품권</button>
    </div>
  );
};

export default Purchase;
