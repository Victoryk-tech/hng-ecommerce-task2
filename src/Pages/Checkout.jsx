import React from "react";
import BillingDetails from "../components/BillingDetails";
import Details from "../components/Details";

const Checkout = () => {
  return (
    <div className="py-8 px-24 bg-[#fafafa]">
      <div className="flex items-start justify-start font-poppin font-normal text-[16px] space-x-3 pb-10">
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
      <div className="w-full h-auto bg-[#fafafa]flex flex-col md:flex md:flex-row items-start justify-start md:justify-between">
        <BillingDetails />
        <Details />
      </div>
    </div>
  );
};

export default Checkout;
