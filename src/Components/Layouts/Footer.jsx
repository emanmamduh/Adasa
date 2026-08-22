import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"; // Solid
import {
  faXTwitter,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className=" relative bg-[#0a0a0a] text-neutral-300">
        <div className="footer-content relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-13">
            <div className="footer-about flex flex-col gap-7">
              <header className="footer-header flex items-center gap-3">
                <div className="logo size-11 rounded-lg flex justify-center items-center text-2xl font-bold bg-linear-to-br from-orange-500 to-orange-600 hover:scale-105 transitm duration-300">
                  ع
                </div>
                <div className="footer-title font-bold text-xl">عدسة</div>
              </header>
              <div className="footer-desc text-sm text-neutral-500 leading-relaxed ">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </div>
              <ul className="social-list flex gap-5">
                <li>
                  <Link
                    href=""
                    className="icon size-11 flex justify-center items-center rounded-xl text-neutral-500 text-xl
                      bg-[#161616] border border-[#262626]
                      hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent hover:scale-110 hover:text-white transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="icon size-11 flex justify-center items-center rounded-xl text-neutral-500 text-xl
                      bg-[#161616] border border-[#262626]
                      hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent hover:scale-110 hover:text-white transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="icon size-11 flex justify-center items-center rounded-xl text-neutral-500 text-xl
                      bg-[#161616] border border-[#262626]
                      hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent hover:scale-110 hover:text-white transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="icon size-11 flex justify-center items-center rounded-xl text-neutral-500 text-xl
                      bg-[#161616] border border-[#262626]
                      hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent hover:scale-110 hover:text-white transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-explore">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                استكشف
              </h3>
              <ul className="explore-list ms-3 flex flex-col gap-5">
                <Link
                  href=""
                  className=" group text-sm text-neutral-500 hover:text-orange-500 transition-all duration-200"
                >
                  <li>
                    <div className="exList-icon me-0.5 -mr-4 opacity-0 group-hover:opacity-100 group-hover:mr-0 transition-all duration-200  inline">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    الرئيسية
                  </li>
                </Link>
                <Link
                  href=""
                  className=" group text-sm text-neutral-500 hover:text-orange-500 transition-all duration-200"
                >
                  <li>
                    <div className="exList-icon me-0.5 -mr-4 opacity-0 group-hover:opacity-100 group-hover:mr-0 transition-all duration-200  inline">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    المدونة
                  </li>
                </Link>
                <Link
                  href=""
                  className=" group text-sm text-neutral-500 hover:text-orange-500 transition-all duration-200"
                >
                  <li>
                    <div className="exList-icon me-0.5 -mr-4 opacity-0 group-hover:opacity-100 group-hover:mr-0 transition-all duration-200  inline">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    من نحن
                  </li>
                </Link>
              </ul>
            </div>
            <div className="footer-categories">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                التصنيفات
              </h3>
              <ul className="explore-list ms-3 flex flex-col gap-5">
                <Link
                  href=""
                  className=" group text-sm text-neutral-500 hover:text-orange-500 transition-all duration-200"
                >
                  <li>
                    <div className="exList-icon me-0.5 -mr-4 opacity-0 group-hover:opacity-100 group-hover:mr-0 transition-all duration-200  inline">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    إضاءة
                  </li>
                </Link>
                <Link
                  href=""
                  className=" group text-sm text-neutral-500 hover:text-orange-500 transition-all duration-200"
                >
                  <li>
                    <div className="exList-icon me-0.5 -mr-4 opacity-0 group-hover:opacity-100 group-hover:mr-0 transition-all duration-200 inline">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    بورتريه
                  </li>
                </Link>
                <Link
                  href=""
                  className=" group text-sm text-neutral-500 hover:text-orange-500 transition-all duration-200"
                >
                  <li>
                    <div className="exList-icon me-0.5 -mr-4 opacity-0 group-hover:opacity-100 group-hover:mr-0 transition-all duration-200  inline">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    مناظر طبيعية
                  </li>
                </Link>
                <Link
                  href=""
                  className=" group text-sm text-neutral-500 hover:text-orange-500 transition-all duration-200"
                >
                  <li>
                    <div className="exList-icon me-0.5 -mr-4 opacity-0 group-hover:opacity-100 group-hover:mr-0 transition-all duration-200  inline">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    تقنيات
                  </li>
                </Link>
              </ul>
            </div>

            <div className="footer-newsletter flex flex-col gap-3">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                ابقى على اطلاع
              </h3>
              <div className="newsletter-desc text-sm text-neutral-500">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </div>
              <div className="email flex flex-col gap-3 mt-1">
                <input
                  type="email"
                  name="userRmail"
                  id="emailInput"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="rounded-xl text-neutral-500 text-sm w-full
                      bg-[#161616] border border-[#262626] p-2.5 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                />
                <Link
                  className="w-full btn-primary transform hover:-translate-y-0.5">
                  اشترك
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* line */}
        <div className="relative border-t border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-600">
                © 2026 عدسة. صنع بكل
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-orange-500 mx-0.5"
                />
                جميع الحقوق محفوظة.
              </p>
              <div className="flex gap-6">
                <Link
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                  href="/privacy"
                  data-discover="true"
                >
                  سياسة الخصوصية
                </Link>
                <Link
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                  href="/terms"
                  data-discover="true"
                >
                  شروط الخدمة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  );
}
