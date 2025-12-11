import React, { useState, useEffect } from "react";

function usefetch() {
  let [products, setProduct] = useState([]);
  let [errorMessage, setError] = useState("");
  let [isLoading, setLoading] = useState(true);
  useEffect( () => {
    let fetchApi= async()=>{
     try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

    }
    fetchApi();
  }, []);

  return { products, errorMessage, isLoading };
}

export default usefetch;
