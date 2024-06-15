import { Outlet } from "react-router-dom";

import React from "react";
import NavBar from "../Components/layout pages/NavBar";
import Menu from "../Components/layout pages/Menu";
import Footer from "../Components/layout pages/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-row border-2 border-green-600 bg-[#082f49] text-[#ffff]">
        <div className="flex-6 border-2 border-red-300">
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
