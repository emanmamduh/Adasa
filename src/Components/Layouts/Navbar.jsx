import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isCLicked, setIsCLicked] = useState(false);

  function showNavBAr() {
    setIsCLicked(!isCLicked);
  }
  return (
    <nav className="bg-[#0a0a0a] p-4.5 border border-b-[#262626] fixed top-0 right-0 w-full z-50">
      <div className="nav-content   w-[80%] mx-auto flex justify-between">
        <Link to="/home" className="group nav-logo flex gap-2.5 items-center">
          <div className="logo-img size-13 group-hover:scale-105 transition-all duration-300">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <div className="logo-wrapper">
            <div className="title text-xl text-white font-bold">عدسة</div>
            <p className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
              عالم التصوير الفوتوغرافي
            </p>
          </div>
        </Link>

        <div className="navigation--menu bg-[#161616] p-4 border border-[#262626] rounded-3xl w-fit px-4 hidden md:block">
          <NavLink
            to="/"
            className="text-neutral-400 text-sm font-medium mx-1 hover:text-white transition-all duration-300 px-3 py-2.5"
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/blog"
            className="text-neutral-400 text-sm font-medium mx-1 hover:text-white transition-all duration-300 px-3 py-2.5"
          >
            المدونة
          </NavLink>
          <NavLink
            to="/login"
            className="text-neutral-400 text-sm font-medium mx-1 hover:text-white transition-all duration-300 px-3 py-2.5"
          >
            من نحن
          </NavLink>
        </div>

        <div className="start-section  items-center gap-3 hidden md:flex">
          <button className="size-12 p-2 flex flex-row justify-center items-center  text-neutral-400 hover:text-orange-500 border border-transparent  rounded-xl hover:border-[#262626] transition-all duration-300">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          {/* bg-orange-500 font-bold p-3.5 px-8 rounded-4xl text-white */}
          <Link
            to="/blog"
            className=" btn-primary text-sm hover:-translate-y-0.5 transition-all duration-300"
          >
            ابدأ القراءة
          </Link>
        </div>
        <button
          onClick={showNavBAr}
          className="md:hidden text-xl flex justify-center items-center p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
        >
          <i className={`fa-solid ${isCLicked ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
      <div className="hidden-list">
        <div
          className={`navList md:hidden overflow-hidden transition-all duration-300 ${isCLicked ? "max-h-80 pb-6" : "max-h-0"}`}
        >
          <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
            <div className="flex flex-col space-y-1">
              <NavLink
                to="/"
                onClick={showNavBAr}
                className=" px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/blog"
                onClick={showNavBAr}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
              >
                المدونة
              </NavLink>
              <NavLink
                to="/login"
                onClick={showNavBAr}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
              >
                من نحن
              </NavLink>

              <Link
                to="/blog"
                onClick={showNavBAr}
                className=" btn-primary text-sm hover:-translate-y-0.5 transition-all duration-300"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
