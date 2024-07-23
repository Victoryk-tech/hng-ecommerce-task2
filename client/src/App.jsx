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

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Texting from "./components/Texting";
import CreatePage from "./Pages/CreatePage";
import Dashboardpage from "./Pages/Dashboard/Dashboardpage";

import Edit from "./components/Edit";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HomeDashboard from "./components/HomeDashboard";
import Main from "./components/Main";
import ProductsPage from "./Pages/ProductsPage";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsPage />}>
            <Route path="main" element={<Main />} />
          </Route>
          <Route path="productDetails/:id" element={<ProductDetails />} />

          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<Checkout />} />

          <Route path="text" element={<Texting />} />

          <Route path="board" element={<Dashboardpage />}>
            <Route path="home" element={<HomeDashboard />} />
            <Route path="createProduct" element={<CreatePage />} />
            <Route path="editProduct" element={<Edit />} />
          </Route>

          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
