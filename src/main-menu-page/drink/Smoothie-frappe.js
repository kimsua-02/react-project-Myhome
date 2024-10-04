import { useEffect, useState } from "react";
import { smoothieandfrappe } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";



const SmoothieandFrappe = ()=>{


    const [smoothieandFrappeMenu, setSmoothieandFrappeMenu] = useState([]);


    useEffect(()=>{
        setSmoothieandFrappeMenu(smoothieandfrappe())
    },[]);

    return(
        <div>
            {smoothieandFrappeMenu.map(smoothieandrappe => <DrinkMenu key={smoothieandfrappe.menuCode} drinkMenu={smoothieandfrappe}/>)}
        </div>
    )

}

export default SmoothieandFrappe;