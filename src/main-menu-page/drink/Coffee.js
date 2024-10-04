import { useEffect, useState } from "react";
import { coffee } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";



const Coffee = ()=>{


    const [coffeeMenu, setCoffeeMenu] = useState([]);


    useEffect(()=>{
        setCoffeeMenu(coffee())
    },[]);

    return(
        <div>
            {coffeeMenu.map(coffee => <DrinkMenu key={coffee.menuCode} drinkMenu={coffee}/>)}
        </div>
    )

}

export default Coffee;