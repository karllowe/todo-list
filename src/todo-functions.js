// const defaultProject = [];
import { projectList, projectManager } from "./project-functions";
import { updateDom, buildProjectList } from "./update-dom.js";

const toDoList = [];

class Todo {
    constructor(title, description, dueDate, priority, project, state){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project=project;
        this.state=state;
        this.id = crypto.randomUUID();
    }
};

const todoManager = (() => {
    function addTodo(title, description, dueDate, priority, project, state) {
        const selectionIndex = document.querySelector("#projectSelect").options.selectedIndex;
        const selectedProject = projectList[selectionIndex];

        const newToDo = new Todo(title, description, dueDate, priority, selectedProject, state);
        toDoList.push(newToDo);
        updateDom.addNewDiv(newToDo);

        console.log(newToDo);
        return newToDo
    };

    function deleteTodo(id) {
        const toDoId = id;
        const index = toDoList.findIndex((item) => item.id === toDoId);
        toDoList.splice(index,1);
        updateDom.removeDiv(toDoId)
    }

    function toggleComplete(id) {

    }

    return { addTodo, deleteTodo }
})();

export {todoManager, toDoList, projectManager};