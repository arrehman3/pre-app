import React, { useState } from "react";

const Counter = () => {
    const [counter,setCounter]=useState(0);

    const increment = () => {
        setCounter((counter)=>counter+1);
    }
    const decrement = () => {
        setCounter((counter)=>counter-1);
    }
    const reset = () => {
        setCounter(0);
    }
  return (
    <section>
      <h2>Count is:</h2>
      <p>{counter}</p>
      <div className="flex  gap-16">
        <button onClick={increment}>+Increment</button>
        <button onClick={decrement}>-Decrement</button>
      </div>
      <div className="">
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
