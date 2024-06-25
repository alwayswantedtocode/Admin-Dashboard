import React from "react";
import { topDealUsers } from "../data";

const Topdeals = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      <h1 className=" text-3xl font-bold">Top Deals</h1>
      <div className=" flex flex-col gap-[20px] ">
        {topDealUsers.map((dealers) => {
          return (
            <div className="flex  items-center gap-[15px] " key={dealers.id}>
              <div className="w-max h-max rounded-[50%] border-2  hidden xl:flex">
                <img
                  src={dealers.img}
                  alt="A T"
                  className="cover w-[3rem] h-[2.7rem] rounded-[50%]"
                />
              </div>
              <div className="w-[100%] flex flex-col xl-flex-row items-center justify-between ">
                <span className="">
                  <p className="font-bold">{dealers.username}</p>
                  <p className="">{dealers.email}</p>
                </span>
                <span className="font-bold">${dealers.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topdeals;
