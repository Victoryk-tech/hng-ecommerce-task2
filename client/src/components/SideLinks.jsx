import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";
const SideLinks = () => {
  return (
    <div className=" h-screen py-6 space-y-8 px-4 ">
      <div className="text-center text-xl font-semibold">
        <h1>KEFA.NG</h1>
      </div>
      <div className="space-y-40">
        <div className=" space-y-4">
          <Link to="/board/home">
            {" "}
            <div className="flex items-center justify-center gap-x-3 transition-all ease-out  hover:border-l-8 hover:border-[#5B3702] py-2">
              <IoHomeOutline className="text-[24px]" />
              <h1 className="font-medium">Overview</h1>
            </div>
          </Link>{" "}
          <div>
            <Link
              to="/board/products"
              className="flex items-center justify-center gap-x-3 transition-all ease-out  hover:border-l-8 hover:border-[#5B3702] py-2"
            >
              <IoCartOutline className="text-[24px]" />
              <h1 className="font-medium">Products</h1>
            </Link>
          </div>
          <div>
            <Link
              to="orders"
              className="flex items-center justify-center gap-x-5 transition-all ease-out  hover:border-l-8 hover:border-[#5B3702] py-2"
            >
              <MdBorderColor className="text-[24px]" />
              <h1 className="font-medium">Orders</h1>
            </Link>
          </div>
          <div>
            <Link
              to="customers"
              className="flex items-center justify-center gap-x-2 transition-all ease-out  hover:border-l-8 hover:border-[#5B3702] py-2"
            >
              {" "}
              <GoPerson className="text-[24px]" />
              <h1 className="font-medium">Customers</h1>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-x-5 transition-all ease-out  hover:border-l-8 hover:border-[#5B3702] py-2">
            <VscPreview className="text-[24px]" />
            <h1 className="font-medium"> Reviews</h1>
          </div>
        </div>
        <div>
          <Link to="">
            {" "}
            <div className="flex items-center justify-center gap-x-3 transition-all ease-out  hover:border-l-8 hover:border-[#5B3702] py-2">
              <IoSettingsOutline className="text-[24px]" />
              <h1 className="font-medium">Settings</h1>
            </div>
          </Link>
          <Link to="/board/home">
            {" "}
            <div className="flex items-center justify-center gap-x-3 transition-all ease-out  hover:border-l-8 hover:border-[#5B3702] py-2">
              <IoIosLogOut className="text-[24px]" />
              <h1 className="font-medium">Log out</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideLinks;
