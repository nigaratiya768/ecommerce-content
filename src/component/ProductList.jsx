import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import temp1 from "../assets/temp1.jpeg";
import temp2 from "../assets/temp2.jpeg";
import temp3 from "../assets/temp3.jpeg";
import temp4 from "../assets/temp4.jpeg";
import temp5 from "../assets/temp5.jpeg";
import temp6 from "../assets/temp6.jpeg";
import temp7 from "../assets/temp7.jpeg";
import temp8 from "../assets/temp8.jpeg";
import temp9 from "../assets/temp9.jpeg";
import temp10 from "../assets/temp10.jpeg";
import temp11 from "../assets/temp11.jpeg";
import temp12 from "../assets/temp12.jpeg";

const products = [
  {
    product_id: 1,
    product_name: "Embroidered Suit Set",
    product_description: "Elegant embroidered suit piece with dupatta.",
    image: temp8,
    price: 1279.99,
  },
  {
    product_id: 2,
    product_name: "Cotton Suit Piece",
    product_description: "Lightweight cotton suit piece perfect for summer.",
    image: temp9,
    price: 1149.99,
  },
  {
    product_id: 3,
    product_name: "Designer Suit Set",
    product_description: "Premium designer suit piece with heavy embroidery.",
    image: temp10,
    price: 1199.99,
  },
  {
    product_id: 4,
    product_name: "Silk Suit Piece",
    product_description: "Luxurious silk suit piece for special occasions.",
    image: temp11,
    price: 989.99,
  },
  {
    product_id: 5,
    product_name: "Printed Suit Set",
    product_description: "Stylish printed suit piece with vibrant patterns.",
    image: temp12,
    price: 1259.99,
  },
];

console.log(products);

function ProductList() {
  const [productlist, setProductList] = useState(products);
  const header = (image) => {
    return (
      <>
        <img style={{ height: 250 }} src={image} />
      </>
    );
  };
  const footer = () => {
    return <Button>Add to cart</Button>;
  };
  return (
    <>
      <h2 style={{ fontSize: 22, marginLeft: 50 }}>Product List</h2>
      <div className="cards layout">
        {productlist.map((v) => {
          return (
            <div>
              <Card
                style={{ margin: 5 }}
                title={v.product_name}
                subTitle={v.product_description}
                footer={footer}
                header={() => header(v.image)}
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
