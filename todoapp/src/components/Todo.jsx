import React from 'react'

import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';



export default function Todo() {
    const dispatch=useDispatch();
    const todo=useSelector(state=>state.todos);

  return (
    <>
      <h1>Todo Applicatons</h1>
      <hr />
     
      {
        todo.map((t)=>{
                return <li key={t.id} >{t.text} <button onClick={()=>dispatch(removeTodo(t.id))}>Remove</button></li>
                })
                
           
       
      }


    </>
  )
}
