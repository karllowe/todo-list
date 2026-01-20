// const defaultProject = [];
import { projectList } from "./project-functions";
import { updateDom, buildProjectList } from "./update-dom.js";

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
        const newToDo = new Todo(title, description, dueDate, priority, project, state);
        projectList.push(newToDo);
        updateDom.addNewDiv(newToDo);
        return newToDo
    };

    function deleteTodo(id) {
        const toDoId = id;
        const index = projectList.findIndex((item) => item.id === toDoId);
        projectList.splice(index,1);
        updateDom.removeDiv(toDoId)
    }

    return { addTodo, deleteTodo }
})();

export {todoManager};