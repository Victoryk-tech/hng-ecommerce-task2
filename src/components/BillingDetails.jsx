import React from "react";

const BillingDetails = () => {
  return (
    <div className=" pl-8 space-y-10">
      <h1 className="font-inter text-[36px] font-medium text-start">
        Billing Details
      </h1>

      <form action="#" className="font-poppin space-y-4">
        <div className="space-y-2 flex flex-col  items-start justify-start">
          <label htmlFor="" className="text-[16px] ">
            First Name
          </label>
          <input
            type="text"
            className="outline-none py-2 pl-2 pr-40 bg-[#f5f5f5]"
          />
        </div>
        <div className="space-y-2 flex flex-col  items-start justify-start">
          <label htmlFor="" className="text-[16px] ">
            Last Name
          </label>
          <input
            type="text"
            className="outline-none py-2 pl-2 pr-40 bg-[#f5f5f5]"
          />
        </div>
        <div className="space-y-2 flex flex-col  items-start justify-start">
          <label htmlFor="" className="text-[16px] ">
            Street Address
          </label>
          <input
            type="text"
            className="outline-none py-2 pl-2 pr-40 bg-[#f5f5f5]"
          />
        </div>
        <div className="space-y-2 flex flex-col  items-start justify-start">
          <label htmlFor="" className="text-[16px] ">
            Apartment, floor, etc. (optional)
          </label>
          <input
            type="text"
            className="outline-none py-2 pl-2 pr-40 bg-[#f5f5f5]"
          />
        </div>
        <div className="space-y-2 flex flex-col  items-start justify-start">
          <label htmlFor="" className="text-[16px] ">
            Town/City*
          </label>
          <input
            type="text"
            className="outline-none py-2 pl-2 pr-40 bg-[#f5f5f5]"
          />
        </div>
        <div className="space-y-2 flex flex-col  items-start justify-start">
          <label htmlFor="" className="text-[16px] ">
            Phone Number*
          </label>
          <input
            type="Number"
            className="outline-none py-2 pl-2 pr-40 bg-[#f5f5f5]"
          />
        </div>
        <div className="space-y-2 flex flex-col  items-start justify-start">
          <label htmlFor="" className="text-[16px] ">
            Email Address*
          </label>
          <input
            type="Email"
            className="outline-none py-2 pl-2 pr-40 bg-[#f5f5f5]"
          />
        </div>
      </form>
      <div className="flex items-center justify-start gap-2 text-start">
        <input type="checkbox" className="bg-[#FF8933]" />
        <p className="text-[16px] font-normal">
          Save this information for faster check-out next time
        </p>
      </div>
    </div>
  );
};

export default BillingDetails;
