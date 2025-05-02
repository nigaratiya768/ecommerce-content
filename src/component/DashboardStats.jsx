import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import axios from "axios";
import { baseUrl } from "../config/config";

function DashboardStats() {
  const [stat, setStat] = useState();

  async function getStats() {
    try {
      const response = await axios.get(baseUrl + "api/stats");

      setStat(response.data);
      console.log(response);
    } catch (error) {
      console.log("error fetching stats", error);
    }
  }
  useEffect(() => {
    getStats();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Card
          title="Total Orders"
          style={{
            backgroundColor: "green",
            marginRight: 20,
          }}
        >
          <div
            style={{
              padding: 30,
              height: 180,
              display: "flex",

              alignItems: "center",
            }}
          >
            <i className="pi pi-box" style={{ fontSize: "10rem" }}></i>
            <p style={{ fontSize: "7rem", marginLeft: 25, fontWeight: "bold" }}>
              {stat?.totalOrder}
            </p>
          </div>
        </Card>
        <Card
          title="Total Sales"
          style={{ backgroundColor: " rgb(143, 29, 200)" }}
        >
          <div
            style={{
              padding: 30,
              height: 180,
              display: "flex",

              alignItems: "center",
            }}
          >
            <i className="pi pi-chart-line" style={{ fontSize: "10rem" }}></i>
            <p style={{ fontSize: "5rem", marginLeft: 25, fontWeight: "bold" }}>
              {stat?.totalSales}
            </p>
          </div>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Card title="Delivered Orders" style={{ backgroundColor: "pink" }}>
          <div
            style={{
              padding: 30,
              height: 180,
              display: "flex",

              alignItems: "center",
            }}
          >
            <i className="pi pi-box" style={{ fontSize: "10rem" }}></i>
            <p style={{ fontSize: "7rem", marginLeft: 25, fontWeight: "bold" }}>
              {stat?.totalDeliveredOrders}
            </p>
          </div>
        </Card>
        <Card title="Total Customer" style={{ backgroundColor: "blue" }}>
          <div
            style={{
              padding: 30,
              height: 180,
              display: "flex",

              alignItems: "center",
            }}
          >
            <i className="pi pi-users" style={{ fontSize: "10rem" }}></i>
            <p style={{ fontSize: "7rem", marginLeft: 25, fontWeight: "bold" }}>
              {stat?.totalCustomers}
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default DashboardStats;
