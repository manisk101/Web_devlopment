import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const ListRendering = () => {
  const[items,setItem]=useState([
    {id:1,label:"Html",checked:true},
    {id:2,label:"CSS",checked:true},
    {id:3,label:"JavaScript",checked:true},
    {id:4,label:"React",checked:false}

  ])

  const[newinput,setNewInput]=useState("")
  const[isEditing,setisEditing]=useState(false)

  function handleChange(event){
   setNewInput(event.target.value)
  }

  function addList(){
    

  }

  function handleCheckbox(id){
    setItem(items.map(item=>
     item.id===id? {...item,checked:!item.checked }:item
    ))
  }

  function DeleteItem(){

  }

  function editing(){
    setisEditing(true)

  }


  return (
    <div>
        <h1>
            Courses
        </h1>
        <div>  
            <input type="text" value={newinput}
            onChange={handleChange}
            />
            <Button onClick={addList}>{isEditing?"Save":"ADD"}</Button>
        </div>
{
    items.map((item)=>{
        return(
            <FormGroup key={item.id}>
                 <FormControlLabel control={<Checkbox checked={item.checked}  onChange={() => handleCheckbox(item.id)}/>} label={item.label} />
                   <IconButton aria-label="delete" ><DeleteIcon  onClick={DeleteItem}/></IconButton> 
                   <Button><EditIcon onClick={editing}/></Button>
                
            </FormGroup>
            
        )

    })
   
}
    </div>
  )
}

export default ListRendering