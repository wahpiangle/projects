let computerScore = 0;
let computerScoreId = document.querySelector('#computer-score');
let playerScore = 0;
let playerScoreId = document.querySelector('#player-score');
let roundWinner ='';
let choicePlayerIcon = document.querySelector('#playerChoice');
let choiceComputerIcon = document.querySelector('#computerChoice');
let results = document.querySelector('#result-banner');

//player selection
const selectionBtns = document.querySelectorAll('button');
selectionBtns.forEach(selectionBtns=> {
    selectionBtns.addEventListener('click', e=> {
        let playerChoice = selectionBtns.dataset.selection;
        if (playerChoice == "rock"){
            choicePlayerIcon.textContent = '🌑'
        }
        
        else if(playerChoice == "scissors"){
            choicePlayerIcon.textContent = '✂'
        }

        else if(playerChoice == "paper"){
            choicePlayerIcon.textContent = '📄'
        }
        playGame(getComputerChoice(), playerChoice);

        if(playerScoreId.textContent == 5 || computerScoreId.textContent == 5){
            
            if(computerScoreId.textContent == 5){
                results.textContent = "You've lost!";
            }
            else if(playerScoreId.textContent == 5){
                results.textContent = "You've won!";
            }
            else{results.textContent = "";}
            computerScoreId.textContent = 0;
            playerScoreId.textContent = 0;
        }
    })
})


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)+1; //rng will be 1,2 or 3
    switch(computerChoice){
        case 1:
            choiceComputerIcon.textContent = '🌑'
            return "rock";
        case 2:
            choiceComputerIcon.textContent = '📄'
            return "paper";
        case 3:
            choiceComputerIcon.textContent = '✂'
            return "scissors";
    }
}


function playGame(choiceOfComputer, choiceOfPlayer){
    results.textContent= "";

    if (choiceOfComputer == choiceOfPlayer)
    {
        roundWinner = "tie";
    }
    else if( (choiceOfComputer == "rock" && choiceOfPlayer =="scissors")||
            (choiceOfComputer == "paper" && choiceOfPlayer == "rock") ||
            (choiceOfComputer == "scissors" && choiceOfPlayer == "paper"))
    {
        computerScoreId.textContent ++;
        roundWinner = 'computer';
    }

    else if ( (choiceOfComputer == "paper" && choiceOfPlayer =="scissors")||
            (choiceOfComputer == "scissors" && choiceOfPlayer == "rock") ||
            (choiceOfComputer == "rock" && choiceOfPlayer == "paper"))
    {
        playerScoreId.textContent++;
        roundWinner='player';
    }
}


