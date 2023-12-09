import React, { useState } from 'react'

export default function Toggle() {
    const [on,setOn]=useState(false);
  return (
    <>
      <input type="checkbox" onClick={()=>setOn(!on)}/>
      <p>{on?"on":"off"}</p>
    </>
  )
}
