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
import { Point } from "./Point";



function App(){

const [cart, setCart] = useState([]);

const addCart = (menuItem) => {
  setCart((prevMenu) => [...prevMenu, menuItem])
}

{
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path = "/" element ={<Redirect/>}/>
        <Route path = "/idle" element ={<IdlePage/>}/>

        <Route path ="menu">
          <Route index element={<MainMenu/>}/>
        <Route path =":menucode" element={<ExtraShot addCart={addCart}/>}/>
        </Route>
      <Route path="shoppingcart" element={<ShoppingCart cart={cart}/>}/>

        <Route path = "/result" element ={<Result/>}/>

        <Route path="/" element={<Layout/>}>
        <Route path = "/idle" element ={<IdlePage/>}/>
        <Route path="/hotcoffee">
          <Route index element={<Coffee/>}/>
        </Route>
        <Route path="/icecoffee">
          <Route index element={<Coffee/>}/>
        </Route>
        <Route path="/hottea">
          <Route index element={<Tea/>}/>
        </Route>
        <Route path="/icetea">
          <Route index element={<Tea/>}/>
        </Route>
        <Route path="/ade&juice">
          <Route index element={<AdeandJuice/>}/>
        </Route>
        <Route path="/smoothie&frappe">
          <Route index element={<SmoothieandFrappe/>}/>
        </Route>
        <Route path="hotdecaf">
          <Route index element={<Decaffein/>}/>
        </Route>
        <Route path="icedecaf">
          <Route index element={<Decaffein/>}/>
        </Route>
        <Route path="newdrinks">
          <Route index element={<NewDrinks/>}/>
        </Route>
        <Route path="dessert">
          <Route index element={<Dessert/>}/>
        </Route>
        <Route path="newdessert">
          <Route index element={<NewDessert/>}/>
        </Route>
        </Route>

        <Route path="/point">
          <Route index element={<Point/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
}
export default App;