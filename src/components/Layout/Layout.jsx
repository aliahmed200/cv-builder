import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="animate-faidIn">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
