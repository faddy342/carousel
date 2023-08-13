import { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setcount] = useState(0)
  function minus() {
    if (count > 0) {
      setcount(count - 1)
    }
  }
  function plus() {
    setcount(count + 1)
  }
  return (
    <>
      <button onClick={minus} className='btn'>-</button>
      <span className='num'>{count}</span>
      <button onClick={plus} className='btn'>+</button>
    </>
  );
}

export default App;
