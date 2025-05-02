import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import { baseUrl } from "../config/config";

function UserOrders() {
  const [orderProductlist, setOrderProductList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  const getOrderProducts = async () => {
    try {
      const response = await axios.get(baseUrl + "api/get_orders", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setOrderProductList(response.data);
      console.log(response);
    } catch (error) {
      console.log("error fetching getOrderProducts", error);
    }
  };

  useEffect(() => {
    getOrderProducts();
  }, []);

  function showProductDetails(product, size, quantity) {
    try {
      setProductDetails({ ...product, size: size, quantity: quantity });
      setVisible(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="center-child">
        <table className="table">
          <tr>
            <th>Products</th>

            <th>Order Status</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
          {orderProductlist.map((v) => {
            return (
              <tr className="orders-description">
                <td>
                  {v.product_ids.map((p) => {
                    return (
                      <img
                        alt="img"
                        src={baseUrl + p.product_id?.image}
                        style={{ height: 75, borderRadius: 20 }}
                        onClick={() =>
                          showProductDetails(p.product_id, p?.size, p?.quantity)
                        }
                      />
                    );
                  })}
                </td>

                <td>{v.status}</td>
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
      <Dialog
        header="Product Details"
        visible={visible}
        style={{
          width: "50vw",
        }}
        contentStyle={{
          backgroundColor: " rgb(247, 223, 196)",
          color: " rgb(42, 23, 1)",
        }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div style={{ display: "flex" }}>
          <img src={baseUrl + productDetails.image} style={{ height: 200 }} />
          <div style={{ marginLeft: 20 }}>
            <span style={{ fontSize: 28 }}>
              <b>{productDetails.product_name}</b>
            </span>
            <br />
            <span>Size: {productDetails.size} </span>
            <br />
            <span>Quantity: {productDetails.quantity}</span>
            <br />
            <span>
              <b>Price: {productDetails.price}</b>
            </span>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default UserOrders;
