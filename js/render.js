import { listOutput } from "todolist/js/app.js";
export { renderTodos };

// Render todo
function renderTodos(todoObj) {
  // clear everything inside ul
  listOutput.innerHTML = "";
  // run through each item
  todoObj.forEach(function (item) {
    // Ugly solution to get date displayed correctly(please dont hate me)
    const creationDate = new Date(item.id).toISOString();
    const dateTime = creationDate.substring(11, 16);
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
      `;
    //Append the li to the ul
    listOutput.append(li);
  });
}
