import React from "react";
import addCart from "../../assets/cart.png";
import fivestar from "../../assets/fivestar.png";
import heartsmall from "../../assets/heartsmall.png";
import discount from "../../assets/discount.png";
const FlashSales = ({ Item }) => {
  const { rating, oldprice, amount, title, image } = Item;
  //console.log(Item);
  return (
    <div className="flex flex-col justify-start items-start p-1 hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] bg-white rounded-sm w-[11.2rem] lg:w-56 h-[16rem] md:w-[15rem] md:h-60 lg:h-[18rem] hover:scale-95 ease-in-out transition-all">
      <div className="w-full flex items-start justify-between">
        {" "}
        <img src={discount} alt="" />
        <img src={heartsmall} alt="" />
      </div>
      <div className="flex items-center justify-center w-full h-1/2 ">
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>

      <div className=" w-full h-1/3  space-y-2 px-1">
        <div className="flex items-start justify-between">
          <h2 className="text-[14px] md:text-[16px] font-medium">{title}</h2>
          <img src={addCart} alt="addcart" />
        </div>
        <div className="flex items-start justify-start space-x-3">
          <p className="text-[14px] md:text-[16px] text-[#bd9b9b]">${amount}</p>
          <p className="text-[14px] md:text-[16px]">{oldprice}</p>
        </div>
        <div className="flex items-start justify-start">
          <img src={fivestar} alt="" />
          <p className="text-[14px] md:text-[16px]">({rating})</p>
        </div>
      </div>
    </div>

    // <div className="w-full flex flex-col items-start justify-start space-y-2 bg-white border-black border-[0.1px]">
    //   <div className="flex flex-col justify-start items-start hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] bg-white rounded-lg w-96 lg:w-56 h-96 md:h-96 lg:h-[22rem] hover:scale-105 ease-in-out transition-all">
    //
    //   </div>
    //   <div className="flex items-center justify-center ps:w-28 ps:h-28 md:w-44 md:h-1/4">
    //     <img src={image} alt="" className="w-full h-full" />
    //   </div>

    //   <div className=" flex flex-col justify-start">
    //     <div className="flex items-start justify-between">
    //       <h2 className="text-[16px] font-medium">{title}</h2>
    //       <img src={addCart} alt="addcart" />
    //     </div>
    //
    //   </div>
    // </div>
  );
};

export default FlashSales;
