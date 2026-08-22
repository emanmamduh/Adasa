import React from "react";
import Card from "../Card/Card";

export default function ViewArticleBar({
  postsList,
  viewMode,
  setViewMode,
  ctgryType,
  setCtgryType,
}) {
  return (
    <div>
      <div className="container w-[90%] xl:w-[80%] mx-auto flex items-center justify-between my-8">
        <p className="text-neutral-400">
          عرض{" "}
          <span className="font-bold text-white">
            {ctgryType && ctgryType !== "جميع المقالات"
              ? postsList?.filter((post) => post.category === ctgryType)
                  .length || 0
              : postsList?.length || 0}
          </span>{" "}
          مقالات
          {ctgryType !== "جميع المقالات" && (
            <>
              {" في "}
              <span className="font-bold text-orange-500 capitalize">
                {ctgryType}
              </span>
            </>
          )}
        </p>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode == "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}  cursor-pointer`}
              title="عرض شبكي"
            >
              <i className="fa-solid fa-border-all"></i>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode == "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}  cursor-pointer`}
              title="عرض قائمة"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          {ctgryType !== "جميع المقالات" ? (
            <button
              onClick={() => setCtgryType("جميع المقالات")}
              class="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors"
            >
              <i className="fa-solid fa-x"></i>
              مسح الفلاتر
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
