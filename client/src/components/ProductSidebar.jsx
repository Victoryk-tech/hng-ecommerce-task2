import React from "react";
import { Link } from "react-router-dom";

const ProductSidebar = () => {
  return (
    <div className="px-2">
      <div className="space-y-3 py-4 border-b-[1px] shadow-sm">
        <h1 className="text-[18px] font-inter py-2 font-bold">Category</h1>
        <Link to="main">
          <p className="text-[15px] cursor-pointer">Shoes</p>
        </Link>
        <p className="text-[15px] cursor-pointer">Clothes</p>
        <p className="text-[15px] cursor-pointer">T Shirts</p>
        <p className="text-[15px] cursor-pointer">Trousers</p>
        <p className="text-[15px] cursor-pointer">Headwarmer</p>
      </div>

      <div className="space-y-3 py-4 border-b-[1px] shadow-sm">
        <h1 className="text-[18px] font-inter py-2 font-bold">Shop By Brand</h1>
        <div className="flex gap-4 items-start">
          <p>35</p>
          <p>39</p>
          <p>40</p>
          <p>42</p>
          <p>45</p>
        </div>
      </div>

      <div className="space-y-3 py-4 border-b-[1px] shadow-sm">
        <h1 className="text-[18px] font-inter py-2 font-bold">Shop By Color</h1>
        <Link to="main">
          <p className="text-[15px] cursor-pointer">Red</p>
        </Link>
        <p className="text-[15px] cursor-pointer">White</p>
        <p className="text-[15px] cursor-pointer">Black</p>
        <p className="text-[15px] cursor-pointer">Yellow</p>
        <p className="text-[15px] cursor-pointer">Blue</p>
      </div>

      <div className="space-y-3 py-4 border-b-[1px] shadow-sm">
        <h1 className="text-[18px] font-inter py-2 font-bold">Shop By Brand</h1>
        <Link to="main">
          <p className="text-[15px] cursor-pointer">Red</p>
        </Link>
        <p className="text-[15px] cursor-pointer">White</p>
        <p className="text-[15px] cursor-pointer">Black</p>
        <p className="text-[15px] cursor-pointer">Yellow</p>
        <p className="text-[15px] cursor-pointer">Blue</p>
      </div>

      <div className="space-y-3 py-4 border-b-[1px] shadow-sm">
        <h1 className="text-[18px] font-inter py-2 font-bold">Shop By Price</h1>
        <Link to="main">
          <p className="text-[15px] cursor-pointer">N10000-N15000</p>
        </Link>
        <p className="text-[15px] cursor-pointer">N15000-N25000</p>
        <p className="text-[15px] cursor-pointer">N25000-N30000</p>
        <p className="text-[15px] cursor-pointer">N30000-N35000</p>
        <p className="text-[15px] cursor-pointer">N35000-N45000</p>
      </div>
    </div>
  );
};

export default ProductSidebar;
