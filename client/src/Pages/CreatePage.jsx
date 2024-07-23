import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [oldprice, setOldPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      image === "" ||
      description === "" ||
      rating === "" ||
      oldprice === "" ||
      amount === ""
    ) {
      alert("please fill the form");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8000/api/product", {
        title: title,

        description: description,
        amount: amount,
        oldprice: oldprice,
        rating: rating,
        image: image,
      });

      toast.success(`save ${response.data.title} successfully`);

      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="px-2 md:px-4 lg:px-36 py-10 ">
      <form
        action="form"
        onSubmit={saveProduct}
        className="flex flex-col items-start space-y-6 px-4 md:px-4 lg:px-36 py-10 shadow-lg rounded-sm bg-white"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          className="pl-2 pr-32 py-2 outline-none border-green-500 border-[1px]"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="pl-2 pr-32 py-2 outline-none border-green-500 border-[1px]"
        />
        <input
          type="Number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Rating"
          className="pl-2 pr-32 py-2 outline-none border-green-500 border-[1px]"
        />
        <input
          type="Number"
          value={oldprice}
          onChange={(e) => setOldPrice(e.target.value)}
          placeholder="oldprice"
          className="pl-2 pr-32 py-2 outline-none border-green-500 border-[1px]"
        />

        <input
          type="Number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="amount"
          className="pl-2 pr-32 py-2 outline-none border-green-500 border-[1px]"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="pl-2 pr-32 py-2 outline-none border-green-500 border-[1px]"
        />

        {!isLoading && <button>submit</button>}
      </form>
    </div>
  );
};

export default CreatePage;
