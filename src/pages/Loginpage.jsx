import React, { useState, useRef } from "react";
import axios from "axios";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";
import { baseUrl } from "../config/config";

function Loginpage() {
  const [data, setData] = useState();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toastTopCenter = useRef(null);

  async function login() {
    try {
      const response = await axios.post(baseUrl + "api/user_login", data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("email", response.data.email);
      setLoading(false);
      if (response.status == 200) {
        //alert("product saved successfully");
        toastTopCenter.current.show({
          severity: "success",
          summary: "Success",
          detail: "login successful",
          life: 3000,
        });
        window.location.href = "/dashboard"; //navigate("/dashboard");
      }

      console.log(response);
    } catch (error) {
      setLoading(false);
      //alert("product not saved");
      toastTopCenter.current.show({
        severity: "error",
        summary: "Error",
        detail: "invailid credentials ",
        life: 3000,
      });
      console.log("error in login", error);
    }
  }

  return (
    <>
      <Toast ref={toastTopCenter} position="top-center" />
      <div className="page-container">
        <div className="login-form-container">
          <div className="heading">
            <h2>Log in to your account</h2>
            <p>Welcome back! please enter your details</p>
          </div>
          <div className="login-form-part">
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
            <button onClick={login}>Sign in</button>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ color: "rgb(159, 88, 2)" }}>New user?</p>
              <NavLink
                to={"/sign_up"}
                style={{ color: "blue", textDecoration: "underline" }}
              >
                sign up
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
export default Loginpage;
