import React from "react";
import { Link, useNavigate } from "react-router-dom";
import natImg from "../../assets/images/download.jpg";
import natImggg from "../../assets/images/imgi_1_avatar-4.jpg";
import NavTabs from "../Blog/NavTabs";
import { use } from "react";
// import ArticlePage from "../ArticlePage/ArticlePage";
//  (selectedArticle, setSelectedArticle);
export default function Card({
  post,
  index,
  selectedArticle,
  setSelectedArticle,
  openArticle,
}) {
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
      {/* <NavTabs /> */}

      <Link to={`/blog/${post.slug}`}>
        <div
          // onClick={() => openArticle(index)}
          // id={index}
          // to={`/blog/articlepage/${slug}`}
          className="article group rounded-2xl overflow-hidden bg-[#161616] border border-[#262626] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="article-img relative bg-red-50 overflow-hidden">
            <div className="img-tag z-20  absolute translate-y-3 -translate-x-5 rounded-full items-center gap-1.5 px-3 py-1.5  bg-[#0a0a0a]/80 backdrop-blur-sm text-xs text-white font-semibold border border-[#333333]">
              {category}
            </div>
            <img
              src={image}
              alt="imgg"
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute  inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="content p-6">
            <div className="article-info">
              <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                <span className="flex items-center gap-1">
                  {readTime}
                  <i className="fa-regular fa-clock"></i>
                </span>
                <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                <span> {date} </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                {title}
              </h3>
              <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                {excerpt}
              </p>
            </div>
            <div className="auther border-t border-[#262626] py-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="profile-img  size-13 rounded-full overflow-hidden border-2 border-[#262626] ">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="profile-data">
                  <p className="text-sm font-medium text-white">{name} </p>
                  <p className="text-xs text-neutral-500">{role} </p>
                </div>
              </div>

              <div className="size-8 text-orange-500 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500  group-hover:text-white  transition-all duration-300 border border-orange-500/20 group-hover:border-transparent">
                <i className="fa-solid fa-angle-left transition-all duration-300"></i>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
