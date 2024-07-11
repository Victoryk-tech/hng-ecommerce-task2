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
      <div className="px-4 md:px-6 lg:px-20 py-6 shadow-md  bg-[#FAFAFA] w-full">
        <div className="flex items-center justify-between hover:cursor-pointer">
          <Link to="/">
            {" "}
            <div>
              <h1 className="font-bold text-[24px] font-inter">Duexe</h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center justify-center hover:cursor-pointer md:gap-x-8 lg:gap-x-16 text-[16px] font-normal">
            <p>Shop</p>

            <Link
              to="flash"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              {" "}
              <p>Flash Sales</p>
            </Link>

            <p className="hover:cursor-pointer">Best Seller</p>
          </nav>
          <div className="flex items-center justify-center space-x-2 lg:space-x-4">
            <div className="  md:pr-3 bg-[#f5f5f5] shadow-sm hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] flex items-center justify-center rounded-lg pl-1 md:pl-3">
              <input
                type="text"
                className="outline-none bg-none py-2 w-52 md:w-40 lg:w-44"
              />
              <img
                src={search}
                className="text-[20px] hover:text-[#FF8933] hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] hover:cursor-pointer"
              />
            </div>
            <Link to="/cart" className="relative hover:cursor-pointer">
              {" "}
              <IoCartOutline className="text-[22px]" />
              <h1 className="absolute bottom-4 right-0 bg-[#FF8933] text-[#fafafa] p-1 rounded-xl font-medium text-[15px]">
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
