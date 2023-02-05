import { useState } from "react";

const UseStateExample1 = () => {
  const [showData, setShowData] = useState(false);

  const show = () => {
    setShowData(!showData);
  };

  return (
    <div className="example1">
      <h1>UseState Example 1</h1>
      <h1>Conditional Rendering</h1>

      <br />
      <br />
      <button onClick={show}>{showData ? "hide" : "show"}</button>

      <br />
      <br />
      <br />
      {showData ? (
        <div className="data">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          sint reprehenderit mollitia voluptates, odio adipisci accusantium
          ullam harum tenetur placeat enim, blanditiis dolores?
        </div>
      ) : (
        <h3> No Data</h3>
      )}

      <br />
      <br />
      <br />
    </div>
  );
};

export default UseStateExample1;

{
  /* {showData && (
        <div className="data">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          expedita harum quae nesciunt commodi fugit libero minus tempora est
          odit Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae praesentium quasi quisquam illo odit corrupti, hic quis
          beatae minima quibusdam. Quidem quam repellendus ea quo id vero
          tempora recusandae facilis corporis rerum soluta sit error eum
          voluptatem, inventore ipsa porro officiis, laborum explicabo iste
          praesentium magni earum incidunt est. Doloribus!
        </div>
      )} */
}
