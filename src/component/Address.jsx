import React from "react";
import { InputText } from "primereact/inputtext";

function Address() {
  return (
    <>
      <div className="address-form">
        <div className="form-row">
          <div className="input-box">
            <label for="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" />
          </div>
          <br />
          <div className="input-box">
            <label for="mobile">mobile no.</label>
            <br />
            <input type="text" id="mobile no." name="mobile no" />
          </div>
        </div>
        <div className="form-row">
          <div className="input-box">
            <label for="pincode">Pincode</label>
            <br />
            <input type="text" id="pincode" name="pincode" />
          </div>
          <br />
          <div className="input-box">
            <label for="locality">locality</label>
            <br />
            <input type="text" id="locality" name="locality" />
          </div>
        </div>
        <div className="form-row">
          <div className="input-box">
            <label for="address">Address</label>
            <br />
            <input type="text" id="address" name="address" />
          </div>
        </div>
        <div className="form-row">
          <div className="input-box">
            <label for="city">City</label>
            <br />
            <input type="text" id="city" name="city" />
          </div>
          <br />
          <div className="input-box">
            <label for="state">State</label>
            <br />
            <input type="text" id="state" name="state" />
          </div>
        </div>
        <div className="form-row ">
          <div className="input-box">
            <button className="place-order-button">Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
