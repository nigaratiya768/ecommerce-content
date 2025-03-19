import React from "react";

function Loginpage() {
  return (
    <>
      <div className="login-page">
        <div className="login-form-container">
          <div className="heading">
            <h2>Log in to your account</h2>
            <p>Welcome back! please enter your details</p>
          </div>
          <div className="form-part">
            <label for="email">Email</label>
            <br />
            <input type="email" placeholder="Email" id="email" name="email" />
            <br />
            <label for="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
            <br />
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loginpage;
