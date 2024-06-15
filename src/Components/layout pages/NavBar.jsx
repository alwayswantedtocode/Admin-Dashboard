import React from "react";
import data from "./data";
import SettingsIcon from "./Icons/settingsIcon";

const NavBar = () => {
  return (
    <header className="w-[100%] h-[5rem] flex px-[1rem] items-center justify-center bg-[#082f49] text-[#ffff] border-2 ">
      <nav className="h-[4rem] w-[100%] flex items-center text-3xl">
        <div className="flex-3 border-2 border-red-500">
          <span className="">Greeko</span>
        </div>
        <div className="flex-1 border-2 border-red-500 flex gap-[10px] justify-end">
          {data.map((icon) => {
            return (
              <span className="" key={icon.id}>
                {icon.Icon}
              </span>
            );
          })}
        </div>
        <div className="">
          <SettingsIcon />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
