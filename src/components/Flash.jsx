import React, { useRef, useState } from "react";
import items from "../components/database/flashProduct";
import FlashSales from "./products/FlashSales";

import Timer from "./Timer";

const Flash = () => {
  return (
    <div className="px-2 md:px-6 lg:px-20 lg:py-20 md:py-10 py-4 w-full">
      <div className="w-full">
        <div className="border-l-[25px] border-[#FF8933] py-2 pl-4 font-inter">
          <h1 className="font-semibold text-[24px] lg:text-[36px] text-[#282727]">
            Flash Sales
          </h1>
          <Timer />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-start space-y-2 md:space-y-4 lg:space-y-2 py-6">
          {items.map((item, index) => {
            return (
              <div>
                <FlashSales key={index} Item={item} />
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

export default Flash;
