import React from "react";
import SideLinks from "../../components/SideLinks";
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";

const Dashboardpage = () => {
  return (
    <div className="bg-[#d8d7d7]">
      <div className="relative bg-brown3 grid grid-cols-6 py-8">
        <SideLinks />
        <div className=" col-span-5 px-8 py-2">
          <DashHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;
