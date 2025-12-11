import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const ProductDetails = () => {
  let [products, setProduct] = useState([]);
  let [errorMessage, setError] = useState("");
  let [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("please search proper data");
        }
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
