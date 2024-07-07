import React, { useContext } from "react";
import { cartContext } from "./context/ContextProvider";
import CartProduct from "./products/CartProduct";

const Cart = () => {
  const { cartState } = useContext(cartContext);
  return (
    <div className="w-full h-full px-20 py-10">
      <nav className="flex items-start justify-between text-center">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </nav>
      <div className="">
        {cartState.cart.map((item, index) => {
          return (
            <div>
              <CartProduct key={index} cartItems={item} />
            </div>
          );
        })}

        <div className="p-8">
          <p>Total items:{cartState.totalQuantity}</p>
          <p>Total Price:{cartState.totalPrice.toLocaleString()}</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
