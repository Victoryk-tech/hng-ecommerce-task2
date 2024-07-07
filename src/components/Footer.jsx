import React from "react";
import code from "../assets/code.png";
import google from "../assets/google.png";
import app from "../assets/appStore.png";
import media from "../assets/media.png";
import send from "../assets/sendicon.png";
const Footer = () => {
  return (
    <div className="px-20 bg-[#5B3702] text-white">
      <div className="flex items-start justify-between py-6 border-b-[1px]">
        <div className="space-y-2">
          <h1 className="font-bold text-[24px] font-inter">Duexe</h1>
          <p className="font-medium text-[20px] font-poppin">subscribe</p>
          <p className="font-light text-[16px] font-poppin">
            Get 10% off your first order
          </p>
          <div className="flex items-start justify-between py-2 pl-2 pr-4 border-white border-[1px]  bg-transparent text-[16px] font-normal font-poppin">
            <input
              type="text"
              placeholder="Enter your email"
              className=" outline-none bg-transparent"
            />
            <img src={send} alt="" />
          </div>
        </div>
        <div className="space-y-4 font-poppin">
          <h1 className="font-medium text-[20px]">Support</h1>
          <p className="font-light text-[16px]">
            414 Summit lane, Wuse 2, Abuja.
          </p>
          <p className="font-light text-[16px]">hello@duexe.com</p>
          <p className="font-light text-[16px]">+234-708-000-344</p>
        </div>
        <div className="space-y-4 font-poppin">
          <h1 className="font-medium text-[20px]">Account</h1>
          <p className="font-light text-[16px]">My Account</p>
          <p className="font-light text-[16px]">Login/Register</p>
          <p className="font-light text-[16px]">Cart</p>
          <p className="font-light text-[16px]">Wishlist</p>
          <p className="font-light text-[16px]">Shop</p>
        </div>
        <div className="space-y-4 font-poppin">
          <h1 className="font-medium text-[20px]">Quick Link</h1>
          <p className="font-light text-[16px]">Privacy Policy</p>
          <p className="font-light text-[16px]">Terms of use</p>
          <p className="font-light text-[16px]">FAQ</p>
          <p className="font-light text-[16px]">Contact</p>
        </div>
        <div className="space-y-4 font-poppin">
          <h1 className="font-medium text-[20px]">Download App</h1>
          <p className="font-light text-[16px]">
            Save $10 with app new user only
          </p>
          <div className="flex items-start justify-start">
            <img src={code} alt="" className=" h-[4.2rem]" />
            <div className="">
              <img src={google} alt="" />
              <img src={app} alt="" />
            </div>
          </div>
          <div>
            <img src={media} alt="" />
          </div>
        </div>
      </div>
      <div className="py-5 flex items-center justify-center text-[16px] font-poppin font-extralight">
        <p>&copy; Duexe 2024. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
