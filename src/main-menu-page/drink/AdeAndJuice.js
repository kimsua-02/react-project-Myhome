import { useEffect, useState } from "react";
import { adeAndJuice } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";
import ShoppingCart from "../../ShoppingCart";



const AdeAndJuice = ({cart})=>{


    const [adeAndJuiceMenu, setAdeAndJuiceMenu] = useState([]);


    useEffect(()=>{
        setAdeAndJuiceMenu(adeAndJuice())
    },[]);

    return(
        <div>
            {adeAndJuiceMenu.map(adeAndJuice => <DrinkMenu key={adeAndJuice.menuCode} drinkMenu={adeAndJuice}/>)}
            <ShoppingCart cart={cart} />
        </div>
    )

}

export default AdeAndJuice;