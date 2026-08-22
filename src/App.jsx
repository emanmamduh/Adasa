import { useEffect, useState } from "react";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Layouts from "./Components/Layouts/Layouts";
// import Footer from "./Components/Layouts/Footer";
// import Navbar from "./Components/Layouts/Navbar";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import ArticlePage from "./Components/ArticlePage/ArticlePage";
import NavTabs from "./Components/Blog/NavTabs";
// import ArticlePage from "./Components/ArticlePage/ArticlePage";

function App() {
  const [postsList, setpostsList] = useState([]);
  const [categoreisList, setCategoreisList] = useState([]);
  const [ctgryType, setCtgryType] = useState("جميع المقالات");
  // خلينا الديف بتاعها all عشان تعرض هناك
  const [selectedArticle, setSelectedArticle] = useState(null);
  //مش شغاله هنا عشان اليوز نافيجيت اني احط الفانكشن هنا

  // Fetching API
  useEffect(() => {
    async function getArticles() {
      try {
        const response = await axios.get(`/posts.json`);
        setpostsList(response.data.posts);
        // <Category/> section
        const categoreis = response.data.posts?.reduce(
          (prevArt, currentArt) => {
            const ctgry = currentArt.category;
            prevArt[ctgry] = (prevArt[ctgry] || 0) + 1;

            return prevArt;
          },
          {},
        );

        // الي فوق رجعتلي اوبجكت مجمع كل حاجه انا عايزه افصلهم باستخدام ال entries
        // const categoreisList = Object.entries(categoreis).map(
        const cList = Object.entries(categoreis).map(
          //الي فوق رجعت [[] , []] بس انا عايزه [{} , {}] ف استخدمت الماب وحولتها
          ([ctgryName, count], index) => {
            //categoreis دي ارراي فيها قيمتين كي وفاليو ف كده عملنا destructing [ctgryName, count]
            //[["إضاءة", 4],["بورتريه", 6] ] ===>  [{ "إضاءة", 4} , {"بورتريه", 6}]
            return {
              id: index,
              categoryName: ctgryName,
              categoryCount: count,
            };
          },
        );
        setCategoreisList(cList);
        // console.log(cList);
      } catch (error) {
        console.log(error);
      }
    }
    getArticles();
  }, []);
  // console.log(categoreisList);

  // Routing
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          index: true,
          element: (
            <Home
              postsList={postsList}
              categoreisList={categoreisList}
              ctgryType={ctgryType}
              setCtgryType={setCtgryType}
              selectedArticle={selectedArticle}
              setSelectedArticle={setSelectedArticle}
            />
          ),
        },
        {
          path: "/blog",
          element: (
            <Blog
              postsList={postsList}
              categoreisList={categoreisList}
              ctgryType={ctgryType}
              setCtgryType={setCtgryType}
              selectedArticle={selectedArticle}
              setSelectedArticle={setSelectedArticle}
            />
          ),
        },
        {
          path: "/blog",
          element: (
            <NavTabs
              postsList={postsList}
              categoreisList={categoreisList}
              ctgryType={ctgryType}
              setCtgryType={setCtgryType}
              selectedArticle={selectedArticle}
              setSelectedArticle={setSelectedArticle}
            />
          ),
        },

        {
          path: "/blog/:slug",
          element: <ArticlePage postsList={postsList} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={route}></RouterProvider>;

  // return (
  //   <Router>
  //     <Routes>
  //       {/* Layouts بيغلف كل الصفحات */}
  //       <Route path="/" element={<Layouts />}>
  //         {/* صفحة Home */}
  //         <Route
  //           index
  //           element={
  //             <Home postsList={postsList} categoreisList={categoreisList} />
  //           }
  //         />

  //         {/* صفحة Blog */}
  //         <Route
  //           path="blog"
  //           element={
  //             <Blog postsList={postsList} categoreisList={categoreisList} />
  //           }
  //         />
  //       </Route>
  //     </Routes>
  //   </Router>
  // );
  // <Router>
  //   <Navbar />
  //   <Blog />

  //   <Home />
  //   <Footer />
  // </Router>
  // return <>
  // <Navbar/>
  // <Home/>
  // {/* <Footer/> */}
  // </>
}

export default App;
