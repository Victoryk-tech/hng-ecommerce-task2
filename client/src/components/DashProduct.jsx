import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiExport } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { DashProducts } from "./products/DashProducts";
const DashProduct = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getProduct = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:8000/api/product");
      console.log(response.data);
      setProduct(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  //const { amount, title, image, id } = Product;
  return (
    <div className=" h-screen  rounded-md mt-1">
      <div className="flex items-center justify-between py-3  bg-[#fafafa] px-8 rounded-md shadow-md">
        <div>
          <h1 className="text-2xl font-semibold">Product List</h1>
          <p className="font-poppin text-[14px]">
            Monitor your store's progress to improve your sales.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1 border-[1px] border-black rounded-md p-1">
            <CiExport />
            <p>Export</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[90vh] mt-1 rounded-sm py-4 px-8">
        <div className="flex items-start justify-between">
          <div className=" flex items-center justify-center gap-x-2">
            <IoFilterOutline className="text-2xl text-[#5B3702]" />
            <p className="text-[#5B3702]">Filter</p>
          </div>

          <div className="flex items-center justify-center gap-x-3">
            <p className=" font-poppin font-semibold">Sort by:</p>
            <div className="flex items-center justify-center font-poppin gap-x-2  border-[1px] border-[#5B3702] cursor-pointer text-[#5B3702] hover:bg-[#5B3702] hover:outline-none hover:text-white transition-all ease-out p-1 rounded-md">
              <p className="text-sm">Status</p>
              <RiArrowDownSLine className="text-xl" />
            </div>
            <div className="flex items-center justify-center font-poppin gap-x-2  border-[1px] border-[#5B3702] cursor-pointer text-[#5B3702] hover:bg-[#5B3702] hover:outline-none hover:text-white transition-all ease-out p-1 rounded-md">
              <p className="text-sm">Category</p>
              <RiArrowDownSLine className="text-xl" />
            </div>
            <div className="flex items-center justify-center font-poppin gap-x-2  border-[1px] border-[#5B3702] cursor-pointer text-[#5B3702] hover:bg-[#5B3702] hover:outline-none hover:text-white transition-all ease-out p-1 rounded-md">
              <p className="text-sm">Stock</p>
              <RiArrowDownSLine className="text-xl" />
            </div>
          </div>
        </div>

        <div className="py-8">
          <table>
            <tr className="">
              <th className="">Product</th>
              <th className="">CATEGORY</th>
              <th className="">STOCK</th>
              <th className="">PRICE</th>
              <th className="">QTY</th>
              <th className="">STATUS</th>
              <th className="">ACTIONS</th>
            </tr>
            {/* {product.map((item, index) => {
              return (
                <div>
                  <DashProducts
                    key={index}
                    items={item}
                    getProduct={getProduct}
                  />
                </div>
              );
            })} */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashProduct;
