const todoForm = document.querySelector(".todo-form");
const inputTodo = document.getElementById("input-todo");
const submitBtn = document.getElementById("sub-btn");
const listOutput = document.getElementById("list-output");
const errorMsg = document.getElementById("error");
let todoObj = [];

//Run addTodo function on submit
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(inputTodo.value);
}); 

function addTodo(item) {
  //item not empty
  if (item !== "") {
    //Clear errorMsg
    errorMsg.textContent = "";
    //Create object
    const todo = {
      id: Date.now(),
      name: item
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

// Render todo
function renderTodos(todoObj) {
  // clear everything inside ul
  listOutput.innerHTML = "";
  // run through each item 
  todoObj.forEach(function (item) {
    // Ugly solution to get date displayed correctly(please dont hate me)
    const creationDate = new Date(item.id).toISOString();
    const dateTime = creationDate.substring(11, 16)
    const dateDay = creationDate.substring(8, 10);
    const dateMonth = creationDate.substring(5, 7);
    const dateYear = creationDate.substring(0, 4);
    
    // make <li>
    const li = document.createElement("li");
    // <li class="item"> </li>
    li.setAttribute("class", "item");
    // add ID to data-key attribute
    li.setAttribute("data-key", item.id);
    li.innerHTML = `
        ${item.name}
        <button class="delete-button"></button>
        <br/>
        <span id="created-time">Created: ${dateTime} - ${dateDay}/${dateMonth}/${dateYear}</span> 
      `
    //Append the li to the ul
    listOutput.append(li);
  });
}

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

//Get everything from localStorage on page reload
getFromLocalStorage();

//Listen for click event in all delete-buttons
listOutput.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    // get ID for deletion
    deleteTodo(event.target.parentElement.getAttribute("data-key"));
  }
});
