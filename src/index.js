import "./styles.css";
import { todoManager, projectManager} from "./todo-functions.js";


projectManager.addNewProject("Default");

const newActionBtn = document.querySelector("#createNew");
newActionBtn.addEventListener("click", (e) => {
    const inputElement = document.querySelector("#newTaskTitle");
    todoManager.addTodo(inputElement.value);
    inputElement.value=""
});

const showNewProjectBtn= document.querySelector("#showNewProjectModal");
const modal = document.querySelector("#newProjectModal");

showNewProjectBtn.addEventListener("click", () => {
    modal.showModal()
});

const closeNewProjectModalBtn = document.querySelector("#newProjectModal .close");
closeNewProjectModalBtn.addEventListener("click", () => {
    modal.close()
});

const createNewProjectBtn = document.querySelector("#addNewProject");
createNewProjectBtn.addEventListener("click", () => {
    const input = document.querySelector("dialog input")
    projectManager.addNewProject(input.value);
    input.value="";
    modal.close()
})