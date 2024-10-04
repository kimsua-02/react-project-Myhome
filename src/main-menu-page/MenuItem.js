import { Link } from "react-router-dom";


export const DrinkMenu = ({drinkMenu}) =>{

    return(
        
        <Link to={`/drinkMenu/${drinkMenu.code}`}>
            <div className="DrinkMenuItem">
                <ul>{drinkMenu.detail.image}</ul>
                <ul>{drinkMenu.menuName}</ul>
                <ul>{drinkMenu.menuPrice}</ul>
            </div>
        </Link>
    )
}


export const DessertMenu = ({dessertMenu}) =>{

    return(

        <Link to={`/dessertMenu/${dessertMenu.code}`}>
            <div className="DessertMenuItem">
                <ul>{dessertMenu.menuName}</ul>
                <ul>{dessertMenu.menuPrice}</ul>
            </div>
        </Link>
    )
}