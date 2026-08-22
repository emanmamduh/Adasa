import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // بيعمل اسكرول لأول الصفحة أول ما الـ pathname يتغير
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // عشان يكون الاسكرول ناعم وسمووث
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
