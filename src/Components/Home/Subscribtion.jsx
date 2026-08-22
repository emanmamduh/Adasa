import React from "react";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import { NavLink } from "react-router-dom";


export default function Subscribtion() {
  return (
    <>
      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="container flex flex-col gap-3 relative  w-[90%] xl:w-[60%] mx-auto border border-[#262626] rounded-3xl text-center p-8 md:p-12 lg:p-16 bg-[#161616]">
          <div className="sec-icon size-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="fa-regular fa-envelope text-white text-[29px]"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            اشترك في{" "}
            <span className="bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
              {" "}
              نشرتنا الإخبارية
            </span>
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>

          <form className="w-[70%] mx-auto flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              name="email"
              id="emailInput"
              placeholder="أدخل بريدك الإلكتروني"
              className="bg-[#0a0a0a] px-5 py-4 w-full rounded-xl text-white placeholder-neutral-500 border border-[#262626] 
              focus:outline-none focus:border-orange-500/50 sm:w-[70%]"
            />
            <NavLink
              type="submit"
              className="px-8 py-4 flex justify-center items-center bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 w-full sm:w-[30%]"
            >
              اشترك الآن
            </NavLink>
          </form>

          <div className="sec-footer mt-3 flex flex-wrap gap-4 justify-center items-center text-neutral-500">
            <div className="profiles flex items-center gap-3.5">

              {/* space-x-reverse */}
              <div className="imgs flex -space-x-2">
                <img
                  src={img4}
                  alt=""
                  className="size-9 rounded-full overflow-hidden border-2 border-[#262626]"
                />
                <img
                  src={img3}
                  alt=""
                  className=" size-9 rounded-full overflow-hidden border-2 border-[#262626]"
                />
                <img
                  src={img2}
                  alt=""
                  className="size-9 rounded-full overflow-hidden border-2 border-[#262626]"
                />
              </div>
              <span>
                انضم لـ <span className="text-white font-medium">+10,000</span> مصور
              </span>
            </div>

            <span className="text-sm text-neutral-500">بدون إزعاج</span>

            <span className="text-sm text-neutral-500">
              إلغاء الاشتراك في أي وقت
            </span> 
          </div>
        </div>
      </section>
    </>
  );
}
