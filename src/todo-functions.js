// const defaultProject = [];
import { defaultProject } from "./project-functions";

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
        defaultProject.push(newToDo);

        return newToDo
    };

    function deleteTodo(id) {
        const toDoId = id;
        const index = defaultProject.findIndex((item) => item.id === toDoId);
        defaultProject.splice(index,1)
    }

    return { addTodo, deleteTodo }
})();

export {defaultProject, todoManager};