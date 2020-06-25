const newTodoForm = document.querySelector(".new-todo-form");
const todos = document.querySelector(".todos");
const btnClearAll = document.querySelector(".btn-clear-all");
const btns = document.querySelectorAll(".todo-btn-delete");

const addNewTodo = (event) => {
  event.preventDefault();
  const input = event.target.elements[0];
  const taskName = input.value;
  if (taskName === "") return;
  const newTodo = {
    id: Date.now(),
    name: taskName,
  };
  todosDatabase.push(newTodo);
  updateHTML();
  input.value = "";
};

const updateHTML = () => {
  const todosHTML = todosDatabase
    .map(function (todo) {
      return `<li class="todo" data-id="${todo.id}">
      <input type="checkbox">
      <span class="todo-task">${todo.name}</span>
      <button class="todo-btn-delete">X</button>
      </li>`;
    })
    .join("");
  todos.innerHTML = todosHTML;

  btns.forEach(function (button) {
    button.addEventListener("click", deleteTodo);
  });
  console.log(todosDatabase);
};

newTodoForm.addEventListener("submit", addNewTodo);
updateHTML();
