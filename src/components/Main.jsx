import React from "react";
import filter from "../assets/filter.png";
import checker from "../assets/checker.png";
import check from "../assets/check.png";
import MainProducts from "./products/MainProducts";
import products from "./database/mainProduct";

const Main = () => {
  return (
    <div className="px-2 md:px-6 lg:px-20 lg:py-20 md:py-10 py-4 w-full">
      <div className="">
        <div className="border-l-[16px] border-[#FF8933] py-5 px-2 font-inter">
          <h1 className="font-semibold text-[16px] text-[#FF8933]">
            Our Products
          </h1>
        </div>
        <h1 className="font-semibold text-[36px]">Explore Our Products</h1>
      </div>
      <div className="flex items-start justify-start space-x-4 text-center">
        <img src={filter} alt="" className="w-7 h-7" />
        <div className="flex items-center justify-center space-x-2">
          <img src={checker} alt="" />
          <p className="font-poppin font-normal text-[16px]">Chair</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <img src={check} alt="" />
          <p className="font-poppin font-normal text-[16px]">Dinning Set</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <img src={check} alt="" />
          <p className="font-poppin font-normal text-[16px]">Sofa</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <img src={check} alt="" />
          <p className="font-poppin font-normal text-[16px]">Side Table</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <img src={check} alt="" />
          <p className="font-poppin font-normal text-[16px]">Accessories</p>
        </div>
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
