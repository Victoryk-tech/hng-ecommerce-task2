import React, { useState } from "react";

import MainProducts from "./products/MainProducts";
import products from "./database/mainProduct";

const Main = () => {
  const [visible, setVisible] = useState(4);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const showAll = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <div className="px-6 md:px-6 lg:px-10 lg:py-16  md:py-10 py-10 w-full border-b-[0.1px] border-black md:border-none">
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
      <div className="hidden md:flex items-start justify-start gap-x-4 text-center">
        <p
          className="font-poppin font-normal cursor-pointer text-[16px] border-[1px] border-[#FF8933] py-2 px-5 rounded-2xl hover:bg-[#FF8933] hover:text-white transition-all ease-out"
          onClick={showAll}
        >
          All
        </p>
        <p className="font-poppin font-normal text-[16px] border-[1px] border-[#FF8933] py-2 px-5 rounded-2xl hover:bg-[#FF8933] hover:text-white transition-all ease-out">
          Chairs
        </p>
        <p className="font-poppin font-normal text-[16px] border-[1px] border-[#FF8933] py-2 px-5 rounded-2xl hover:bg-[#FF8933] hover:text-white transition-all ease-out">
          Dinning set
        </p>
        <p className="font-poppin font-normal text-[16px] border-[1px] border-[#FF8933] py-2 px-5 rounded-2xl hover:bg-[#FF8933] hover:text-white transition-all ease-out">
          Sofa
        </p>
        <p className="font-poppin font-normal text-[16px] border-[1px] border-[#FF8933] py-2 px-5 rounded-2xl hover:bg-[#FF8933] hover:text-white transition-all ease-out">
          Side Table
        </p>
        <p className="font-poppin font-normal text-[16px] border-[1px] border-[#FF8933] py-2 px-5 rounded-2xl hover:bg-[#FF8933] hover:text-white transition-all ease-out">
          Accessories
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-start lg:mt-20 gap-y-20 md:gap-y-6 lg:gap-0 py-6 ">
        {products.slice(0, visible).map((product, index) => {
          return (
            <div>
              <MainProducts key={index} Product={product} />
            </div>
          );
        })}
      </div>
      <div className="py-14 md:pt-2 lg:pt-6 ">
        <button
          className="bg-[#FF8933] hover:border-[#FF8933] hover:border-[1px]  hover:text-[#FF8933] hover:bg-transparent transition-all ease-in-out text-white py-3 px-5 w-[50%] md:w-[30%] lg:w-[20%] font-semibold text-[16px]"
          onClick={showMore}
        >
          View all Products
        </button>
      </div>
    </div>
  );
};

export default Main;
