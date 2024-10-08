import { useEffect, useState } from "react";
import { hotCoffee, iceCoffee } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";
import ShoppingCart from "../../ShoppingCart";




export const HotCoffee = ({cart})=>{

    const [coffeeMenu, setCoffeeMenu] = useState([]);


    useEffect(()=>{
        setCoffeeMenu(hotCoffee())
    },[]);

    return(
        <div>
            {coffeeMenu.map(hotCoffee => <DrinkMenu key={hotCoffee.menuCode} drinkMenu={hotCoffee}/>)}
            <ShoppingCart cart= {cart} />
       </div>
    )

}



export const IceCoffee = ({cart}) => {

    const [coffeeMenu, setCoffeeMenu] = useState([]);

    useEffect(()=>{
        setCoffeeMenu(iceCoffee())
    },[]);

    return(
        <div>
            {coffeeMenu.map(iceCoffee => <DrinkMenu key={iceCoffee.menuCode} drinkMenu={iceCoffee}/>)}
            <ShoppingCart cart= {cart} />
       </div>
    )
}