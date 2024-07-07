import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import love from "../assets/vec.png";
import { Link } from "react-router-dom";
import { cartContext } from "./context/ContextProvider";
import TopNav from "./TopNav";
import menu from "../assets/menu.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
const Header = () => {
  const { cartState } = useContext(cartContext);
  return (
    <div className=" flex flex-col items-start justify-start w-full h-auto sticky top-0 ">
      <TopNav />
      <div className="px-4 md:px-10 lg:px-24 py-6 border-b-[0.5px] border-black  bg-[#FAFAFA] w-full">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-center md:hidden space-x-4">
            <img src={menu} alt="" />
            <img src={search} alt="" />
          </div>
          <Link to="/">
            {" "}
            <div>
              <h1 className="font-bold text-[24px] font-inter">Duexe</h1>
            </div>
          </Link>

          <nav className="hidden md:block md:space-x-5 lg:space-x-10 text-[16px] font-normal">
            <a href="#">Shop</a>
            <a href="#">New in</a>
            <a href="#">Best Sellers</a>
            <a href="#">About Us</a>
            <a href="#">Sales</a>
          </nav>
          <div className="flex items-center justify-center space-x-4 ">
            <img src={user} alt="" />
            <Link to="/cart" className="relative">
              {" "}
              <IoCartOutline className="text-[20px]" />
              <h1 className="absolute bottom-4 right-0 bg-[#FF8933] text-[#fafafa] px-1 rounded-xl text-[16px]">
                {cartState.totalQuantity}
              </h1>
            </Link>

            <img src={search} className="text-[20px] hidden md:block" />
            <img src={love} alt="" className="hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
