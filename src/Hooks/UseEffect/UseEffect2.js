import { useState, useEffect } from "react";

// useEffect hook =>  Accepts a function (). that interact with outside world of React components and a  array[]. of dependency.
const UseEffect2 = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);
    console.log("useEffect-2 ", count);

    return () => {
      console.log("removed");
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return (
    <div>
      <h1>UseEffect2</h1>
      <h1>{count}</h1>
      <h1 onClick={() => setToggle(!toggle)}> {toggle ? "Open" : "Close"}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h1>pagewidth:{pageWidth}</h1>
    </div>
  );
};

export default UseEffect2;

//! NOTE: Use cases of React useEffect hook

// 1.  if we don’t pass dependency variable then useEffect hook will only called when our component is rendered .

//2. If we pass an empty array to useEffect then our component will be rendered for first time when a component is rendered. To re-call useEffect hook we have to refresh our page.

//3. If we pass dependencies to useEffect hook, then useEffect will executed every time when the variables which we passed to dependency array .
