import React, { useContext } from "react";
import addCart from "../../assets/cart.png";
import fivestar from "../../assets/fivestar.png";
import { CartContext } from "../context/ContextProvider";
import products from "../database/mainProduct";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const MainProducts = ({ Product }) => {
  const { cartState, dispatch } = useContext(CartContext);
  const { rating, oldprice, amount, title, image, id } = Product;
  // Function to add item to cart
  const addToCart = (item) => {
    dispatch({ type: "Add_To_Cart", payload: item });
  };
  return (
    <div className="flex flex-col justify-start items-start  hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] bg-white gap-3 py-3 px-1 rounded-sm w-[12rem] lg:w-60 h-[17rem] md:w-[14rem] md:h-60 lg:h-[15rem] hover:scale-95 ease-in-out transition-all">
      <div className="flex items-center justify-center w-full h-1/2 ">
        <Link to={`productDetails/${(Product, id)}`}>
          <img src={image} alt="" className="w-full h-full object-contain" />
        </Link>
      </div>

      <div className=" w-full h-1/3  space-y-2 px-1 pt-2">
        <div className="flex items-start justify-between">
          <h2 className="text-[14px] md:text-[16px] font-medium">{title}</h2>
          <p
            className="text-[20px] text-center font-[900] bg-[#FF8933] p-[11px] rounded-3xl text-white hover:bg-[#F18A3F] transition-none ease-out"
            onClick={() => addToCart(Product)}
          >
            <BsBag />
          </p>
        </div>
        <div className="flex items-start justify-start space-x-3">
          <p className="text-[14px] md:text-[16px] text-[#bd9b9b]">${amount}</p>
          <p className="text-[14px] md:text-[16px]">{oldprice}</p>
        </div>
        <div className="flex items-start justify-start">
          <img src={fivestar} alt="" />
          <p className="text-[14px] md:text-[16px]">({rating})</p>
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
