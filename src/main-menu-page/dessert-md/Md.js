import { useEffect, useState } from "react";
import ShoppingCart from "../../ShoppingCart";
import {  MdItem } from "../MenuItem";
import { mdProduct } from "../MenuAPI";




const MdProduct = ({cart})=>{

    const [md, setMd] = useState([]);

    useEffect(()=>{
        setMd(mdProduct())
    },[]);

    return(
        <div>
            {md.map(mdItem => <MdItem key={mdItem.menuCode} mdProduct={mdItem}/>)}
            <ShoppingCart cart= {cart} />
        </div>
    )
}

export default MdProduct;