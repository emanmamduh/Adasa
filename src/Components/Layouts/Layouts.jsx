import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
