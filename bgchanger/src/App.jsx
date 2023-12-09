import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ background: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 mx-3 py-2 rounded-3xl">
          <button onClick={()=>{setColor("red")}}>red</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 mx-3 py-2 rounded-3xl">
          <button onClick={()=>{setColor("black")}}>black</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mx-3">
          <button onClick={()=>{setColor("yellow")}}>yellow</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 mx-3 py-2 rounded-3xl">
          <button onClick={()=>{setColor("blue")}}>blue</button>
        </div>
      </div>
      </div>

    </>
  )
}

export default App
