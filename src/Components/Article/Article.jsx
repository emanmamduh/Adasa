import React from "react";
import natImg from "../../assets/images/download.jpg";
import natImggg from "../../assets/images/imgi_1_avatar-4.jpg";
import { Link } from "react-router-dom";
export default function Article({ post }) {
  const {
    author: { avatar, name, role },
    category,
    content,
    date,
    excerpt,
    featured,
    image,
    readTime,
    slug,
    title,
  } = post;
  return (
    <>
      <Link to={`/blog/${post.slug}`}>
        <div className="article-card border border-[#262626] group hover:border-orange-500/30 flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#161616]">
          <div className="card-img bg-amber-200 relative overflow-hidden  md:w-[50%]">
            <div className="img-tag z-20  absolute translate-y-3 -translate-x-5 rounded-full items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold">
              <i className="fa-solid fa-star text-[10px]"></i>
              مميز
            </div>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center block group-hover:scale-110"
            />
          </div>

          <div className="card-wrapper flex flex-col md:w- md:w-[50%]  p-6">
            <div className="card-info flex gap-4">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                {category}
              </span>
              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <i className="fa-regular fa-clock"></i>
                {readTime}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
              {title}
            </h2>
            <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
            <div className="card-footer mt-auto  flex justify-between bg-amber200">
              <div className="avatar flex gap-2  items-center">
                <div className="avatar-img relative">
                  <div className=" bg-red-500 size-15 rounded-full overflow-hidden border-2 border-[#262626] ">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div className="connected size-3.5 rounded-full absolute bg-orange-500 bottom-0 right-11 z-10 border border-black"></div>
                </div>
                <div className="avatar-data">
                  <h4 className="text-sm font-semibold text-white">{name} </h4>
                  <p className="text-xs text-neutral-500">{date} </p>
                </div>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
              >
                اقرأ المقال
                <i className="fa-solid fa-arrow-left-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
