import {BrowserRouter, Route, Routes} from "react-router-dom";
import IdlePage from "./IdlePage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/idle" element ={<IdlePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;