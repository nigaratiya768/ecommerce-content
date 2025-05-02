import React, { useState, useRef } from "react";
import axios from "axios";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";
import { baseUrl } from "../config/config";

function RegisterPage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  let navigate = useNavigate();
  const toastTopCenter = useRef(null);
  async function signUp() {
    try {
      const response = await axios.post(baseUrl + "api/user_register", data);
      localStorage.setItem("token", response.data.token);

      if (response.status == 200) {
        //alert("product saved successfully");
        toastTopCenter.current.show({
          severity: "success",
          summary: "Success",
          detail: "sign up successfully",
          life: 3000,
        });
        navigate("/login_page");
      }

      console.log(response);
    } catch (error) {
      console.log("error", error);
      const msg = error.response.data.msg;
      toastTopCenter.current.show({
        severity: "error",
        summary: "Error",
        detail: msg,
        life: 3000,
      });
    }
  }
  return (
    <>
      <Toast ref={toastTopCenter} position="top-center" />
      <div className="page-container">
        <div className="login-form-container">
          <div className="heading">
            <h2>Sign up</h2>
          </div>

          <div className="login-form-part">
            <label for="name">Name</label>
            <br />
            <input
              className="login-input"
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
            <br />
            <label for="mobile">Mobile</label>
            <br />
            <input
              maxLength={10}
              className="login-input"
              type="text"
              placeholder="Mobile"
              id="mobile"
              name="name"
              onChange={(e) => {
                setData({ ...data, mobile: e.target.value });
              }}
            />
            <br />
            <label for="email">Email</label>
            <br />
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <br />
            <label for="password">Password</label>
            <br />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
            <br />
            <button
              onClick={() => {
                signUp();
              }}
            >
              Sign up
            </button>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ color: "rgb(159, 88, 2)" }}>Already have account?</p>
              <NavLink
                to={"/login_page"}
                style={{ color: "blue", textDecoration: "underline" }}
              >
                sign in
              </NavLink>
            </div>

            <br />
            <NavLink
              to={"/"}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Go To Home
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
