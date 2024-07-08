import React from "react";

import MainProducts from "./products/MainProducts";
import products from "./database/mainProduct";

const Main = () => {
  return (
    <div className="px-2 md:px-6 lg:px-20 lg:py-20 md:py-10 pb-10 w-full">
      <div className="space-y-5">
        <div className="border-l-[24px] border-[#FF8933] py-7 pl-4  font-inter">
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-start gap-4 py-8">
        {products.map((product, index) => {
          return (
            <div>
              <MainProducts key={index} Product={product} />
            </div>
          );
        })}
      </div>
      <div className="pt-6">
        <a
          href="#"
          className="bg-[#FF8933] text-white py-3 px-5 w-[60%] md:w-[60%] lg:w-[70%] font-semibold text-[16px]"
        >
          Load more
        </a>
      </div>
    </div>
  );
};

export default Main;
