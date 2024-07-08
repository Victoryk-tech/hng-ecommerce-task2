import React from "react";
import { useParams } from "react-router-dom";
import products from "../components/database/mainProduct";
import deliver from "../assets/deliver.png";
import cart from "../assets/cart.png";
import fivestar from "../assets/fivestar.png";

const ProductDetails = () => {
  const { id } = useParams();
  const items = products.find((product) => product.id === parseInt(id));
  const { amount, title, image, quantity, description, oldprice, rating } =
    items;
  return (
    <div className="w-full h-auto px-2 lg:pl-16 py-10 gap-3">
      <div className="flex items-start justify-start font-poppin font-normal text-[16px] space-x-3 pb-10">
        <p>Home</p>
        <p>/</p>
        <p>Category</p>
        <p>/</p>
        <p>Chair</p>
        <p>/</p>

        <p>{title}</p>
      </div>
      <div className="flex flex-col  md:flex-row items-start md:items-center justify-center md:justify-between ">
        <div className="w-full h-full lg:w-[90%] lg:h-[90%]">
          <img src={image} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col items-start justify-start lg:px-48 space-y-5">
          <div>
            <p className="font-inter font-semibold text-[24px]">{title}</p>
            <div></div>
            <p className="font-inter font-normal text-[24px]">${amount}</p>
          </div>

          <div>
            <p className="font-poppin font-normal text-[14px]">{description}</p>
          </div>
          <div className="flex items-start justify-between">
            <div className=" flex border-black border-[1px]">
              <p>-</p>
              <p>2</p>
              <p>+</p>
            </div>
            <a href="#">Buy Now</a>
          </div>

          <div>
            <img src={deliver} alt="" />
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="border-l-[16px] border-[#FF8933] py-2 pl-4 font-inter">
          <h1 className="font-semibold text-[20px] text-[#282727]">
            Related Product
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center px-2 lg:px-28 py-12 w-full gap-4">
          <div className=" flex flex-col justify-center items-center p-1 hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] bg-white rounded-sm w-[12rem] lg:w-60 h-[15rem] md:w-[12rem] md:h-60 lg:h-[14rem] hover:scale-95 ease-in-out transition-all">
            <div className="w-36 h-1/2">
              <img
                src={image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start bg-[#f5f5f5] gap-3">
              <div className="flex items-start justify-between gap-10">
                <p className="font-poppin text-[16px] font-medium">{title}</p>
                <img
                  src={cart}
                  alt=""
                  className="font-poppin text-[16px] font-medium"
                />
              </div>
              <div className="flex items-start justify-start space-x-3">
                <p className="font-poppin text-[16px] font-medium">${amount}</p>
                <p className="font-poppin text-[16px] font-medium">
                  ${oldprice}
                </p>
              </div>
              <div className="flex items-start justify-start space-x-1">
                <img src={fivestar} alt="" />
                <p className="font-poppin text-[16px] font-medium">
                  ({rating})
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center p-1 hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] bg-white rounded-sm w-[12rem] lg:w-60 h-[15rem] md:w-[12rem] md:h-60 lg:h-[14rem] hover:scale-95 ease-in-out transition-all">
            <div className="w-36 h-1/2">
              <img
                src={image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start bg-[#f5f5f5] gap-3">
              <div className="flex items-start justify-between gap-10">
                <p className="font-poppin text-[16px] font-medium">{title}</p>
                <img
                  src={cart}
                  alt=""
                  className="font-poppin text-[16px] font-medium"
                />
              </div>
              <div className="flex items-start justify-start space-x-3">
                <p className="font-poppin text-[16px] font-medium">${amount}</p>
                <p className="font-poppin text-[16px] font-medium">
                  ${oldprice}
                </p>
              </div>
              <div className="flex items-start justify-start space-x-1">
                <img src={fivestar} alt="" />
                <p className="font-poppin text-[16px] font-medium">
                  ({rating})
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center p-1 hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] bg-white rounded-sm w-[12rem] lg:w-60 h-[15rem] md:w-[12rem] md:h-60 lg:h-[14rem] hover:scale-95 ease-in-out transition-all">
            <div className="w-36 h-1/2">
              <img
                src={image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start bg-[#f5f5f5] gap-3">
              <div className="flex items-start justify-between gap-10">
                <p className="font-poppin text-[16px] font-medium">{title}</p>
                <img
                  src={cart}
                  alt=""
                  className="font-poppin text-[16px] font-medium"
                />
              </div>
              <div className="flex items-start justify-start space-x-3">
                <p className="font-poppin text-[16px] font-medium">${amount}</p>
                <p className="font-poppin text-[16px] font-medium">
                  ${oldprice}
                </p>
              </div>
              <div className="flex items-start justify-start space-x-1">
                <img src={fivestar} alt="" />
                <p className="font-poppin text-[16px] font-medium">
                  ({rating})
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center p-1 hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] bg-white rounded-sm w-[12rem] lg:w-60 h-[15rem] md:w-[12rem] md:h-60 lg:h-[14rem] hover:scale-95 ease-in-out transition-all">
            <div className="w-36 h-1/2">
              <img
                src={image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start bg-[#f5f5f5] gap-3">
              <div className="flex items-start justify-between gap-10">
                <p className="font-poppin text-[16px] font-medium">{title}</p>
                <img
                  src={cart}
                  alt=""
                  className="font-poppin text-[16px] font-medium"
                />
              </div>
              <div className="flex items-start justify-start space-x-3">
                <p className="font-poppin text-[16px] font-medium">${amount}</p>
                <p className="font-poppin text-[16px] font-medium">
                  ${oldprice}
                </p>
              </div>
              <div className="flex items-start justify-start space-x-1">
                <img src={fivestar} alt="" />
                <p className="font-poppin text-[16px] font-medium">
                  ({rating})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
