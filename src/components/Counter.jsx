import React from 'react'
import { useState } from 'react';
import './Counter.css'
const Counter = () => {
    // let count = 0;
    let [count,setCount] = useState(0);
    const increment = () => {
        if (count < 10) {
            setCount(count + 1);
        }
        else {
            alert("Count should be less than 10");
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            alert("Count should be greater than 0");
        }
    }
    const inc_by_two = () => {
        if (count < 9) {
            setCount(count + 2);
        }
        else {
            alert("Count should be less than 9");
        }
    }
    const dec_by_two = () => {
        if (count > 1) {
            setCount(count - 2);
        }
        else {
            alert("Count should be greater than 1");
        }
    }
  return (
    <div className='counter'>
      <h1>{count}</h1>
        <div className="buttons">
            <div className="one_update">
                <button className="one_button" onClick={increment}>Click me</button>
                
                <button className="one_button" onClick={decrement}>decrement</button>
            
            </div>
            <div className="two_update">
                <button className="two_button" onClick={inc_by_two}>increment by 2</button>
                <button className="two_button" onClick={dec_by_two}>decrement by 2</button>
            </div>
             </div>
    </div>
  )
}

export default Counter
