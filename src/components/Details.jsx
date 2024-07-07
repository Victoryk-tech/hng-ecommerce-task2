import React from "react";

const Details = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-start justify-between">
        <div className="flex items-start justify-start">
          <img src="" alt="" />
          <p>title</p>
        </div>
        <p>amout</p>
      </div>
      <div>
        <div className="flex items-start justify-between">
          <p>subtotal</p>
        </div>
        <div className="flex items-start justify-between">
          <p>Shipping</p>
          <p>Free</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
