import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import Shop from './Component/shop'
import Product from './Component/product'
export let userContext=createContext()

const App = () => {
 
  const[user,setUser]=useState({
    user:"Mani",
    age:24,
    place:"chennai",
    email:"mani@gmail.com"

  })





  return (
  <userContext.Provider value={{user}}>
      <div>
       <Shop/>
       <Product/>
      </div>
  </userContext.Provider>
  )
}

export default App