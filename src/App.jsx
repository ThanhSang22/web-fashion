import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import DetailPage from "./pages/detailPage";
import CartPage from "./pages/cartPage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import PayPage from "./pages/payPage";
import ProductPage from "./pages/productPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/item" element={<DetailPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route
        path="/cart"
        element={
          <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pay" element={<PayPage />} />
    </Routes>
  );
};

export default App;
