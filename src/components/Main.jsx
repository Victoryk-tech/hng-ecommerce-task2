import React from "react";
import filter from "../assets/filter.png";
import checker from "../assets/checker.png";
import check from "../assets/check.png";
import MainProducts from "./products/MainProducts";
import products from "./database/mainProduct";

const Main = () => {
  return (
    <div className="px-2 md:px-6 lg:px-20 lg:py-20 md:py-10 py-16 w-full">
      <div className="space-y-5">
        <div className="border-l-[16px] border-[#FF8933] py-5 px-2 font-inter">
          <h1 className="font-semibold text-[16px] text-[#FF8933]">
            Our Products
          </h1>
        </div>
        <h1 className="font-semibold text-[24px] lg:text-[36px]">
          Explore Our Products
        </h1>
      </div>
      <div className="hidden md:flex items-start justify-start space-x-4 text-center">
        <p className="font-poppin font-normal text-[16px]">Chair</p>
        <p className="font-poppin font-normal text-[16px]">Dinning Set</p>
        <p className="font-poppin font-normal text-[16px]">Sofa</p>
        <p className="font-poppin font-normal text-[16px]">Side Table</p>
        <p className="font-poppin font-normal text-[16px]">Accessories</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-start space-y-4 md:space-y-4 lg:space-y-2 space-x-2 py-6">
        {products.map((product, index) => {
          return (
            <div>
              <MainProducts key={index} Product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
