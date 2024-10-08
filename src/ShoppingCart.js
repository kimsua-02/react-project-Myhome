import { useEffect, useState, useReducer } from "react";



const ShoppingCart = ( {cart = [], setCart} ) => {
    const [itemCounts, setItemCounts] = useState({});

    console.log(cart)
    console.log('setCart is:', typeof setCart);

    const handleRemove = (menuCode) => {
        const newCart = cart.filter((menu)=>menu.menuCode !== menuCode);
        console.log(newCart);
        setCart(newCart);
        setItemCounts((prevCounts) => {
            const newCounts = {...prevCounts};
            delete newCounts[menuCode];
            return newCounts;
        });
    }

    const handleCountChange = (menuCode, newCount) => {
        setItemCounts((prevCounts) => ({
            ...prevCounts,
            [menuCode]: newCount,
        }));

    };

    const totalPrice = cart.reduce((acc,menu) => {
        const count = itemCounts[menu.menuCode] || 0;
        const pricePerItem = menu.finalTotalPrice || menu.menuPrice;
        return acc + pricePerItem * count;
    }, 0);


    return(
      <>
        <h1>장바구니</h1>
        <div>
            {cart.length > 0 ? (cart.map(menu => (
               <MenuItem key = {menu.menuCode} menu={menu} onRemove={handleRemove} onCountChange={handleCountChange}
               setCart={setCart}/>
            ))
        ) : (
            <span>선택한 커피가 없습니다.</span>
        )}
        </div>
        <h2>총 가격: {totalPrice}원</h2>
      </>      
    );
}

const MenuItem = ({menu, onRemove, setCart, onCountChange}) => {
    console.log('setCart is:', typeof setCart);
    const [count, setCount] = useState(0);

    const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(menu.menuCode, newCount);
};
    const decrement = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    onCountChange(menu.menuCode, newCount);
    };


    const reset = () => {
            setCount(0);
            onCountChange(menu.menuCode, 0);
    };

    const pricePerItem = menu.finalTotalPrice || menu.menuPrice; 

    return (
        <div>
            <li>{menu.menuName}</li>
            <div style={{ display : "flex", alignItems: "center", gap: "5px"}}>
                <button onClick={increment}>+</button>
                <h3>{count}</h3>
                <button onClick={decrement}>-</button>
            </div>
            <button onClick={reset}>초기화</button>
            <h3>{pricePerItem * count}원 (단가: {pricePerItem}원)</h3>
            <button onClick={() => onRemove(menu.menuCode)}>삭제</button>
        </div>
    );
};


export default ShoppingCart;
/*
 * ShoppingCart.js
 * 장바구니
 * 메인 메뉴 좌측 하단에서 동작할 기능으로,
 * 메인메뉴와 상세정보에서 선택한 정보를 취합하여 최종적으로 주문할 항목 출력
 */