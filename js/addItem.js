import { todoObj, addToLocalStorage } from "todoList/js/localStorage.js";
export { addTodo, inputTodo };

const inputTodo = document.getElementById("input-todo");
const errorMsg = document.getElementById("error");

function addTodo(item) {
  //item not empty
  if (item !== "") {
    //Clear errorMsg
    errorMsg.textContent = "";
    //Create object
    const todo = {
      id: Date.now(),
      name: item,
    };
    //Push object to array
    todoObj.push(todo);
    // store it in localStorage
    addToLocalStorage(todoObj);
    //Clear input field
    inputTodo.value = "";
  } else {
    errorMsg.textContent = "Please fill in a task on your todo list";
  }
}
