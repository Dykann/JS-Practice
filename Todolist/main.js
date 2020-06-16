const newTodoForm = document.querySelector(".new-todo-form");
const todosUl = document.querySelector(".todos");

const todos = [
  { id: 1, name: "Do my homework" },
  { id: 2, name: "Commit of the day" },
];

const addNewTodo = (event) => {
  event.preventDefault();
  const input = event.target.elements[0];
  const taskName = input.value;
  const newTodo = {
    id: Date.now(),
    name: taskName,
  };
  todos.push(newTodo);
  updateHTML();
};

const updateHTML = () => {
  todosUl.innerHTML = "";

  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.classList.add("todo");
    li.setAttribute("data-id", todo.id);

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");

    const span = document.createElement("span");
    span.classList.add("todo-task");
    span.innerText = todo.name;

    const btn = document.createElement("button");
    btn.classList.add("todo-btn-delete");
    btn.textContent = "X";
    btn.addEventListener("click", deleteTodo);

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(btn);
    todosUl.appendChild(li);
  });
};

const deleteTodo = (event) => {
  delete todos.find(function (todo) {
    todo.id === event.target.parentElement.dataset.id;
  });
  console.log(todos);
  event.target.parentElement.remove();
};

newTodoForm.addEventListener("submit", addNewTodo);
updateHTML();
