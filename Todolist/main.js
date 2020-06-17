const newTodoForm = document.querySelector(".new-todo-form");
const todosUl = document.querySelector(".todos");

const todosDatabase = [
  { id: 1, name: "Do my homework" },
  { id: 2, name: "Commit of the day" },
];

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

const deleteTodo = function (event) {
  const id = event.target.parentElement.dataset.id;
  const todoIndex = todosDatabase.findIndex(function (todo) {
    return todo.id === parseInt(id);
  });
  todosDatabase.splice(todoIndex, 1);
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

  const buttons = document.querySelectorAll(".todo-btn-delete");

  buttons.forEach(function (button) {
    button.addEventListener("click", deleteTodo);
  });
  console.log(todosDatabase);
};

newTodoForm.addEventListener("submit", addNewTodo);
updateHTML();
