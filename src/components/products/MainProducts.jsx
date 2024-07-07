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
    <div className="flex flex-col items-center justify-center space-x-3">
      <div className="w-32 h-32 ">
        <img src={image} alt="" className="w-full h-full" />
      </div>

      <div>
        <div className="flex items-start justify-between">
          <h2 className="text-[16px] font-medium">{title}</h2>
          <img
            src={addCart}
            alt="addcart"
            onClick={() => addToCart(products)}
          />
        </div>
        <div className="flex items-start justify-start space-x-3">
          <p className="text-[16px] text-[#DB4444]">{amount}</p>
          <p>{oldprice}</p>
        </div>
        <div className="flex items-start justify-start">
          <img src={fivestar} alt="" />
          <p>({rating})</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MainProducts;
