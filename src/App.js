import './App.css';
import { useSelector,useDispatch } from 'react-redux'
import { action } from './store/index'

function App() {
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch();
  const increment = () =>{
        dispatch(action.increment());
  }


  const decrement = () => {
        dispatch(action.decrement());
  }

  const addBy = () =>{
    dispatch(action.addBy(10))
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
