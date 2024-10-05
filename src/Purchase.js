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
  const [earnedPoints, setEarnedPoints] = useState(0);

  const applyDiscount = () => {
    const price = parseFloat(totalPrice);
    if (isNaN(price) || price <= 0) {
      alert("유효한 결제 금액을 입력하세요.");
      return;
    }
    const discount = price * 0.05;
    const newPrice = price - discount;
    setTotalPrice(newPrice.toFixed(2));
    alert(`5% 할인 적용! 새로운 결제 금액: ${newPrice.toFixed(2)} 원`);
  };

  const handlePointAction = (isEarning) => {
    const name = prompt("회원님의 성함을 입력해주세요 : ");
    const price = parseFloat(totalPrice);

    if (isEarning) {
      const earned = price * 0.05;
      setEarnedPoints(prev => prev + earned);
      alert(`${name}님, ${earned.toFixed(2)} 포인트가 적립되었습니다.`);
    } else {
      const use = parseFloat(prompt("사용할 포인트 수를 입력해주세요: "));
      if (use > earnedPoints) {
        alert("보유 포인트가 부족합니다.");
      } else {
        const newTotal = price - use;
        setTotalPrice(newTotal.toFixed(2));
        setEarnedPoints(prev => prev - use);
        alert(`${name}님, ${use} 포인트가 사용되었습니다.`);
      }
    }
    setPointFormVisible(false);
  };

  const completePayment = () => {
    alert("결제가 완료되었습니다. 2초 후에 첫화면으로 돌아갑니다.");
    setTimeout(() => {
      setTotalPrice('');
      setEarnedPoints(0);
      setPointFormVisible(false);
      setCurrentComponent('Main');
    },2000); // 2초 후에 첫 화면으로 돌아감.
  };

  return (
    <div>
      <button onClick={() => setCurrentComponent('Main')}>뒤로 가기</button>
      <h2>결제 수단</h2>
      <input
        type="number"
        value={totalPrice}
        onChange={(e) => setTotalPrice(e.target.value)}
        placeholder="결제 금액 입력"
      />
      <button onClick={() => setPointFormVisible(true)}>포인트 적립/사용</button>
      <button onClick={applyDiscount}>할인</button>

      {pointFormVisible && (
        <div>
          <input
            type="radio"
            name="point-action"
            onChange={() => handlePointAction(true)}
          /> 적립
          <input
            type="radio"
            name="point-action"
            onChange={() => handlePointAction(false)}
          /> 사용
          <button onClick={() => setPointFormVisible(false)}>취소</button>
        </div>
      )}

      <h3>결제 금액: {parseFloat(totalPrice).toFixed(2)} 원</h3>
      <h3>보유 포인트: {earnedPoints.toFixed(2)} 포인트</h3>
      <div>
        <button onClick={completePayment}>네이버페이</button>
        <button onClick={completePayment}>카카오페이</button>
        <button onClick={completePayment}>카드</button>
        <button onClick={completePayment}>페이코</button>
      </div>

      <button onClick={() => alert('기프티콘/상품권 기능은 아직 구현되지 않았습니다.')}>기프티콘/상품권</button>
    </div>
  );
};

export default Purchase;
