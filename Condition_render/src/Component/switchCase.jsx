import React, { useState } from 'react'

const SwitchCase = () => {

    const[data,setData]=useState("Error")


    let displaycomp=()=>{
        switch(data){
            case "Loading": return <Loading/>
            break;
            case "Success": return <Success/>
            break
            case "Error": return <Error/>
            break
        }
    }


  return (
    <div>
        {displaycomp()}
     </div>
  )
}

export default SwitchCase

function Loading(){

    return(
    <div>
        <h4>Loading.....🔃</h4>
    </div>
    )


}

function Success(){
 return(
     <div>
        <h4>Success..💖</h4>
    </div>

 )  

}

function Error(){

    return(
    <div>
        <h4>Error🌋</h4>
    </div>

    )


}