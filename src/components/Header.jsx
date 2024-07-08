import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

import { Link } from "react-router-dom";
import { CartContext } from "./context/ContextProvider";
import TopNav from "./TopNav";

import search from "../assets/search.png";

const Header = () => {
  const { cartState } = useContext(CartContext);
  return (
    <div className=" flex flex-col items-start justify-start w-full h-auto sticky top-0 z-[999]">
      <TopNav />
      <div className="px-4 md:px-6 lg:px-24 py-6 shadow-md  bg-[#FAFAFA] w-full">
        <div className="flex items-center justify-between ">
          <Link to="/">
            {" "}
            <div>
              <h1 className="font-bold text-[24px] font-inter">Duexe</h1>
            </div>
          </Link>

          <nav className="hidden md:block md:space-x-8 lg:space-x-16 text-[16px] font-normal">
            <a href="#">Shop</a>
            <a href="#">New in</a>

            <a href="#">Best Seller</a>
          </nav>
          <div className="flex items-center justify-center space-x-2">
            <div className="  md:pr-3 bg-[#f5f5f5] shadow-sm hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] flex items-center justify-center rounded-lg pl-1 md:pl-3">
              <input
                type="text"
                className="outline-none bg-none py-2 w-56 md:w-40 lg:w-44"
              />
              <img
                src={search}
                className="text-[20px] hover:text-[#FF8933] hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)]"
              />
            </div>
            <Link to="/cart" className="relative">
              {" "}
              <IoCartOutline className="text-[22px]" />
              <h1 className="absolute bottom-3 right-0 bg-[#FF8933] text-[#fafafa] p-2 rounded-xl font-medium text-[15px]">
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
