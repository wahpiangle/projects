let toDoArray = [];

export {toDoArray};

//factory function to create ToDo object
export function createToDo(Title, DueDate, Project){
    return {
        Title: Title,
        DueDate: DueDate,
        Project: Project};
}