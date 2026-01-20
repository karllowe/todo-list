import { updateDom } from "./update-dom";

const projectList = [];

class project {
    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID();
    }
}

const projectManager = (() => {
    function addNewProject(name) {
        const newProject = new project(name);
        projectList.push(newProject);
        updateDom.buildProjectList();
        
        return newProject
    }

    return {addNewProject}
})();



export {projectList, projectManager}