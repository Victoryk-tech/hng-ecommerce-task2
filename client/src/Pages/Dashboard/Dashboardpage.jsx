import React from "react";
import SideLinks from "../../components/SideLinks";
import { Outlet } from "react-router-dom";

const Dashboardpage = () => {
  return (
    <div className="relative bg-brown3 grid grid-cols-5">
      <SideLinks />
      <div className="col-span-5 md:col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboardpage;
