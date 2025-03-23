import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

function ProductList() {
  const [productlist, setProductList] = useState([]);
  let navigate = useNavigate();
  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4001/api/get_products"
      );

      setProductList(response.data);
      console.log(response);
    } catch (error) {
      console.log("error fetching getProducts", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const header = (image) => {
    return (
      <>
        <img style={{ height: 250 }} src={image} />
      </>
    );
  };
  const footer = (item) => {
    return (
      <Button
        onClick={() => {
          addToCart(item);
        }}
      >
        Add to cart
      </Button>
    );
  };

  const addToCart = (item) => {
    try {
      console.log(item);
    } catch (error) {}
  };
  return (
    <>
      <h2 style={{ fontSize: 22, marginLeft: 50 }}>Product List</h2>
      <div className="cards layout">
        {productlist.map((v) => {
          return (
            <div
              onClick={() => {
                navigate("/product_description?id=" + v._id);
              }}
            >
              <Card
                style={{ margin: 5 }}
                title={v.product_name}
                subTitle={v.product_description}
                footer={() => {
                  return footer(v);
                }}
                header={() => header("http://localhost:4001/" + v.image)}
                className="md:w-25rem"
              >
                <div>INR: {v.price}</div>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductList;
