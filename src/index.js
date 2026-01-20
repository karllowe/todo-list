import "./styles.css";
import { todoManager} from "./todo-functions.js";
// import { updateDom } from "./update-dom.js";

// updateDom.rebuildDom();

const newActionBtn = document.querySelector("#createNew");
newActionBtn.addEventListener("click", (e) => {
    const inputElement = document.querySelector("#newTaskTitle");
    const newToDo = todoManager.addTodo(inputElement.value);
    // updateDom.addNewDiv(newToDo);
    inputElement.value=""
});
