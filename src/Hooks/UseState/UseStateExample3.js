import { useState } from "react";

const UseStateExample3 = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });

  const [editing, setEditing] = useState({
    id: "",
    isEditing: false,
  });
  const changeMessage = (e) => {
    setMessage({ ...message, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };

    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
  };

  const handleDelete = (id) => {
    let newTodos = list.filter((eachItem) => {
      return eachItem.id !== id;
    });

    setList(newTodos);
  };

  const changeEdit = (id) => {
    console.log(id);
    setEditing({
      ...editing,
      id: id,
      isEditing: true,
    });

    let editableItem = list.find((eachItem) => eachItem.id === id);

    setMessage({
      ...message,
      text: editableItem.text,
      id: editableItem.id,
    });
    console.log(editableItem);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    let newTodos = list.map((eachItem) => {
      if (eachItem.id === editing.id) {
        return {
          text: message.text,
          id: editing.id,
        };
      } else {
        return eachItem;
      }
    });
    setList(newTodos);
    setMessage({
      text: "",
      id: "",
    });
    setEditing({
      id: "",
      isEditing: false,
    });
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form>
        <input
          className="todo-text"
          type="text"
          id="message"
          name="message"
          placeholder="Enter Text"
          value={message.text}
          onChange={changeMessage}
        />

        {editing.isEditing ? (
          <button onClick={handleEdit} type="submit">
            edit
          </button>
        ) : (
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        )}
        {/* <button onClick={handleSubmit} type="submit">
          add
        </button> */}
      </form>
      <hr />
      {list.length === 0 && <h3>There is no items</h3>}
      <ul>
        {list.map((eachItem) => {
          const { text, id } = eachItem;

          return (
            <li className="list" key={id}>
              <span>{text}</span>
              <button onClick={() => changeEdit(id)}>edit</button>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseStateExample3;
