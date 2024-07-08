import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./components/Layout";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";

import Header from "./components/Header";

import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="productDetails/:id" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
