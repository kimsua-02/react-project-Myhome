import { useEffect, useState } from "react";
import { coffee } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";
import ShoppingCart from "../../ShoppingCart";



const Coffee = ({cart})=>{


    const [coffeeMenu, setCoffeeMenu] = useState([]);


    useEffect(()=>{
        setCoffeeMenu(coffee())
    },[]);

    return(
        <div>
            {coffeeMenu.map(coffee => <DrinkMenu key={coffee.menuCode} drinkMenu={coffee}/>)}
            
                    {/*장바구니 출력*/} 
            <ShoppingCart cart= {cart} />
       </div>
    )

}

export default Coffee;