import {BrowserRouter, Route, Routes} from "react-router-dom";
import IdlePage from "./IdlePage";
import ExtraShot from "./ExtraShot";
import ShoppingCart from "./ShoppingCart";
import Redirect from "./Redirect";
import Result from "./Result";
import Layout from "./layout/Layout";
import Coffee from "./main-menu-page/drink/Coffee";
import Tea from "./main-menu-page/drink/Tea";
import AdeandJuice from "./main-menu-page/drink/Ade-juice";
import SmoothieandFrappe from "./main-menu-page/drink/Smoothie-frappe";
import Decaffein from "./main-menu-page/drink/Decaffein";
import NewDrinks from "./main-menu-page/drink/New-drinks";
import Dessert from "./main-menu-page/drink/Dessert";
import NewDessert from "./main-menu-page/drink/New-dessert";
import { useState } from "react";
import { Point } from "./Point";
<<<<<<< HEAD
=======
import ExtraShot from "./ExtraShot";
import ShoppingCart from "./ShoppingCart";

>>>>>>> 44bd55ab3bb3e095e7ef3df56cb0d01e60f2abfc

function App()
{
   const [cart, setCart] = useState([]);

 const addCart = (menuItem) => {
     setCart((prevMenu) => [...prevMenu, menuItem])
  }

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Redirect />} />
        <Route path="/idle" element={<IdlePage />} />
        <Route path="/menu" element={<Layout />}>
          {/* 메뉴별 라우트 설정 */}
          <Route path="hotcoffee" element={<Coffee cart={cart} />} />
          <Route path="icecoffee" element={<Coffee />} />
          <Route path="hottea" element={<Tea />} />
          <Route path="icetea" element={<Tea />} />
          <Route path="ade&juice" element={<AdeandJuice />} />
          <Route path="smoothie&frappe" element={<SmoothieandFrappe />} />
          <Route path="hotdecaf" element={<Decaffein />} />
          <Route path="icedecaf" element={<Decaffein />} />
          <Route path="newdrinks" element={<NewDrinks />} />
          <Route path="dessert" element={<Dessert />} />
          <Route path="newdessert" element={<NewDessert />} />
          <Route path="point" element={<Point />} />
          {/* 추가 메뉴 상세 옵션 */}
          <Route path=":menuCode" element={<ExtraShot addCart={addCart} />} />
=======
        <Route path = "/" element ={<Redirect/>}/>
        <Route path = "/idle" element ={<IdlePage/>}/>
        <Route path="/menu" element={<Layout/>}>
          <Route path="/menu/hotcoffee" element={<Coffee/>} >
            <Route path =":menucode" element={<ExtraShot addCart={addCart}/>}/>
            <Route path="shoppingcart" element={<ShoppingCart cart={cart}/>}/>
         </Route>
                    <Route path="/menu/icecoffee">
            <Route index element={<Coffee/>}/>
          </Route>
          <Route path="/menu/hottea">
            <Route index element={<Tea/>}/>
          </Route>
          <Route path="/menu/icetea">
            <Route index element={<Tea/>}/>
          </Route>
          <Route path="/menu/ade&juice">
            <Route index element={<AdeandJuice/>}/>
          </Route>
          <Route path="/menu/smoothie&frappe">
            <Route index element={<SmoothieandFrappe/>}/>
          </Route>
          <Route path="/menu/hotdecaf">
            <Route index element={<Decaffein/>}/>
          </Route>
          <Route path="/menu/icedecaf">
            <Route index element={<Decaffein/>}/>
          </Route>
          <Route path="/menu/newdrinks">
            <Route index element={<NewDrinks/>}/>
          </Route>
          <Route path="/menu/dessert">
            <Route index element={<Dessert/>}/>
          </Route>
          <Route path="/menu/newdessert">
            <Route index element={<NewDessert/>}/>
          </Route>
          <Route path="/menu/point">
            <Route index element={<Point/>}/>
          </Route>
          <Route path = "/result" element ={<Result/>}/>
>>>>>>> 44bd55ab3bb3e095e7ef3df56cb0d01e60f2abfc
        </Route>
        <Route path="/shoppingcart" element={<ShoppingCart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;