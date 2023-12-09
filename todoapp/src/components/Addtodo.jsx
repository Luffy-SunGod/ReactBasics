import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export default function Addtodo() {
    const dispatch=useDispatch();
    const [input,setInput]=useState("");

    const addtodo=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
  return (
   <>
    <form onSubmit={addtodo}>
        <input type="text"  value={input} onChange={((e)=>setInput(e.target.value))}/>
        
        <button>add</button>

    </form>
   </>
  )
}
