import { useEffect, useState } from "react";
import { tea } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";



const Tea = ()=>{


    const [teaMenu, setTeaMenu] = useState([]);


    useEffect(()=>{
        setTeaMenu(tea())
    },[]);

    return(
        <div>
            {teaMenu.map(tea => <DrinkMenu key={tea.menuCode} drinkMenu={tea}/>)}
        </div>
    )

}

export default Tea;