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
    <div className="flex items-start justify-between text-center text-black">
      <div>
        <img src={image} alt="" className="w-32 h-28" />
        <p>{title}</p>
      </div>
      <div>
        <p>{amount}</p>
      </div>

      <div className="flex items-center justify-center border-black border-[1px] p-1 space-x-2">
        <p>{quantity}</p>
        <div>
          <img src={dropup} alt="" onClick={() => IncreaseCart(cartItems)} />
          <img src={dropdown} alt="" onClick={() => DecreaseCart(cartItems)} />
        </div>
        <div>
          <p>total</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
