import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function NavTabs({ categoreisList, ctgryType, setCtgryType }) {
  // const categoryp = useParams();
  // const queryParam = useSearchParams();
  //بسبب الري رندر الكاتيجوري بيروح علي طول مش بيثبت 

  // console.log(category.get("category"));

  // console.log(categorey.categoryName);
  // console.log(categoryp);
  
  const [searchParams, setSearchParams] = useSearchParams();

  // Use the .get() method to read specific query strings
  const searchQuery = searchParams.get("category"); //خدناها من اليو ار ال
  console.log(searchQuery);
  // setCtgryType(searchQuery);
  

  return (
    <div className="sticky top-29 md:top-22 z-40 bg-[#0a0a0a]/90 p-2">
      {/* <div className="search-bar   bg-[#0a0a0a] py-6">
        <div className="container mx-auto w-[90%] xl:w-[80%] relative bg-red-900">
          <div className="flex flex-col items-center justify-center">
            <div className="search relative">
              <input
                placeholder="ابحث في المقالات..."
                className=" w-full  md:w-[35%]  relative px-5 py-3 pr-12 bg-[#161616] border border-[#262626] rounded-xl placeholder:text-neutral-500"
                type="text"
                // value=""
              />
              <i className=" absolute top-[29%] right-[29%] fa-solid fa-magnifying-glass text-lg text-neutral-500"></i>
            </div>

            <div className="search relative">
              <input
                placeholder="ابحث في المقالات..."
                className="  md:w-[35%] xl:w-[] relative px-5 py-3 pr-12 bg-[#161616] border border-[#262626] rounded-xl placeholder:text-neutral-500"
                type="text"
                // value=""
              />
              <i className=" absolute top-[29%] right-[29%] fa-solid fa-magnifying-glass text-lg text-neutral-500"></i>
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
        <div className="tabs flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              // value=""
              className="bg-[#161616] outline focus:border-[#f97316] border border-[#262626] rounded-2xl w-full px-5 py-3 pr-12 placeholder:text-neutral-600"
              placeholder="ابحث في المقالات..."
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setCtgryType("جميع المقالات")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${ctgryType=="جميع المقالات" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : " bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}  cursor-pointer`}
            >
              جميع المقالات
            </button>

            {categoreisList?.map((categorey) => {
              return (
                <button
                  id={categorey.id}
                  // onClick={() => setCtgryType(searchQuery)}
                  onClick={() => setCtgryType(categorey.categoryName)}
                  // categorey.categoryName == searchQuery
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${ctgryType === categorey.categoryName ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : " bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"} cursor-pointer`}
                >
                  {/* عملنها بالاسم مش التايب */}
                  {categorey.categoryName}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
