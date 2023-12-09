import React, { useState,useEffect } from 'react'

export default function Timer() {
    const [time,setTime]=useState(0);
   const handleInput=(e)=>{
    setTime((Number)(e.target.value));
} 
useEffect(()=>{
    if(time<=0)return ;
    setTimeout(()=>setTime(time-1),1000)
    
},[time])



        
    
    
return (
    <>
      <div>
        
        
        
        
      </div>
    
    </>
  )
}
