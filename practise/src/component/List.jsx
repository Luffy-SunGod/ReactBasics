import React from 'react'

export default function List(props) {
  console.log(props);
  var { todo } = props;
  const handleRemove=(index)=>{
    todo=todo.filter((i)=>i!==todo[index])
    props.setTodo(todo);
  }
  return (
    <div>
      <ol>
        {todo.map((item,index) => {
          return <div>
          <li key={index}>{item} 
          <button  onClick={()=>handleRemove(index)}>Remove</button>
          </li>
          <br />
          </div>
          })}
      </ol>
    </div>
  )
}
