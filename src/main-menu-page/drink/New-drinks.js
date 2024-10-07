import { useEffect, useState } from "react";
import { newdrinks } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";



const NewDrinks = ()=>{


    const [newDrinksMenu, setNewDrinksMenu] = useState([]);


    useEffect(()=>{
        setNewDrinksMenu(newdrinks())
    },[]);

    return(
        <div>
            {newDrinksMenu.map(newDrinks => <DrinkMenu key={newDrinks.menuCode} drinkMenu={newDrinks}/>)}
        </div>
    )

}

export default NewDrinks;