import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Products from "./TextingProducts";

const Texting = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://timbu-get-all-products.reavdev.workers.dev/?organization_id=b5d8392496594d7a99304be2778dc713&reverse_sort=false&size=100&Appid=12ZYJAV5XKZB3YM&Apikey=7f0da8e3ac564dfe83b86625575ba15f20240712174920131133"
      );

      setProducts(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <div>loading....</div>;
  }
  if (error) {
    <div>Error:{error}</div>;
  }

  return (
    <div>
      {products.length ? (
        products.map((product, index) => {
          return (
            <div className="w-full h-full flex items-center justify-center">
              <Products key={index} product={product} />
              {/* props product= */}
            </div>
          );
        })
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
};

export default Texting;
