import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { getMenuDetail } from "./main-menu-page/MenuAPI";
import { ExtraIce, ExtraShot, ExtraSugar, ExtraTopping } from "./option/Option";

const MenuDetail = ({addCart, totalPrice, setTotalPrice, extraMenu, setExtraMenu}) => {


    const navigate = useNavigate();

    const {menuCode} = useParams();

    const [menu, setMenu] = useState({
        menuName : '',
        menuPrice : 0,
        detail : {description:'', image:''}
    });

    // const [extraMenu,setExtraMenu] = useState([{  //추가메뉴(샷,휘핑)
    //     addOption : '',
    //     price : 0
    // }]);




    useEffect(() => {
        const menuDetail = getMenuDetail(menuCode);
       
        setMenu(menuDetail);
    
    },[menuCode]);


    const handleOptionSelect = (option, price) => {
        setExtraMenu(([
            ...extraMenu,
            {
            addOption: option,
            price: price
            }
        ]));
        setTotalPrice(prevTotalPrice => prevTotalPrice + price)
    };

    const options= extraMenu.map(option => 
        (
            <>
                <li>{option.option}</li>
                <li>{option.price}</li>
            </>

        )
    )
    
    const onClickHandler = () => {
        addCart({
            ...menu,
            extraMenu
        });
        return {options}
    };



    
    const onClickHandler2 = () => {
        navigate(`/idle`);
    }

    return(
        <>
            <h2>선택하신 상품의 옵션상품을 모두 선택해주세요</h2>
            
            
            {menu.menuName ? (
                <>
            <img src={menu.detail.image} style={{maxWidth:300}} alt={menu.menuName}/>
            <h3>{menu.menuName}</h3>
            <h3>{menu.menuPrice}원</h3>
            <p>{menu.detail.description}</p>
                </>
            ) : (
                <p>메뉴를 불러오는 중 입니다..</p>
            )}
            <button onClick={onClickHandler}>주문담기</button><button onClick={onClickHandler2}>취소</button>
            {<ExtraShot extraMenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            {<ExtraSugar extraMenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            {<ExtraIce extraMenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            {<ExtraTopping extraMenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            <h3>총 가격: {totalPrice+menu.menuPrice}원</h3>
            <button onClick={onClickHandler}>주문담기</button>
            <button onClick={onClickHandler2}>취소</button>
        </>
    );
}

export default MenuDetail;

/*
 * ExtraShot.js
 * 상세정보 페이지
 * 각각의 음료에 대한 상세 옵션 추가(샷 추가 등)
 * 동작 완료 후 확인(담기) 버튼 클릭 시 메인 메뉴로 이동
 * 및 장바구니에 추가한 옵션까지 출력되도록 구현할 것
 */