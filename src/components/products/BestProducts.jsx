import React from "react";
import addCart from "../../assets/cart.png";
import fivestar from "../../assets/fivestar.png";
import { BsBag } from "react-icons/bs";
const BestProducts = ({ Best }) => {
  const { rating, oldprice, amount, title, image } = Best;
  const addToCart = (item) => {
    dispatch({ type: "Add_To_Cart", payload: item });
  };
  return (
    <div className="flex flex-col justify-start items-start bg-white rounded-sm shadow-sm hover:shadow-lg w-[176px] lg:w-[251px] h-[215px] md:w-[223px] md:h-[280px] lg:h-[300px] hover:scale-95 ease-in-out transition-all">
      <div className="p-2 flex items-center justify-center md:w-[165px] w-full h-[170px] lg:w-full md:full md:mb-3 lg:mb-7">
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>

      <div className=" w-full bg-[#F5F5F5] px-2 py-4 md:py-5 lg:py-2">
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

export default BestProducts;
