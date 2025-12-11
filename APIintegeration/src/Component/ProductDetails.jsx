import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const ProductDetails = () => {
  let [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
      


  }, []);

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
    </div>
  );
};

export default ProductDetails;
