import { createStore } from "@reduxjs/toolkit";

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  if(action.type === "addBy"){
    return { counter: state.counter + action.payload }
  }

  return state;
};

const store = createStore(reducerFn);
export default store;
