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
import NotFound from "./Pages/NotFound";
import FlashDetails from "./components/Details/FlashDetails";
import BestDetails from "./components/Details/BestDetails";

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
          <Route path="flashDetails/:id" element={<FlashDetails />} />
          <Route path="BestDetails/:id" element={<BestDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
