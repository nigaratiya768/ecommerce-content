import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { category } from "./ProductUpload";
import { baseUrl } from "../config/config";

function ProductList() {
  const [productlist, setProductList] = useState([]);
  const scrollableTabs = category.map((v) => {
    return {
      title: v,
      content: v,
    };
  });

  let navigate = useNavigate();
  const getProducts = async () => {
    try {
      const response = await axios.get(baseUrl + "api/get_products");

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
        View Product
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
      <div className="card">
        <TabView scrollable style={{ backgroundColor: "grey" }}>
          {scrollableTabs.map((tab) => {
            return (
              <TabPanel key={tab.title} header={tab.title}>
                <div className="cards layout">
                  {productlist
                    .filter((v) => {
                      return v.category == tab.title;
                    })
                    .map((v) => {
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
                            header={() => header(baseUrl + v.image)}
                            className="md:w-25rem"
                          >
                            <div>INR: {v.price}</div>
                          </Card>
                        </div>
                      );
                    })}
                </div>
              </TabPanel>
            );
          })}
        </TabView>
      </div>
    </>
  );
}
export default ProductList;
