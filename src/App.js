import { BrowserRouter, Route, Routes } from "react-router-dom";
import IdlePage from "./IdlePage";
import Redirect from "./Redirect";
import Result from "./Result";
import Layout from "./layout/Layout";
import { HotCoffee, IceCoffee } from "./main-menu-page/drink/Coffee";
import { HotTea, IceTea } from "./main-menu-page/drink/Tea";
import { HotDecaf, IceDecaf } from "./main-menu-page/drink/Decaffein";
import NewDrinks from "./main-menu-page/drink/NewDrinks";
import Dessert from "./main-menu-page/dessert-md/Dessert";
import NewDessert from "./main-menu-page/dessert-md/NewDessert";
import { useState } from "react";
import { Point } from "./Point";
import Purchase from "./Purchase";
import MenuDetail from "./MenuDetail"; 
import ShoppingCart from "./ShoppingCart"; 
import { UserPoint } from "./UserPoint"; 
import { Cupon } from "./Cupon"; 
import AdeAndJuice from "./main-menu-page/drink/AdeAndJuice";
import SmoothieAndFrappe from "./main-menu-page/drink/SmoothieAndFrappe";
import { HotDrinks, IceDrinks } from "./main-menu-page/drink/Drinks";
import MdProduct from "./main-menu-page/dessert-md/Md";

function App() {
  const [cart, setCart] = useState([]);

  const addCart = (menuItem) => {
    setCart((prevMenu) => [...prevMenu, menuItem]);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/idle" element={<IdlePage />} />
        <Route path="/menu" element={<Layout />}>
          {/* 메뉴별 라우트 설정 */}
          <Route path="hotcoffee" element={<HotCoffee cart={cart}/>} />
          <Route path="icecoffee" element={<IceCoffee cart={cart}/>} />
          <Route path="hottea" element={<HotTea cart={cart}/>} />
          <Route path="icetea" element={<IceTea cart={cart}/>} />
          <Route path="ade&juice" element={<AdeAndJuice cart={cart}/>} />
          <Route path="smoothie&frappe" element={<SmoothieAndFrappe cart={cart}/>} />
          <Route path="hotdecaf" element={<HotDecaf cart={cart}/>} />
          <Route path="icedecaf" element={<IceDecaf cart={cart}/>} />
          <Route path="hotdrinks" element={<HotDrinks cart={cart}/>} />
          <Route path="icedrinks" element={<IceDrinks cart={cart}/>} />
          <Route path="newdrinks" element={<NewDrinks cart={cart}/>} />
          <Route path="dessert" element={<Dessert cart={cart}/>} />
          <Route path="newdessert" element={<NewDessert cart={cart}/>} />
          <Route path="md" element={<MdProduct cart={cart}/>} />
          <Route path="point" element={<Point cart={cart}/>} />
          {/* 추가 메뉴 상세 옵션 */}
          <Route path=":menuCode" element={<MenuDetail addCart={addCart} />}/>
          <Route path="shoppingcart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
        </Route>
        <Route path="/point" element={<Point />} />
        <Route path="/userpoint" element={<UserPoint />} />
        <Route path="/cupon" element={<Cupon />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      
    </BrowserRouter>
  );
};


export default App;