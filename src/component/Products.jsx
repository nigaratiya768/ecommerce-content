import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { baseUrl } from "../config/config";

function Products() {
  const [productlist, setProductList] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const response = await axios.get(baseUrl + "api/get_products");

      setProductList(response.data);
      console.log(response);
    } catch (error) {
      console.log("error fetching getProducts", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(baseUrl + "api/delete_product/" + id);
      getProducts();
    } catch (error) {
      console.log("error in deleteProduct", error);
    }
  };

  const editProduct = async (data) => {
    try {
      navigate("/product_update", { state: data });
    } catch (error) {
      console.log("error in editProduct", error);
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
            <th></th>
          </tr>
          {productlist.map((v) => {
            return (
              <tr className="orders-description">
                <td>
                  <img
                    alt="img"
                    src={baseUrl + v.image}
                    style={{ height: "150px" }}
                  />
                </td>
                <td>{v.product_name}</td>
                <td>INR: {v.price}</td>
                <td>In stock</td>
                <td>{v.quantity}</td>
                <td>
                  <button
                    style={{ padding: 10, borderRadius: 10 }}
                    onClick={() => {
                      deleteProduct(v._id);
                    }}
                  >
                    <i className="pi pi-trash" style={{ fontSize: "1rem" }}></i>
                  </button>

                  <button
                    style={{
                      borderRadius: 10,
                      marginLeft: 8,
                      padding: 10,
                      backgroundColor: "rgb(120, 190, 153)",
                    }}
                    onClick={() => {
                      editProduct(v);
                    }}
                  >
                    <i
                      className="pi pi-pencil"
                      style={{ fontSize: "1rem" }}
                    ></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
export default Products;
