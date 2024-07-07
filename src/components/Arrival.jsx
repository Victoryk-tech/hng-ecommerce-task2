import React from "react";
import dinningset from "../assets/dinningset.png";
import sofa1 from "../assets/sofaA.png";
import sofa2 from "../assets/sofaB.png";
import Button from "../shared/Button";

const Arrival = () => {
  return (
    <div className="px-28 py-10">
      <div>
        <div className="border-l-[16px] border-[#FF8933] py-5 px-2 font-inter">
          <h1 className="font-semibold text-[16px] text-[#FF8933]">Featured</h1>
        </div>
        <h1 className="font-semibold text-[36px]">New Arrival</h1>
        <div className="bg-[#5B3702] flex items-start justify-start p-10 space-x-12">
          <div className="bg-white rounded-2xl flex flex-col items-center justify-center py-4">
            <div className="h-64 w-64">
              <img src={dinningset} alt="" className="w-full h-full" />
            </div>
            <div className=" space-y-1 px-10 py-10">
              <h1 className="text-[24px] font-inter font-semibold">
                Dining Set Collection
              </h1>
              <p className="text-[14px] font-poppin font-normal">
                Cozy four seater set that give you another vibe.
              </p>

              <Button />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start  space-y-3">
            <div className="bg-white rounded-2xl pl-4 flex items-center justify-center">
              <div className="space-y-1 px-4">
                <h1 className="text-[24px] font-inter font-semibold">
                  Sofa Collections
                </h1>
                <p className="text-[14px] font-poppin font-normal">
                  Featured woman collections that give you another vibe.
                </p>

                <Button />
              </div>
              <div className="w-60 h-60">
                <img src={sofa1} alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="bg-white rounded-2xl px-4 flex items-center justify-center py-4">
              <div className="space-y-1 pl-4">
                <h1 className="text-[24px] font-inter font-semibold">
                  Sofa Collections
                </h1>
                <p className="text-[14px] font-poppin font-normal">
                  Featured woman collections that give you another vibe.
                </p>

                <Button />
              </div>
              <div className="w-52 h-52">
                <img src={sofa2} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
