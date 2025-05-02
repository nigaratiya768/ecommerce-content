import React, { useState, useRef } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { baseUrl } from "../config/config";

export let category = [
  "anarkali",
  "kurta set",
  "co-ord set",
  "salwar suit",
  "saree",
];

function ProductUpload() {
  const [product, setProduct] = useState({
    product_name: "",
    price: "",
    color: "",
    product_details: "",
    quantity: 1,
    category: category[0],
  });
  const [size, setSize] = useState([]);
  const [image, setImage] = useState();
  const [materialAndCAre, setMaterialAndCAre] = useState({
    title: "",
    description: "",
  });
  const [materialAndCareArray, setMaterialAndCareArray] = useState([]);

  const [loading, setLoading] = useState(false);
  const toastTopCenter = useRef(null);

  async function saveProduct() {
    try {
      if (product.product_name.length < 3) {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "name is required",
          life: 3000,
        });
        return;
      }
      if (product.price == "") {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "price is required",
          life: 3000,
        });
        return;
      }

      if (product.color == "") {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "color is required",
          life: 3000,
        });
        return;
      }
      if (product.product_details == "") {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "product detail is required",
          life: 3000,
        });
        return;
      }

      if (size.length < 1) {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "Product size is required",
          life: 3000,
        });
        return;
      }
      if (!image) {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "Image is required",
          life: 3000,
        });
        return;
      }
      if (materialAndCAre.length < 1) {
        toastTopCenter.current.show({
          severity: "info",
          summary: "Error",
          detail: "Material and care is required",
          life: 3000,
        });
        return;
      }

      console.log("save", product, size, materialAndCareArray);
      const formData = new FormData();
      formData.append("product_name", product.product_name);
      formData.append("price", product.price);
      formData.append("color", product.color);
      formData.append("product_detail", product.product_details);
      formData.append("quantity", product.quantity);
      formData.append("size", JSON.stringify(size));
      formData.append(
        "material_and_care",
        JSON.stringify(materialAndCareArray)
      );
      formData.append("image", image);
      formData.append("category", product.category);

      setLoading(true);
      const response = await axios.post(baseUrl + "api/add_product", formData);
      setLoading(false);
      if (response.status == 200) {
        //alert("product saved successfully");
        toastTopCenter.current.show({
          severity: "success",
          summary: "Success",
          detail: "product saved ",
          life: 3000,
        });
      }

      console.log(response);
    } catch (error) {
      setLoading(false);
      //alert("product not saved");
      toastTopCenter.current.show({
        severity: "error",
        summary: "Error",
        detail: "product not saved ",
        life: 3000,
      });
      console.log(error);
    }
  }
  function addMaterialAndCare() {
    setMaterialAndCareArray([...materialAndCareArray, materialAndCAre]);
    console.log("added", materialAndCAre.title, materialAndCAre.description);
  }

  function deleteMaterialAndCare(index) {
    const updatedMaterialAndCare = materialAndCareArray.filter((v, i) => {
      return i !== index;
    });
    setMaterialAndCareArray(updatedMaterialAndCare);
  }

  return (
    <>
      <Toast ref={toastTopCenter} position="top-center" />
      <div className="page-container">
        <div className="product-upload-form">
          <label for="product-name">Product Name</label>
          <br />
          <input
            id="product-name"
            type="text"
            name="product-name"
            onChange={(e) => {
              setProduct({ ...product, product_name: e.target.value });
              console.log(e.target.value);
            }}
          />
          <br />
          <label for="price">Price</label>
          <br />
          <input
            id="price"
            type="number"
            name="price"
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
          />
          <br />
          <label for="color">Color</label>
          <br />
          <input
            id="color"
            type="text"
            name="color"
            onChange={(e) => {
              setProduct({ ...product, color: e.target.value });
            }}
          />
          <br />
          <label for="category">Category</label>
          <select
            defaultValue={category[0]}
            onChange={(e) => {
              setProduct({ ...product, category: e.target.value });
            }}
          >
            {category.map((v) => {
              return <option value={v}>{v}</option>;
            })}
          </select>
          <br />
          <label for="product-size">Size</label>
          <div className="checkbox">
            <input
              type="checkbox"
              value={"S"}
              onChange={(e) => {
                if (!size.includes(e.target.value)) {
                  setSize([...size, e.target.value]);
                } else {
                  const new_size = size.filter((v) => {
                    return v != e.target.value;
                  });
                  setSize([...new_size]);
                }
              }}
            />
            <label>Small</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              value={"M"}
              onChange={(e) => {
                if (!size.includes(e.target.value)) {
                  setSize([...size, e.target.value]);
                } else {
                  const new_size = size.filter((v) => {
                    return v != e.target.value;
                  });
                  setSize([...new_size]);
                }
              }}
            />
            <label>Medium</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              value={"L"}
              onChange={(e) => {
                if (!size.includes(e.target.value)) {
                  setSize([...size, e.target.value]);
                } else {
                  const new_size = size.filter((v) => {
                    return v != e.target.value;
                  });
                  setSize([...new_size]);
                }
              }}
            />
            <label>Large</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              value={"Free size"}
              onChange={(e) => {
                if (!size.includes(e.target.value)) {
                  setSize([...size, e.target.value]);
                } else {
                  const new_size = size.filter((v) => {
                    return v != e.target.value;
                  });
                  setSize([...new_size]);
                }
              }}
            />
            <label>Free size</label>
          </div>
          <label for="product-detail">Product Details</label>
          <br />
          <input
            id="product-detail"
            type="text"
            name="product-detail"
            onChange={(e) => {
              setProduct({ ...product, product_details: e.target.value });
            }}
          />
          <br />
          <label for="product-image">Product Image</label>
          <br />
          <input
            id="product-image"
            type="file"
            name="product-image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <br />
          <label for="Material-and-care">Material and Care</label>
          {materialAndCareArray.map((v, index) => {
            return (
              <div className="material-and-care-container">
                <div className="m-container">
                  <label>title</label>
                  <br />
                  <input id="title" type="title" name="title" value={v.title} />
                </div>
                <br />
                <div className="m-container">
                  <label>Description</label>
                  <br />

                  <input
                    id="description"
                    type="description"
                    name="description"
                    value={v.description}
                  />
                </div>
                <br />
                <div className="m-container">
                  <button
                    onClick={() => {
                      deleteMaterialAndCare(index);
                    }}
                  >
                    <i className="pi pi-minus" style={{ color: "red" }}></i>
                  </button>
                </div>
              </div>
            );
          })}

          <div className="material-and-care-container">
            <div className="m-container">
              <label>title</label>
              <br />
              <input
                id="title"
                type="title"
                name="title"
                onChange={(e) => {
                  setMaterialAndCAre({
                    ...materialAndCAre,
                    title: e.target.value,
                  });
                }}
              />
            </div>
            <br />
            <div className="m-container">
              <label>Description</label>
              <br />
              <input
                id="description"
                type="description"
                name="description"
                onChange={(e) => {
                  setMaterialAndCAre({
                    ...materialAndCAre,
                    description: e.target.value,
                  });
                }}
              />
            </div>
            <br />
            <div className="m-container">
              <button onClick={addMaterialAndCare}>
                <i className="pi pi-plus" style={{ color: "blue" }}></i>
              </button>
            </div>
          </div>
          <label for="quantity">Quantity</label>

          <br />
          <input
            id="quantity"
            type="number"
            name="quantity"
            onChange={(e) => {
              setProduct({ ...product, quantity: e.target.value });
            }}
          />
          <br />
          <Button
            label="save"
            icon="pi pi-check"
            loading={loading}
            onClick={saveProduct}
          />

          {/* <button onClick={saveProduct}>{loading ? "saving" : "save"}</button> */}
        </div>
      </div>
    </>
  );
}

export default ProductUpload;
