//mouseDown property to check if mouse is clicked
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//16x16 grid upon loading of HTML
document.addEventListener("DOMContentLoaded", function(){
    createGrids(16);
})

//function for creating the grids, adding change colour feature to div in grids
let gridContainer = document.querySelector('.grid-container');
function createGrids(length){
    gridContainer.style.gridTemplateColumns = `repeat(${length},1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${length},1fr)`

    let numDivs = length * length;

    for (let i =0; i<numDivs; i++)
    {
        let div = document.createElement('div');
        div.addEventListener('mouseover', changeColor)
        div.addEventListener('mousedown', changeColor)
        gridContainer.insertAdjacentElement("beforeend",div);
        div.style.backgroundColor = 'lightgray';
    }
}
//change colour function that only changes when mouse is clicked
function changeColor(e){
    if (e.type = 'mouseover' && !mouseDown) return;
    this.style.backgroundColor='gray';
}

//get user size input from button
const sizeBtn = document.querySelector('#user-size-request');
sizeBtn.addEventListener('click',function(){
    var wantedSize = prompt("Please select length of row/height (>=100)");
    if (wantedSize > 0 && wantedSize <= 100){
        wantedSize = wantedSize;
        let divs = gridContainer.querySelectorAll('div');
        divs.forEach((div) => div.style.backgroundColor = "white");
    }
    else{
        wantedSize = alert("You have entered an invalid input. Please choose a valid size again");
    }
    createGrids(wantedSize);
    
})

//reset button
const resetBtn = document.querySelector('#user-reset-request');
resetBtn.addEventListener('click',function(){
    let divs = gridContainer.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = "white");
})

