import { renderTodos } from "./render.js";
export { addToLocalStorage, deleteTodo, getFromLocalStorage, todoObj };

let todoObj = [];

// Add todos to local storage
function addToLocalStorage(todoObj) {
  // convert array to string then store it.
  localStorage.setItem("todos", JSON.stringify(todoObj));
  // render todos
  renderTodos(todoObj);
}

// deletes a todo from array -> updates localStorage
function deleteTodo(id) {
  // filter li with id
  todoObj = todoObj.filter(function (item) {
    //int != string
    return item.id != id;
  });
  // update the localStorage
  addToLocalStorage(todoObj);
}

// Get items from localStorage
function getFromLocalStorage() {
  //Get all items with key of todos
  const reference = localStorage.getItem("todos");
  // if reference exists
  if (reference) {
    // parse and store it in todos
    todoObj = JSON.parse(reference);
    renderTodos(todoObj);
  }
}
