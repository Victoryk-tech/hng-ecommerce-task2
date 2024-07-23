import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";

import { Link } from "react-router-dom";
import { CartContext } from "./context/ContextProvider";
import TopNav from "./TopNav";

import search from "../assets/search.png";

const Header = () => {
  const { cartState } = useContext(CartContext);
  return (
    <div className=" flex flex-col items-start justify-start w-full h-auto sticky top-0 z-[999]">
      <TopNav />
      <div className="  shadow-md  bg-[#Fff] w-full">
        <div className="flex items-center justify-between md:justify-center  hover:cursor-pointer">
          <Link to="/">
            {" "}
            <div className="md:border-r-[1px] py-6 md:pr-12 lg:pr-36 pl-1 lg:pl-20 md:shadow-lg">
              <h1 className="font-bold text-[24px] font-inter hover:cursor-pointer text-[#492C02]">
                Kefa.ng
              </h1>
            </div>
          </Link>

          <nav className="hidden font-poppin md:flex items-center justify-center hover:cursor-pointer text-[16px] font-normal">
            <Link to="/board/createProduct">
              {" "}
              <p className="border-l-[4px] shadow-lg py-8 px-8">Shop</p>
            </Link>{" "}
            <p className="border-l-[4px] shadow-lg py-8 px-8">Shop</p>
            <p className="border-l-[4px] shadow-lg py-8 px-8">Shop</p>
            <p className="border-l-[4px] shadow-lg py-8 px-8 hidden lg:block">
              Shop
            </p>
            <p className="border-l-[4px] shadow-lg py-8 px-8 hidden lg:block">
              Shop
            </p>
          </nav>
          <div className="flex items-center justify-center">
            <div className="hidden border-l-[4px] shadow-lg py-8 pl-10 gap-2 hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] md:flex items-center justify-center rounde">
              <img
                src={search}
                className="text-[22px] hover:text-[#FF8933] hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] hover:cursor-pointer"
              />
              <input
                type="text"
                placeholder="search"
                className="outline-none bg-none w-50 md:w-40 lg:w-36"
              />
            </div>
            <p className="hidden lg:block border-l-[4px] shadow-lg py-8 px-6 text-[22px]">
              <IoMdHeartEmpty />
            </p>
            <Link
              to="/cart"
              className="relative hover:cursor-pointer border-r-[4px] border-[#f5f5f5] shadow-lg py-8 px-6  bg-[#492C02] "
            >
              {" "}
              <IoCartOutline className="text-[22px] text-[#fff]" />
              <h1 className="absolute  top-1 text-[#492C02]  bg-[#fafafa] p-1 rounded-xl font-medium text-[15px]">
                {cartState.totalQuantity}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
