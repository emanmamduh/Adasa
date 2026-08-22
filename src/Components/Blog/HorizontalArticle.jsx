import React from "react";
import natImg from "../../assets/images/download.jpg";
import natImggg from "../../assets/images/imgi_1_avatar-4.jpg";
import { Link } from "react-router-dom";

export default function HorizontalArticle({ post }) {
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
        {" "}
        <div className="article-card border border-[#262626] group hover:border-orange-500/30 flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#161616]">
          <div className="card-img bg-amber-200 relative overflow-hidden   w-full md:w-72 lg:w-80 h-52 md:h-auto flex-shrink-">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center block group-hover:scale-110"
            />
          </div>

          <div className="card-wrapper flex flex-col  p-6">
            <div className="card-info flex gap-4">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                {category}
              </span>
              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <i className="fa-regular fa-clock"></i>
                {readTime}
              </span>
              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <i class="fa-regular fa-calendar"></i>
                {date}
              </span>
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
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
                </div>
                <div className="avatar-data">
                  <h4 className="text-sm font-semibold text-white">{name} </h4>
                  <p className="text-xs text-neutral-500">{role} </p>
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
