import { defaultProject } from "./project-functions";


const updateDom = (() => {
    const mainUl = document.querySelector("ul");

    function rebuildDom() {
        mainUl.textContent="";
        defaultProject.forEach((item) => {
            const newLi = document.createElement("li");
            newLi.setAttribute("toDoId",newToDo.id);
            newLi.textContent = item.title;
            mainUl.appendChild(newLi);
        })
    }
    function addNewDiv(newToDo) {
        const newLi = document.createElement("li");
        newLi.setAttribute("toDoId",newToDo.id);

        const newP = document.createElement("p");
        newP.textContent=newToDo.title;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener("click", (e) => {
            updateDom.removeDiv(e.target.parentNode.attributes.todoid.nodeValue)        
        });

        newLi.appendChild(newP);
        newLi.appendChild(deleteBtn);

        mainUl.appendChild(newLi)       
    }

    function removeDiv(id) {
        const divToDelete = document.querySelector(`[todoid=${id}]`);
        divToDelete.remove();
        console.log(divToDelete);

    }
    return {rebuildDom, addNewDiv, removeDiv}
})();

export {updateDom}