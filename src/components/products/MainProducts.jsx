import React, { useContext } from "react";
import addCart from "../../assets/cart.png";
import fivestar from "../../assets/fivestar.png";
import { cartContext } from "../context/ContextProvider";
import products from "../database/mainProduct";

const MainProducts = ({ Product }) => {
  const { cartState, dispatch } = useContext(cartContext);
  const { rating, oldprice, amount, title, image } = Product;
  // Function to add item to cart
  const addToCart = (item) => {
    dispatch({ type: "Add_To_Cart", payload: item });
  };
  return (
    <div className="flex flex-col justify-start items-start p-1 hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] bg-white rounded-sm w-[11.2rem] lg:w-64 h-[16rem] md:w-[15rem] md:h-60 lg:h-[19rem] hover:scale-95 ease-in-out transition-all">
      <div className="flex items-center justify-center w-full h-1/2 ">
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>

      <div className=" w-full h-1/3  space-y-2 px-1">
        <div className="flex items-start justify-between">
          <h2 className="text-[14px] md:text-[16px] font-medium">{title}</h2>
          <img
            src={addCart}
            alt="addcart"
            onClick={() => addToCart(products)}
          />
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
