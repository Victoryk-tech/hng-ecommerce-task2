import React, { useEffect, useState } from "react";

import MainProducts from "./products/MainProducts";
import products from "./database/mainProduct";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(4);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:8000/api/product");
      console.log(response.data);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const showAll = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <div className="px-2  w-full border-b-[0.1px] border-black md:border-none">
      <div>
        {isLoading ? (
          "loading......."
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-start gap-y-32 md:gap-y-6 lg:gap-0 py-6 ">
            {products.length > 0 ? (
              products.slice(0, visible).map((product, index) => {
                return (
                  <div className="">
                    <MainProducts
                      key={index}
                      Product={product}
                      getProducts={getProducts}
                    />
                  </div>
                );
              })
            ) : (
              <div>There is no message</div>
            )}
          </div>
        )}
      </div>

      <div className="py-14 md:pt-2 lg:pt-6 ">
        <button
          className="bg-[#FF8933] rounded-[4px] hover:border-[#FF8933] hover:border-[1px]  hover:text-[#FF8933] hover:bg-transparent transition-all ease-in-out text-white py-3  w-[50%] md:w-[18%] font-semibold text-[16px]"
          onClick={showMore}
        >
          View all Products
        </button>
      </div>
    </div>
  );
};

export default Main;
