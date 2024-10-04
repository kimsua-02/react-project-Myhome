import {BrowserRouter, Route, Routes} from "react-router-dom";
import IdlePage from "./IdlePage";
import ExtraShot from "./ExtraShot";
import ShoppingCart from "./ShoppingCart";

function App() {

  const [cart, setCart] = useState([]);

  const addCart = (menuItem) => {
    setCart((prevMenu) => [...prevMenu, menuItem])
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/idle" element ={<IdlePage/>}/>
        <Route path ="menu">
          <Route index element={<MainMenu/>}/>
        <Route path =":menucode" element={<ExtraShot addCart={addCart}/>}/>
        </Route>
      <Route path="shoppingcart" element={<ShoppingCart cart={cart}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;