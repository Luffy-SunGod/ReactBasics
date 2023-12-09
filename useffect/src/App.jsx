import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("mounted");
    console.log("count is:",count);
    return ()=>{
      console.log("unmounting");
    }
  },[count]);
  return (
    <>
     <div>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
     </div>
    </>
  )
}

export default App
