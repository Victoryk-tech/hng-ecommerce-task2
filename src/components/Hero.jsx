import React from "react";
import hero from "../assets/herror.png";
import heror from "../assets/herop.png";
import stroke from "../assets/stroke.png";

const Hero = () => {
  return (
    <div className="px-2  md:px-4 lg:px-20 py-20 md:py-10 font-inter w-full">
      <div className="flex flex-col md:flex md:flex-row items-center justify-center md:start md:justify-between md:space-x-4">
        <div className="  text-center md:text-start">
          <h1 className="font-semibold text-[36px]">
            Transform Your Space Today
          </h1>
          <img src={stroke} alt="" className="pl-10 md:pl-0 lg:pl-0" />
        </div>
        <div className="flex items-end justify-end w-full pt-20 md:pt-0 ">
          <img
            src={heror}
            alt=""
            className="md:w-[15rem] lg:w-80 contain-content w-[13rem]"
          />
          <img
            src={hero}
            alt=""
            className="w-[10.6rem] md:w-[11rem] lg:w-56 contain-content"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
