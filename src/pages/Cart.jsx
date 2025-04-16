import React, { useEffect, useState, useRef } from "react";
import temp8 from "../assets/temp8.jpeg";
import temp9 from "../assets/temp9.jpeg";
import PlaceOrder from "../component/PlaceOrder";
import Header from "../component/Header";
import empty_cart from "../assets/empty-cart.png";
import { Toast } from "primereact/toast";

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const toastTopCenter = useRef(null);
  const [quantity, setQuantity] = useState(1);

  const onQuantityUpdate = (e, id) => {
    const value = e.target.value;
    const updatedCartList = cartList.map((v) => {
      if (v._id == id) {
        v.quantity = value;
      }
      return v;
    });

    setCartList(updatedCartList);
    localStorage.setItem("cartItem", JSON.stringify(updatedCartList));
    console.log("cart", updatedCartList);

    let sum = 0;
    for (let i = 0; i < updatedCartList.length; i++) {
      sum = sum + updatedCartList[i].price * updatedCartList[i].quantity;
    }
    setTotalPrice(sum);
  };

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
          sum = sum + pList[i].price * pList[i].quantity;
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

  const deleteCartList = (id) => {
    try {
      const newList = cartList.filter((v) => {
        return id != v._id;
      });
      setCartList(newList);
      localStorage.setItem("cartItem", JSON.stringify(newList));
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(cartList);

  console.log("total-price xy", totalPrice);
  return (
    <>
      <Toast ref={toastTopCenter} position="top-center" />
      <Header />
      <h2>My Cart</h2>
      <hr></hr>
      <div className="container">
        {cartList.length < 1 ? (
          <div
            style={{
              height: 350,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={empty_cart} alt="" style={{ height: 200 }} />
            <p
              style={{
                fontSize: 30,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Your cart is empty
            </p>
          </div>
        ) : (
          <table className="table">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
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
                    <p style={{ textAlign: "center" }}>
                      <select
                        value={v.quantity}
                        onChange={(e) => {
                          onQuantityUpdate(e, v._id);
                        }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                          return <option value={num}>{num}</option>;
                        })}
                      </select>
                    </p>
                  </td>
                  <td>
                    <p style={{ textAlign: "center" }}>
                      {v.price * v.quantity}
                    </p>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteCartList(v._id);
                      }}
                    >
                      <i
                        className="pi pi-trash"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </button>
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
        )}

        <PlaceOrder
          products={cartList}
          setCartList={setCartList}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
        />
      </div>
    </>
  );
}

export default Cart;
