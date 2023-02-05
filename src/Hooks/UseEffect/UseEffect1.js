import { useState, useEffect } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("iam from useEffect");
  }, []);

  return (
    <div>
      <h1>UseEffect1</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UseEffect1;
