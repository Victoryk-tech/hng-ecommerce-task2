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
    <div className="py-2 ">
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
          className="pl-2 w-80 py-2 outline-none border-[#5B3702] border-[1px]"
        />

        <div className="flex items-start justify-center gap-x-2">
          <input
            type="Number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rating"
            className="pl-2 w-20  py-2 outline-none border-[#5B3702] border-[1.3px]"
          />
          <input
            type="Number"
            value={oldprice}
            onChange={(e) => setOldPrice(e.target.value)}
            placeholder="oldprice"
            className="pl-2 w-28  py-2 outline-none border-[#5B3702] border-[1.3px]"
          />

          <input
            type="Number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="amount"
            className="pl-2 w-28  py-2 outline-none border-[#5B3702] border-[1.3px]"
          />
        </div>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={6}
          className="pl-2 w-80  py-2 outline-none border-[#5B3702] border-[1.3px]"
        ></textarea>

        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="pl-2 w-80 py-2 outline-none border-[#5B3702] border-[1px]"
        />

        {!isLoading && (
          <button className="border-[#5B3702] border-[1px] w-24 py-2 rounded-md hover:bg-[#5B3702] hover:border-none hover:outline-none hover:text-white hover:shadow-md transition-all ease-out">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default CreatePage;
