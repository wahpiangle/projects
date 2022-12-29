import './styles.css'
import * as home from './homepage.js'
import * as menu from './menu.js'
import * as contact from './contact.js' //TODO

const content = document.getElementById('content');

//headerBar declaration
const headerBar = document.createElement('div');
headerBar.classList.add('header-bar');
content.appendChild(headerBar);

//header declaration
const headerTitle = document.createElement('div');
headerTitle.classList.add('header-title');
headerTitle.textContent = 'Extremely Green Matcha';
headerBar.appendChild(headerTitle);

//header button declaration
const headerSelections = document.createElement('div');
headerSelections.classList.add('header-selections');
headerBar.appendChild(headerSelections);

//header ul to append to header button class
const headerUL = document.createElement('ul');
headerSelections.appendChild(headerUL);

//appending the li elements
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.textContent = "Home";
li2.textContent = "Menu";
li3.textContent = "Contact";
headerUL.appendChild(li1);
headerUL.appendChild(li2);
headerUL.appendChild(li3);

//to start with the homepage at initial load
home.loadHomepage();
li1.style.borderBottom = "2px solid white";

//fucntion declarations for each button to overwrite the containers
function homeOverwrite(){
    const container = document.querySelector('.container');
    container.remove();
    home.loadHomepage();
    li1.style.borderBottom = "2px solid white";
    li2.style.borderBottom = "2px transparent solid";
    li3.style.borderBottom = "2px transparent solid";
}

function menuOverwrite(){
    const container = document.querySelector('.container');
    container.remove();
    menu.loadMenu();
    li1.style.borderBottom = "2px transparent solid";
    li3.style.borderBottom = "2px transparent solid";
    li2.style.borderBottom = "2px solid white";
}

function contactOverwrite(){
    const container = document.querySelector('.container');
    container.remove();
    contact.loadContact();
    li1.style.borderBottom = "2px transparent solid";
    li2.style.borderBottom = "2px transparent solid";
    li3.style.borderBottom = "2px solid white";
}

li1.addEventListener('click', homeOverwrite);
li2.addEventListener('click', menuOverwrite);
li3.addEventListener('click', contactOverwrite);



