import React from 'react'
import ProductDetails from './ProductDetails'

const Product = ({products}) => {

  return (
    <div>
        <h1>Products</h1>

        <section>
        <h5>{products.name}</h5>
        <h5>{products.price}</h5>
        <h5>{products.color}</h5>
        <ProductDetails name={products.name}
        price={products.price}/>
        </section>
 
    </div>
  )
}

export default Product