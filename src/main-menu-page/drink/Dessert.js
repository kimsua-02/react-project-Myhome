import { useEffect, useState } from "react";
import { dessert } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";



const Dessert = ()=>{


    const [dessertMenu, setDessertMenu] = useState([]);


    useEffect(()=>{
        setDessertMenu(dessert())
    },[]);

    return(
        <div>
            {dessertMenu.map(dessert => <DrinkMenu key={dessert.menuCode} drinkMenu={dessert}/>)}
        </div>
    )

}

export default Dessert;