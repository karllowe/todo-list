const projectList = [];

class project {
    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID();
    }
}

const defaultProject = new project("Default");
projectList.push(defaultProject);

export {projectList}