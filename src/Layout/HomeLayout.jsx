import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Components";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
