const todoInput = document.querySelector("#todo-input");
const todoOption = document.querySelector("#todo-option");
const addBtn = document.querySelector(".add-btn");
const personalTodos = document.querySelector(".personal-list");
const workTodos = document.querySelector(".work-list");
const otherTodos = document.querySelector(".other-list");
const errorMessage = document.querySelector(".error");

const addTodo = () => {
  let todo = todoInput.value;
  let option = todoOption.value;

  if (todo === "") {
    errorMessage.classList.add("active");
    return false;
  } else {
    errorMessage.classList.remove("active");
  }

  let li = document.createElement("li");
  li.classList.add("todo");
  li.innerHTML = `
    ${todo} 
    <span class="delete-complete">
        <i class="far fa-trash-alt"></i>
        <i class="fas fa-check"></i>
    </span>
    `;

  if (option === "personal") {
    personalTodos.appendChild(li);
  } else if (option === "work") {
    workTodos.appendChild(li);
  } else {
    otherTodos.appendChild(li);
  }

  todoInput.value = "";
};

addBtn.addEventListener("click", addTodo);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement.remove();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.parentElement.classList.toggle("done");
  }
});
