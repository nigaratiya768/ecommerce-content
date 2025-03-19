import React, { useState } from "react";
import Header from "../component/Header";

import { Galleria } from "primereact/galleria";
import Footer from "../component/Footer";

const initialImages = [
  "https://www.bunaai.com/cdn/shop/products/buydressesonlineindia-05781.jpg?v=1661756559&width=540",
  "https://www.bunaai.com/cdn/shop/products/buydressesonlineindia-05770.jpg?v=1661756542",
  "https://www.bunaai.com/cdn/shop/products/buydressesonlineindia-05790.jpg?v=1661756576&width=540",
  "https://www.bunaai.com/cdn/shop/products/buydressesonlineindia-05786.jpg?v=1661756568&width=540",
];
function ProductDescription() {
  const [images, setImages] = useState(initialImages);
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
              value={images}
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
            Maxi-dress
          </p>
          <p className="price" style={{ fontSize: 20, fontWeight: "bold" }}>
            INR: 2,350
          </p>
          <p className="labels">Select Size</p>
          <div className="size-buttons">
            <button className="size-button">S</button>
            <button className="size-button">M</button>
            <button className="size-button">L</button>
            <button className="size-button">Xl</button>
          </div>
          <div>
            <button className="wishlist-cart-button">
              <i className="pi pi-heart"></i>
              <span style={{ marginLeft: 4, fontSize: 17 }}>wishlist</span>
            </button>
            <button className="wishlist-cart-button wishlist-button">
              <i className="pi pi-cart-arrow-down"></i>
              <span style={{ marginLeft: 4, fontSize: 17 }}>add to cart</span>
            </button>
          </div>
          <p className="labels">PRODUCT DETAILS</p>
          <p>
            Looking for some trending cotton dresses inspiration? You have
            reached the right place, the Amara Belt Cotton Maxi Dress with
            contemporary design, balloon sleeves, and bright hues is the perfect
            fit and flare dress for your evening.
          </p>

          <p className="labels"> MATERIAL & CARE</p>
          <ul>
            <li>Cotton</li>
            <li>Machine-wash</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductDescription;
