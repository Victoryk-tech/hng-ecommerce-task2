import React from "react";

const TextingProducts = ({ product }) => {
  const { name, description, photos, current_price, available_quantity } =
    product;
  console.log(product);
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{current_price}</p>
      <p>{available_quantity}</p>

      <img src={photos} alt="" />
    </div>
  );
};

export default TextingProducts;
