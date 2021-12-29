import React from 'react'
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {decrement , increment} from "./Action"

function App() {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
    <h1>{count}</h1>
    <button onClick={() =>dispatch(decrement())}>Decrement</button>
    <button onClick={() =>dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
