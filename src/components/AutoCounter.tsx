import  { useEffect, useState } from "react";

const AutoCounter = () => {
    const [counter,setCounter]=useState(0);

    const increment = () => {
        const timer = setInterval(()=>{
            setCounter((counter)=>counter+1);
            console.log('counter value updated');
        },1000)
        return timer;
    }
    const decrement = () => {
        setCounter((counter)=>counter-1);
    }
    const reset = () => {
        setCounter(0);
    }
    useEffect(()=>{
        const timer = increment();

        return()=>(
            clearInterval(timer)
        )
    },[])

    
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

export default AutoCounter;
