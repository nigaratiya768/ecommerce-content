import React, { useEffect, useState } from "react";
import axios from "axios";
function Orders() {
  const [orderProductlist, setOrderProductList] = useState([]);

  const getOrderProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4001/api/get_orders");

      setOrderProductList(response.data);
      console.log(response);
    } catch (error) {
      console.log("error fetching getOrderProducts", error);
    }
  };

  useEffect(() => {
    getOrderProducts();
  }, []);
  return (
    <>
      <div className="center-child">
        <table className="table">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
          {orderProductlist.map((v) => {
            return (
              <tr className="orders-description">
                <td>
                  <img
                    alt="img"
                    src={"http://localhost:4001/" + v.product_id.image}
                    style={{ height: 150 }}
                  />
                </td>
                <td>{v.product_id.product_name}</td>
                <td>INR: {v.product_id.price}</td>
                <td>{v.name}</td>
                <td>{v.mobile}</td>

                <td>
                  <div>
                    <span>{v.address}</span>
                    <br />
                    <span>{v.locality}</span>
                    <br />
                    <span>
                      {v.city}, {v.state}
                    </span>
                    <br />
                    <span>pincode: {v.pincode}</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
export default Orders;
