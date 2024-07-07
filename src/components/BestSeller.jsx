import React from "react";

import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import BestProducts from "./products/BestProducts";
import bests from "./database/bestSeller";

const BestSeller = () => {
  return (
    <div className="px-36 py-4 w-full">
      <div className="">
        <div className="border-l-[16px] border-[#FF8933] py-5 px-2 font-inter">
          <h1 className="font-semibold text-[16px] text-[#FF8933]">
            This Month
          </h1>
        </div>
        <div className="flex items-start justify-between">
          <h1 className="font-semibold text-[36px]">Best Selling Products</h1>
          <div className="flex ">
            <img src={leftarrow} alt="" />
            <img src={rightarrow} alt="" />
          </div>
        </div>

        <div className="grid ps:grid-cols-2 md:grid-cols-3 lg:grid-col-6 items-start justify-start space-x-3 py-6">
          {bests.map((best, index) => {
            return (
              <div>
                <BestProducts key={index} Best={best} />
              </div>
            );
          })}
        </div>
        <a
          href="#"
          className="bg-[#FF8933] text-white px-8 py-3 font-semibold text-[16px]"
        >
          View all Products
        </a>
      </div>
    </div>
  );
};

export default BestSeller;
