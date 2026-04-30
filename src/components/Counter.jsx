import React from 'react'
import { useState } from 'react';
const Counter = () => {
    // let count = 0;
    let [count,setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
  return (
    <div>
      <button onClick={increment}>Click me</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Counter
