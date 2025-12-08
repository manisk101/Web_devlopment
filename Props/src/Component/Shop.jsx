import React from 'react'
import { useState } from 'react'
import Product from './product'

const Shop = () => {

    const[product,SetProduct]=useState({
        name:"Nothing",
        color:"White",
        price:"2500",
        RAM:"16GB"
    })
  return (
    <div>Shop
        <Product products={product}/>
    </div>
  )
}

export default Shop