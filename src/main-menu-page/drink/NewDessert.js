import { useEffect, useState } from "react";
import { newDessert } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";



const NewDessert = ()=>{


    const [newDessertMenu, setNewDessertMenu] = useState([]);


    useEffect(()=>{
        setNewDessertMenu(newDessert())
    },[]);

    return(
        <div>
            {newDessertMenu.map(newDessert => <DrinkMenu key={newDessert.menuCode} drinkMenu={newDessert}/>)}
        </div>
    )

}

export default NewDessert;