import React from "react";
import { NavLink, Link } from "react-router";
import { PrimeIcons } from "primereact/api";

function Header() {
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
              <Link to="/login_page">
                {" "}
                <i className="pi pi-envelope" style={{ marginRight: 5 }}></i>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
