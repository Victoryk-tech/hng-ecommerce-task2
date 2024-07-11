import React, { useState } from "react";

import BestProducts from "./products/BestProducts";
import bests from "./database/bestSeller";
import ViewBtn from "../shared/ViewBtn";

const BestSeller = () => {
  const [visible, setVisible] = useState(4);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <div className="px-6 md:px-6 lg:px-6 lg:py-20 md:py-10 py-28 w-full border-b-[0.1px]  border-black">
      <div className="space-y-4">
        <div className="border-l-[24px] border-[#FF8933] py-10 pl-4 font-inter">
          <h1 className="font-semibold text-[16px] text-[#FF8933]">
            This Month
          </h1>
        </div>
        <div className="flex items-start justify-between">
          <h1 className="font-semibold text-[24px] lg:text-[36px]">
            Best Selling Products
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-start gap-y-20 md:gap-y-6 lg:gap-0 py-6 ">
          {bests.slice(0, visible).map((best, index) => {
            return (
              <div>
                <BestProducts key={index} Best={best} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-16 md:pt-2 lg:pt-6">
        <button
          className="bg-[#FF8933] rounded-[4px] text-white py-3 px-5 w-[50%] md:w-[30%] lg:w-[20%] font-semibold text-[16px]"
          onClick={showMore}
        >
          View all Products
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
