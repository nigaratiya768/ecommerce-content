import React from "react";
import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <div className="footer-body">
      <div className="address-container">
        <div className="row">
          <i className="pi pi-map-marker" style={{ fontSize: "2rem" }}></i>
          <p>College road, Sahibganj</p>
        </div>
        <div className="row">
          <i className="pi pi-phone" style={{ fontSize: "2rem" }}></i>
          <a href="tel:+913253256322">8765553332</a>
        </div>
        <div className="row">
          <i className="pi pi-envelope" style={{ fontSize: "2rem" }}></i>
          <a href="mailto:example@email.com">example@email.com</a>
        </div>
      </div>
      <div className="about-container">
        <div className="about-company">
          <img className="logo" alt="logo" src={logo} />
          <h3>About The Company</h3>
          <p>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auc tir lacus vehicula sit amet.
          </p>

          <div className="icons">
            <i className="pi pi-facebook icon" style={{ fontSize: "2rem" }}></i>
            <i
              className="pi pi-instagram icon"
              style={{ fontSize: "2rem" }}
            ></i>
            <i className="pi pi-youtube icon" style={{ fontSize: "2rem" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
