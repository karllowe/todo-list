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
        newLi.classList.add("open");
        console.log(newLi.status);

        // status button
        const statusDiv = document.createElement("div");
        statusDiv.classList.add("statusDiv");

        const statusBtn = document.createElement("button");
        statusBtn.classList.add("statusBtn");
        statusDiv.addEventListener("click", (e) => {
            todoManager.toggleComplete(newToDo.id);
        });

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.classList.add("statusIcon");
        svg.setAttribute("height", "24px");
        svg.setAttribute("width", "24px");
        svg.setAttribute("viewBox", "0 -960 960 960");
        svg.setAttribute("fill", "#e3e3e3");
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute(
            "d",
            "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
        );

        svg.appendChild(path);

        statusDiv.appendChild(svg);
        statusDiv.appendChild(statusBtn);

        // Title
        const newP = document.createElement("p");
        newP.textContent=newToDo.title;
        // delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener("click", (e) => {
            updateDom.removeDiv(e.target.parentNode.attributes.todoid.nodeValue)        
        });

        newLi.appendChild(statusDiv);
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

    function updateDone(id, status) {
        const divToUpdate = document.querySelector(`[todoid="${id}"]`);
        if (status === "complete" || status == undefined) {
            divToUpdate.classList.remove("open");
            divToUpdate.classList.add("complete")
        } else {
            divToUpdate.classList.remove("complete");
            divToUpdate.classList.add("open")
        }

    }

    return {rebuildDom, addNewDiv, removeDiv, buildProjectList, updateDone}
})();

export {updateDom}