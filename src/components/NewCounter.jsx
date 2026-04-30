import React from 'react'
import { useState } from 'react';
import './Counter.css'
const Counter = () => {
    // let count = 0;
    let [count,setCount] = useState(0);
    
   const modify = (value)=>{
    setCount(count+=value);
    
   }
  return (
    <div className='counter'>
      <h1>{count}</h1>
        <div className="buttons">
            <div className="one_update">
                <button className="one_button" onClick={()=>modify(1)}>Click me</button>
                
                <button className="one_button" onClick={()=>modify(-1)}>decrement</button>
            
            </div>
            <div className="two_update">
                <button className="two_button" onClick={()=>modify(2)}>increment by 2</button>
                <button className="two_button" onClick={()=>modify(-2)}>decrement by 2</button>
            </div>
             </div>
    </div>
  )
}

export default Counter
