import React from "react";
import natImg from "../../assets/images/download.jpg";
import natImggg from "../../assets/images/imgi_1_avatar-4.jpg";
import { Link } from "react-router-dom";
import Categorey from "../Categorey/Categorey";
export default function ArticleCard({ post }) {
  return (
    <div>
      <Link to={`/blog/${post?.slug}`}>
        <div className="group my-3 relative  bg-[#161616] rounded-2xl overflow-hidden hover:border-orange-500 transition-all duration-500">
          <div className="relative h-48 overflow-hidden  bg-cyan-400">
            <img
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src={post?.image}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent"></div>
            <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
              {post?.category}
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
              {post?.title}
            </h3>
            <div className="flex items-center justify-between text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <img
                  src={post?.author.avatar}
                  alt={post?.author.name}
                  className="w-6 h-6 rounded-full"
                />
                {post?.author.name}
              </span>
              <span>{post?.readTime} </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
    // </div>
  );
}
