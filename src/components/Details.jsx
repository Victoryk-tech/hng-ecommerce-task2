import React from "react";
import flash1 from "../assets/flashA.png";
import ViewBtn from "../shared/ViewBtn";

const Details = () => {
  return (
    <div className="flex flex-col items-start justify-start pb-14 lg:px-6 w-full md:w-[43%]">
      <div className="flex items-center justify-between py-2 w-full">
        <div className="flex items-center justify-center gap-2">
          <img src={flash1} alt="" className="w-16 h-16 object-contain" />
          <p className="font-poppin font-normal text-[16px]">title</p>
        </div>
        <p className="font-poppin font-normal text-[16px]">amout</p>
      </div>
      <div className="flex flex-col w-full">
        <div>
          <div className="flex items-start justify-between border-b-[0.3px] border-black py-4">
            <p className="font-poppin font-normal text-[16px]">Subtotal</p>
            <p className="font-poppin font-normal text-[16px]">amout</p>
          </div>
          <div className="flex items-start justify-between border-b-[0.3px] border-black py-4">
            <p className="font-poppin font-normal text-[16px]">Shipping</p>
            <p className="font-poppin font-normal text-[13px]">Free</p>
          </div>
          <div className="flex items-start justify-between py-4">
            <p className="font-poppin font-normal text-[16px]">total:</p>
            <p className="font-poppin font-normal text-[16px]">amount</p>
          </div>
        </div>
        <div className="flex flex-col  items-start justify-start">
          <div className=" flex items-start justify-between py-3">
            <div className="flex items-center justify-center gap-2">
              <input type="checkbox" />
              <p className="font-poppin font-normal text-[16px]">Bank</p>
            </div>
            <img src="" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 py-3">
            <input type="checkbox" />
            <p className="font-poppin font-normal text-[16px]">
              Cash on Delivery
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ">
          <input
            type="text"
            placeholder="Coupon code"
            className="p-3 md::py-2 pl-2  w-full md:w-[100%] lg:w-[30%] border-black border-2 text-[15px]"
          />
          <a
            href="#"
            className="bg-[#FF8933] text-center text-white py-4 md:py-[13px] px-5 w-[100%] lg:w-[100%] font-semibold text-[12px]"
          >
            Apply Coupon
          </a>
        </div>

        <button
          href="#"
          className="mt-8 bg-[#FF8933] text-white py-4 md:py-[13px] px-3 w-[100%] lg:w-[35%] font-semibold text-[12px]"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Details;
