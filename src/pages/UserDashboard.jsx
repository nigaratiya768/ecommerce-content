import React, { useState } from "react";

import UserOrders from "../component/UserOrder";
import { NavLink, useNavigate } from "react-router";

function UserDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard-layout">
        <div style={{ width: 300 }}>
          <div className="admin-panel-container">
            <ul className="admin-panel-heading">
              <li> User</li>
            </ul>
            <hr></hr>
            <ul className="admin-panel-menu">
              <li
                onClick={() => {
                  setActiveTab(0);
                }}
              >
                Orders
              </li>

              <li
                onClick={() => {
                  // console.log("logout");

                  localStorage.setItem("token", undefined);
                  localStorage.setItem("role", undefined);
                  localStorage.setItem("cartItem", JSON.stringify([]));
                  navigate("/login_page");
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
              <h2>Orders</h2>
              <hr></hr>
              <UserOrders />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
