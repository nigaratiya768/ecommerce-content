import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dialog } from "primereact/dialog";

function Orders() {
  const [orderProductlist, setOrderProductList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [productDetails, setProductDetails] = useState({});

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

  function showProductDetails(product) {
    try {
      setProductDetails(product);
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

            <th>Customer Name</th>
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
                        src={"http://localhost:4001/" + p.product_id.image}
                        style={{ height: 75, borderRadius: 20 }}
                        onClick={() => showProductDetails(p.product_id)}
                      />
                    );
                  })}
                </td>

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
          <img
            src={"http://localhost:4001/" + productDetails.image}
            style={{ height: 200 }}
          />
          <div style={{ marginLeft: 20 }}>
            <span style={{ fontSize: 28 }}>
              <b>{productDetails.product_name}</b>
            </span>
            <br />
            <span>Size: {productDetails.size} ,</span>
            <br />
            <span>Color: {productDetails.color}</span>
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

export default Orders;
