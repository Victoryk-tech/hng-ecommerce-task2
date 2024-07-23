import React from "react";
import { Link } from "react-router-dom";
import LoginLogo from "../../public/assets/LoginLogo.png";
const Login = () => {
  return (
    <div className="w-full h-full md:flex md:items-center lg:items-start justify-center lg:justify-start lg:pr-24  bg-white md:pt-[4rem] lg:pt-0 ">
      <div className="hidden lg:block w-[50%] h-full ">
        <img
          src={LoginLogo}
          alt="siginup"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="flex flex-col items-start md:items-center justify- md:px-14  pt-[10rem] md:pt-32 space-y-6">
        <div className="text-center w-full">
          <h1 className="text-[#00302E] text-[27px] font-[700]">
            Welcome Back!
          </h1>
        </div>

        <form
          action=""
          className="space-y-8 w-full flex flex-col justify-center items-center
    "
        >
          <div className="border-[1px] border-[#FBDDBB82] hover:border-[#00302E] py-4 pl-4 pr-24 lg:pr-28 rounded-[5px] text-[#00302E87]">
            <input
              type="Email"
              placeholder="gregwill@gmail.com"
              className="border-none outline-none md:pr-20"
            />
          </div>
          <div className="flex justify-between text-center border-[1px] border-[#FBDDBB82] hover:border-[#00302E] py-4 pl-4 pr-4 rounded-[5px] text-[#00302E87]">
            <input
              type="password"
              placeholder="Your Password"
              className="border-none outline-none md:pr-20"
            />
            <p className="text-bold font-[600] text-[16px] pl-[3rem] lg:pl-[3.5rem]">
              Show
            </p>
          </div>
          <Link to="dashboard">
            <button className="text-[#FBDDBB] bg-[#00302E] py-4 px-[8rem] md:px-[10.6rem] rounded-[5px] font-[500] text-[18px]">
              LOG IN
            </button>
          </Link>
        </form>
        <div className="flex items-center justify-center w-full md:items-start md:justify-start space-x-10 md:space-x-16 lg:space-x-[12rem] text-[#00302EE8]">
          <Link to="/signup">
            <a href="#">Create an account</a>
          </Link>
          <a href="#">forgot password</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
