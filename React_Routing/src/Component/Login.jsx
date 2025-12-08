import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   let navigate= useNavigate()
   let Moveto=()=>{
    navigate("/home")
   }
  return (
    <div>
        Login

        <button onClick={Moveto}>GO Home</button>

    </div>
  )
}

export default Login