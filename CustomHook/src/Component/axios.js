import axios from "axios";
import { useEffect, useState } from "react";

function useaxios() {
  let [products, setProduct] = useState([]);
  let [errorMessage, setError] = useState("");
  let [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let axiosapi = async () => {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    };

    axiosapi();
  }, []);


  return{products,errorMessage,isLoading}
}

export default useaxios;
