import React, { useState } from "react";
import SideBarMenu from "../component/SideBarMenu";
import Orders from "../component/Orders";
import Products from "../component/Products";
import Tabs from "rc-tabs";
import ProductUpload from "../component/ProductUpload";
import { NavLink, useNavigate } from "react-router";

function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard-layout">
        <div style={{ width: 300 }}>
          <div className="admin-panel-container">
            <ul className="admin-panel-heading">
              <li>Admin Panel</li>
            </ul>
            <hr></hr>
            <ul className="admin-panel-menu">
              <li
                onClick={() => {
                  setActiveTab(0);
                }}
              >
                Add Product
              </li>
              <li
                onClick={() => {
                  setActiveTab(1);
                }}
              >
                Products
              </li>
              <li
                onClick={() => {
                  setActiveTab(2);
                }}
              >
                Orders
              </li>
              <li
                onClick={() => {
                  // console.log("logout");
                  navigate("/login_page");
                  localStorage.setItem(token, undefined);
                }}
              >
                Log Out
              </li>
            </ul>
            <NavLink
              to={"/"}
              style={{
                textAlign: "center",
                textDecoration: "underline",
                color: "blue",
              }}
            >
              Go To Home
            </NavLink>
          </div>
        </div>
        <div className="dashboard-content-container">
          {activeTab == 0 && (
            <div>
              <h2>Add Product</h2>
              <hr></hr>
              <ProductUpload />
            </div>
          )}
          {activeTab == 1 && (
            <div>
              <h2>Products</h2>
              <hr></hr>
              <Products />
            </div>
          )}
          {activeTab == 2 && (
            <div>
              <h2>Orders</h2>
              <hr></hr>
              <Orders />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
