import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'


const Product = () => {
   let {user}= useContext(userContext)
   
  return (
    <div>
      
      Product
      <h2>{user.user}</h2>
      <h3>{user.age}</h3>
      <h4>{user.place}</h4>
      
      </div>
  )
}

export default Product