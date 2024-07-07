import React from "react";
import code from "../assets/code.png";
import google from "../assets/google.png";
import app from "../assets/appStore.png";
import media from "../assets/media.png";
import send from "../assets/sendicon.png";
const Footer = () => {
  return (
    <div className="px-4 md:px-6 lg:px-20 bg-[#5B3702] text-white">
      <div className="space-y-9 md:space-y-0 flex flex-col md:flex-row items-start justify-start md:justify-between border-b-[1px] py-10">
        <div className="space-y-2 w-full">
          <h1 className="font-bold text-[24px] font-inter">Duexe</h1>

          <p className="font-light text-[16px] font-poppin">
            Get 10% off your first order
          </p>
          <div className="flex items-start justify-between py-2 pl-2 w-[95%] md:w-[82%] lg:w-[30%] border-white border-[1px]  bg-transparent text-[16px] font-normal font-poppin">
            <input
              type="text"
              placeholder="Enter your email"
              className=" outline-none bg-transparent"
            />
            <img src={send} alt="" />
          </div>
        </div>
        <div className="flex  items-start justify-between w-full">
          <div className="space-y-4 font-poppin">
            <h1 className="font-medium text-[20px]">Support</h1>

            <p className="font-light text-[16px]">hello@duexe.com</p>
            <p className="font-light text-[16px]">+234-708-000-344</p>
          </div>

          <div className="space-y-4 font-poppin">
            <h1 className="font-medium text-[20px]">Account</h1>
            <p className="font-light text-[16px]">Cart</p>
            <p className="font-light text-[16px]">Shop</p>
          </div>
        </div>
      </div>
      <div className="py-5 flex items-center justify-center text-[16px] font-poppin font-extralight">
        <p>&copy; Duexe 2024. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
