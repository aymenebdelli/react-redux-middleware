import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux"
import {counterReducer} from "./Reducer"
import { Provider } from 'react-redux';
import logger from "redux-logger"

const myLogger = store => next => action =>{
  return next(action)
}

const secondMiddleWare = store => next => action =>{
  return next(action)
}

const capAtTen = store => next => action =>{
  if(store.getState() >= 10){
    return next({type: "DECREMENT"})
  }
  next(action)
}

// const myLogger = (store) => {
//   return next =>{
//     return action =>{
//       console.log("middle ware")
//       return next(action)
//     }
//   }
// }

const store =createStore(counterReducer, applyMiddleware(myLogger, secondMiddleWare,capAtTen,logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

