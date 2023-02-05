import { useState } from "react";

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
