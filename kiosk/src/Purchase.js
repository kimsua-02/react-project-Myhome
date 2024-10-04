/*
 * Purchase.js
 * 결제 페이지
 * 포인트 적립 / 사용, 각종 페이, 카드 결제, 기프티콘 및 상품권 결제 버튼 구현
*/


// 뒤로 가기 -> ExtraShot.js 로 넘어감 (키오스크 결제 화면에서 다른 메뉴를 추가할 시 뒤로 가기 위함.)
// 결제 화면 맨 상단에 " 결제수단 선택" 글자 나오게 구현

// 포인트 적립/사용 버튼 크게 생성, 할인 버튼도 포인트 버튼과 같은 크기로 제작

// 결제 기능 구현 (결제 수단)
// 네이버 페이 / 카카오페이 / 카드 / 울랄라 ~ 페이 ~ 

// [ 기프티콘 / 상품권 ] 버튼 크게 생성. 버튼 클릭 시 깊티 바코드를 사용할 수 있게 구현.
// 기프티콘 => 바코드, QR코드

// 결제 수단 버튼 클릭 시 포인트 적립, 사용 선택하는 네비바..? 나오게 구현.

// const Purchase = () => {
//     const [payment, setPayment] = useState('');

//     const handleBack = () => {
//         // 결제수단 선택 페이지에서 뒤로가기 버튼 클릭시 제대로 되고 있는 콘솔 창으로 확인.
//         console.log("뒤로가기");
//     }

//     const handlePointUsage = () => {
//         // 포인트 사용 / 적립이 잘 동작되는 지 콘솔창으로 확인.
//         console.log("포인트 사용 / 적립");
//         history.pushState('/');
//     }

//     const handleDiscount = () => {
//         // 할인 적용 로직 구현이 잘 되는 지 확인하는 콘솔창.
//         console.log("할인 적용");
//     }

//     const handlePaymentSelection = (paymentMethod) => {
//         setPayment(paymentMethod);
//         console.log(`${paymentMethod} 선택됨`);
//     };

//     const PaymentPage = () => {
//         const { paymentMethod } = useParams();
//         const history = useHistory;
//     }


//     return (
//         <div>
//             <button onClick={handleBack}>뒤로가기</button>
//             <h2>[결제수단]</h2><hr/>
//             <p>{paymentMethod} 결제 기능이 구현되었습니다.</p>

//             <button onClick={handlePointUsage}>포인트 적립 / 사용</button>
//             <button onClick={handleDiscount}>할인</button>

//             <div>
//                 <h3>결제 수단 선택</h3>
//                 <Link to="/payment/네이버페이"><button onClick={() => handlePaymentSelection('네이버페이')}>네이버페이</button></Link>
//                 <Link to="/payment/카카오페이"><button onClick={() => handlePaymentSelection('카카오페이')}>카카오페이</button></Link>
//                 <Link to="/payment/카드"><button onClick={() => handlePaymentSelection('카드')}>카드</button></Link>
//                 <Link to="/payment/페이코"><button onClick={() => handlePaymentSelection('페이코')}>페이코</button></Link>
//             </div>

//             {payment && <p>선택된 결제 수단 : {payment}</p>}
//         </div>
//     )
// };

// export default Purchase;


import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
    const name = prompt("이름을 입력하세요:");
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

      <button onClick={() => alert('기프티콘/상품권 기능은 아직 구현되지 않았습니다.')}>기프티콘/상품권</button>
    </div>
  );
};



export default Purchase;
