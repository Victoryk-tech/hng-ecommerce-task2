import React, { useContext } from "react";
import { CartContext } from "../context/ContextProvider";
import dropup from "../../assets/dropUP.png";
import dropdown from "../../assets/dropDown.png";

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
    <div className="flex items-center justify-between text-center p-4 shadow-[0_7px_25px_rgba(0,0,0,0.08)] w-full">
      <div className="gap-4">
        <div className="w-12 h-12 lg:w-16 lg:h-16">
          <img src={image} alt="" className="w-full h-full object-contain" />
        </div>
        <p className="font-poppin font-semibold text-[16px]">{title}</p>
      </div>
      <div>
        <p className="font-poppin font-semibold text-[16px]">
          ${amount.toLocaleString()}
        </p>
      </div>

      <div className="flex items-center justify-center border-black border-[0.5px] p-1 space-x-1 hover:border-[#FF8933]">
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
        <p>total</p>
      </div>
    </div>
  );
};

export default CartProduct;
