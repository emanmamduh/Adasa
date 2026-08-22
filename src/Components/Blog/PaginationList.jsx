import React, { useState } from "react";

export default function PaginationList({ postsList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <>
      <div className="container w-[90%] xl:w-[80%] mx-auto flex justify-center items-center gap-2 mt-12">
        <button
          className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
          disabled=""
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <div className="btns flex items-center gap-1">
          <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white">
            1
          </button>
          <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white">
            2
          </button>
        </div>
        <button className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      </div>
      <p className="text-center text-neutral-500 mt-4 text-sm">صفحة 1 من 5</p>
    </>
  );
}
