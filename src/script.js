const todo = document.querySelector("#todo");
const addBtn = document.querySelector("#addBtn");
const todoBox = document.querySelector("#todoBox");

addBtn.addEventListener("click", () => {
  const newTodo = document.createElement("label");
  const checkBox = document.createElement("input");
  const checkMark = document.createElement("span");
  const rmBtn = document.createElement("button");

  newTodo.classNaem = "new-todo";
  newTodo.innerText = todo.value;
  checkBox.type = "checktBox";
  checkMark.className = "check-mark";
  rmBtn.className = "rm-btn";

  newTodo.appendChild(checkBox);
  newTodo.appendChild(checkMark);
  newTodo.appendChild(rmBtn);
  todoBox.appendChild(newTodo);

  todo.value = "";

  checkBox.addEventListener("change", () => {
    newTodo.classList.toggle("check");
  });

  rmBtn.addEventListener("click", (event) => {
    todoBox.removeChild(event.currentTarget.parentNode);
  });
});
