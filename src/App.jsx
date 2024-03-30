import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import Checkout from "./pages/Chekout";
import Home from "./pages/Home";
import { CartProvider } from "./components/CartContext";
import About from "./pages/About";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/aboutus" element={<About />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
