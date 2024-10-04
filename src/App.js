import {BrowserRouter, Route, Routes} from "react-router-dom";
import IdlePage from "./IdlePage";
import Redirect from "./Redirect";
import Result from "./Result";

function App()
{
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Redirect/>}/>
        <Route path = "/idle" element ={<IdlePage/>}/>
        <Route path = "/result" element ={<Result/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;