import React, { useEffect, useState } from "react";
import Article from "../Article/Article";
import Card from "../Card/Card";
import axios from "axios";
import ViewArticleBar from "./ViewArticleBar";
import NavTabs from "./NavTabs";
import Categorey from "./../Categorey/Categorey";
import HorizontalArticle from "./HorizontalArticle";
import PaginationList from "./PaginationList";
import { useSearchParams } from "react-router-dom";

export default function Blog({
  postsList,
  categoreisList,
  ctgryType,
  setCtgryType,
  selectedArticle,
  setSelectedArticle,
}) {
  const [viewMode, setViewMode] = useState("grid");
  // const [ctgryType, setCtgryType] = useState("");

  console.log(postsList[0]);

  // const targetCategory = postsList?.filter(
  //   (post) => post.category === ctgryType,
  // );
  // console.log(targetCategory);

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("category"));
  // setCtgryType(searchParams.get("category"));
  // ععرفت اخده هنا عادي بس مش فليكسبل بقي باقي الحاجه
  // ولو دوست علي اي حاجه هتبقي نفي الكاتجوري الي فيها

  return (
    <>
      <main className="bg-[#0a0a0a] relative">
        <section className="blog min-h-reen  relative text-white pt-35 pb-15">
          <div className="container w-[80%] mx-auto z-10  py-10">
            <div className="absolute inset-0 bg-[#0a0a0a] -z-10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
            </div>

            <header className="section-header relative flex flex-col items-center justify-center gap-6">
              <div className="sec-label w-fit py-3 px-5 relative text-orange-500 flex  items-center gap-1.5 text-sm font-medium bg-orange-400/10 border border-orange-400/30 rounded-4xl">
                <span className="relative size-2 rounded-full bg-[#ea580c] animate-pulse"></span>
                <i className="fa-brands fa-blogger-b opacity-80"></i>
                مدونتنا
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1.5">
                استكشف{" "}
                <span className="bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  {" "}
                  مقالاتنا
                </span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </header>
          </div>
        </section>
        <NavTabs
          categoreisList={categoreisList}
          ctgryType={ctgryType}
          setCtgryType={setCtgryType}
        />
        {/* ليه اما نقلت السيكشن هنا اشنعلت بس اما كان هناك لا */}
        <section className="py-10 border-t border-[#262626] bg-[#0a0a0a]">
          <ViewArticleBar
            postsList={postsList}
            categoreisList={categoreisList}
            viewMode={viewMode}
            setViewMode={setViewMode}
            ctgryType={ctgryType}
            setCtgryType={setCtgryType}
          />
          <div
            className={`container w-[90%] xl:w-[80%] mx-auto ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "mt-7 flex flex-col bg-red gap-12"}`}
          >
            {postsList
              ?.filter(
                (post) =>
                  ctgryType == "جميع المقالات" || post.category === ctgryType,
              )
              .map((post, index) =>
                viewMode === "grid" ? (
                  <Card key={post.id} post={post} index={index} />
                ) : (
                  <HorizontalArticle key={post.id} post={post} />
                ),
              )}
          </div>
        </section>
        <PaginationList postsList={postsList} />
      </main>
    </>
  );
}
