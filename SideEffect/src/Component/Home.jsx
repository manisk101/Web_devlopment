import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate= useNavigate()
    let[count,setCount]=useState(0)
useEffect(()=>{
  console.log('every render the effect is run')
})
useEffect(()=>{
  console.log('only run in initiall render the effect is run')
},[])

useEffect(()=>{
  console.log('only run in initiall render the effect is run')
},[count])


  return (
    <div>
      <h1>Home</h1>
        <h2>{count}</h2>
       <button onClick={()=>setCount(count+1)}>Increase</button>

       <button onClick={()=>navigate('/product')}>product</button>
    </div>
  )
}

export default Home