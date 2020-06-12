const newTodoForm = document.querySelector(".new-todo-form");
const todos = document.querySelector(".todos");

const addNewTodo = function (event) {
  event.preventDefault();
  const [input] = event.target.elements;
  const taskName = input.value;
  createTaskHTML(taskName);
  input.value = "";
};

const createTaskHTML = function (value) {
  const todo = document.createElement("li");
  todo.classList.add("todo");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  const span = document.createElement("span");
  span.classList.add("todo-task");
  span.innerText = value;

  const btn = document.createElement("button");
  btn.classList.add("todo-btn-delete");
  btn.innerText = "X";

  todo.appendChild(input);
  todo.appendChild(span);
  todo.appendChild(btn);

  todos.appendChild(todo);
};

newTodoForm.addEventListener("submit", addNewTodo);
