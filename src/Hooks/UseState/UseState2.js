import { useState } from "react";

const UseState2 = () => {
  const userFrom = {
    firstName: "Hitler",
    country: "Germany",
    city: "Berlin",
  };

  const [data, setData] = useState(userFrom);

  const change = () => {
    setData({
      ...data,
      firstName: "John",
    });
  };

  const changeCountry = () => {
    setData({
      ...data,
      country: "Nederlands",
    });
  };

  const changeCity = () => {
    setData({
      ...data,
      city: "Amsterdam",
    });
  };
  return (
    <div className="state2">
      <h1>Advanced UseState</h1>
      <br />
      <h2>FirstName : {data.firstName}</h2>
      <h2>Country : {data.country}</h2>
      <h2>City:{data.city} </h2>
      <br />
      <br />
      <button onClick={change}>Change Name</button>
      <br />
      <br />

      <button onClick={changeCountry}>Change Country</button>
      <br />
      <br />
      <button onClick={changeCity}>Change City</button>
    </div>
  );
};
export default UseState2;
