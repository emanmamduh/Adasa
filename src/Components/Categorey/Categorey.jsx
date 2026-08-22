import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Categorey({
  postsList,
  categoreisList,
  ctgryType,
  setCtgryType,
}) {
  // داصح ولا غلط
  // const [categoreis, setCategoreis] = useState({});
  // useEffect(() => {
  //   const categoreisList = postsList?.reduce((prevArt, currentArt) => {
  //     const ctgry = currentArt.category;
  //     prevArt[ctgry] = (prevArt[ctgry] || 0) + 1;
  //     return prevArt;
  //   }, {});
  //   setCategoreis(categoreisList);
  // }, []);

  // console.log(categoreis);
  // console.log(categoreisList);

  // console.log(ctgryType);
  return (
    <>
      {categoreisList.map((ctgry) => {
        //الماب دب عشان تلف عليهم دي بقي اللوب بس الي فوق كانت بتحول
        return (
          <Link
            onClick={() => setCtgryType(ctgry.categoryName)}
            id={ctgry.id}
            to="/blog"
            className="cartegory-card group overflow-hidden bg-[#161616] border border-[#262626]  hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1   relative  rounded-xl p-4 "
          >
            <div className="linear-layout absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="card-contetnt relative z-20 flex flex-col gap-4 p-2">
              <div className="ctgry-btn size-8 flex justify-center items-center rounded-full opacity-0 bg-[#262626] absolute top-13 left-10 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300 group-hover:text-white ">
                <i className="fa-solid fa-angle-left "></i>
              </div>

              <div className="card-icon size-12 rounded-xl text-xl flex justify-center items-center bg-orange-400/10 group-hover:bg-white/20 border border-orange-400/30 group-hover:border-transparent">
                {/* <i className="fa-solid fa-user"></i>
                                      <i className="fa-solid fa-mountain-sun"></i>
                                      <i className="fa-solid fa-sliders"></i>
                                      <i className="fa-solid fa-gear"></i>
                                */}
                <i className="fa-solid fa-gear text-orange-500  group-hover:text-white "></i>
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300">
                {ctgry.categoryName}
              </h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                <span>3</span>
                مقالة
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
