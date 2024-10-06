/*
 * Purchase.js
 * 결제 페이지
 * 포인트 적립 / 사용, 각종 페이, 카드 결제, 기프티콘 및 상품권 결제 버튼 구현
*/


import React, { useState } from 'react';
import earnedPoints from 'react';

const Purchase = () => {
  const [currentComponent, setCurrentComponent] = useState('Main');
  const [earnedPoints, setEarnedPoints] = useState(0); // 포인트 상태를 Purchase 컴포넌트에서 관리

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Main':
        return <MainComponent setCurrentComponent={setCurrentComponent} />;
      case 'Payment':
        return (
          <PaymentComponent 
            setCurrentComponent={setCurrentComponent} 
            earnedPoints={earnedPoints} // 포인트를 Payment 컴포넌트에 전달
            setEarnedPoints={setEarnedPoints} // 포인트 업데이트 함수 전달
          />
        );
      case 'PointAction':
        return (
          <PointActionComponent 
            setCurrentComponent={setCurrentComponent} 
            setEarnedPoints={setEarnedPoints} // 포인트 상태 변경 함수 전달
          />
        );
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

const PaymentComponent = ({ setCurrentComponent, earnedPoints, setEarnedPoints }) => {
  const [totalPrice, setTotalPrice] = useState('');

  const applyDiscount = () => {
    const price = parseFloat(totalPrice);
    if (isNaN(price) || price <= 0) {
      alert("유효한 결제 금액을 입력하세요.");
      return;
    }
    const discount = price * 0.05; // 5% 할인
    const newPrice = price - discount;
    setTotalPrice(newPrice.toFixed(2));
    alert(`5% 할인 적용! 새로운 결제 금액: ${newPrice.toFixed(2)} 원`);
  };

  const completePayment = (method) => {
    alert(`${method}로 결제가 완료되었습니다. 확인을 누르시면 2초 후에 첫화면으로 돌아갑니다.`);
    setTimeout(() => {
      setTotalPrice('');
      setCurrentComponent('Main');
    }, 2000);
  };

  const handlePaymentMethod = (method) => {
    const userConfirmed = window.confirm("포인트 사용/적립을 하시겠습니까?");
    if (userConfirmed) {
      setCurrentComponent('PointAction');
    } else {
      completePayment(method);
    }
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
      <button onClick={applyDiscount}>할인</button>
      <h3>결제 금액: {parseFloat(totalPrice).toFixed(2)} 원</h3>
      <h3>보유 포인트: {earnedPoints.toFixed(2)} 포인트</h3>
      <div>
        <button onClick={() => handlePaymentMethod("네이버페이")}>네이버페이</button>
        <button onClick={() => handlePaymentMethod("카카오페이")}>카카오페이</button>
        <button onClick={() => handlePaymentMethod("카드")}>카드</button>
        <button onClick={() => handlePaymentMethod("페이코")}>페이코</button>
      </div>
      <button onClick={() => alert('기프티콘/상품권 기능은 아직 구현되지 않았습니다.')}>기프티콘/상품권</button>
    </div>
  );
};

const PointActionComponent = ({ setCurrentComponent, setEarnedPoints }) => {
  const [totalPrice, setTotalPrice] = useState('');

  const applyPoints = (isEarning) => {
    const price = parseFloat(totalPrice);
    const name = prompt("회원님의 성함을 입력해주세요 : ");

    if (isEarning) {
      const earned = price * 0.05;
      setEarnedPoints(prev => prev + earned); // 포인트 적립
      alert(`${name}님, ${earned.toFixed(2)} 포인트가 적립되었습니다.`);
    } else {
      const use = parseFloat(prompt("사용할 포인트 수를 입력해주세요 : "));
      if (use > earnedPoints) {
        alert("보유 포인트가 부족합니다.");
      } else {
        const newTotal = price - use;
        setTotalPrice(newTotal.toFixed(2));
        setEarnedPoints(prev => prev - use); // 포인트 사용
        alert(`${name}님, ${use} 포인트가 사용되었습니다.`);
      }
    }
    setCurrentComponent('Payment'); // 포인트 작업 후 결제 화면으로 돌아감
  };

  return (
    <div>
      <h2>포인트 사용/적립</h2>
      <button onClick={() => applyPoints(true)}>포인트 적립</button>
      <button onClick={() => applyPoints(false)}>포인트 사용</button>
      <button onClick={() => setCurrentComponent('Payment')}>취소</button>
    </div>
  );
};

export default Purchase;
