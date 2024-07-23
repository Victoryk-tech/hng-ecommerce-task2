import React, { useState } from "react";
import ArrivalsProduct from "./products/ArrivalsProduct";
import arrive from "../components/database/arrive";
const Arrivals = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className=" py-14 lg:p-20  flex flex-col items-center">
      <h1 className="text-center font-poppin font-semibold text-[26px]">
        New Arrivals
      </h1>

      <div className="pt-8">
        <div>
          {isLoading ? (
            "loading......."
          ) : (
            <div className="flex  max-w-[300px] sm:max-w-[600px] lg:max-w-fit overflow-x-scroll items-start justify-start py-6 ">
              {arrive.length > 0 ? (
                arrive.map((product, index) => {
                  return (
                    <div className="">
                      <ArrivalsProduct key={index} arrive={product} />
                    </div>
                  );
                })
              ) : (
                <div>There is no message</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
