import { useState } from "react";

// NOTE: useState Hook => is a special function which takes one argument. The argument passed to useState is initial state. It returns an array of two entries. The first element is the initial state and the second is a function which is used for updating state.

const UseState1 = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="state1">
      <h1>UseState</h1>
      <button className="btn" onClick={add}>
        +
      </button>
      <span> {count} </span>
      <button className="btn" onClick={minus}>
        -
      </button>
    </div>
  );
};

export default UseState1;
