import { clearOnView, projectClickUpdate, displayTasks, removePriorTasks } from "./DOM-manip";

let projectArray;
const navBarProjects = document.querySelector(".nav-bar-projects");
const addProjectInput = document.createElement("input");
const addProjectConfirmButton = document.createElement("div");
const addProjectCancelButton = document.createElement("div");
const projectContainer = document.querySelector(".project-container");
const addProjectButton = document.querySelector(".add-project-button");

// retrieve the value from localStorage
const storedValue = localStorage.getItem("project");
// if there is a stored value, use it; otherwise, use the default value
if (storedValue) {
    projectArray = JSON.parse(storedValue);
} else {
    projectArray = ["Default Project"];
    localStorage.setItem("project", JSON.stringify(projectArray));
}

displayProjects();

addProjectButton.addEventListener("click", () => {
    addProjectButton.style.display = "none";
    getInput();
});

function getInput(){
    addProjectInput.classList.add("add-project-input");
    navBarProjects.appendChild(addProjectInput);
    
    addProjectConfirmButton.textContent = "Add";
    addProjectConfirmButton.classList.add("add-project-confirm-button");
    addProjectConfirmButton.addEventListener("click", () => {
        addProject(addProjectInput.value);
        removePriorProjects();
        displayProjects();
        showAddProjectButton();
    });
    navBarProjects.appendChild(addProjectConfirmButton);
    
    addProjectCancelButton.textContent = "Cancel";
    addProjectCancelButton.classList.add("add-project-cancel-button");
    addProjectCancelButton.addEventListener("click", () => {
        showAddProjectButton();
    });
    navBarProjects.appendChild(addProjectCancelButton);
}

//to show the add project button and remove the input, add, cancel buttons
function showAddProjectButton(){
    addProjectButton.style.display = "block";
    addProjectInput.value = "";
    addProjectInput.remove();
    addProjectConfirmButton.remove();
    addProjectCancelButton.remove();
}

function addProject(x){
    //add the item to the array if it is not empty and is not a duplicate
    if(x === "" || x.trim() === "" || projectArray.includes(x.trim()))
    {
        return;
    }
    else{
        projectArray.push(x);
        //to save the updated projectArray into localStorage 
        localStorage.setItem("project", JSON.stringify(projectArray));
    }
}

function displayProjects(){
    projectArray.forEach((project) => {
        displayProject(project);
    });
}

function removePriorProjects(){
    while(projectContainer.firstChild){
        projectContainer.removeChild(projectContainer.firstChild);
    }
}


function displayProject(project){
    let createdProject = document.createElement("div");
    createdProject.textContent = project;
    createdProject.classList.add("project");
    createdProject.addEventListener("click", ()=>{
        projectClickUpdate(project);
        removePriorTasks();
        displayTasks();
    });
    //creating the remove button
    let removeButton = document.createElement("div");
    removeButton.textContent = "x";
    removeButton.classList.add("project-remove-button");
    //use of stopPropagation as clicking on removeButton would trigger projectClickUpdate
    removeButton.addEventListener("click", (e) => {
        e.stopPropagation();
        projectContainer.removeChild(createdProject);
        projectArray.splice(projectArray.indexOf(project), 1);
        clearOnView(project);
        //to update the localStorage
        localStorage.setItem("project", JSON.stringify(projectArray));
    });
    createdProject.appendChild(removeButton);
    projectContainer.appendChild(createdProject);
}
