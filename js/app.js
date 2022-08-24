import { renderTodos } from "todoList/js/render.js";
import { addTodo, inputTodo } from "todoList/js/addItem.js";
import {addToLocalStorage, deleteTodo, getFromLocalStorage, todoObj} from "/js/localStorage.js";
export { listOutput, todoObj };

const todoForm = document.querySelector(".todo-form");
const listOutput = document.getElementById("list-output");

//Get everything from localStorage on page reload
getFromLocalStorage();

///// EVENT LISTENERS
//Run addTodo function on submit
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(inputTodo.value);
});
//Listen for click event in all delete-buttons
listOutput.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    // get ID for deletion
    deleteTodo(event.target.parentElement.getAttribute("data-key"));
  }
});
