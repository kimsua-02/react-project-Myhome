import cupons from "../json/coupon.json";

export function detailCupon(code){
   return  cupons.filter(item =>item.cuponCode===code)[0];
}

