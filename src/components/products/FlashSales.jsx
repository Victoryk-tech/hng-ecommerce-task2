import React from "react";

import fivestar from "../../assets/fivestar.png";
import heartsmall from "../../assets/heartsmall.png";
import discount from "../../assets/discount.png";
import { BsBag } from "react-icons/bs";
const FlashSales = ({ Item }) => {
  const { rating, oldprice, amount, title, image } = Item;
  const addToCart = (item) => {
    dispatch({ type: "Add_To_Cart", payload: item });
  };
  return (
    <div className="flex flex-col justify-start items-start bg-white rounded-sm shadow-sm hover:shadow-lg w-[187px] lg:w-[243px] h-[215px] md:w-[223px] md:h-[312px] lg:h-[360px] hover:scale-95 ease-in-out transition-all">
      <div className="w-full flex items-start justify-start  p-2">
        <img src={discount} alt="" />
      </div>
      <div className="flex items-center justify-center md:w-[165px] w-[109px] h-[119px] lg:w-[195px] md:h-1/2 md:mb-2 lg:mb-9">
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>

      <div className=" w-full bg-[#F5F5F5] p-2">
        <div className="flex items-start justify-between">
          <h2 className="text-[14px] md:text-[16px] font-medium">{title}</h2>
          <p
            className="text-[20px] text-center font-[900] bg-[#FF8933] p-[10px] rounded-3xl text-white hover:bg-[#F18A3F] transition-none ease-out"
            onClick={() => addToCart(Product)}
          >
            <BsBag />
          </p>
        </div>
        <div className="flex items-start justify-start gap-3">
          <p className="text-[14px] md:text-[16px] text-[#bd9b9b]">${amount}</p>
          <p className="text-[14px] md:text-[16px]">{oldprice}</p>
        </div>
        <div className="flex items-start justify-start">
          <img src={fivestar} alt="" />
          <p className="text-[14px] md:text-[16px]">({rating})</p>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
