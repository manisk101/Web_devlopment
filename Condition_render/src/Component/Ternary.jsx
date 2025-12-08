import React, { useState } from 'react'
import Button from '@mui/material/Button'

const Ternary = () => {
  const[count,setCount]=useState(()=>{return 0})
  let message;

  let countremain=10-count


  function handleIncrease(){
    setCount(()=>count+1)

  }

  function handledecrease(){
    setCount(()=>count-1)
  }

  return (
    <div>
      <h1>{count}</h1>
      {message}
      <Button onClick={handleIncrease}>Increase</Button>
      <Button onClick={handledecrease}>Decrease</Button>

      {count<10?<p>still  {countremain}  remaining to unlock reward</p>:<p>you unlock the  reward....</p>}
    </div>
  )
}

export default Ternary