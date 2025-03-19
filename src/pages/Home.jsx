import React from "react";
import Header from "../component/Header";
import Slider from "../component/Slider";
import ProductList from "../component/ProductList";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <ProductList />
      <Footer />
    </>
  );
}

export default Home;
