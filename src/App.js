import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./Home";
import { CheckOut } from "./components/CheckOut/CheckOut";
import { NavBar } from "./components/BookMyShow/NavBar/NavBar";
import { WishList } from "./components/WishList/WishList";

function App() {
  return (
    <div id="main">
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/checkout" element={<><NavBar/><CheckOut/></> } />
        <Route path="/wishlist" element={<><NavBar/><WishList/></>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

