import React, { useState } from 'react'
import Button from '@mui/material/Button'

const Condition = () => {
  const[count,setCount]=useState(()=>{return 0})
  let message;

  let countremain=10-count


  function handleIncrease(){
    setCount(()=>count+1)

  }

  function handledecrease(){
    setCount(()=>count-1)
  }
  if(count<10){
    message=(
      <div>
        <h3>still  {countremain}  remaining to unlock reward</h3>
      </div>
    )
  }

   if(count===10){
    message=(
      <div>
        <h3>you unlock the  reward....</h3>
      </div>
    )
  }


  return (
    <div>
      <h1>{count}</h1>
      {message}
      <Button onClick={handleIncrease}>Increase</Button>
      <Button onClick={handledecrease}>Decrease</Button>
    </div>
  )
}

export default Condition