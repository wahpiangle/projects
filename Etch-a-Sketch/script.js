//16x16 grid upon loading of HTML
document.addEventListener("DOMContentLoaded", function(){
    createGrids(16);
})

//function for creating the grids
let gridContainer = document.querySelector('.grid-container');
function createGrids(length){
    gridContainer.style.gridTemplateColumns = `repeat(${length},1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${length},1fr)`

    let numDivs = length * length;

    for (let i =0; i<numDivs; i++)
    {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv)
        gridContainer.insertAdjacentElement("beforeend",div);
    }
}
function colorDiv(){
    this.style.backgroundColor='black';
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

