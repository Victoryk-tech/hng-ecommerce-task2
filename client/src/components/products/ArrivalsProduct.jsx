import React, { useContext } from "react";
import { CartContext } from "../context/ContextProvider";

import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
const ArrivalsProduct = ({ arrive }) => {
  const { cartState, dispatch } = useContext(CartContext);
  const { amount, title, image } = arrive;
  // Function to add item to cart
  const addToCart = (item) => {
    dispatch({ type: "Add_To_Cart", payload: item });
    toast.success("product added successfully");
  };
  return (
    <div className="flex flex-col justify-start items-start rounded-sm shadow-sm hover:shadow-lg w-[190px] lg:w-[200px] h-[235px] hover:scale-95 ease-in-out transition-all">
      <div className="p-2 flex items-center justify-center w-full h-[170px]">
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>

      <div className=" w-full px-2 pt-2 flex justify-between">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-[14px] md:text-[16px] font-medium">{title}</h2>
          <p className="text-[14px] x text-[#492C02]">${amount}</p>
        </div>
        <div className="flex items-center justify-center">
          <p
            className="text-[15px] text-center font-[900] hover:bg-[#391d1d] p-[8px] rounded-3xl text-white bg-[#492C02] transition-none ease-out"
            onClick={() => addToCart(arrive)}
          >
            <BsBag />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArrivalsProduct;
