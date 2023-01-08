import { toDoArray, createToDo } from "./createToDo";

const contentDiv = document.querySelector(".content");

function initialDom(){
    //DOM for loaded project
    const projectInfoDiv = document.createElement("h1");
    projectInfoDiv.classList.add("h1-title");
    //to get the first project's name
    projectInfoDiv.textContent =  "Default Project";
    contentDiv.appendChild(projectInfoDiv);

    const taskContainer = document.createElement("div");
    contentDiv.appendChild(taskContainer);
    taskContainer.classList.add("task-container");

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "+ Add Task";
    addTaskButton.classList.add("add-task");
    contentDiv.appendChild(addTaskButton);
}
initialDom();
const taskContainer = document.querySelector(".task-container");
const addTaskButton = document.querySelector(".add-task");
const addTaskInput = document.createElement("input");
const addTaskConfirmButton = document.createElement("div");
const addTaskCancelButton = document.createElement("div");
const projectInfo = document.querySelector(".h1-title");

addTaskButton.addEventListener('click', () => {
    getInput();
});

addTaskConfirmButton.addEventListener('click', () => {
    addTask(addTaskInput.value);
    removePriorTasks();
    displayTasks();
    showAddTaskButton();
});

addTaskCancelButton.addEventListener('click', () => {
    showAddTaskButton();
});

//to show the add project button and remove the input, add, cancel buttons
function showAddTaskButton(){
    addTaskButton.style.display = "block";
    addTaskInput.value = "";
    addTaskInput.remove();
    addTaskConfirmButton.remove();
    addTaskCancelButton.remove();
}

function getInput(){
    addTaskButton.style.display = 'none';
    addTaskInput.classList.add("add-task-input");
    addTaskConfirmButton.textContent= "Add";
    addTaskConfirmButton.classList.add("add-task-confirm-button");
    addTaskCancelButton.textContent= "Cancel";
    addTaskCancelButton.classList.add("add-task-cancel-button");
    taskContainer.appendChild(addTaskInput);
    taskContainer.appendChild(addTaskConfirmButton);
    taskContainer.appendChild(addTaskCancelButton);
}

function addTask(x){
    //add the item to the array if it is not null
    let boolean = /^[A-Za-z0-9]*$/.test(x)
    if (boolean === false || x === "" ){
        alert("You can only enter letters and numbers.");
        return;
    }
    else if(toDoArray.includes(x)){
        alert("You can only enter an item once.");
        return;
    }
    displayTasks();
    addTaskInput.value = "";
    let newTask = createToDo(x, "", projectInfo.textContent);
    toDoArray.push(newTask);
}

export function displayTasks(){
    toDoArray.forEach((task) => {
        if(Object.values(task)[2] === projectInfo.textContent){
            displayTask(task);
        }
    }
)
}
export function removePriorTasks(){
    while(taskContainer.firstChild){
        taskContainer.removeChild(taskContainer.firstChild);
    }
}

function displayTask(task){
    let createdTask = document.createElement("div");
    //to access the first property of the task, which is the title
    createdTask.textContent = Object.values(task)[0];
    createdTask.classList.add("task");
    //creating the duedate fn
    let dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.classList.add("task-duedate");
    dueDate.value = task.DueDate;
    dueDate.addEventListener('change', () => {
        task.DueDate = dueDate.value;
    })
    //creating the remove button
    let removeButton = document.createElement("div");
    removeButton.textContent = "x";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => {
        taskContainer.removeChild(createdTask);
        toDoArray.splice(toDoArray.indexOf(task), 1);
    });
    console.log(toDoArray)
    createdTask.appendChild(dueDate);
    createdTask.appendChild(removeButton);
    taskContainer.appendChild(createdTask);
}

export function projectClickUpdate(project){
    projectInfo.style.display ="block";
    taskContainer.style.display = 'block';
    addTaskButton.style.display = 'block';
    projectInfo.textContent = project;
}

export function clearOnView(project){
    if(projectInfo.textContent == project){
        projectInfo.style.display = 'none';
        taskContainer.style.display = 'none';
        addTaskButton.style.display = 'none';
    }
    toDoArray = toDoArray.filter(function(task) {
        return task.Project !== project;
    });
    return;
}
