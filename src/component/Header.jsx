import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { PrimeIcons } from "primereact/api";
import { useNavigate } from "react-router";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  function checkLogin() {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token && token !== "undefined") {
        setIsLogin(true);
        console.log("...............", token);
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      setIsLogin(false);
      console.log("error");
    }
  }
  console.log("islogin", isLogin);
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      {/* <div className="card">
        <Menubar model={items} />
      </div> */}
      <div className="header-menu-bar">
        <div style={{ width: "80%" }}>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link to="/">
                <i className="pi pi-home" style={{ marginRight: 5 }}></i>
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <li>
              <Link to="/cart">
                <i
                  className="pi pi-shopping-cart"
                  style={{ marginRight: 5 }}
                ></i>
                Cart
              </Link>
            </li>
            <li style={{ marginLeft: 8 }}>
              {isLogin ? (
                <div>
                  <Link to="/dashboard">
                    {" "}
                    <i
                      className="pi pi-objects-column"
                      style={{ marginRight: 5 }}
                    ></i>
                    DashBoard
                  </Link>
                </div>
              ) : (
                <Link to="/login_page">
                  {" "}
                  <i className="pi pi-sign-in" style={{ marginRight: 5 }}></i>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
