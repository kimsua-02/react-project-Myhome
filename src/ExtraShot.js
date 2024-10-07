import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { getMenuDetail } from "./main-menu-page/MenuAPI";
import { ExtraIce, ExtraShot, ExtraSugar, ExtraTopping } from "./option/Option";

const MenuDetail = ({addCart}) => {


    const navigate = useNavigate();

    const {menuCode} = useParams();

    const [menu, setMenu] = useState({
        menuName : '',
        menuPrice : 0,
        detail : {description:'', image:''}
    });

    const [extraMenu,setExtraMenu] = useState({  //추가메뉴(샷,휘핑)
        option : '',
        totalPrice : 0
    });


    useEffect(() => {
    try {
        const menuDetail = getMenuDetail(menuCode);
        setMenu(menuDetail);
        setExtraMenu(prevState => ({
            ...prevState,
            totalPrice: menuDetail.menuPrice
        }));
    } catch (error) {
        console.error("Failed to fetch menu detail:", error);
    }
    }, [menuCode]);

    const handleOptionSelect = (option, price) => {
        setExtraMenu(prevState => ({
            ...prevState,
            option: option,
            totalPrice: menu.menuPrice + price
    }));
    };

    const onClickHandler = () => {
        addCart({
            ...menu,
            extraMenu
        });
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
            {<ExtraShot extramenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            {<ExtraSugar extramenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            {<ExtraIce extramenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            {<ExtraTopping extramenu = {extraMenu} handleOptionSelect= {handleOptionSelect}/>}
            <h3>총 가격: {extraMenu.totalPrice}원</h3>
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