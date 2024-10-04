import { useEffect, useState } from "react";
import { decaffeincoffee } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";



const Decaffein = ()=>{


    const [decaffeinMenu, setDecaffeinMenu] = useState([]);


    useEffect(()=>{
        setDecaffeinMenu(decaffeincoffee())
    },[]);

    return(
        <div>
            {decaffeinMenu.map(decaffein => <DrinkMenu key={decaffein.menuCode} drinkMenu={decaffein}/>)}
        </div>
    )

}

export default Decaffein;