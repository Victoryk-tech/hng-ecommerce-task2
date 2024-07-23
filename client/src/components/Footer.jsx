import React from "react";

import send from "../assets/sendicon.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="  pt-[56px] pb-[32px] gap-[60px] md:px-6 lg:px-[146px] lg:py-[16px] lg:gap-[40px] bg-[#5B3702] text-white">
        <div className="space-y-[100px] md:space-y-[24px] flex flex-col md:flex-row items-start justify-start md:justify-between border-b-[1px] py-[72px] px-[24px] md:py-16 w-ull">
          <div className="space-y-2 w-full">
            <div className="space-y-[24px] w-[385px]">
              <h1 className="font-bold text-[24px] leading-[24px] font-inter">
                Duexe
              </h1>

              <p className="font-normal text-[16px] font-poppin leading-[24px]">
                Get 10% off your first order
              </p>
            </div>
            <div className="flex items-start justify-between px-2 py-3 w-[320px] md:w-[82%] lg:w-[50%] border-white border-[1.5px]  bg-transparent text-[16px] font-normal font-poppin">
              <input
                type="text"
                placeholder="Enter your email"
                className=" outline-none bg-transparent lg:w-[100%]"
              />
              <img src={send} alt="" className="" />
            </div>
          </div>
          <div className="flex  items-start justify-start gap-[48px] lg:justify-between w-full">
            <div className="space-y-[24px] font-poppin">
              <h1 className="font-medium text-[20px] leading-7">Support</h1>

              <p className="font-normal text-[16px]">hello@duexe.com</p>
              <p className="font-normal text-[16px]">+234-708-000-344</p>
            </div>

            <div className="space-y-[24px] font-poppin">
              <h1 className="font-medium text-[20px] leading-7">Account</h1>

              <p className="font-normal text-[16px]">
                {" "}
                <Link to="cart">Cart </Link>
              </p>

              <p className="font-normal text-[16px]">Shop</p>
            </div>
          </div>
        </div>
        <div className="py-2 flex items-center justify-center text-[16px] font-poppin font-normal">
          <p className="leading-6">&copy; Duexe 2024. All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
