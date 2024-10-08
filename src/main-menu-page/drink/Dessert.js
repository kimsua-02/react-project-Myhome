import { useEffect, useState } from "react";
import { dessert } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";
import cart from '../../ShoppingCart';
import ShoppingCart from '../../ShoppingCart';



const Dessert = ()=>{


    const [dessertMenu, setDessertMenu] = useState([]);


    useEffect(()=>{
        setDessertMenu(dessert())
    },[]);

    return(
        <div>
            {dessertMenu.map(dessert => <DrinkMenu key={dessert.menuCode} drinkMenu={dessert}/>)}
            <ShoppingCart cart= {cart} />
        </div>
    )

}

export default Dessert;