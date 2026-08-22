import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Subscribtion from "./Subscribtion";
import Article from "../Article/Article";
import Footer from "./../Layouts/Footer";
import Card from "../Card/Card";
import axios from "axios";
import Categorey from "../Categorey/Categorey";
import Blog from "../Blog/Blog";
import ArticlePage from "../ArticlePage/ArticlePage";
import ArticleCard from "../ArticlePage/ArticleCard";

export default function Home({
  postsList,
  categoreisList,
  ctgryType,
  setCtgryType,
}) {
  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a]">
        <section className="container relative w-[95%] p-30 xl:w-[80%] mx-auto">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl "></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl"></div>

          <div className="content-wrapper pt-10  relative text-center flex flex-col items-center justify-center">
            <div className="greeting  py-3 px-5  relative text-white flex justify-center items-center gap-3 text-sm font-medium bg-orange-400/10 border border-orange-400/30 rounded-4xl">
              <span className="relative size-2 rounded-full bg-[#ea580c] animate-pulse"></span>
              <span className="relative flex size-2 gap-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#ea580c] opacity-75"></span>
                <span className="relative size-2 rounded-full bg-[#ea580c]"></span>
              </span>
              مرحباً بك في عدسة
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              {" "}
              اكتشف
              <span className="text-orange-500"> فن </span>
              <br />
              التصوير الفوتوغرافي
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            <div className="explore-btns flex flex-col gap-3 mb-16 sm:flex-row">
              <Link
                to="/blog"
                className="group btn-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                استكشف المقالات
                <i className="fa-solid fa-arrow-left-long ms-2 group-hover:-translate-x-1 transition-all duration-300"></i>
              </Link>
              <Link
                to="/"
                className="flex justify-center items-center border border-[#262626] bg-transparent text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-[#f97316] hover:border-[#f97316] hover:bg-[#f973161a]"
              >
                <i className="fa-solid fa-circle-info me-2 bg-transparent"></i>
                اعرف المزيد
              </Link>
            </div>

            <div className="adasa-statisitics grid grid-cols-2 md:grid-cols-4 gap-4 ">
              <div className="statisics-card hover:scale-105 transition-all duration-300 p-4 bg-[#161616cc] rounded-3xl border border-[#262626] flex flex-col gap-1 items-center justify-center px-15">
                <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                <span className="stat-value text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  50+
                </span>
                <span className="title text-neutral-500 text-sm">مقالة</span>
              </div>
              <div className="statisics-card hover:scale-105 transition-all duration-300 p-4 bg-[#161616cc] rounded-3xl border border-[#262626] flex flex-col gap-1 items-center justify-center px-15">
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                <span className="stat-value text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  +10ألف
                </span>
                <span className="title text-neutral-500 text-sm">قارئ</span>
              </div>
              <div className="statisics-card hover:scale-105 transition-all duration-300 p-4 bg-[#161616cc] rounded-3xl border border-[#262626] flex flex-col gap-1 items-center justify-center px-15">
                <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
                <span className="stat-value text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  4
                </span>
                <span className="title text-neutral-500 text-sm">تصنيفات</span>
              </div>
              <div className="statisics-card hover:scale-105 transition-all duration-300 p-4 bg-[#161616cc] rounded-3xl border border-[#262626] flex flex-col gap-1 items-center justify-center px-15">
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                <span className="stat-value text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  6
                </span>
                <span className="title text-neutral-500 text-sm">كاتب</span>
              </div>
            </div>
          </div>
        </section>

        <section className="selected-articles  relative text-white py-24 ">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>
          <div className="contetnt-wrapper w-[95%] relative xl:w-[80%] mx-auto">
            <header className="sec-header flex justify-between">
              <div className="header-info">
                <div className="badge w-fit  py-3 px-5  relative  text-orange-500 flex justify-center items-center gap-3 text-sm font-medium bg-orange-400/10 border border-orange-400/30 rounded-4xl">
                  <span className="relative size-2 rounded-full bg-[#ea580c] animate-pulse"></span>
                  <span className="relative flex size-2 gap-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[#ea580c] opacity-75"></span>
                    <span className="relative size-2 rounded-full bg-[#ea580c]"></span>
                  </span>
                  مميز
                </div>
                <h2 className=" text-white text-4xl  md:text-5xl leading-tight font-bold">
                  مقالات مختارة
                </h2>
                <p className="text-neutral-400 text-lg mt-1 leading-relaxed">
                  محتوى منتقى لبدء رحلة تعلمك
                </p>
              </div>
              <div className="view-btn self-end transform translate-y-[-50%]">
                <Link
                  to="/blog"
                  className="group px-5 py-3 text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-xl hover:-translate-y-0.5 transition-all duration-300 font-medium"
                >
                  عرض الكل
                  <i className="fa-solid fa-chevron-left ms-2 group-hover:-translate-x-1 transition-all duration-300"></i>
                </Link>
              </div>
            </header>

            <div className="articles mt-7 flex flex-col bg-red gap-12">
              {postsList.slice(0, 3).map((post) => (
                <Article key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        <section className="categories-section py-24 border border-t-[#262626] border-b-[#262626] ">
          <div className="container w-[95%] xl:w-[80%] mx-auto">
            <header className="flex flex-col items-center mt-8 mb-4">
              <div className="badge mb-4 w-fit py-3 px-5 text-orange-500 flex justify-center items-center gap-3 text-sm font-medium bg-orange-400/10 border border-orange-400/30 rounded-4xl">
                <span className="relative size-2 rounded-full bg-[#ea580c] animate-pulse"></span>
                <span className="relative flex size-2 gap-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#ea580c] opacity-75"></span>
                  <span className="relative size-2 rounded-full bg-[#ea580c]"></span>
                </span>
                التصميفات
              </div>
              <h2 className="title text-[48px] font-bold text-white">
                استكشف حسب الموضوع
              </h2>
              <p className="subtitle text-neutral-400 text-lg mt-1 leading-relaxed">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>
            </header>

            <div className="all-catrgories grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <Categorey
                postsList={postsList}
                categoreisList={categoreisList}
                ctgryType={ctgryType}
                setCtgryType={setCtgryType}
              />
            </div>
          </div>
        </section>

        {/* Section latest-articles */}
        <section className="latest-articles relative py-24">
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent"></div>
          <div className="container w-[95%] xl:w-[80%] mx-auto">
            <header className="sec-header flex justify-between mb-5">
              <div className="header-info flex flex-col gap-5">
                <div className="badge w-fit  py-3 px-5  relative  text-orange-500 flex justify-center items-center gap-3 text-sm font-medium bg-orange-400/10 border border-orange-400/30 rounded-4xl">
                  <span className="relative size-2 rounded-full bg-[#ea580c] animate-pulse"></span>
                  <span className="relative flex size-2 gap-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[#ea580c] opacity-75"></span>
                    <span className="relative size-2 rounded-full bg-[#ea580c]"></span>
                  </span>
                  الأحدث
                </div>
                <h2 className=" text-white text-4xl  md:text-5xl leading-tight font-bold">
                  أحدث المقالات
                </h2>
                <p className="text-neutral-400 text-lg mt-1 leading-relaxed">
                  محتوى جديد طازج من المطبعة
                </p>
              </div>
              <Link
                to="/blog"
                className="group flex items-center gap-2 text-orange-500 font-semibold text-sm transition-all duration-300 hover:text-orange-400"
              >
                عرض جميع المقالات
                <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-1 transition-all duration-300"></i>
              </Link>
            </header>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  overflow-hidden">
              {postsList?.slice(3, 6).map((post) => (
                <Card key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        <Subscribtion />
      </main>
    </>
  );
}
