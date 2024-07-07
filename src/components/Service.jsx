import React from "react";
import delivery from "../assets/deliveryicon.png";
import customer from "../assets/customer.png";
import tick from "../assets/tick.png";
const Service = () => {
  return (
    <div className="space-y-10 md:space-y-0 md:space-x-6  flex flex-col md:flex md:flex-row items-center text-center justify-center md:justify-between px-2 md:px-4 lg:px-20 lg:py-20 md:py-10 py-4 w-full  ">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="rounded-[50%] bg-[#5B3702] text-white p-2">
          <img src={delivery} alt="" />
        </div>
        <div className="">
          <h2 className="font-poppin text-[20px] font-semibold">
            FREE AND FAST DELIVERY
          </h2>
          <p className="font-poppin text-[14px] font-light">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="rounded-[50%] bg-[#5B3702] text-white p-2">
          <img src={customer} alt="" />
        </div>
        <div className="">
          <h2 className="font-poppin text-[20px] font-semibold">
            FREE AND FAST DELIVERY
          </h2>
          <p className="font-poppin text-[14px] font-light">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="rounded-[50%] bg-[#5B3702] text-white p-2">
          <img src={tick} alt="" />
        </div>
        <div className="">
          <h2 className="font-poppin text-[20px] font-semibold">
            FREE AND FAST DELIVERY
          </h2>
          <p className="font-poppin text-[14px] font-light">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
