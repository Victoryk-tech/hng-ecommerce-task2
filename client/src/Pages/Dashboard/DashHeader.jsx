import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
const DashHeader = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex items-center justify-between py-4 bg-[#fafafa] px-8 rounded-md shadow-md">
      <div className="flex items-center justify-center gap-x-2">
        <CiSearch className="text-lg" />
        <input
          type="text"
          placeholder="search product name etc..."
          className="w-80 outline-none"
        />
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <Link to="/board/createProduct">
          <IoAdd className="text-2xl" />
        </Link>

        <GoBell className="text-2xl" />
        <div className="flex items-center justify-center gap-x-2">
          <IoPersonCircleOutline className="text-3xl" />
          <div>
            <h1 className="text-[15px] font-poppin font-medium">
              {/* {location.state.email} */}
            </h1>
            <p className="text-sm">Admin</p>
          </div>
        </div>
        <p className="text-3xl font-extrabold">...</p>
      </div>
    </div>
  );
};

export default DashHeader;
