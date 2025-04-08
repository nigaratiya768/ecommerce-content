import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import ProductDescription from "../pages/ProductDescription";
import Dashboard from "../pages/Dashboard";
import Loginpage from "../pages/Loginpage";
import Cart from "../pages/Cart";
import RegisterPage from "../pages/RegisterPage";
import ProductUpdate from "../component/ProductUpdate";

import UserDashboard from "../pages/UserDashboard";

function PageRoutes() {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState("user");

  function checkLogin() {
    try {
      const token = localStorage.getItem("token");
      const userRole = localStorage.getItem("role");
      if (token) {
        setIsLogin(true);
        setRole(userRole);
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
          path="/dashboard"
          element={
            isLogin ? (
              role == "admin" ? (
                <Dashboard />
              ) : (
                <UserDashboard />
              )
            ) : (
              <Loginpage />
            )
          }
        />
        <Route path="/product_update" element={<ProductUpdate />} />
        <Route path="/login_page" element={<Loginpage />} />
        <Route path="/sign_up" element={<RegisterPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
export default PageRoutes;
