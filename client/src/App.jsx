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
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Texting from "./components/Texting";
import CreatePage from "./Pages/CreatePage";
import Dashboardpage from "./Pages/Dashboard/Dashboardpage";
import SideLinks from "./components/SideLinks";
import Edit from "./components/Edit";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HomeDashboard from "./components/HomeDashboard";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="productDetails/:id" element={<ProductDetails />} />

          <Route path="text" element={<Texting />} />
          <Route path="*" element={<NotFound />} />

          <Route path="board" element={<Dashboardpage />}>
            <Route path="home" element={<HomeDashboard />} />
            <Route path="createProduct" element={<CreatePage />} />
            <Route path="editProduct" element={<Edit />} />
          </Route>

          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
