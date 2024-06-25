import React from "react";
import { icons } from "./data";
import SettingsIcon from "./Icons/settingsIcon";
import userIcon from "../../Assets/profile-gender-neutral.jpg";
import Logo from "../../Assets/Logo.png";


const NavBar = () => {
  return (
    <header className="w-[100%] h-[5rem] flex px-[0.5rem] items-center justify-center bg-[#082f49] text-[#ffff]">
      <nav className="h-[4rem] w-[100%] flex items-center text-3xl justify-between lg:justify-center">
        <div className="flex-3 px-2">
          <span className="w-max h-max">
            <img src={Logo} alt="logo" className="w-[7rem] h-[3.5rem] cover " />
          </span>
        </div>
        <div className="flex-1  gap-[20px] justify-end px-2 hidden lg:flex">
          {icons.map((icon) => {
            return (
              <span className="" key={icon.id}>
                {icon.Icon}
              </span>
            );
          })}
        </div>
        <div className=" flex items-center gap-[20px] px-2">
          <div className="flex w-max h-max rounded-[50%] gap-[10px] items-center">
            <img
              src={userIcon}
              alt={userIcon}
              className="cover w-[2.5rem] h-[2.5rem] rounded-[50%]"
            />
            <p>User</p>
          </div>

          <SettingsIcon />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
