import React, { useEffect, useState } from "react";
import temp8 from "../assets/temp8.jpeg";
import temp9 from "../assets/temp9.jpeg";
import Address from "../component/Address";
import Header from "../component/Header";

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const getCartList = () => {
    try {
      const localCartList = localStorage.getItem("cartItem");
      console.log("cart", localCartList);
      const pList = JSON.parse(localCartList);
      if (localCartList) {
        //console.log(temp);
        setCartList(JSON.parse(localCartList));

        let sum = 0;
        for (let i = 0; i < pList.length; i++) {
          sum = sum + pList[i].price;
        }
        setTotalPrice(sum);
      }
    } catch (error) {
      setCartList([]);
    }
  };
  useEffect(() => {
    getCartList();
  }, []);
  console.log(cartList);

  console.log("total-price xy", totalPrice);
  return (
    <>
      <Header />
      <h2>My Cart</h2>
      <hr></hr>
      <div className="container">
        <table className="table">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cartList.map((v) => {
            console.log("total-price", totalPrice);

            return (
              <tr>
                <td>
                  <div
                    className="product-desc "
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      alt="test-img"
                      src={"http://localhost:4001/" + v.image}
                      style={{ height: 100 }}
                    />
                    <div style={{ margin: 5 }}>
                      <span className="product">
                        <b>{v.product_name}</b>
                      </span>
                      <br />
                      <span>color:{v.color}</span>
                      <br />
                      <span>size:{v.size}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <p style={{ textAlign: "center" }}>INR: {v.price}</p>
                </td>
                <td>
                  <p style={{ textAlign: "center" }}>1</p>
                </td>
                <td>
                  <p style={{ textAlign: "center" }}>{v.price}</p>
                </td>
              </tr>
            );
          })}
          <tr>
            <td
              colSpan={3}
              style={{ textAlign: "left", fontWeight: "bold", fontSize: 25 }}
            >
              Total
            </td>
            <td style={{ textAlign: "center", fontWeight: "bold" }}>
              {totalPrice}
            </td>
          </tr>
        </table>

        <Address products={cartList} />
      </div>
    </>
  );
}

export default Cart;
