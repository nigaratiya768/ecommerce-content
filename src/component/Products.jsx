import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [productlist, setProductList] = useState([]);

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
  return (
    <>
      <div className="center-child">
        <table className="table">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Quantity</th>
          </tr>
          {productlist.map((v) => {
            return (
              <tr className="orders-description">
                <td>
                  <img
                    alt="img"
                    src={"http://localhost:4001/" + v.image}
                    style={{ height: "150px" }}
                  />
                </td>
                <td>{v.product_name}</td>
                <td>INR: {v.price}</td>
                <td>In stock</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
export default Products;
