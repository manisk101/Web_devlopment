import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'

const Shop = () => {

  
  return (
    <div>shop
       <userContext.Consumer>
        {
          ({user})=>{
            return(
             < div>
              <h4>{user.user}</h4>
              <h3>{user.email}</h3>
              </div>
            )

          }
        }
       </userContext.Consumer>
    </div>
  )
}

export default Shop