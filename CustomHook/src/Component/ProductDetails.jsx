import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import usefetch from "./CustomHook";
import useaxios from "./axios";


const ProductDetails = () => {

let {products,errorMessage,isLoading}=useaxios()

  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Product Details</h1>

        {products.map((product) => {
          return (
            <Card key={product.id}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">${product.price}</small>
              </Card.Footer>
            </Card>
          );
        })}
        <section>{errorMessage && <p>{errorMessage}</p>}</section>
      </div>
    );
  }
};

export default ProductDetails;
