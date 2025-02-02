import { FunctionComponent, useReducer } from "react";

interface ReducerProps {}

const initialValue: number = 0;

const redFunc = (state: number, action: string): number => {
  switch (action) {
    case "inc":
      return state + 1;

    case "dec":
      return state - 1;

    case "reset":
      return initialValue;

    default:
      return state;
  }
};

const Reducer: FunctionComponent<ReducerProps> = () => {
  const [counter, changeCounter] = useReducer(redFunc, initialValue);
  return (
    <>
      <p>Counter is {counter}</p>
      <button onClick={() => changeCounter("inc")} className="btn btn-success">
        +
      </button>
      <button onClick={() => changeCounter("reset")} className="btn btn-danger">
        Reset
      </button>
      <button onClick={() => changeCounter("dec")} className="btn btn-warning">
        -
      </button>
    </>
  );
};

export default Reducer;
