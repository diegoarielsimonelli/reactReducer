import { useReducer } from "react";

// Definimos el reducer
const reducer = (state, action) => {
  //Siempre retorna un estado o un objeto. Recibe como parametros un state y un action por convención.
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};
const initialState = { count: 0 };
const Counter = () => {
  // Definimos el estado inicial y el dispatch

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
