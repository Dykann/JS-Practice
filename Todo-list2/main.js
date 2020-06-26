const newTodoForm = document.querySelector(".new-todo-form");
const todosUl = document.querySelector(".todos");
const btnClearAll = document.querySelector(".btn-clear-all");
const todosDatabase = JSON.parse(localStorage.getItem("todosDatabase")) || [];

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
  localStorage.setItem("todosDatabase", JSON.stringify(todosDatabase));
  updateHTML();
  input.value = "";
};

const deleteTodo = function (event) {
  const id = event.target.parentElement.dataset.id;
  const todoIndex = todosDatabase.findIndex(function (todo) {
    return todo.id === parseInt(id);
  });
  todosDatabase.splice(todoIndex, 1);
  localStorage.setItem("todosDatabase", JSON.stringify(todosDatabase));
  updateHTML();
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
  todosUl.innerHTML = todosHTML;

  const btns = document.querySelectorAll(".todo-btn-delete");

  btns.forEach(function (button) {
    button.addEventListener("click", deleteTodo);
  });
  console.log(todosDatabase);
};

newTodoForm.addEventListener("submit", addNewTodo);
updateHTML();

btnClearAll.addEventListener("click", function () {
  localStorage.clear();
  todosDatabase.length = 0;
  updateHTML();
});
