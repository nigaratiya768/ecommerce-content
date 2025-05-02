import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../component/Header";
import queryString from "query-string";
import { Galleria } from "primereact/galleria";
import Footer from "../component/Footer";
import { Toast } from "primereact/toast";
import { baseUrl } from "../config/config";

function ProductDescription() {
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const toastTopCenter = useRef(null);

  async function getProduct() {
    try {
      console.log("calling api");
      const queries = queryString.parse(window.location.search);
      const response = await axios.get(
        baseUrl + "api/get_product/" + queries.id
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
      if (size == "") {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Info",
          detail: "please select size ",
          life: 3000,
        });
        return;
      }
      const cartList = localStorage.getItem("cartItem");
      item.quantity = 1;
      item.size = size;
      if (cartList) {
        const cartItems = JSON.parse(cartList);
        cartItems.push(item);
        localStorage.setItem("cartItem", JSON.stringify(cartItems));
      } else {
        localStorage.setItem("cartItem", JSON.stringify([item]));
      }
      toastTopCenter.current.show({
        severity: "info",
        summary: "Info",
        detail: "Item added to cart ",
        life: 3000,
      });
    } catch (error) {}
  };
  const thumbnailTemplate = (item) => {
    return <img src={item} alt={item.alt} style={{ height: 150 }} />;
  };

  console.log("size", size);

  return (
    <>
      <Toast ref={toastTopCenter} position="top-center" />
      <Header />

      <div className="description-page">
        <div className="product-img">
          <div className="card">
            <Galleria
              value={[baseUrl + product.image]}
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
                return (
                  <button
                    className="size-button"
                    style={{
                      width: 28,
                      height: 28,
                      backgroundColor:
                        size == v ? "rgb(55, 108, 73)" : "rgb(107, 118, 111)",
                    }}
                    onClick={() => {
                      setSize(v);
                    }}
                  >
                    {v}
                  </button>
                );
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
