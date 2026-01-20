import "./styles.css";
import { todoManager} from "./todo-functions.js";
import { updateDom } from "./update-dom.js";

updateDom.buildProjectList();

const newActionBtn = document.querySelector("#createNew");
newActionBtn.addEventListener("click", (e) => {
    const inputElement = document.querySelector("#newTaskTitle");
    todoManager.addTodo(inputElement.value);
    inputElement.value=""
});
