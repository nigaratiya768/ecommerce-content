import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../component/Header";
import queryString from "query-string";
import { Galleria } from "primereact/galleria";
import Footer from "../component/Footer";

function ProductDescription() {
  const [product, setProduct] = useState({});
  async function getProduct() {
    try {
      console.log("calling api");
      const queries = queryString.parse(window.location.search);
      const response = await axios.get(
        "http://localhost:4001/api/get_product/" + queries.id
      );
      setProduct(response.data);
      console.log(response);
    } catch (error) {
      console.log("error in getProduct", error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);

  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 3,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];
  const itemTemplate = (item) => {
    return (
      <img
        src={item}
        alt={item.alt}
        style={{ height: "80vh", width: "100%" }}
      />
    );
  };
  const addToCart = (item) => {
    try {
      console.log(item);
      const cartList = localStorage.getItem("cartItem");

      if (cartList) {
        const cartItems = JSON.parse(cartList);
        cartItems.push(item);
        localStorage.setItem("cartItem", JSON.stringify(cartItems));
      } else {
        localStorage.setItem("cartItem", JSON.stringify([item]));
      }
    } catch (error) {}
  };
  const thumbnailTemplate = (item) => {
    return <img src={item} alt={item.alt} style={{ height: 150 }} />;
  };
  return (
    <>
      <Header />

      <div className="description-page">
        <div className="product-img">
          <div className="card">
            <Galleria
              value={["http://localhost:4001/" + product.image]}
              responsiveOptions={responsiveOptions}
              numVisible={3}
              style={{ maxWidth: "640px" }}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
            />
          </div>
        </div>
        <div className="product-description">
          <p
            className="product-name"
            style={{ fontSize: 25, fontWeight: "bold" }}
          >
            {product.product_name}
          </p>
          <p className="price" style={{ fontSize: 20, fontWeight: "bold" }}>
            INR: {product.price}
          </p>
          <p className="labels">Select Size</p>
          <div className="size-buttons">
            {product &&
              product.size &&
              product.size.map((v) => {
                return <button className="size-button">{v}</button>;
              })}
          </div>
          <div>
            {/* <button className="wishlist-cart-button">
              <i className="pi pi-heart"></i>
              <span style={{ marginLeft: 4, fontSize: 17 }}>wishlist</span>
            </button> */}
            <button
              className="wishlist-cart-button wishlist-button"
              onClick={() => {
                addToCart(product);
              }}
            >
              <i className="pi pi-cart-arrow-down"></i>
              <span style={{ marginLeft: 4, fontSize: 17 }}>add to cart</span>
            </button>
          </div>
          <p className="labels">Product Details</p>
          <p>{product.product_detail}</p>

          <p className="labels"> MATERIAL & CARE</p>
          <ul>
            {product &&
              product.material_and_care &&
              product.material_and_care.map((v) => {
                return (
                  <li>
                    {v.key} : {v.value}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductDescription;
