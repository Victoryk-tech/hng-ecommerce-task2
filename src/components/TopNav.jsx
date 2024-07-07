import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const TopNav = () => {
  return (
    <div className="bg-[#492C02] text-[#FAFAFA] py-6 md:py-4 px-2 md:px-12 lg:px-36 w-full font-poppin">
      <div className="flex items-center justify-center md:justify-between w-full md:pl-1 lg:pl-52">
        <div className="flex items-start justify-start md:gap-2">
          <h2 className="text-[11px] md:text-[14px] font-normal">
            Summer Sale For All Dinning Set. Free Express Delivery - OFF 50%!
          </h2>
          <a href="#" className="font-semibold hidden md:block">
            ShopNow
          </a>
        </div>
        <div className="hidden md:flex items-center justify-center gap-1 text-[14px]">
          <label htmlFor="">English</label>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
