import React from "react";

import BestProducts from "./products/BestProducts";
import bests from "./database/bestSeller";
import ViewBtn from "../shared/ViewBtn";

const BestSeller = () => {
  return (
    <div className="px-2 md:px-6 lg:px-20 lg:py-20 md:py-10 py-28 w-full">
      <div className="space-y-4">
        <div className="border-l-[16px] border-[#FF8933] py-5 px-2 font-inter">
          <h1 className="font-semibold text-[16px] text-[#FF8933]">
            This Month
          </h1>
        </div>
        <div className="flex items-start justify-between">
          <h1 className="font-semibold text-[24px] lg:text-[36px]">
            Best Selling Products
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-start space-y-4 md:space-y-4 lg:space-y-2 py-6">
          {bests.map((best, index) => {
            return (
              <div>
                <BestProducts key={index} Best={best} />
              </div>
            );
          })}
        </div>
      </div>
      <ViewBtn />
    </div>
  );
};

export default BestSeller;
