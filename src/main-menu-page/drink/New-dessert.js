import { useEffect, useState } from "react";
import { newdessert } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";



const NewDessert = ()=>{


    const [newDessertMenu, setNewDessertMenu] = useState([]);


    useEffect(()=>{
        setNewDessertMenu(newdessert())
    },[]);

    return(
        <div>
            {newDessertMenu.map(newDessert => <DrinkMenu key={newDessert.menuCode} drinkMenu={newDessert}/>)}
        </div>
    )

}

export default NewDessert;