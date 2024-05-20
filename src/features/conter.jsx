import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{count}</h1>
      <div className="space-x-2">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </button>
      </div>
    </div>
  );
}

export default Counter;
