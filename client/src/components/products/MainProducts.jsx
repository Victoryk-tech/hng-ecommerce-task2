import React, { useContext } from "react";

import fivestar from "../../assets/fivestar.png";
import { CartContext } from "../context/ContextProvider";

import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
const MainProducts = ({ Product, getProducts }) => {
  const { cartState, dispatch } = useContext(CartContext);
  const { rating, oldprice, amount, title, image, id } = Product;

  // id

  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure you want to delete this blog post?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/api/blog/${id}`
        );
        toast.success("delete a blog successfully");
        getProducts();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  // Function to add item to cart
  const addToCart = (item) => {
    dispatch({ type: "Add_To_Cart", payload: item });
    toast.success("product added successfully");
  };
  return (
    <div className="flex flex-col justify-start items-start pb-16 md:pb-0 bg-white rounded-sm shadow-md hover:shadow-lg w-[170px] lg:w-[251px] h-[215px] md:w-[223px] md:h-[280px] lg:h-[290px] hover:scale-95 ease-in-out transition-all">
      <div className="p-2 flex items-center justify-center md:w-[165px] w-full h-full lg:w-full lg:h-1/2 md:full lg:mb-4">
        <Link to={`productDetails/${Product._id}`}>
          <img src={image} alt="" className="w-full h-full object-contain" />
        </Link>
      </div>

      <div className=" w-full bg-[#F5F5F5] px-2 py-4 md:py-5 lg:py-2">
        <div className="flex items-start justify-between">
          <h2 className="text-[14px] md:text-[16px] font-medium">{title}</h2>
          <p
            className="text-[20px] text-center font-[900] bg-[#FF8933] p-[10px] rounded-3xl text-white hover:bg-[#F18A3F] transition-none ease-out"
            onClick={() => addToCart(Product)}
          >
            <BsBag />
          </p>
        </div>
        <div className="flex items-start justify-start gap-3">
          <p className="text-[14px] md:text-[16px] text-[#DB4444]">${amount}</p>
          <p className="text-[14px] md:text-[16px] line-through">${oldprice}</p>
        </div>
        <div className="flex items-start justify-start">
          <img src={fivestar} alt="" />
          <p className="text-[14px] md:text-[16px]">({rating})</p>
        </div>

        <p onClick={() => deleteProduct(Product._id)}>delete</p>
      </div>
    </div>
  );
};

export default MainProducts;
