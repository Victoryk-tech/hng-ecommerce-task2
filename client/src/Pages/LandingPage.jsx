import React from "react";

import Hero from "../components/Hero";

import Service from "../components/Service";

import ProductsPage from "./ProductsPage";

const LandingPage = () => {
  return (
    <div className="w-full h-auto bg-[#fff] scroll-smooth">
      <Hero />

      <ProductsPage />

      <Service />
    </div>
  );
};

export default LandingPage;
