import React, { useContext } from "react";
import { CartContext } from "../context/ContextProvider";
import dropup from "../../assets/dropUP.png";
import dropdown from "../../assets/dropDown.png";
import { AiOutlineDelete } from "react-icons/ai";

const CartProduct = ({ cartItems }) => {
  const { amount, title, image, quantity } = cartItems;
  //console.log(amount);
  const { dispatch } = useContext(CartContext);

  const IncreaseCart = (item) => {
    dispatch({
      type: "Increase_Cart",
      payload: item,
    });
  };
  const DecreaseCart = (item) => {
    dispatch({
      type: "Decrease_Cart",
      payload: item,
    });
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    dispatch({ type: "Remove_From_Cart", payload: item });
  };
  return (
    <div className="flex items-center justify-between lg:justify-start  text-center py-6 px-3  lg:gap-[176px] lg:pl-[10px] shadow-md hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] w-full">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-10 h-10 lg:w-16 lg:h-16">
          <img src={image[0]} alt="" className="w-full h-full object-contain" />
        </div>
        <p className="font-poppin font-semibold text-[14px] lg:text-[16px]">
          {title[0]}
        </p>
      </div>
      <div>
        <p className="font-poppin font-semibold text-[14px] lg:text-[16px]">
          ${amount[0].toLocaleString()}
        </p>
      </div>

      <div className="flex items-center justify-center border-black border-[0.5px] px-1 lg:px-2 gap-x-1 hover:border-[#FF8933]">
        <p>{quantity}</p>
        <div>
          <img
            src={dropup}
            alt=""
            onClick={() => IncreaseCart(cartItems)}
            className="hover:bg-[#FF8933] hover:rounded-lg"
          />
          <img
            src={dropdown}
            alt=""
            onClick={() => DecreaseCart(cartItems)}
            className="hover:bg-[#FF8933] hover:rounded-lg"
          />
        </div>
      </div>
      <div>
        <p>${`${parseFloat(quantity * amount[0]).toLocaleString()}`}</p>
      </div>
      <div
        onClick={() => removeFromCart(cartItems)}
        className="text-xl font-semibold hover:text-[#FF8933]"
      >
        <AiOutlineDelete />
      </div>
    </div>
  );
};

export default CartProduct;
