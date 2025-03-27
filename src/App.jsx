import { useState } from "react";

import "./App.css";

import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";

import PageRoutes from "./routes/PageRoutes";
import Dashboard from "./pages/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PageRoutes />
    </>
  );
}

export default App;
