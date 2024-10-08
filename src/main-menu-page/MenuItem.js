import { Link } from "react-router-dom";


// 음료
export const DrinkMenu = ({drinkMenu}) =>{

    return(
        
        <Link to={`/menu/${drinkMenu.menuCode}`}>
            <div className="DrinkMenuItem">
                <img src={`/images/${drinkMenu.menuCode}.jpg`} alt={`${drinkMenu.menuName}`}/>
                <h4>{drinkMenu.menuName}</h4>
                <ul>{drinkMenu.menuPrice}원</ul>
            </div>
        </Link>
    )
}


//디저트
export const DessertMenu = ({dessertMenu}) =>{

    return(

        <Link to={`/menu/${dessertMenu.menuCode}`}>
            <div className="DessertMenuItem">
            <img src={`/images/${dessertMenu.menuCode}.jpg`} alt={`${dessertMenu.menuName}`}/>
                <h4>{dessertMenu.menuName}</h4>
                <ul>{dessertMenu.menuPrice}원</ul>
            </div>
        </Link>
    )
}