import React from "react";
import temp8 from "../assets/temp8.jpeg";
import temp9 from "../assets/temp9.jpeg";
import Address from "../component/Address";

function Cart() {
  return (
    <>
      <div className="container">
        <table>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div
                className="product-desc "
                style={{ display: "flex", alignItems: "center" }}
              >
                <img alt="test-img" src={temp8} style={{ height: 100 }} />
                <div style={{ margin: 5 }}>
                  <span className="product">
                    <b>COTTON SUIT</b>
                  </span>
                  <br />
                  <span>color:White</span>
                  <br />
                  <span>size:M</span>
                </div>
              </div>
            </td>
            <td>
              <p style={{ textAlign: "center" }}>INR: 2379</p>
            </td>
            <td>
              <p style={{ textAlign: "center" }}>1</p>
            </td>
            <td>
              <p style={{ textAlign: "center" }}>INR: 2379</p>
            </td>
          </tr>
          <tr>
            <td>
              <div
                className="product-desc "
                style={{ display: "flex", alignItems: "center" }}
              >
                <img alt="test-img" src={temp9} style={{ height: 100 }} />
                <div style={{ margin: 5 }}>
                  <span className="product">
                    <b>DESIGNER SILK SUIT</b>
                  </span>
                  <br />
                  <span>color:red</span>
                  <br />
                  <span>size:M</span>
                </div>
              </div>
            </td>
            <td>
              <p style={{ textAlign: "center" }}>INR: 2379</p>
            </td>
            <td>
              <p style={{ textAlign: "center" }}>1</p>
            </td>
            <td>
              <p style={{ textAlign: "center" }}>INR: 2379</p>
            </td>
          </tr>
          <tr></tr>
        </table>

        <Address />
      </div>
    </>
  );
}

export default Cart;
