import "./App.css";
import { useState } from "react";
import OutlineInput from "./components/OutlineInput.js";
import PrimaryButton from "./components/PrimaryButton.js";
import TextButton from "./components/TextButton.js";
import ToDo from "./components/ToDo.js";

function App() {
  const [inputValue, setInputValue] = useState(""); // 왜 빈 문자열을 줘야 하는지 이해 안됨
  const [toDoList, setToDoList] = useState([]); // 배열을 준 이유는 상태 값을 추가할 때마다 계속 넣어야 하기 때문에 배열을 준걸까?

  const ChangeHandle = (event) => {
    setInputValue(event.target.value);
  };

  const addToDo = () => {
    setToDoList((current) => [
      ...current,
      { isComplete: false, value: inputValue },
    ]);
    setInputValue();
  };

  const toggleComplete = (index) => {
    setToDoList((current) =>
      current.map((toDo, toDoindex) => {
        if (toDoindex === index) {
          const newToDo = Object.assign({}, toDo);

          newToDo.isComplete = !newToDo.isComplete;
          return newToDo;
        } else {
          return toDo;
        }
      })
    );
  };

  const isUncompletedToDo = (toDo) => !toDo.isComplete;

  const getUncompletedToDoList = () => toDoList.filter(isUncompletedToDo);

  const removeAllCompletedToDo = () => {
    setToDoList((current) => current.filter(isUncompletedToDo));
  };

  return (
    <div className="app">
      <h1 className="app-title">&#128466; To Do List</h1>

      <div className="app-form">
        <OutlineInput
          placeholder="무엇을 해야 하나요"
          value={inputValue}
          onChange={ChangeHandle}
        />
        <PrimaryButton label="할 일 추가" onClick={addToDo} />
      </div>

      <div className="app-list">
        {toDoList.map((toDo, index) => (
          <ToDo
            key={index}
            isComplete={toDo.isComplete}
            value={toDo.value}
            onClick={() => toggleComplete(index)}
          />
        ))}
      </div>

      <div className="app-footer">
        <p>남은 일: {getUncompletedToDoList().length}개</p>
        <TextButton label="완료 목록 삭제" onClick={removeAllCompletedToDo} />
      </div>
    </div>
  );
}

export default App;
