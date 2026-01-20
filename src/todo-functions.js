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
        return newToDo
    };

    function deleteTodo(id) {
        const todoid = id;
        const index = toDoList.findIndex((item) => item.id === todoid);
        toDoList.splice(index,1);
        updateDom.removeDiv(todoid)
    }

    function toggleComplete(id) {
        const toDoItem = toDoList.find((item) => item.id === id);
        if (toDoItem.state !== "complete") {
            toDoItem.state = "complete"
        } else {
            toDoItem.state = "open"
        }
    }

    return { addTodo, deleteTodo, toggleComplete}
})();

export {todoManager, toDoList, projectManager};