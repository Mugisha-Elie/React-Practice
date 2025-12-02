import './index.css'
import { useReducer, useEffect, useRef } from 'react';
import { produce } from 'immer';


const reducer = (state,action) => {
    switch(action.type){
      case 'INCREMENT':
        // return {
        //   ...state,
        //   count: state.count + state.step,
        // };
        state.count = state.count + state.step;
        break;

      case 'DECREMENT':
        return {
          ...state,
          count: state.count - state.step,
        };

      case 'CHANGE_STEP':
        return {
          ...state,
          step: action.payload
        }

      default:
        throw new Error(`action type ${action.type} is unexpected.`);

        
    }
  };

const Counter = () => {

  // const [counter, setCounter] = useState(0);
  // const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(produce(reducer), {count:0, step: 1});

  const increment = () => {
    dispatch({type: 'INCREMENT'})
    buttonRef.current.classList.toggle("border-gray-400")
    buttonRef.current.classList.toggle("border-orange-500")
  }
  const decrement = () => dispatch({type: 'DECREMENT'})

  const handleChange = (e) => dispatch({type: 'CHANGE_STEP', payload: parseInt(e.target.value)})

  useEffect(() => {
    console.log("Component Rerenderd")
  })

  const buttonRef = useRef(null)

  

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-2'>
        <header>
          <h1>Counter</h1>
        </header>

        <main className = "flex flex-col justify-center items-center">
          <p>{state.count}</p>
          <div className = "flex gap-2">
            <button className="border border-gray-400 rounded px-3 py-1" onClick={decrement}>-</button>
            <button className="border border-gray-400 rounded px-3 py-1" ref={buttonRef} onClick={increment}>+</button>
          </div>
    
        </main>

        <section>
          <label htmlFor="step">Step</label>
          <input 
          type="range"
          id="step"
          min="1"
          max="10"
          value={state.step}
          onChange={handleChange}
          />
          <label htmlFor="">{state.step}</label>
        </section>

    </div>
  )
}

export default Counter;