import React, { useRef, useState } from "react";
import items from "../components/database/flashProduct";
import FlashSales from "./products/FlashSales";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import Timer from "./Timer";
const ITEM_WIDTH = 200;
const Flash = () => {
  const containerRef = useRef;
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };
  return (
    <div className="px-2 md:px-6 lg:px-20 lg:py-20 md:py-10 py-4 w-full">
      <div className="w-full">
        <div className="border-l-[25px] border-[#FF8933] py-2 pl-4 font-inter">
          <h1 className="font-semibold text-[36px] text-[#282727]">
            Flash Sales
          </h1>
          <Timer />
        </div>
        <div className="flex items-end justify-end w-full">
          <img
            src={leftarrow}
            alt=""
            onClick={() => {
              handleScroll(-ITEM_WIDTH);
            }}
          />
          <img
            src={rightarrow}
            alt=""
            onClick={() => {
              handleScroll(ITEM_WIDTH);
            }}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-start justify-start  space-y-4 py-6 lg:overflow-x-scroll lg:scroll-smooth lg:space-x-2 lg:max-w-full">
          {items.map((item, index) => {
            return (
              <div className="card">
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
