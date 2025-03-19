import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import Slider from "./component/Slider";
import ProductList from "./component/ProductList";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";
import Address from "./component/Address";
import Loginpage from "./pages/Loginpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home /> */}
      {/* <ProductDescription /> */}
      {/* <Cart /> */}
      <Loginpage />
    </>
  );
}

export default App;
