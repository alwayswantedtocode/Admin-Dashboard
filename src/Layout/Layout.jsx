import { Outlet } from "react-router-dom";

import React from "react";
import NavBar from "../Components/layout pages/NavBar";
import Menu from "../Components/layout pages/Menu";
import Footer from "../Components/layout pages/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-row   text-[#ffff]">
        <div className="flex-3 ">
          <Menu />
        </div>
        <div className=" flex-1">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
