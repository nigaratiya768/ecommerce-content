import React, { useState, useRef } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

function Address({ products }) {
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    email: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
  });

  const toastTopCenter = useRef(null);
  async function placeOrder() {
    try {
      const product_ids = products.map((v) => {
        return { product_id: v._id, quantity: 1 };
      });

      const data = {
        product_ids: product_ids,
        name: address.name,
        mobile: address.mobile,
        email: address.email,
        pincode: address.pincode,
        locality: address.locality,
        address: address.address,
        city: address.city,
        state: address.state,
      };
      console.log(data);
      const response = await axios.post(
        "http://localhost:4001/api/add_order",
        data
      );
      if (response.status == 200) {
        //alert("product saved successfully");
        toastTopCenter.current.show({
          severity: "success",
          summary: "Success",
          detail: "Order Placed Successfully",
          life: 3000,
        });
      }

      console.log(response);
    } catch (error) {
      setLoading(false);
      //alert("product not saved");
      toastTopCenter.current.show({
        severity: "error",
        summary: "Error",
        detail: "unable to Place Order  ",
        life: 3000,
      });
      console.log("error in login", error);
    }
  }
  return (
    <>
      <Toast ref={toastTopCenter} position="top-center" />
      <div className="address-form">
        <h2>Address</h2>
        <hr></hr>
        <div className="form-row">
          <div className="input-box">
            <label for="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => {
                setAddress({ ...address, name: e.target.value });
                console.log(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="input-box">
            <label for="mobile">Mobile no.</label>
            <br />
            <input
              type="text"
              id="mobile no."
              name="mobile no"
              onChange={(e) => {
                setAddress({ ...address, mobile: e.target.value });
              }}
            />
          </div>
          <div className="input-box">
            <label for="mobile">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setAddress({ ...address, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-box">
            <label for="pincode">Pincode</label>
            <br />
            <input
              type="text"
              id="pincode"
              name="pincode"
              onChange={(e) => {
                setAddress({ ...address, pincode: e.target.value });
              }}
            />
          </div>
          <br />
          <div className="input-box">
            <label for="locality">locality</label>
            <br />
            <input
              type="text"
              id="locality"
              name="locality"
              onChange={(e) => {
                setAddress({ ...address, locality: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-box">
            <label for="address">Address</label>
            <br />
            <input
              type="text"
              id="address"
              name="address"
              onChange={(e) => {
                setAddress({ ...address, address: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-box">
            <label for="city">City</label>
            <br />
            <input
              type="text"
              id="city"
              name="city"
              onChange={(e) => {
                setAddress({ ...address, city: e.target.value });
              }}
            />
          </div>
          <br />
          <div className="input-box">
            <label for="state">State</label>
            <br />
            <input
              type="text"
              id="state"
              name="state"
              onChange={(e) => {
                setAddress({ ...address, state: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-row ">
          <div className="input-box">
            <button className="place-order-button" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
