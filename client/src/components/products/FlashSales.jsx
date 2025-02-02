import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import fivestar from "../../assets/fivestar.png";
import discount from "../../assets/discount.png";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const FlashSales = ({ Item }) => {
  const { dispatch } = useContext(CartContext);
  const { rating, oldprice, amount, title, image, id } = Item;
  const addToCart = (item) => {
    dispatch({ type: "Add_To_Cart", payload: item });
    toast("item added to your cart successfully!");
  };
  return (
    <div className="flex flex-col justify-start items-start bg-white rounded-sm shadow-md hover:shadow-lg w-[170px] lg:w-[243px] h-[212px] md:w-[223px] md:h-[312px] lg:h-[360px] hover:scale-95 ease-in-out transition-all">
      <div className="w-full flex items-start justify-start pt-2 px-2 pb-10">
        <img src={discount} alt="" />
      </div>
      <div className="flex items-center justify-center md:w-[165px] w-[100px] h-[100px] lg:w-[195px] lg:h-1/2 md:h-1/2 md:mb-2 lg:mb-2">
        <Link to={`flashDetails/${(Item, id)}`}>
          <img
            src={image}
            alt=""
            className="w-full h-full object-contain content-center"
          />
        </Link>
      </div>

      <div className=" w-full bg-[#F5F5F5] p-2">
        <div className="flex items-start justify-between">
          <h2 className="text-[14px] md:text-[16px] font-medium">{title}</h2>
          <p
            className="text-[20px] text-center font-[900] bg-[#FF8933] p-[10px] rounded-3xl text-white hover:bg-[#F18A3F] transition-none ease-out"
            onClick={() => addToCart(Item)}
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
          <p className="text-[14px] md:text-[16px]">({rating})</p>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
