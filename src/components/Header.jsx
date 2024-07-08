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
      <div className="px-4 md:px-10 lg:px-24 py-6 border-b-[0.5px] border-black  bg-[#FAFAFA] w-full">
        <div className="flex items-center justify-between ">
          <Link to="/">
            {" "}
            <div>
              <h1 className="font-bold text-[24px] font-inter">Duexe</h1>
            </div>
          </Link>

          <nav className="hidden md:block md:space-x-8 lg:space-x-10 text-[16px] font-normal">
            <a href="#">Shop</a>
            <a href="#">New in</a>
            <Link to="checkout">
              {" "}
              <a href="#">Best Seller</a>
            </Link>
          </nav>
          <div className="flex items-center justify-center space-x-2">
            <div className=" md:pr-2 bg-[#fafafa] hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] flex items-center justify-center rounded-lg pl-1 md:pl-3">
              <input type="text" className="outline-none bg-none py-2 w-6" />
              <img
                src={search}
                className="text-[20px] hover:text-[#FF8933] hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)]"
              />
            </div>
            <Link to="/cart" className="relative">
              {" "}
              <IoCartOutline className="text-[20px]" />
              <h1 className="absolute bottom-4 right-0 bg-[#FF8933] text-[#fafafa] px-1 rounded-xl text-[16px]">
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
