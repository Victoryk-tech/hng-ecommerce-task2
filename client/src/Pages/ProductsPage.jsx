import React from "react";
import ProductSidebar from "../components/ProductSidebar";
import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Service from "../components/Service";
import ReviewProducts from "../components/ReviewProducts";
import Arrivals from "../components/Arrivals";

const ProductsPage = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Hero />
      <Arrivals />

      <div className="px-2 lg:p-10 ">
        <div className="border-l-[24px] border-[#492C02] py-7 pl-4  font-inter">
          <h1 className="font-semibold text-[16px] text-[#492C02]">
            Our Products
          </h1>
        </div>

        <div className="relative bg-brown3 flex w-full">
          <ProductSidebar />
          <div className="w-[80%]">
            <Outlet />
          </div>
        </div>
      </div>

      <Service />
      <ReviewProducts />
    </div>
  );
};

export default ProductsPage;
