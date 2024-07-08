import React from "react";
import BillingDetails from "../components/BillingDetails";
import Details from "../components/Details";

const Checkout = () => {
  return (
    <div className="py-8 px-2 lg:px-24 bg-[#fafafa]">
      <div className="text-[11px] flex items-start justify-start font-poppin font-normal md:text-[16px] gap-1 lg:space-x-3 pb-10">
        <p>Home</p>
        <p>/</p>
        <p>Category</p>
        <p>/</p>
        <p>Product</p>
        <p>/</p>
        <p>View Cart</p>
        <p>/</p>
        <p>Checkout</p>
      </div>
      <div className="w-full h-auto md:gap-5 bg-[#fafafa]flex flex-col md:flex md:flex-row items-start md:items-center justify-start md:justify-start">
        <BillingDetails />
        <Details />
      </div>
    </div>
  );
};

export default Checkout;
