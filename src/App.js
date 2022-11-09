/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Home";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Registration  />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </div>
  );
}

export default App;
