import React, { useState } from 'react'
import List from './List';


export default function Addtodo() {
    const [new_todo,setNewTodo]=useState("");
  const [todo,setTodo]=useState([]);
  const handleAdd=(e)=>{
    
    setTodo([...todo,new_todo])
    setNewTodo("");
  }
  return (
    <div>
       <input value={new_todo} type="text" onChange={(e)=>setNewTodo(e.target.value)}/>
        <button onClick={handleAdd} >Add</button>
        <hr />
        <List todo={todo} setTodo={setTodo}/>
    </div>
  )
}
