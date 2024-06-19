import React from "react";
import { menuLists } from "./data";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] border-r-2 border-stone-400">
      {menuLists.map((menulist,index) => {
        return (
          <div className=" gap-[20px] w-[10rem] md:w-[12rem]" key={index}>
            <span className="pl-[1rem] py-[5px] text-stone-300">
              {menulist.header}
            </span>
            {menulist?.menu.map((menu) => {
              return (
                <Link to={menu.link}>
                  <div
                    className="flex items-center py-[1rem] pl-[1.2rem] gap-[10px]"
                    key={menu.id}
                  >
                    <span className="">{menu.Icon}</span>
                    <span className=" font-semibold">{menu.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        );
      })}
      <div>Greko</div>
    </div>
  );
};

export default Menu;
