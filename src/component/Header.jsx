import React from "react";
import { NavLink, Link } from "react-router";

import { Menubar } from "primereact/menubar";

function Header() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Cloths",
      icon: "pi pi-shopping-bag",
    },

    {
      label: "Contact",
      icon: "pi pi-envelope",
      badge: 3,
    },
  ];
  return (
    <>
      {/* <div className="card">
        <Menubar model={items} />
      </div> */}
      <div className="header-menu-bar">
        <div style={{ width: "80%" }}>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link to="/">Home</Link>
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
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/login_page">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
