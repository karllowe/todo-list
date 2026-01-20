import { projectList } from "./project-functions";
import {toDoList, todoManager} from "./todo-functions";

const updateDom = (() => {
    const mainUl = document.querySelector("ul");

    function rebuildDom() {
        mainUl.textContent="";
        toDoList.forEach((item) => {
            const newLi = document.createElement("li");
            newLi.setAttribute("todoid",newToDo.id);
            newLi.textContent = item.title;
            mainUl.appendChild(newLi);
        })
    }
    function addNewDiv(newToDo) {
        const newLi = document.createElement("li");
        newLi.setAttribute("todoid",newToDo.id);

        const statusBtn = document.createElement("button");
        statusBtn.classList.add("statusBtn");
        statusBtn.addEventListener("click", (e) => {
            todoManager.toggleComplete(newToDo.id)
        });

        const newP = document.createElement("p");
        newP.textContent=newToDo.title;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener("click", (e) => {
            updateDom.removeDiv(e.target.parentNode.attributes.todoid.nodeValue)        
        });

        newLi.appendChild(statusBtn);
        newLi.appendChild(newP);
        newLi.appendChild(deleteBtn);

        mainUl.appendChild(newLi)       
    }

    function removeDiv(id) {
        const divToDelete = document.querySelector(`[todoid="${id}"]`);
        divToDelete.remove();
    }

    function buildProjectList() {
        const selectElement = document.querySelector("#projectSelect");
        selectElement.textContent="";
        projectList.forEach((project) => {
            const option = document.createElement("option");
            option.value=project.name;
            option.textContent=project.name;

            selectElement.appendChild(option)
        })
    }

    function updateDiv() {

    }

    return {rebuildDom, addNewDiv, removeDiv, buildProjectList, updateDiv}
})();

export {updateDom}