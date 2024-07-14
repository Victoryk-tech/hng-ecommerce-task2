import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const SideLinks = () => {
  return (
    <div className=" bg-lime-200">
      <Link to="home">
        {" "}
        <div className="flex items-center justify-center gap-2">
          <IoHomeOutline />
          <h1>Home</h1>
        </div>
      </Link>

      <Link to="createProduct">
        <div className="flex items-center justify-center gap-2">
          <IoCreateOutline />
          <h1>create</h1>
        </div>
      </Link>

      <Link to="editProduct">
        <div className="flex items-center justify-center gap-2">
          <IoCreateOutline />
          <h1>Edit</h1>
        </div>
      </Link>
    </div>
  );
};

export default SideLinks;
