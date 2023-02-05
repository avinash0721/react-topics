import { useState } from "react";

const UseStateExample2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <h1>Form Handling</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-content">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter name"
            value={name}
            onChange={changeName}
          />
        </div>

        <div className="form-content">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={changeEmail}
          />
        </div>

        <div className="form-content">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={changePassword}
          />
        </div>

        <div className="form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UseStateExample2;
