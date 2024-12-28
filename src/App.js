import "./App.css";
import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 막아주는 코드
    if (toDo.trim() !== "") {
      setToDos((currentArray) => [...currentArray, toDo]);
      setToDo("");
    }
  };

  const onToggleCheck = (index) => {
    setToDos((currentArray) => {
      return currentArray.map((item, i) => {
        if (i === index) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  };

  const onRemove = (index) => {
    setToDos((currentArray) => currentArray.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className="title">Todo List</h1>
      <form className="form-box" onSubmit={onSubmit}>
        <input
          id="todo"
          className="todo-input"
          type="text"
          value={toDo}
          onChange={onChange}
          placeholder="입력해주세요"
        />
        <button id="addBtn" type="submit" className="add-btn"></button>
      </form>
      <div id="todoBox" className="todo-box">
        {toDos.map((item, index) => (
          <label
            className={`new-todo ${item.checked ? "check" : ""}`}
            key={index}
          >
            {item.text}
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onToggleCheck(index)}
            />
            <span className="check-mark"></span>
            <button className="rm-btn" onClick={() => onRemove(index)}></button>
          </label>
        ))}
      </div>
    </>
  );
}

export default App;