import React, { useState } from 'react'
import Button from '@mui/material/Button'

const App = () => {
const [count,setCount]=useState(0)
const[sample,setSample]=useState(setvalue())
const[myfun,setmyfun]=useState(()=>{return usefun()})

function setvalue(){
  return 100
}


function usefun(){
  return 101
}

function countincrease(){
setCount((mycount)=>{
  return mycount+1
})
}
function countDecrease(){
 setCount(count-1)
}




  return (
    <div>
      <h1>Count {count}   ----{sample}   --{myfun}</h1>
  <Button onClick={countincrease}>increease</Button>
<Button onClick={countDecrease}>Decrease
</Button></div>
  )
}

export default App