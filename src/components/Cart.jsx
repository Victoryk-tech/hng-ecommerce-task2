import React, { useContext } from "react";
import { CartContext } from "./context/ContextProvider";
import CartProduct from "./products/CartProduct";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartState } = useContext(CartContext);

  return (
    <div className="w-full h-full px-2 md:px-4 lg:px-20 py-10">
      <div className="text-[11px] flex items-start justify-start font-poppin font-normal md:text-[16px] gap-1 lg:space-x-3 pb-10">
        <p>Home</p>
        <p>/</p>

        <p>Cart</p>
      </div>
      <nav className="flex items-start justify-between text-center p-4 shadow-md">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </nav>
      <div className="pt-5  w-full">
        {cartState.cart.map((item, index) => {
          return (
            <div className="">
              <CartProduct key={index} cartItems={item} />
            </div>
          );
        })}

        <div className="flex flex-row items-center justify-between w-full mt-4">
          <button className="border-[#FF8933] text-center text-[#FF8933] transition-all ease-in hover:bg-[#FF8933] hover:text-white border-[1px] hover:scale-100 py-4 md:py-5 lg:py-[13px] px-5 w-[37%] md:w-[30%] lg:w-[16%] font-semibold text-[12px]">
            Return to Shop
          </button>
          <button className="bg-[#FF8933] text-center text-white transition-all ease-in hover:bg-white hover:text-[#FF8933] hover:border-[#FF8933] hover:border-[1px] hover:scale-100 py-4 md:py-5 lg:py-[13px] px-5 w-[37%] md:w-[30%] lg:w-[16%] font-semibold text-[12px]">
            Update Cart
          </button>
        </div>
        <div className=" flex flex-col md:flex-row items-start justify-between pt-16 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4 w-full md:w-[60%] lg:w-[75%] ">
            <input
              type="text"
              placeholder="Coupon code"
              className="p-3 md::py-2 w-[100%] lg:w-[35%] border-black border-[1px] text-[15px]"
            />
            <button className="bg-[#FF8933] text-center text-white py-4 md:py-[15px] px-5 w-[100%] md:w-[70%] lg:w-[20%] font-semibold text-[12px]">
              Apply Coupon
            </button>
          </div>

          <div className="border-2 p-2 w-full my-14 md:mt-0 md:w-[35%] border-black">
            <div className="flex items-start justify-between border-b-[0.3px] border-black py-4">
              <p className="font-poppin font-normal text-[16px]">Subtotal</p>
              <p className="font-poppin font-normal text-[16px]">
                ${cartState.totalPrice.toLocaleString()}
              </p>
            </div>
            <div className="flex items-start justify-between border-b-[0.3px] border-black py-4">
              <p className="font-poppin font-normal text-[16px]">Shipping</p>
              <p className="font-poppin font-normal text-[13px]">Free</p>
            </div>
            <div className="flex items-start justify-between py-4">
              <p className="font-poppin font-normal text-[16px]">total:</p>
              <p className="font-poppin font-normal text-[16px]">
                ${cartState.totalPrice.toLocaleString()}
              </p>
            </div>

            <button className="bg-[#FF8933] text-center ml-20 md:ml-8  text-white hover:text-[#FF8933] hover:bg-white hover:border-[1px] hover:border-[#FF8933] hover:scale-100 transition-all ease-in py-4 md:py-[13px] px-4 w-[53%] md:w-[75%] font-semibold text-[12px]">
              <Link to="/checkout">Procced to checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
