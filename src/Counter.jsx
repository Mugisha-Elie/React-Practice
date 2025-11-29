import './index.css'
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {setCounter(counter + 1)}
  const decrement = () => {setCounter(counter - 1)}

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-2'>
        <header>
          <h1>Counter</h1>
        </header>

        <main className = "flex flex-col justify-center items-center">
          <p>{counter}</p>
          <div className = "flex gap-2">
            <button className="border border-gray-400 rounded px-3 py-1" onClick={decrement}>-</button>
            <button className="border border-gray-400 rounded px-3 py-1" onClick={increment}>+</button>
          </div>
        </main>
    </div>
  )
}

export default Counter;