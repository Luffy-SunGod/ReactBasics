import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav2() {
  return (
    
    <div>
      <nav>
        <ul>
            <li><Link to='/addTodo'>Addtodo</Link></li>
            <li><Link to='/list'>todo</Link></li>
            <li><Link to='/timer'>timer</Link></li>
           
        </ul>
      </nav>
    </div>
  )
}
