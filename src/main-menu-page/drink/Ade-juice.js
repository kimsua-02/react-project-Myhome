import { useEffect, useState } from "react";
import { adeandjuice } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";
import ShoppingCart from "../../ShoppingCart";



const AdeandJuice = ()=>{


    const [adeandJuiceMenu, setAdeandJuiceMenu] = useState([]);


    useEffect(()=>{
        setAdeandJuiceMenu(adeandjuice())
    },[]);

    return(
        <div>
            {adeandJuiceMenu.map(adeandjuice => <DrinkMenu key={adeandjuice.menuCode} drinkMenu={adeandjuice}/>)}
            {/* <ShoppingCart/> */}
        </div>
    )

}

export default AdeandJuice;