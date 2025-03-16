import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import "primeicons/primeicons.css";

const images = [
  "https://samyakkclothing.files.wordpress.com/2023/03/main-banner-lehenga01.jpg",
  "https://ebazarninja.wordpress.com/wp-content/uploads/2016/11/1467023041334_banner_ethnicmay27161.jpg",
  "https://img.faballey.com/images/Product/ICD00123Z/d3.jpg",
  "https://www.beatitude.in/cdn/shop/articles/DSC_2173_720x_dec1d27e-c2a7-4ce7-8b21-654c0ca12e43_1024x.webp?v=1675162397",
  "https://img.faballey.com/images/Product/IPL00255Z/d3.jpg",
  "https://getketchadmin.getketch.com/product/8905980953198/660/VPSB000065_1.jpg",
];

function Slider() {
  const [items, setItems] = useState(images);
  console.log(items);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <>
        <div className="image-container">
          <img src={item} style={{ height: 400, backgroundColor: "pink" }} />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="card">
        <Carousel
          value={items}
          numVisible={1}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={itemTemplate}
        />
      </div>
    </>
  );
}

export default Slider;

//https://www.beatitude.in/cdn/shop/articles/DSC_2173_720x_dec1d27e-c2a7-4ce7-8b21-654c0ca12e43_1024x.webp?v=1675162397

//https://img.faballey.com/images/Product/ICD00123Z/d3.jpg

//https://cdn.shopify.com/s/files/1/1746/5485/files/2_bcb2be7d-0c2c-4365-b0f9-90351376f717_540x.jpg

//https://img.faballey.com/images/Product/IPL00255Z/d3.jpg

//https://cdn.shopify.com/s/files/1/0424/1876/5977/files/saree_480x480.jpg?v=1665580029

//https://getketchadmin.getketch.com/product/8905980953198/660/VPSB000065_1.jpg
