import { BrowserRouter, Route, Routes } from "react-router-dom";
import IdlePage from "./IdlePage";
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
import ExtraShot from "./ExtraShot"; 
import ShoppingCart from "./ShoppingCart"; 
import { UserPoint } from "./UserPoint"; 
import { Cupon } from "./Cupon"; 

function App() {
  const [cart, setCart] = useState([]);

<<<<<<< HEAD
function App()
{
   const [cart, setCart] = useState([]);

  const addCart = (menuItem) => {
     setCart((prevMenu) => [...prevMenu, menuItem])
  }

  return (
    <>
   <BrowserRouter>
=======
  const addCart = (menuItem) => {
    setCart((prevMenu) => [...prevMenu, menuItem]);
  };

  return (
    <BrowserRouter>
>>>>>>> 9340aeef87495a47142f8eb5b8695aba9f005072
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/idle" element={<IdlePage />} />
        <Route path="/menu" element={<Layout />}>
<<<<<<< HEAD
=======

>>>>>>> 9340aeef87495a47142f8eb5b8695aba9f005072
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
<<<<<<< HEAD
          <Route path=":menuCode" element={<ExtraShot addCart={addCart} cart={cart} setCart={setCart} />} />
        </Route>
        <Route path="/shoppingcart" element={<ShoppingCart cart={cart} />} />
=======
          <Route path=":menuCode" element={<ExtraShot addCart={addCart} />} />
          <Route path="shoppingcart" element={<ShoppingCart cart={cart} />} />
        </Route>
        <Route path="/point">
          <Route index element={<Point />} />
        </Route>
        <Route path="/userpoint">
          <Route index element={<UserPoint />} />
        </Route>
        <Route path="/cupon">
          <Route index element={<Cupon />} />
        </Route>

>>>>>>> 9340aeef87495a47142f8eb5b8695aba9f005072
      </Routes>
    </BrowserRouter>
  );
}

export default App;