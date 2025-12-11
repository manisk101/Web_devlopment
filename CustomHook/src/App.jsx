import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Product from "./Component/Product";
import ProductList from "./Component/ProductList";
import ProductDetails from "./Component/ProductDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/product" element={<Product />}>
            <Route index element={<ProductList />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
