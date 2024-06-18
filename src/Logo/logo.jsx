import React from "react";

const Logo = () => {
  return (
    <div className=" w-max flex flex-col gap-[2px] cursor-pointer  bg-blue-900 p-[2px]">
      <div className="w-[100%] flex gap-[2px] font-Titan">
        <div className="  p-[5px] bg-white text-blue-900 border-2">Spend</div>
        <div className="p-[5px] bg-blue-900 text-white border-2">Less</div>
      </div>
      <div className="px-[2px] text-[11px] font-Titan border-2">Be Fancy With Less</div>
    </div> 
  );
};

export default Logo;
