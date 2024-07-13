import React from "react";
import hero from "../assets/herror.png";
import heror from "../assets/herop.png";
import stroke from "../assets/stroke.png";

const Hero = () => {
  return (
    <div className="px-2  md:px-4 lg:px-20 py-20 md:py-10 font-inter w-full">
      <div className="flex flex-col md:flex md:flex-row items-center justify-center md:items-center md:justify-between md:gap-x-7">
        <div className="  text-center lg:w-[382px]">
          <h1 className="font-semibold text-[36px] text-center lg:pr-6">
            Transform Your Spa Today
          </h1>
          <img src={stroke} alt="" className="pl-9 md:pl-0 lg:pl-1" />
        </div>
        <div className="flex items-end justify-end pt-20 md:pt-0 w-[386px] lg-w-[885px] ">
          <div className="md:w-[15rem] lg:w-80 w-[13rem]">
            <img src={heror} alt="" className="w-full h-full object-contain" />
          </div>

          <div className="w-[10.6rem]  md:w-[11rem] lg:w-56 pb-4 lg:pb-9">
            <img src={hero} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
