import React from 'react'
import PropTypes from 'prop-types'

const ProductDetails = ({name,price}) => {
    
  return (
    <div>
        <h1>products details</h1>
        <section>
            <h4>{name}</h4>
            {price}

        </section>
    </div>
  )
}

export default ProductDetails
