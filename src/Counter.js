import { useState } from 'react';

const Counter = () => {
    const [state, setState] = useState({count: 0, theme:'blue'})
    const count = state.count
    const theme = state.theme
    function minus() {
      if (count > 0) {
        setState(prevState => {
          return{...prevState,count: prevState.count - 1}
        })
      }
    }
    function plus() {
      setState(prevState => {
        return { ...prevState, count: prevState.count + 1 }
      })
    }
    return (
      <div className='Counter'>
        <button onClick={minus} className='btn'>-</button>
        <span className='num'>{count}{theme}</span>
        <button onClick={plus} className='btn'>+</button>
      </div>
    );
}
export default Counter