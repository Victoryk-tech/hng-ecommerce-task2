import React from "react";

const CheckoutProduct = ({ Items }) => {
  const { image, title, amount, quantity } = Items;

  return (
    <div className="flex items-center justify-between py-2 w-full">
      <div className="flex items-center justify-center gap-2">
        <img src={image[0]} alt="" className="w-16 h-16 object-contain" />
        <p className="font-poppin font-normal text-[16px]">{title[0]}</p>
      </div>
      <p className="font-poppin font-normal text-[16px]">
        ${`${parseFloat(quantity * amount[0]).toLocaleString()}`}
      </p>
    </div>
  );
};

export default CheckoutProduct;
