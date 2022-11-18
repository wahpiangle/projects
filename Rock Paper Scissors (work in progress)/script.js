let computerScore = 0;
let playerScore = 0;
let roundWinner ='';

//player selection
const selectionBtns = document.querySelectorAll('button');
selectionBtns.forEach(selectionBtns=> {
    selectionBtns.addEventListener('click', e=> {
        let playerChoice = selectionBtns.dataset.selection;
        makeSelection(playerChoice)
    })
})

function makeSelection(selection) {
    console.log(selection);
}

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)+1; //rng will be 1,2 or 3
    switch(computerChoice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playGame(choiceOfComputer, choiceOfPlayer){
    if (choiceOfComputer == choiceOfPlayer)
    {
        roundWinner = "tie";
    }
    else if( (choiceOfComputer == "rock" && choiceOfPlayer =="scissors")||
            (choiceOfComputer == "paper" && choiceOfPlayer == "rock") ||
            (choiceOfComputer == "scissors" && choiceOfPlayer == "paper"))
    {
        computerScore++;
        roundWinner = 'computer';
    }
    else{
        playerScore++;
        roundWinner='player';
    }
}

function isGameOver(){
    return playerScore == 5 || computerScore == 5;
}


