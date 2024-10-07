
/**
 * Purchase.js
 * 결제 페이지
 * 포인트 적립 / 사용, 각종 페이, 카드 결제, 기프티콘 및 상품권 결제 버튼 구현
*/

// 뒤로 가기 -> ExtraShot.js 로 넘어감 (키오스크 결제 화면에서 다른 메뉴를 추가할 시 뒤로 가기 위함.)
// 결제 화면 맨 상단에 " 결제수단 선택" 글자 나오게 구현


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
  const [totalPrice, setTotalPrice] = useState(10000);
  const [pointFormVisible, setPointFormVisible] = useState(false);
  const [points, setPoints] = useState('');

  const applyDiscount = () => {
    const discount = totalPrice * 0.05;
    const newPrice = totalPrice - discount;
    setTotalPrice(newPrice);
    alert(`5% 할인 적용! 새로운 결제 금액: ${newPrice.toFixed(2)} 원`);
  };

  const submitPoints = (isEarning) => {
    const name = prompt("포인트를 사용/적립 하실 회원님의 성함을 입력하세요:");
    alert(`${name}님, ${points} 포인트가 ${isEarning ? '적립' : '사용'}되었습니다.`);
    setPointFormVisible(false);
    setPoints('');
  };

  return (
    <div>
      <button onClick={() => setCurrentComponent('Main')}>뒤로 가기</button>
      <h2>결제 수단</h2>
      <button onClick={() => setPointFormVisible(true)}>포인트 적립/사용</button>
      <button onClick={applyDiscount}>할인</button>

      {pointFormVisible && (
        <div>
          <input
            type="radio"
            name="point-action"
            onChange={() => submitPoints(true)}
            checked
          /> 적립
          <input
            type="radio"
            name="point-action"
            onChange={() => submitPoints(false)}
          /> 사용
          <input
            type="text"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            placeholder="포인트 입력"
          />
          <button onClick={() => submitPoints(true)}>확인</button>
        </div>
      )}

      <h3>결제 금액: {totalPrice.toFixed(2)} 원</h3>
      <div>
        <button onClick={() => alert('네이버페이로 결제합니다.')}>네이버페이</button>
        <button onClick={() => alert('카카오페이로 결제합니다.')}>카카오페이</button>
        <button onClick={() => alert('카드로 결제합니다.')}>카드</button>
        <button onClick={() => alert('페이코로 결제합니다.')}>페이코</button>
      </div>

      <button onClick={() => alert('기프티콘/상품권 사용은 불가능합니다.')}>기프티콘/상품권</button>
    </div>
  );
};



export default Purchase;
