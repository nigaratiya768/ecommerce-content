import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import ProductDescription from "../pages/ProductDescription";
import ProductUpload from "../pages/ProductUpload";
import Loginpage from "../pages/Loginpage";
import Cart from "../pages/Cart";

function PageRoutes() {
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      setIsLogin(false);
      console.log("error");
    }
  }
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product_description" element={<ProductDescription />} />
        <Route
          path="/product_upload"
          element={isLogin ? <ProductUpload /> : <Loginpage />}
        />
        <Route path="/login_page" element={<Loginpage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
export default PageRoutes;
