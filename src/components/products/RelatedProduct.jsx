import React, { useContext } from "react";
import { CartContext } from "../context/ContextProvider";
import { BsBag } from "react-icons/bs";
import fivestar from "../../assets/fivestar.png";

const RelatedProduct = ({ Product }) => {
  const { rating, oldprice, amount, title, image, id } = Product;
  const { cartState, dispatch } = useContext(CartContext);
  // Function to add item to cart
  const addToCart = (item) => {
    dispatch({ type: "Add_To_Cart", payload: item });
  };
  return (
    <div className="flex flex-col justify-start items-start pt-10 pb-16 md:pb-0 bg-white rounded-sm shadow-sm hover:shadow-lg w-[176px] lg:w-[251px] h-[215px] md:w-[223px] md:h-[280px] lg:h-[200px] hover:scale-95 ease-in-out transition-all">
      <div className="p-2 flex items-center justify-center md:w-[165px] w-full h-full lg:w-full md:full">
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>

      <div className=" w-full bg-[#F5F5F5] px-2 py-2 md:py-5">
        <div className="flex items-start justify-between">
          <h2 className="text-[14px] md:text-[16px] font-medium">{title}</h2>
          <p
            className="text-[20px] text-center font-[900] bg-[#FF8933] p-[10px] rounded-3xl text-white hover:bg-[#F18A3F] transition-none ease-out"
            onClick={() => addToCart(Product)}
          >
            <BsBag />
          </p>
        </div>
        <div className="flex items-start justify-start gap-3">
          <p className="text-[14px] md:text-[16px] text-[#DB4444]">${amount}</p>
          <p className="text-[14px] md:text-[16px] line-through">{oldprice}</p>
        </div>
        <div className="flex items-start justify-start">
          <img src={fivestar} alt="" />
          <p className="text-[14px] md:text-[16px]"></p>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
