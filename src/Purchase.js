
const Purchase = () => {
    const [payment, setPayment] = useState('');

    const handleBack = () => {
        // 결제수단 선택 페이지에서 뒤로가기 버튼 클릭시 제대로 되고 있는 콘솔 창으로 확인.
        console.log("뒤로가기");
    }

    const handlePointUsage = () => {
        // 포인트 사용 / 적립이 잘 동작되는 지 콘솔창으로 확인.
        console.log("포인트 사용 / 적립");
    }

    const handleDiscount = () => {
        // 할인 적용 로직 구현이 잘 되는 지 확인하는 콘솔창.
        console.log("할인 적용");
    }

    const handlePaymentSelection = (paymentMethod) => {
        setPayment(paymentMethod);
        console.log(`${paymentMethod} 선택됨`);
    };


    return (
        <div>
            <button onClick={handleBack}>뒤로가기</button>
            <h2>[결제수단]</h2><hr/>

            <button onClick={handlePointUsage}>포인트 적립 / 사용</button>
            <button onClick={handleDiscount}>할인</button>

            <div>
                <h3>결제 수단 선택</h3>
                <button onClick={() => handlePaymentSelection('네이버페이')}>네이버페이</button>
                <button onClick={() => handlePaymentSelection('카카오페이')}>카카오페이</button>
                <button onClick={() => handlePaymentSelection('카드')}>카드</button>
                <button onClick={() => handlePaymentSelection('페이코')}>페이코</button>
            </div>

            {payment && <p>선택된 결제 수단 : {payment}</p>}
        </div>
    )
};

export default Purchase;

