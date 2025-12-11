import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      <h2>
        <Link to="productlist">ProductList</Link>
      </h2>
      <h4>
        <Link to="details">ProductDetails</Link>
      </h4>
      <Outlet />
    </div>
  );
};

export default Product;
