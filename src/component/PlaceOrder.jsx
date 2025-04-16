import React, { useState, useRef } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function PlaceOrder({ products, setCartList, setTotalPrice, totalPrice }) {
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    email: localStorage.getItem("email"),
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
  });

  const toastTopCenter = useRef(null);
  async function placeOrder() {
    try {
      if (products.length < 1) {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "Cart list empty",
          life: 3000,
        });
        return;
      }
      if (address.name.length < 3) {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "name is required",
          life: 3000,
        });
        return;
      }
      if (address.mobile.length < 10) {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "Enter Valid Mobile Number",
          life: 3000,
        });
        return;
      }
      if (!validateEmail(address.email)) {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "invalid email",
          life: 3000,
        });
        return;
      }
      if (address.pincode.length < 6) {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "Pincode Is Required",
          life: 3000,
        });
        return;
      }
      if (address.locality == "") {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "Locality Required",
          life: 3000,
        });
        return;
      }
      if (address.address == "") {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "Address Required",
          life: 3000,
        });
        return;
      }
      if (address.city == "") {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "City Required",
          life: 3000,
        });
        return;
      }
      if (address.state == "") {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "State Required",
          life: 3000,
        });
        return;
      }
      const product_ids = products.map((v) => {
        return { product_id: v._id, quantity: v.quantity, size: v.size };
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
        order_value: totalPrice,
      };
      console.log(data);
      const token = localStorage.getItem("token");
      if (!token) {
        toastTopCenter.current.show({
          severity: "error",
          summary: "error",
          detail: "please login first",
          life: 3000,
        });
      }
      const response = await axios.post(
        "http://localhost:4001/api/add_order",
        data,
        { headers: { Authorization: token } }
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
      localStorage.setItem("cartItem", "[]");
      setCartList([]);
      setAddress({
        name: "",
        mobile: "",
        email: "",
        pincode: "",
        locality: "",
        address: "",
        city: "",
        state: "",
      });
      setTotalPrice(undefined);

      console.log(response);
    } catch (error) {
      setLoading(false);
      //alert("product not saved");
      toastTopCenter.current.show({
        severity: "error",
        summary: "Error",
        detail: "unable to Place Order",
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
              value={address.name}
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
              value={address.mobile}
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
              value={address.email}
              disabled={true}
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
              value={address.pincode}
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
              value={address.locality}
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
              value={address.address}
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
              value={address.value}
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
              value={address.state}
              onChange={(e) => {
                setAddress({ ...address, state: e.target.value });
              }}
            />
          </div>
          <div className="input-box">
            <label for="payment">Payment type</label>
            <br />
            <select>
              <option>UPI</option>
              <option>Credit/Debit/ATM card</option>
              <option>Net banking</option>
              <option>Cash on delivery</option>
            </select>
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

export default PlaceOrder;
