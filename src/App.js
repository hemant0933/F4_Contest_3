import "./App.css";
import CartPage from "./Components/CartPage";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import NoPage from "./Components/NoPage";

function App() {
  
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="cartpage" element={<CartPage/>}/>
          <Route path="*" element={<NoPage/>}/>
      </Routes>
    </>
  );
}

export default App;
