import React from "react";

function SideBarMenu() {
  return (
    <>
      <div className="admin-panel-container">
        <ul className="admin-panel-heading">
          <li>Admin Panel</li>
        </ul>
        <hr></hr>
        <ul className="admin-panel-menu">
          <li>Dashboard</li>
          <li>Add Product</li>
          <li>Orders</li>
        </ul>
      </div>
    </>
  );
}
export default SideBarMenu;
