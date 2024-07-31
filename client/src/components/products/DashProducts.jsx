import React from "react";

export const DashProducts = ({ items, getProduct }) => {
  const { rating, oldprice, amount, title, image, id } = items;
  return <div>{title}</div>;
};
